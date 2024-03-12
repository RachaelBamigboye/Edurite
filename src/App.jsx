import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Program from "./component/Programs/program";
import Title from "./component/Title/Title";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Testimonials from "./component/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What Student says" />
        <Testimonials/>
      </div>
    </div>
  );
};

export default App;
