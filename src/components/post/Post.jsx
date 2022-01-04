import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://blog-n-mern.herokuapp.com/images/";
  // const PF = "https://blog-n-mern.herokuapp.com/images"
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo" style = {{paddingTop:'20px'}}>
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat" >{c.name}</span>
          ))}
        </div>
        <Link to={`https://blog-n-mern.herokuapp.com/api/posts/${post._id}`} className="link">
          <span className="postTitle" >{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
          
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}