import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Program from "./component/Programs/program";
import Title from "./component/Title/Title";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Testimonials from "./component/Testimonials/Testimonials";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import VideoPlayer from "./component/VideoPlayer/VideoPlayer";
import { useState } from "react";

const App = () => {

  const [playState,setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subTitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
};

export default App;
