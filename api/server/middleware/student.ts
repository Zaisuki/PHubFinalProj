import { Request, Response, NextFunction } from 'express';
import { User } from './authentication';

interface AuthenticatedRequest extends Request {
    user?: User;
}

export function studentOnly(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user && req.user.userType.toLowerCase() === 'student') {
        next();
    } else {
        return res.status(403).json({ message: 'Access forbidden. Only professors are allowed.' });
    }
}
