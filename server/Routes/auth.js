import {Router} from "express";

const router = Router()

router.get('/login', (req, res) => {
    res.send('Hello')
})


export default router