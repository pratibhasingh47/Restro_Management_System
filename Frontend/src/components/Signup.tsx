import React, { useState } from 'react';
import { useAppDispatch } from '../redux/store/store';
import { signupUser } from '../redux/reducers/userSlice';

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', contactNumber: '' });
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(signupUser(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;