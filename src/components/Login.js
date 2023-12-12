import { useRef, useState } from "react";
import { validateData } from "../utils/validatedata";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitBtn = () => {
    const message = validateData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);

    //if message returned is not null and email/password doesn't meet criteria
    if (message !== null) return;

    //Sign In form (registering a user)
    if (!isSignInForm) {
      // const auth = getAuth(); This line of code has to be used in every authentication method hence declare in firebase.js
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..

          setErrorMessage(errorMessage);
        });
    } else {
      //Authenticate the existing user in sign In page
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignin = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute brightness-[0.45]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <div className="flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="absolute z-20 mt-24 text-white"
        >
          <div className="flex flex-col bg-black px-[68px] pt-[60px] pb-[40px] rounded-md bg-opacity-[0.85]">
            <p className="text-white font-semibold text-3xl mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </p>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="p-3 w-[296px] mb-6 bg-gray-700 rounded-md"
              />
            )}
            {/* {!isSignInForm && (
              <input
                ref={phone}
                type="text"
                placeholder="Phone Number"
                className="p-3 w-72 mb-6 bg-gray-700 rounded-md"
              />
            )} */}
            <input
              ref={email}
              placeholder="Email"
              className="p-3 w-72 mb-6 bg-gray-700 rounded-md"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 mb-3 bg-gray-700 rounded-md"
            />
            <p className="mb-10 text-orange-500">{errorMessage}</p>
            <button
              className="p-3 mb-4 text-white font-bold bg-red-600 rounded-md"
              onClick={handleSubmitBtn}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  // Call the onClick handler function when Enter key is pressed
                  handleSubmitBtn();
                }
              }}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="text-white text-sm cursor-pointer hover:underline mb-20"
              onClick={toggleSignin}
            >
              {isSignInForm
                ? "New to Netflix? Sign up now"
                : "Already a user? Sign In"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
