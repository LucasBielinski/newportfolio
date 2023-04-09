// imports profile img
import profile from "../images/profile.jpg";
// imports style page
import "../components/styles/about.css";
// renders about page
export default function About() {
  return (
    <div>
      <h2 className="text-center mt-4">About Lucas</h2>
      <p className="text-center mt-4">
        Lucas Bielinski is a recent bootcamp graduate intrested in web
        development. This portfolio contains some of his many projects. He has
        covere a lot of brand-new territory in his recent bootcamp, learning
        something new every-week of the 24-week experince. He has experince in
        full-stack development, using HTML, JavaScript, CSS, React, Node.js,
        Express.js and more. The projects on this page and the page itself is a
        product of those experinces.
      </p>
      {/* render profile image */}
      <div className="text-center">
        <img className="profile" src={profile} alt="profile"></img>
      </div>
    </div>
  );
}
