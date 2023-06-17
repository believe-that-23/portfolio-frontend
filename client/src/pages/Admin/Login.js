import { message } from 'antd';
import React, { useState } from 'react';
import {ShowLoading, HideLoading} from '../../redux/rootSlice'
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Login() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch();
    const login = async () => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post('https://arnav-pandey.onrender.com/api/portfolio/admin-login', user);
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                localStorage.setItem('token', JSON.stringify(response.data));
                window.location.href = '/admin';
            }
        } catch (error) {
            message.error(error.message);
            dispatch(HideLoading());
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-primary">
            <div className='w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white'>
                <h1 className='text-2xl'>Admin Login</h1>
                <hr />
                <input type="text" placeholder='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
                <input type="password" placeholder='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <button className="bg-primary text-white p-2" onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login