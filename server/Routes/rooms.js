import {Router} from "express";
import {
    createRoom,
    deleteRoom,
    getAllRooms,
    getRoom,
    updateRoom,
    updateRoomAvailability
} from "../Controllers/Rooms.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = Router()

//CREATE
//http://localhost:8001/api/rooms/
router.post('/:hotelId', verifyAdmin, createRoom)

//UPDATE
//http://localhost:8001/api/rooms/id
router.patch('/:id', verifyAdmin, updateRoom)
router.patch('/availability/:id', updateRoomAvailability)

//UPDATE
//http://localhost:8001/api/rooms/id
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom)

//Get One Room
//http://localhost:8001/api/rooms/id
router.get('/:id', getRoom)

//Get All Rooms
//http://localhost:8001/api/rooms/
router.get('/', getAllRooms)

export default router