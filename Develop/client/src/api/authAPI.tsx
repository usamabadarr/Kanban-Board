import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    // Store the JWT in localStorage for later authenticated requests
    localStorage.setItem('token', data.token);

    return data; 
  } catch (error) {
    console.error('Error during login:', error);
    throw error; 
  }
};

export { login };
