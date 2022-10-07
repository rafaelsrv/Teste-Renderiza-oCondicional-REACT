import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Test() {
  const [post, setPost] = React.useState(null);



  

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)})
      

      
      
      
      //.then();
      
    
    
  }, []);
  
  

  if (!post) return null;

  return (
    <div>{post.length > 0 && (
        <div>
            {post.map((itens)=><p>{itens.title}</p>)}
        
            <h1>bb</h1>
        </div>

    )}
      
    </div>
  );
  }