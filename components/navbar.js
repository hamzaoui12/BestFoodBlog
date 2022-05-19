import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-sky-200 p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <img className="h-12 w-12" src="/logo.png" />
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              BestFoodBlog
            </span>
          </a>
        </Link>

        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center items-start flex flex-col lg:h-auto ">
          <Link href="/">
            <a className="lg:inline-flex text-white px-3 py-2">Home</a>
          </Link>
          <Link href="/signIn">
            <a className="lg:inline-flex text-white px-3 py-2">Sign In</a>
          </Link>
          <Link href="/signUp">
<<<<<<< HEAD
            <a className="lg:inline-flex text-white px-3 py-2">Sign up</a>
=======
            <a className="lg:inline-flex text-white px-3 py-2">Sign Up</a>
>>>>>>> a7bbb952578341852e10dfc5cc36ad87f9163711
          </Link>
        </div>
      </nav>
    </>
  );
};
