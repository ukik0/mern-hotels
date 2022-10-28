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

export const getAllHotels = async (req, res) => {
    try {
        const {min, max, ...options} = req.query
        const hotel = await HotelModel.find({...options, cheapestPrice: {$gt: min || 1, $lt: max || 99999}}).limit(req.query.limit)

        res.status(200).json(hotel)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const countByCity = async (req, res) => {
    try {
        const city = req.query.cities.split(',')

        const citiesList = await Promise.all(city.map((city) => {
            return HotelModel.countDocuments({city})
        }))

        res.status(200).json(citiesList)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const countByType = async (req, res) => {
    try {
        const hotelCount = await HotelModel.countDocuments({type: "hotel"});
        const apartmentCount = await HotelModel.countDocuments({type: "apartment"});
        const resortCount = await HotelModel.countDocuments({type: "resort"});
        const villaCount = await HotelModel.countDocuments({type: "villa"});
        const cabinCount = await HotelModel.countDocuments({type: "cabin"});

        res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "apartments", count: apartmentCount},
            {type: "resorts", count: resortCount},
            {type: "villas", count: villaCount},
            {type: "cabins", count: cabinCount},
        ]);
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
};