import { useRef, useState } from "react";
import { validateData } from "../utils/validatedata";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import Footer from "./Footer";
import lang from "../utils/languageConstant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const langIdentifier = useSelector((store) => store.config.selectedLang);

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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignin = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative bg-black">
      <div className="relative z-20 flex justify-center">
        <div className="flex justify-center bg-black px-16 py-8 bg-opacity-70">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className=" text-white"
          >
            <div className="flex flex-col justify-center w-72 rounded-md">
              <p className="text-white font-semibold text-3xl mb-6">
                {isSignInForm
                  ? lang[langIdentifier].signInTxt
                  : lang[langIdentifier].signUpText}
              </p>
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder={lang[langIdentifier].namePlaceHolder}
                  className="p-3 mb-6 bg-gray-700 rounded-md"
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
                placeholder={lang[langIdentifier].emailPlaceholder}
                className="p-3 mb-6 bg-gray-700 rounded-md"
              />
              <div className="flex relative">
                <input
                  ref={password}
                  type={showPassword ? "text" : "password"}
                  placeholder={lang[langIdentifier].passwordPlaceHolder}
                  className="p-3 mb-3 bg-gray-700 rounded-md w-full"
                />
                <div className="cursor-pointer">
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="absolute right-4 top-4 text-gray-700"
                    onClick={handleShowPassword}
                  />
                </div>
              </div>
              <p className="mb-10 text-orange-500">{errorMessage}</p>
              <button
                className="p-3 mb-4 text-white font-bold bg-red-600 rounded-md hover:bg-red-700"
                onClick={handleSubmitBtn}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    // Call the onClick handler function when Enter key is pressed
                    handleSubmitBtn();
                  }
                }}
              >
                {isSignInForm
                  ? lang[langIdentifier].signInTxt
                  : lang[langIdentifier].signUpText}
              </button>
              <p
                className="text-white text-sm cursor-pointer hover:underline mb-20"
                onClick={toggleSignin}
              >
                {isSignInForm
                  ? lang[langIdentifier].signUpLink
                  : lang[langIdentifier].signInLink}
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
