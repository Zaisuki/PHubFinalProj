import { verify } from "jsonwebtoken"

export function authenticateToken(req, res, next) {
    const token = req.headers['authorization']
    if (token == null) return res.status(401).json({ message: 'Unauthorized' })

    verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
