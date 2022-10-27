import {Router} from "express";
import {createHotel, deleteHotel, getAllHotels, getHotel, updateHotel} from "../Controllers/Hotels.js";
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
router.get('/:id', getHotel)

//Get All Hotels
//http://localhost:8001/api/hotels/
router.get('/', getAllHotels)

export default router