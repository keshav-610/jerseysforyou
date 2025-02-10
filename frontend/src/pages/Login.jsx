import cover from "../assets/coverPhotos/cover.jpg"
import { RiFootballLine } from "react-icons/ri";
const Login = () => {
  return (
    <div className="bg-gray-950 min-h-screen flex justify-center">
      <div
        className="hidden md:block md:w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${cover})` }}
      >

      </div>
      <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-950 to-gray-900 flex items-center justify-center flex-col gap-6 md:gap-2">
        <div className="flex justify-center gap-2 items-center">
          <RiFootballLine className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl" />
          <h2 className="font-sf font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl md:hidden">Jerseys for You</h2>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="font-sf font-bold text-white text-xl sm:text-2xl lg:text-3xl xl:text-2xl text-center ">Sign into your account</h2>
          <div className="rounded flex flex-col gap-3 sm:w-80 lg:w-80 xl:w-96 ">
            <div className="flex flex-col gap-1 px-2 py-1">
              <label htmlFor="email" className="font-sf font-medium text-white">Email</label>
              <input type="email" className="bg-transparent border-2 rounded-md border-gray-600 text-gray-400 font-medium font-sf p-1 text- md focus:border-white focus:outline-none cursor-pointer" />
            </div>
            <div className="flex flex-col gap-1 px-2 py-1">
              <div className="flex justify-between gap-3">
                <label htmlFor="email" className="font-sf font-medium text-white">Password</label>
                <p className="text-gray-500 font-sf font-medium ">Forgot password?</p>
              </div>
              <input type="text" className="bg-transparent border-2 rounded-md border-gray-600 text-gray-400 font-medium font-sf p-1 focus:border-white focus:outline-none cursor-pointer" />
            </div>
          </div>
          <div className="px-2 py-1">
            <button className="bg-white font-sf py-2 rounded font-medium w-full hover:bg-gray-200 transition-colors">Sign in</button>
          </div>
          <div className="flex items-center mt-5 px-2 py-1">
            <div className="flex-grow h-px bg-gray-800"></div>
            <span className="px-3 text-gray-300 font-sf font-medium">Or continue with</span>
            <div className="flex-grow h-px bg-gray-800"></div>
          </div>
          <div className="px-1">
          <div className="border rounded-md border-gray-600 px-2 py-2 flex justify-center gap-3 hover:bg-gray-950 transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
              <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <h3 className="text-white font-sf font-medium">Google</h3>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
