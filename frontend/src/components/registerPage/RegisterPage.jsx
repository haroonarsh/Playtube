import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';

function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'avatar') {
      setAvatar(files[0]); // Store the file object
    } else if (name === 'coverImage') {
      setCoverImage(files[0]);  // Store the file object
    }
  };

  const handleData = async (e) => {
    e.preventDefault();

    if (!avatar) {
      toast.error("avatar is required!", {
        position: "top-center"
      });
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('username', username);
    formData.append('fullName', fullName);
    formData.append('avatar', avatar);

    if (coverImage) formData.append('coverImage', coverImage);
     
    try {
      const { data } = await axios.post('/api/v1/users/register', formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("User registered successfully !", {
        position: "top-center"
      })
      console.log("User registered in successfully", data);

      // save token and user data in local storage
      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      localStorage.setItem('user', JSON.stringify( data.data.user ));

      // dispatch(setUser(response.data.user))
      navigate('/home'); // Navigate to homepage if login is successful

    } catch (error) {
      console.error("Error during registeration", error.response?.data || error);
      toast.success(error.response?.data || "Something went wrong!", {
        position: "top-center"
      })
    }
  }


  
  // const hanldeData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('/api/v1/users/register', { email, password, username, fullName, avatar, coverImage });
  //         // Handle successful login response
  //         console.log("user registered", response.data);

  //         toast.success("User registered successfully !", {
  //           position: "top-center"
  //         })
  //         navigate('/home'); // Navigate to homepage if login is successful
  //         console.log("User registered in successfully");
            
  //   } catch (error) {
  //     toast.error("Something went wrong !", {
  //       position: "top-center"
  //     })
  //     console.log("Something went wrong");
      
  //   }
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await axios.put(`/api/v1/users/register`, {
  //       firstName: e.target.firstName.value,
  //       lastName: e.target.lastName.value,
  //       username: e.target.username.value,
  //       email: e.target.email.value,
  //       password: e.target.password.value,})

  //       alert("Registration Successful")
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
      
  //   }
  // }
  

  return (
    <>
    <link
  rel="preload"
  as="image"
  href="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
<div className="min-h-screen bg-[#121212]">
    <div className="mx-auto flex w-full items-stretch justify-between gap-10">
    <div className="mt-20 flex w-full flex-col items-start justify-start p-6 md:w-1/2 lg:px-10">
      <div className="w-full">
        <h1 className="mb-2 text-5xl font-extrabold text-white">Register</h1>
        <p className="text-xs text-slate-400">BehtmlFore we start, please create your account</p>
      </div>
      <form 
       className="my-14 flex w-full flex-col items-start justify-start gap-4">
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <label className="text-xs text-slate-200">Full name</label>
          <input
            placeholder="Enter a full name..."
            autoComplete="false"
            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <label className="text-xs text-slate-200">Username</label>
          <input
            placeholder="Enter a username..."
            autoComplete="false"
            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <label className="text-xs text-slate-200">Email</label>
          <input
            placeholder="Enter an email..."
            autoComplete="false"
            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <label className="text-xs text-slate-200">Password</label>
          <input
            placeholder="Enter a password..."
            autoComplete="false"
            type="password"
            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <label className="text-xs text-slate-200">Avatar</label>
          <input
            type="file"
            name='avatar'
            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" 
            onChange={handleFileChange}/>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-2">
          <label className="text-xs text-slate-200">coverImage</label>
          <input
            type="file"
            name='coverImage'
            className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" 
            onChange={handleFileChange}
            />
        </div>
        <div className="mr-4 flex items-center">
          <input
            type="checkbox"
            id="checkbox-1"
            className="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
            name="checkbox-1" />
          <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white">
            <svg
              className="pointer-events-none hidden h-3 w-3 fill-current text-white"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g
                fill="none"
                fillRule="evenodd">
                <g
                  transhtmlform="translate(-9 -11)"
                  fill="#000000"
                  fillRule="nonzero">
                  <path
                    d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="ml-3 text-sm leading-6">
            <label
              htmlFor="checkbox-1"
              className="text-sm font-medium text-white">
              You will get emails on new features and releases
            </label>
          </div>
        </div>
        <div className="mr-4 flex items-center">
          <input
            type="checkbox"
            id="checkbox-2"
            className="absolute h-6 w-6 cursor-pointer opacity-0 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block"
            name="checkbox-2" />
          <div className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white">
            <svg
              className="pointer-events-none hidden h-3 w-3 fill-current text-white"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g
                fill="none"
                fillRule="evenodd">
                <g
                  transhtmlform="translate(-9 -11)"
                  fill="#000000"
                  fillRule="nonzero">
                  <path
                    d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="ml-3 text-sm leading-6">
            <label
              htmlFor="checkbox-2"
              className="text-sm font-medium text-white">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        <button
          className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
          onClick={handleData}
          >
          Create Account
        </button>
        <ToastContainer />
        <p className="my-14 text-sm font-light text-white">
          Already registered?
          <Link className="cursor-pointer font-bold hover:underline"
          to='/login'
          >Sign in to your account</Link>
        </p>
      </form>
    </div>
    <div className="fixed right-0 z-20 hidden h-screen w-1/2 md:block">
      <img
        className="h-full w-full object-cover"
        src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="register_image" />
    </div>
  </div>
</div>

    </>
  )
}

export default RegisterPage