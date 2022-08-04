import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  HomeIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modelState } from "../atoms/modelAtom";

const Header = ({ searchShow }) => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modelState);
  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50 ">
      <div
        className={`flex justify-between max-w-6xl mx-5 xl:mx-auto ${
          !searchShow && "m-5"
        }`}
      >
        {/* Left Side */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden  lg:inline-grid w-24 cursor-pointer"
        >
          <Image
            src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
            alt="Instagram-logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10  lg:hidden flex-shrink">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            alt="Instagram-logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        {/* Middle Side */}

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md  ">
            {searchShow && (
              <>
                <div className="absolute inset-y-0 flex pl-3 items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 py-1.5 rounded-md focus:ring-black focus:border-black"
                  type="search"
                  placeholder="Search"
                />
              </>
            )}
          </div>
        </div>

        {/* Right side */}
        <div
          onClick={() => router.push("/")}
          className="flex items-center justify-end space-x-4"
        >
          <HomeIcon className="nav-button" />
          {/* <MenuIcon className="h-6 md:hidden cursor-pointer" /> */}
          {session ? (
            <>
              <div className="relative nav-button">
                <PaperAirplaneIcon className="nav-button rotate-45" />
                <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white hover:animate-pulse">
                  3
                </div>
              </div>
              <PlusCircleIcon
                className="add-button"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="nav-button" />
              <HeartIcon className="nav-button" />
              <img
                onClick={signOut}
                src={session?.user?.image}
                alt={session.user.name}
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <>{searchShow && <button onClick={signIn}>Sign in</button>}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
