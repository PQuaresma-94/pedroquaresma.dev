import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";

export default function Home() {
  return (
    <>
      <div className="font-clashGrotesk">
        <Preloader />
        <Header />
        <Main />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
