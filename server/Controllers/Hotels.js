import HotelModel from "../Models/Hotel.js";

export const createHotel = async (req, res) => {
    try {
        const newHotel = new HotelModel(req.body)

        await newHotel.save()

        res.status(200).json({...newHotel._doc})
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const updateHotel = async (req, res) => {
    try {
        const {id} = req.params
        const hotel = await HotelModel.findByIdAndUpdate(id, {$set: req.body}, {new: true})

        res.status(200).json(hotel)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}
export const deleteHotel = async (req, res) => {
    try {
        const hotel = await HotelModel.findByIdAndDelete(req.params.id)


        res.status(200).json(hotel)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const getHotel = async (req, res) => {
    try {
        const hotel = await HotelModel.findById(req.params.id)


        res.status(200).json(hotel)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}