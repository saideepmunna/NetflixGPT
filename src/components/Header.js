import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeuser } from "../utils/userSlice";
import { LOGO, PROFILE_IMG } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { selectLanguage } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const [pageScrolled, setpageScrolled] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const gptHeader = useSelector((store) => store.gpt.gptSearchState);
  const handlerSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setpageScrolled(true);
      } else {
        setpageScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
        navigate("/");
      }
    });
    //Unsubscribing the listener when components unmounts
    return () => unSubscribe();
  }, []);

  const handleGptSearch = () => {
    gptHeader ? navigate("/browse") : navigate("/recommendations");
    dispatch(toggleGptSearch());
  };

  const handleLangChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };
  return (
    <div>
      {!user && (
        <div>
          <div className="absolute z-10">
            <img
              className="brightness-[0.45]"
              src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
              alt="bg-img"
            />
          </div>
          <div>
            <div className="w-full relative z-50 bg-gradient-to-b from-black flex justify-between items-center">
              <img className="w-52 ml-4" src={LOGO} alt="netflix-logo" />
              <div className="px-8">
                <select
                  className="px-3 py-1 -mt-6 bg-black text-white font-medium rounded-sm border border-solid border-white"
                  onChange={handleLangChange}
                >
                  {selectLanguage.map((lang) => (
                    <option
                      key={lang.languageIdentifier}
                      value={lang.languageIdentifier}
                    >
                      {lang.languagename}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
      {user && (
        <div
          className={
            pageScrolled
              ? "px-10 py-[7px] bg-black w-full flex justify-between fixed z-30"
              : "px-10 py-[7px] bg-gradient-to-b from-black w-full flex justify-between fixed z-30"
          }
        >
          <div className="flex items-center">
            <img className="w-32" src={LOGO} alt="netflix-logo" />
            <div className="flex text-white text-sm list-none py-3 ml-4">
              <Link to={"/browse"}>
                <li className="ml-4 font-bold">Home</li>
              </Link>
              <li className="ml-4 cursor-pointer hover:text-gray-300">
                TV Shows
              </li>
              <li className="ml-4 cursor-pointer hover:text-gray-300">
                Movies
              </li>
              <li className="ml-4 cursor-pointer hover:text-gray-300">
                New & Popular
              </li>
              <li className="ml-4 cursor-pointer hover:text-gray-300">
                My List
              </li>
              <li className="ml-4 cursor-pointer hover:text-gray-300">
                Browse by Languages
              </li>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div>
              <button
                className="text-white text-sm font-medium bg-red-700 px-4 py-1 rounded-md mr-2 hover:bg-red-500"
                onClick={handleGptSearch}
              >
                {gptHeader ? "Home" : "Recommendations"}
              </button>
            </div>
            <div className="mr-2">
              <img className="rounded-md" src={PROFILE_IMG} alt="user icon" />
            </div>
            <div onClick={handlerSignOut} className="flex cursor-pointer">
              <button className="text-white">Signout</button>
              {user?.displayName && (
                <p className="text-blue-200 m-1">({user?.displayName})</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
