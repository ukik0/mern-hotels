import {Router} from "express";
import {createHotel, deleteHotel, updateHotel} from "../Controllers/Hotels.js";

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

export default router