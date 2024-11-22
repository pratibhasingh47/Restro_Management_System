import React, { useState } from 'react';
import { useAppDispatch } from '../redux/store/store';
import { loginUser } from '../redux/reducers/userSlice';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({ email: '', password: '', managementId: '' });
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginUser(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <input type="text" name="managementId" value={formData.managementId} onChange={handleChange} placeholder="Management ID" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;