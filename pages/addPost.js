import Head from "next/head";
import { NavBar } from "../components/navbar";

export default function addPost() {
  return (
    <div>
      <Head>
        <title>Best Food</title>
      </Head>
      <NavBar />
      <div className="text-3xl font-bold text-indigo-400 p-2 mr-4 text-center">
        <h1>Ajouter un post</h1>

        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          ></label>
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Titre"
            required
          ></input>
        </div>

        <div>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-400 dark:text-gray-900"
          ></label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Contenu"
          ></textarea>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Confirmer
        </button>
      </div>
    </div>
  );
}
