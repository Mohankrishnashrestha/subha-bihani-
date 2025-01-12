/* eslint-disable react/prop-types */
import About from "./component of content/About";
import Home from "./component of content/Home";
import Portfolio from "./component of content/Portfolio";
import Service from "./component of content/Service";
import Contact from "./component of content/Contact";

function Content({ content }) {
  const start = {
    name: "Subha Bihani Digital Media Pvt. Ltd",
    heading: "Empower Your Business Traffic at The Top",
    paragraph:
      "Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions. ",
    button: "Get Started Now",
  };
  switch (content) {
    case "home":
      return <Home start={start} />;
    case "about":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "service":
      return <Service />;
    case "contact":
      return <Contact />;
    default:
      return <div>Page not found</div>;
  }
}
export default Content;
