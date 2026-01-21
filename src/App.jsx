import { useState } from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Navbar/Nav";
import ResumeMatch from "./Components/Resume-Matcher/ResumeMatch";
import Working from "./Components/HowItWork/Working";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="sections-container mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
        <Home isMenuOpen={isMenuOpen} />
        <ResumeMatch />
        <Working />
      </div>
    </>
  );
};
export default App;
