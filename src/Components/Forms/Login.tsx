import React, { useState } from 'react';
import Button from '../CommonComponent/Button';
import FormInput from "../CommonComponent/FormInput";

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-malibu-500">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            placeholder="Enter your email"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <FormInput
            placeholder="Enter your password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />

          <Button label="Login" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
