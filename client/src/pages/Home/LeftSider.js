import React from 'react'
import { useNavigate } from 'react-router-dom';

function LeftSider() {
    const navigate = useNavigate();
    const handleAdminClick = () => {
        navigate('/admin');
    }
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a href="https://m.facebook.com/arnav.pandey.127"><i class="ri-facebook-circle-line text-gray-400 "></i></a>
                    {/* <a href="pandey.arnav2399@gmail.com"><i class="ri-mail-line text-gray-400 "></i></a> */}
                    <a href="https://www.instagram.com/_arnav__pandey_/"><i class="ri-instagram-line text-gray-400 "></i></a>
                    <a href="https://www.linkedin.com/in/arnav-pandey-7328b3228"> <i class="ri-linkedin-box-line text-gray-400 "></i></a>
                    <a href="https://github.com/believe-that-23"> <i class="ri-github-line text-gray-400 "></i></a>
                    {/* <button onClick={handleAdminClick}><i class='ri-admin-line text-gray-400'></i></button> */}
                </div>
                <div className='w-[2px] h-32 bg-[#125f63] sm:hidden'>
                </div>
            </div>

        </div>
    )
}

export default LeftSider