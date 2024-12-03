import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// POST /login - Login a user
export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ where: { username } });

    if (!user) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    // Generate a JWT token
    const token = jwt.sign(
      { username: user.username, id: user.id },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: '1h' }
    );

    // Return the token to the client
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const router = Router();

// Attach the login route to the router
router.post('/login', login);

export default router;
