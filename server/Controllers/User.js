import UserModel from "../Models/User.js";



export const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await UserModel.findByIdAndUpdate(id, {$set: req.body}, {new: true})

        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)


        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)


        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const user = await UserModel.find()


        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}