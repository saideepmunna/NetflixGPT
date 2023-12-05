import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignin = ()=>{
          setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <img
        className="absolute brightness-[0.45]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <div className="flex justify-center">
        <form className="absolute z-20 mt-24 ">
          <div className="flex flex-col bg-black px-[68px] pt-[60px] pb-[40px] rounded-md bg-opacity-[0.85]">
            <p className="text-white font-semibold text-3xl mb-4">{isSignInForm? "Sign In" : "Sign Up"}</p>
            {!isSignInForm && (<input
              type="text"
              placeholder="Name"
              className="p-3 w-72 mb-6 bg-gray-700 rounded-md"
            />)}
            {!isSignInForm && (<input
              type="text"
              placeholder="Phone Number"
              className="p-3 w-72 mb-6 bg-gray-700 rounded-md"
            />)}
            <input
              type="email"
              placeholder="Email or phone number"
              className="p-3 w-72 mb-6 bg-gray-700 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 mb-11 bg-gray-700 rounded-md"
            />
            <button className="p-3 mb-4 text-white font-bold bg-red-600 rounded-md">
            {isSignInForm? "Sign In" : "Sign Up"}
            </button>
            <p className="text-white text-sm cursor-pointer hover:underline mb-20" onClick={toggleSignin}>{isSignInForm? "New to Netflix? Sign up now":"Already a user? Sign In"}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
