import React, { useState } from "react";
import FormInput from "../CommonComponent/FormInput";

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <form className="space-y-4">
        <FormInput placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <FormInput placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
        
        <h2 className="text-xl font-bold mt-6">Password</h2>
        <FormInput placeholder="Old Password" type="password" name="oldPassword" value={formData.oldPassword} onChange={handleChange} />
        <FormInput placeholder="New Password" type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
        <FormInput placeholder="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
      </form>
    </div>
  );
};

export default Account;
