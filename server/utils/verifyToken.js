import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.acces_token

    if (!token) res.status(404).json({message: 'Not auth'})

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) res.status(404).json(err)

        req.user = user
        next()
    })
}

export const verifyUser = async (req, res, next) => {
    await verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(404).json({message: 'You not true user'})
        }
    })
}

export const verifyAdmin = async (req, res, next) => {
    await verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(404).json({message: 'You not admin'})
        }
    })
}
