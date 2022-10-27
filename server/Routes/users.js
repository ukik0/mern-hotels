import {Router} from "express";
import {deleteUser, getAllUsers, getUser, updateUser} from "../Controllers/User.js";
import {verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";

const router = Router()

// router.get('/check', verifyToken, async (req, res) => {
//     res.status(200).json({message: 'Verify'})
// })
//
// router.get('/checkuser/:id', verifyUser, async (req, res) => {
//     res.status(200).json({message: 'You true user'})
// })
//
// router.get('/checkadmin/:id', verifyAdmin, async (req, res) => {
//     res.status(200).json({message: 'You true admin'})
// })

//UPDATE
//http://localhost:8001/api/users/id
router.patch('/:id', verifyUser, updateUser)

//UPDATE
//http://localhost:8001/api/users/id
router.delete('/:id', verifyUser, deleteUser)

//Get One User
//http://localhost:8001/api/users/id
router.get('/:id', verifyUser, getUser)

//Get All Users
//http://localhost:8001/api/users/
router.get('/', verifyAdmin, getAllUsers)
export default router