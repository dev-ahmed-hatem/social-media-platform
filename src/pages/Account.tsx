import React, { useState } from "react";
import FormInput from "../Components/CommonComponent/FormInput";

const Account = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        profilePic: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    return (
        <div className="md:px-10 lg:w-4/5">
            <h1 className="text-3xl font-bold mb-3">My Account</h1>
            <br />

            <h2 className="text-xl font-bold mb-3">User details:</h2>
            <form className="space-y-4">
                <div className="flex gap-x-6">
                    <FormInput
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <FormInput
                        placeholder="Last Name"
                        type="text"
                        name="lastname"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <FormInput
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <FormInput
                    placeholder="Mobile"
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                />

                <div className="">
                    <input
                        type="file"
                        name="profilePic"
                        onChange={handleChange}
                        accept="image/*"
                        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    />

                    <div className="mt-4">
                        <img
                            src={
                                formData.profilePic
                                    ? URL.createObjectURL(formData.profilePic)
                                    : "/logo512.png"
                            }
                            alt="Profile Preview"
                            className="w-32 h-32 rounded-full object-cover mb-4 border border-gray-300"
                        />
                    </div>
                </div>
            </form>
            <form className="space-y-4 mt-8">
                <h2 className="text-xl font-bold">Password</h2>
                <FormInput
                    placeholder="Old Password"
                    type="password"
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleChange}
                />
                <FormInput
                    placeholder="New Password"
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                />
                <FormInput
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <button className="bg-malibu-500 text-white py-2 px-4 rounded">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Account;
