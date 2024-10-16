import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  // Verify the token using the JWT secret key
  jwt.verify(token, process.env.JWT_SECRET as string, (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    if (decodedToken && typeof decodedToken !== 'string') {
      const user = decodedToken as JwtPayload;
      req.user = user;
      return next(); 
    } else {
      return res.status(403).json({ message: 'No user data in token' });
    }
  });

  // Ensure a return in case jwt.verify fails to call next() or return a response
  return; 
};