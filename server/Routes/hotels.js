import {Router} from "express";
import {createHotel, deleteHotel, getHotel, updateHotel} from "../Controllers/Hotels.js";

const router = Router()

//CREATE
//http://localhost:8001/api/hotels/
router.post('/', createHotel)

//UPDATE
//http://localhost:8001/api/hotels/id
router.patch('/:id', updateHotel)

//UPDATE
//http://localhost:8001/api/hotels/id
router.delete('/:id', deleteHotel)

//Get Hotel
//http://localhost:8001/api/hotels/id
router.get('/:id', getHotel)

export default router