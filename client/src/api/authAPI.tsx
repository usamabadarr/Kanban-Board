import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Login error:', errorResponse);
      throw new Error(errorResponse.message || 'Login failed');
    }

    const data = await response.json();

    // Ensure there's a token to store
    if (data.token) {
      localStorage.setItem('token', data.token); // Store the JWT in localStorage
    } else {
      throw new Error('No token received');
    }

    return data; 
  } catch (error) {
    console.error('Error during login:', error);
    throw error; 
  }
};

export { login };

