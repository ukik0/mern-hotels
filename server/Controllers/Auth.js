import UserModel from '../Models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const {username, email, password} = req.body

        const usedUser = await UserModel.findOne({email})

        if (usedUser) res.status(404).json({message: "user is used"})

        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = new UserModel({
            username,
            email,
            password: hashedPassword
        })

        await user.save()

        res.status(200).json(user)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const login = async (req, res) => {
    try {

        const user = await UserModel.findOne({username: req.body.username})

        if (!user) res.status(404).json({message: "User not found"})

        const checkedPassword = bcrypt.compareSync(req.body.password, user.password)

        if (!checkedPassword) res.status(404).json({message: 'Password not valid'})

        const {password, isAdmin, ...userData} = user._doc

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET, {expiresIn: '30d'})

        res.cookie('acces_token', token, {httpOnly: true}).status(200).json({...userData})
    } catch (e) {
        res.status(500).json(e)
    }
}