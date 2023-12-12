import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeuser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
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
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <div>
      {!user && (
        <div>
          <img
            className="absolute w-52 ml-4  z-30"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo"
          />
        </div>
      )}
      {user && (
        <div className=" px-10 py-[7px] bg-gradient-to-b from-black w-screen flex justify-between">
          <div className="flex items-center">
            <img
              className="w-32"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="netflix-logo"
            />
            <div className="flex text-white text-sm list-none py-3 ml-4">
              <li className="ml-4 font-bold">Home</li>
              <li className="ml-4">TV Shows</li>
              <li className="ml-4">Movies</li>
              <li className="ml-4">New & Popular</li>
              <li className="ml-4">My List</li>
              <li className="ml-4">Browse by Languages</li>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="mr-2">
              <img
                className="rounded-md"
                src="https://occ-0-5230-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
