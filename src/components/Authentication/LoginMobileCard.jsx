import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import axios from '../../axios'
import { setUser } from '../../redux/slices/usersSlice'

function LoginMobileCard({ setView, view }) {
    const [resetPassword, setResetPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setError("");
            setIsLoading(true);

            const response = await axios.post("/users/login", data);

            dispatch(setUser(response.data));
            setIsLoading(false);
            setView({
                favourite: false,
                search: false,
                profile: false,
                help: false
            })
        } catch (err) {
            setError(
                err?.response?.data?.error || "Something went wrong, Try again"
            );
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className=' space-y-5'>
                <div className=' flex justify-between items-center'>
                    <div className=''>
                        <h2 className='text-3xl text-darktext font-bold'>Welcome Back!!</h2>
                    </div>
                </div>
                {/*    <div className='space-y-5 py-4 invisible'>
                        <button className='flex items-center border border-main space-x-2 bg-trans w-full  justify-center py-4 rounded-xl hover:bg-light hover:text-main text-maintrans duration-200'>
                            <span className='text-3xl'><FcGoogle /></span>
                            <span className=''>Continue with google</span>
                        </button>
                        <button className='flex items-center border border-main space-x-2 bg-trans w-full  justify-center py-4 rounded-xl hover:bg-light hover:text-main text-maintrans duration-200'>
                            <span className=' text-3xl text-blue'><BsFacebook /> </span>
                            <span className=''>Continue with facebook</span>
                        </button>
                    </div> */}
                {resetPassword ? (
                    <>
                        <div className='space-y-2  py-4'>
                            <label className='text-text '> Email</label>
                            <input
                                type='email'
                                placeholder='Enter Your Email'
                                className='w-full placeholder:text-maintrans border border-main bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans '
                                name='email'
                            />
                        </div>
                        <div className=' flex justify-center pt-2'>
                            <div className='space-y-3'>
                                <div className=' flex justify-center'>
                                    <button type='submit' className='py-2 rounded-xl px-5 bg-main hover:bg-light hover:text-main text-light duration-300 flex items-center space-x-2'>
                                        <span className=''>Sent</span>
                                        <span className=''><AiOutlineRight /> </span>
                                    </button>
                                </div>
                                <span className='text-sm flex space-x-1 items-center hover:text-main cursor-pointer  text-maintrans'
                                    onClick={() => setResetPassword(!resetPassword)}
                                >
                                    <span className=''><AiOutlineLeft /> </span>
                                    <span className=''>Back to signin</span>
                                </span>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='space-y-2 py-4'>
                            <label className='text-text '> Email</label>
                            <input
                                type='email'
                                placeholder='Enter Your Email'
                                className='w-full placeholder:text-maintrans border border-main bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans '
                                name='email'
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-text '> Password</label>
                            <input
                                type='password'
                                placeholder='Give a password'
                                className='w-full placeholder:text-maintrans border border-main bg-trans py-3 text-sm rounded-xl px-2 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-maintrans'
                                name='password'
                                value={data.password}
                                onChange={handleChange} />
                        </div>
                        {error && (
                            <p className='text-main text-sm'>{error} </p>
                        )}
                        <div className=' flex justify-center pt-2'>
                            <div className='space-y-3'>
                                <div className=' flex justify-center'>
                                    <button type='submit' className='py-2 rounded-xl px-5 bg-main hover:bg-light hover:text-main text-light duration-300 flex items-center space-x-2'>
                                        <span className=''>Sign In</span>
                                        <span className=''><AiOutlineRight /> </span>
                                    </button>
                                </div>
                                <span className='text-sm flex space-x-1 items-center hover:text-main cursor-pointer  text-maintrans'
                                    onClick={() => setResetPassword(!resetPassword)}
                                >
                                    <span className=''><RiLockPasswordLine /> </span>
                                    <span className=''>Reset password</span>
                                </span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </form>
    )
}

export default LoginMobileCard