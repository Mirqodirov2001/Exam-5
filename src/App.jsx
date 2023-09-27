import Header from "./components/Header"
import Intro from "./components/Intro"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Work from "./components/Work"
import Testimonials from "./components/Testimonials"
import Get from "./components/Get"
const App = () => {

  return (
    <div className="container">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <Get />
    </div>
  );
}


export default App;