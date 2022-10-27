import RoomModel from '../Models/Room.js'
import HotelModel from "../Models/Hotel.js";

export const createRoom = async (req, res, next) => {
    const {hotelId} = req.params;
    const newRoom = new RoomModel(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await HotelModel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
};
export const updateRoom = async (req, res) => {
    try {
        const {id} = req.params
        const room = await RoomModel.findByIdAndUpdate(id, {$set: req.body}, {new: true})

        res.status(200).json(room)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const deleteRoom = async (req, res) => {
    try {
        const {hotelId} = req.params;
        const room = await RoomModel.findByIdAndDelete(req.params.id)
        await HotelModel.findByIdAndUpdate(hotelId, {
            $pull: {rooms: req.params.id}
        })

        res.status(200).json(room)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const getRoom = async (req, res) => {
    try {
        const room = await RoomModel.findById(req.params.id)


        res.status(200).json(room)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const getAllRooms = async (req, res) => {
    try {
        const room = await RoomModel.find()


        res.status(200).json(room)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}