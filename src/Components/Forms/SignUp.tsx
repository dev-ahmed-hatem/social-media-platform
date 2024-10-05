import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../CommonComponent/FormInput';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePic: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append('username', formData.username);
    form.append('email', formData.email);
    form.append('password', formData.password);

    if (formData.profilePic) {
      form.append('profilePic', formData.profilePic);
    }

    try {
      const response = await axios.post('/api/signup', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-malibu-500">Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <FormInput
              placeholder="Enter your username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <FormInput
              placeholder="Enter your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <FormInput
              placeholder="Enter your password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FormInput
              placeholder="Confirm your password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="file"
              name="profilePic"
              onChange={handleChange}
              accept="image/*"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
            {formData.profilePic && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(formData.profilePic)}
                  alt="Profile Preview"
                  className="w-32 h-32 rounded-full object-cover mb-4 border border-gray-300"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-2 bg-malibu-500 text-white font-bold rounded-lg hover:bg-malibu-600 focus:outline-none focus:ring-4 focus:ring-malibu-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
