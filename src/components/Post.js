import React, {useState, useEffect} from "react";


function Post(props) {
  useEffect(()=> {
    fetchData();
  }, [])

  const [post, setPosts] = useState([]);

  const fetchData = async () => {
    const id = props.match.params.id
    const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await rawData.json();
    console.log(post);

    setPosts(post)
  }
  return <div className="App">
    <h1>POST</h1>
    {post.title}
    {post.body}

  </div>;
  
}

export default Post;
