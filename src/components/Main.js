import Contact from "./section/Contact";
import Intro from "./section/Intro";
import Skill from "./section/Skill";
import Work from "./section/Work";

function Main(props) {

  return (
    
    <container>
      <Intro />
      <Work />
      <Skill />
      <Contact />
    </container>
  );
}

export default Main;
