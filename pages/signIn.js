import Head from "next/head";
import { NavBar } from "../components/navbar";
import Image from "next/image";
import { useUser, useState } from "react";

export default function LoginPage() {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const userObj = await res.json();

      mutate(userObj);
    } else {
      setErrorMsg("Incorrect username or password. Try better!");
    }
  }

  useEffect(() => {
    if (user) Router.push("/");
  }, [user]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Login</title>
      </Head>
      <NavBar />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold flex">
              <Image src="/logo.png" width={30} height={30} />
              <a className="text-sky-400" href="/home">
                BestFoodBlog
              </a>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-sky-400 mb-2">
                Sign in to your account
              </h2>
              <div className="border-2 w-10 border-sky-400 inline-block mb-2"></div>
              <div className="" flex flex-col item-center>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1 "
                  />
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <a href="/forget-password" className="text-xs">
                    Forget your password ?
                  </a>
                </div>
                <div className=" shrink-0 justify-between w-64 mb-5 submit ">
                  <button type="submit">
                    <a className="border-2 border-sky-400 text-sky-400 rounded-full px-5 py-2 inline-block font-semibold hover:bg-white hover: text-sky-400">
                      Sign-in
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-sky-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Welcome to BestFoodBlog</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">It's donuts time</p>
            <button>
              <Link href="/signUp">
                <a className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-sky-400 hover: text-white">
                  Sign-Up
                </a>
              </Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
