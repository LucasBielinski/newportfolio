// imports profile img
import profile from "../images/Lucasnew.jpg";
// imports style page
import "../components/styles/about.css";
// renders about page
export default function About() {
  return (
    <div>
      <h2 className="abouth text-center mt-4">About Lucas</h2>
      <p className="aboutp container text-center mt-4">
        Lucas Bielinski is a recent boot camp graduate interested in web
        development. This portfolio contains some of his many projects. He has
        covered a lot of brand-new territory in his recent boot camp, learning
        something new every-week of the 24-week experience. He has experience in
        full-stack development, using HTML, JavaScript, CSS, React, Node.js,
        Express.js and more. The projects on this page and the page itself is a
        product of those experiences.
      </p>
      {/* render profile image */}
      <div className="text-center">
        <img className="profile" src={profile} alt="profile"></img>
      </div>
    </div>
  );
}
