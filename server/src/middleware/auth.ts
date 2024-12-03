import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

// Extend Express's Request type to include user property
declare module 'express' {
  export interface Request {
    user?: JwtPayload;
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  // Extract token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access token is missing' });
    return; // Ensure no further execution
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Invalid or expired token' });
      return; // Stop further execution
    }

    // Attach decoded token to request if valid
    if (decoded && typeof decoded !== 'string') {
      req.user = decoded as JwtPayload;
      next(); // Proceed to the next middleware or route handler
    } else {
      res.status(403).json({ message: 'Malformed token payload' });
    }
  });
};
