import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeuser } from "../utils/userSlice";
import { LOGO, PROFILE_IMG } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const [pageScrolled, setpageScrolled] = useState(false)
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
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
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser());
        navigate("/")
      }
    });
    //Unsubscribing the listener when components unmounts
    return ()=> unSubscribe();
  }, []);
 

  return (
    <div >
      {!user && (
        <div>
          <img
            className="absolute w-52 ml-4  z-30"
            src= {LOGO}
            alt="netflix-logo"
          />
        </div>
      )}
      {user && (
        <div className={pageScrolled? "px-10 py-[7px] bg-black w-full flex justify-between fixed z-30":"px-10 py-[7px] bg-gradient-to-b from-black w-full flex justify-between fixed z-30"}>
          <div className="flex items-center">
            <img
              className="w-32"
              src= {LOGO}
              alt="netflix-logo"
            />
            <div className="flex text-white text-sm list-none py-3 ml-4">
              <Link to={"/"}><li className="ml-4 font-bold">Home</li></Link>
              <li className="ml-4 cursor-pointer hover:text-gray-300">TV Shows</li>
              <li className="ml-4 cursor-pointer hover:text-gray-300">Movies</li>
              <li className="ml-4 cursor-pointer hover:text-gray-300">New & Popular</li>
              <li className="ml-4 cursor-pointer hover:text-gray-300">My List</li>
              <li className="ml-4 cursor-pointer hover:text-gray-300">Browse by Languages</li>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="mr-2">
              <img
                className="rounded-md"
                src= {PROFILE_IMG}
                alt="user icon"
              />
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
