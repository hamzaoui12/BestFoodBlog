import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import { NavBar } from "../components/navbar";

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div>
      <Head>
        <title>Best Food</title>
      </Head>
      <NavBar />
      <div className="text-3xl font-bold text-indigo-400 p-2 mr-4 text-center">
        <p>Bienvenue sur Best Food le meilleur blog de nourriture !</p>
        <p>{posts.length} post(s)</p>
        <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-purple-400 rounded-full focus:shadow-outline hover:bg-purple-600">
          Add post
        </button>

        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {posts.map((post) => (
                <li key={post._id}>
                  <link href={post.id}>
                    <a>{post.title}</a>
                  </link>
                </li>
              ))}
              <td>
                <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-fuchsia-400 rounded-full focus:shadow-outline hover:bg-fuchsia-600 ">
                  update
                </button>
              </td>
              <td>
                <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-pink-400 rounded-full focus:shadow-outline hover:bg-pink-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection("post").find({}).toArray();

  const posts = JSON.parse(JSON.stringify(data));

  const show = posts.map((post) => {
    return {
      _id: post._id,
      title: post.title,
      content: post.content,
    };
  });

  console.log(posts);

  return {
    props: { posts: show },
  };
}
