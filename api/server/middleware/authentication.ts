import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface User {
    id: string;
    username: string;
}
interface AuthenticatedRequest extends Request {
    user?: User;
}

export function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (token == null) return res.status(401).json({ message: 'Unauthorized' });

    verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user as User;
        console.log(req.user);
        next();
    });
}
