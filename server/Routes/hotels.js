import {Router} from "express";
import {countByCity, createHotel, deleteHotel, getAllHotels, getHotel, updateHotel} from "../Controllers/Hotels.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = Router()

//CREATE
//http://localhost:8001/api/hotels/
router.post('/', verifyAdmin, createHotel)

//UPDATE
//http://localhost:8001/api/hotels/id
router.patch('/:id', verifyAdmin, updateHotel)

//UPDATE
//http://localhost:8001/api/hotels/id
router.delete('/:id', verifyAdmin, deleteHotel)

//Get One Hotel
//http://localhost:8001/api/hotels/id
router.get('/hotel/:id', getHotel)

//Get All Hotels
//http://localhost:8001/api/hotels/
router.get('/', getAllHotels)

router.get('/countByCity', countByCity)
router.get('/countByType')

export default router