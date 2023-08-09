// import { useEffect, useState } from "react";


// function Posts () {
//     const [posts, setPosts] = useState ([]);

//     useEffect(() => {
//         function fetchPosts()   {

//            fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(data => {
        
//         setPosts(data)
//         //console.log(data);
//       })
//       .catch(err => {
//         console.log(err);
//       })
            
//         }
//         fetchPosts()
//     }, [])
//     return (
//         <div>
//         <h1>Posts</h1>

//         <ol> 
//         {posts.map(post => (
//             <li key={post.id}>{post.title}<p>Body:</p>{post.body}</li>
            
//         ))}
//         </ol>
//         </div>

//     )
// }

// export default   Posts