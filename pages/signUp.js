import Head from "next/head";
import Image from "next/image";

export default function signUp() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Sign up</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-sky-400 rounded-2xl shadow-2xl max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold flex">
              <Image src="/logo.png" width={30} height={30} />
              <a className="text-white" href="/home"></a>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-white mb-2">Sign up</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <div className="" flex flex-col item-center>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <input
                    type="username"
                    name="username"
                    placeholder="Username"
                    className="bg-gray-100 outline-none text-sm flex-1 "
                  />
                </div>
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
                <div className=" shrink-0 justify-between w-64 mb-5">
                  <a
                    href="/home"
                    className="border-2 border-white text-white-400 rounded-full px-5 py-2 inline-block font-semibold hover:bg-sky-400 hover: text-white"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
