import Head from "next/head";
import { NavBar } from "../components/navbar";
import link from "next/link";

export default function profil() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Profil</title>
      </Head>
      <NavBar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-5 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-2xl">
          <div className="w-3/5 p-3">
            <div className="text-left font-bold">
              <a className="text-sky-400" href="/">
                BestFoodBlog
              </a>
            </div>
            <div className="py-50">
              <h2 className="text-4xl font-bold text-sky-400 mb-5">
                Edit profile
              </h2>
              <div className="border-2 w-10 border-sky-400 inline-block mb-2"></div>
              <div className="" flex flex-col item-center>
                <div className="bg-gray-100 w-30 p-2 flex items-center mb-3">
                  <input
                    type="UserName"
                    name="UserName"
                    placeholder="UserName"
                    className="bg-gray-100 outline-none text-sm flex-1 "
                  />
                </div>
                <div className="bg-gray-100 w-30 p-2 flex items-center mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-30 p-2 flex items-center mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1 "
                  />
                </div>
                <div className=" shrink-0 justify-between w-30 mb-5">
                  <a
                    href="/"
                    className="border-2 border-sky-400 text-sky-500 rounded-full px-5 py-3 inline-block font-semibold hover:bg-white hover: text-sky-400"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="logo">
            <img src="\logo.png" />
            <div className="text-left font-bold ">
              <a className="text-2xl font-bold text-sky-400 mb-5" href="/">
                UserName
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
