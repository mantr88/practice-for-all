import { useEffect, useState } from "react";
import reactLogo from "../../assets/react.svg";
import "./Fetch.scss";
import axios from "axios";

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

function Fetch() {
  const [count, setCount] = useState(1);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    /* 1. Fetch API */
    // fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
    // .then((response) => {
    //   console.log(response);
    //   return response.json();
    // })
    // .then((json) => {
    //   console.log(json);
    //   setPost(json);
    // });

    /* 2. Analog use axios */
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts/${count}`)
    //   .then((response) => {
    //     console.log(response);
    //     setPost(response.data);
    //   });

    /* 3. Analog use XMLHttpRequest */
    // const xml = new XMLHttpRequest();
    // xml.open(
    //   "GET",
    //   `https://jsonplaceholder.typicode.com/posts/${count}`,
    //   true
    // );
    // xml.onreadystatechange = function () {
    //   if (xml.readyState === 4 && xml.status === 200) {
    //     const res = xml.responseText;
    //     return res;
    //   }
    // };
    // xml.send();

    /* ASYNC/AWAIT */

    /* with FetchAPI */
    // const fetchPost = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://jsonplaceholder.typicode.com/posts/${count}`
    //     );
    //     console.log(
    //       "🚀 ~ file: Fetch.tsx:58 ~ fetchPosts ~ response:",
    //       response
    //     );
    //     const post = await response.json();
    //     console.log("🚀 ~ file: Fetch.tsx:60 ~ fetchPosts ~ post:", post);
    //     setPost(post);
    //   } catch (error) {
    //     console.log("🚀 ~ file: Fetch.tsx:61 ~ fetchPosts ~ error:", error);
    //   }
    // };
    // fetchPost();

    /* with axios */
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${count}`
        );
        console.log(response);
        setPost(response.data);
      } catch (error) {
        console.log("🚀 ~ file: Fetch.tsx:77 ~ fetchPost ~ error:", error);
      }
    };
    fetchPost();
  }, [count]);

  return (
    <>
      <div>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Interview</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Post post={post} />
      </div>
    </>
  );
}

export default Fetch;

function Post({ post }: { post: Post | null }) {
  if (!post) return null;

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
