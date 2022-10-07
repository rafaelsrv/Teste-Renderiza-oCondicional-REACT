import axios from "axios";
import React from "react";
import Card from "./Card";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Test() {
  const [post, setPost] = React.useState(null);
 

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)})
      
  }, []);
  

  if (!post) return null;

  return (
    <div>{post.length > 0 && (
        <div>
            {post.map((itens, index)=>(
                <div>
                
                <div> <li key={index}> {itens.id}: {itens.title}</li></div>
                
                <Card id={index}/> 
                </div>
                
            ))}
        
                    
        </div>
        
        
        
    )}
      
    </div>
  );
  }