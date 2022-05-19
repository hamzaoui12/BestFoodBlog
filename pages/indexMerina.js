import Head from "next/head";
import { NavBar } from "../components/navbar";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState([]);

  useState(() => {
    (async () => {
      const { data } = await axios("/api/post");
      setPosts(data);
    })();
  });
  return (
    <div>
      <Head>
        <title>Best Food</title>
      </Head>
      <NavBar />

      <div className="text-3xl font-bold text-blue-40 p-5 mr-00 uppercase tracking-wide  bg-sky-300 text-center">
        <p>Bienvenue sur Best Food le meilleur blog de nourriture !</p>
      </div>
      <div>
        <Carousel>
          <div className=" font-bold text-blue-40 p-3 mr-2 text-center">
            <img src="img1.jpg" />
          </div>
          <div className=" font-bold text-blue-40 p-3 mr-2 text-center">
            <img src="img2.jpg" />
          </div>
          <div className=" font-bold text-blue-40 p-3 mr-2 text-center">
            <img src="img3.jpg" />
          </div>
          <div className=" font-bold text-blue-40 p-3 mr-2 text-center">
            <img src="img2.jpg" />
          </div>
          <div className=" font-bold text-blue-40 p-3 mr-2 text-center">
            <img src="img1.jpg" />
          </div>
        </Carousel>
      </div>
      <div className="text-2xl font-bold  p-5 mr-00  text-center tracking-wide ">
        <h1>EMBALLAGES BIODÉGRADABLES ET REVALORISATION DES INVENDUS :</h1>
      </div>
      <div className="p-5  text-center  tracking-wide">
        <p>
          Sweet Donuts s’engage pour l’environnement et pour le développement
          social. Si notre spécialité est de cuisiner des donuts gourmands et
          raffinés, nous mettons un point d’honneur à revaloriser nos invendus,
          soutenir l’emploi des jeunes en difficulté, utiliser des emballages
          biodégradables à Bordeaux. Contactez notre magasin de donuts pour en
          savoir plus sur nos engagements.
        </p>
        <img src="imgx.jpg" width={300} class="center" />
      </div>
      <div className="text-2xl font-bold  p-5 mr-00  text-center tracking-wide ">
        <h1>AIDE À L’INSERTION PROFESSIONNELLE</h1>
      </div>
      <div className="p-5  text-center tracking-wide">
        <p>
          Chez Sweet Donuts, nous souhaitons favoriser les demandeurs d'emploi,
          les personnes en situation de handicap et les contrats d'engagement
          jeune. Nous soutenons ainsi les jeunes de moins de 26 ans sans
          formation ni emploi depuis plusieurs mois et les personnes en
          difficulté d'insertion professionnelle. Parce qu’il est inconcevable
          pour nous de jeter nos créations, les donuts qui ne seront pas vendus
          en magasin seront redistribués auprès des hôpitaux et des
          associations. C’est ainsi que nous tenons notre engagement pour des
          invendus revalorisés.
        </p>
      </div>

      <div class="lg:flex items-stretch md:mt-12 mt-8">
        <div class="lg:w-1/2">
          <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            <div class="sm:w-1/2 relative">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2022
                </p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p class="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <div class="p-3">
                      <button
                        onclick="openModal(true)"
                        class="pr-2 text-sm font-medium leading-none"
                      >
                        Read more
                      </button>
                    </div>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="imga.jpg" class="w-full" alt="chair" />
            </div>
            <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2022
                </p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p class="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="imgz.jpg" class="w-full" alt="wall design" />
            </div>
          </div>
          <div class="relative">
            <div>
              <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                12 April 2022
              </p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold 5 text-white">
                  The Decorated Ways
                </h2>
                <p class="text-base leading-4 text-white mt-2">
                  Dive into minimalism
                </p>
                <a
                  href="javascript:void(0)"
                  class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg
                    class="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <img
              src="imge.jpg"
              alt="sitting place"
              class="w-full mt-8 md:mt-6 hidden sm:block"
            />
          </div>
        </div>
        <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div class="relative">
            <div>
              <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                12 April 2022
              </p>
              <div class="absolute bottom-0 left-0 md:p-10 p-6">
                <h2 class="text-xl font-semibold 5 text-white">
                  The Decorated Ways
                </h2>
                <p class="text-base leading-4 text-white mt-2">
                  Dive into minimalism
                </p>
                <a
                  href="javascript:void(0)"
                  class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                >
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg
                    class="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <img
              src="imgr.jpg"
              alt="sitting place"
              class="w-full sm:block hidden"
            />
          </div>
          <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
            <div class="relative w-full">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2022
                </p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p class="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p class="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="imgy.jpg" class="w-full" alt="chair" />
            </div>
            <div class="relative w-full sm:mt-0 mt-4">
              <div>
                <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  12 April 2022
                </p>
                <div class="absolute bottom-0 left-0 p-6">
                  <h2 class="text-xl font-semibold 5 text-white">
                    The Decorated Ways
                  </h2>
                  <p class="text-base leading-4 text-white mt-2">
                    Dive into minimalism
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <button class="pr-2 text-sm font-medium leading-none">
                      Read More
                    </button>
                    <svg
                      class="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <img src="imgt.jpg" class="w-full" alt="wall design" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full  flex justify-center items-center">
        <button
          data-modal-toggle="example"
          data-modal-action="open"
          class="bg-red-600 font-semibold text-white p-3 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
        >
          add
        </button>

        <tbody>
          <tr>
            {posts.map((post) => (
              <li key={post.id}>
                <link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </link>
              </li>
            ))}
            <td>
              <button
                data-modal-toggle="example2"
                data-modal-action="open"
                class="bg-purple-600 font-semibold text-white p-3 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
              >
                delate
              </button>
            </td>
            <td>
              <button
                data-modal-toggle="example2"
                data-modal-action="open"
                class="bg-purple-600 font-semibold text-white p-3 w-32 rounded-full hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
              >
                remouve
              </button>
            </td>
          </tr>
        </tbody>
      </div>
      <footer />
    </div>
  );
}
