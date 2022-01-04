import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">MERN Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.appstudio.ca/blog/wp-content/uploads/2020/10/Mern-Stack-Development-in-Canada.jpg"
        alt=""
      />
    </div>
  );
}