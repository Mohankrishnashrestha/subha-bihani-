/* eslint-disable react/prop-types */
import About from "./component of content/About";
import Home from "./component of content/Home";
import Portfolio from "./component of content/Portfolio";
import Service from "./component of content/Service";
import Contact from "./component of content/Contact";

function Content({content}) {

  switch (content) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "service":
      return <Service />;
    case "contact":
      return <Contact />;
  }
}
export default Content;