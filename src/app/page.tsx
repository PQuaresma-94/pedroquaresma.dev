import Image from "next/image";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
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
        <Skills />
        <Footer />
      </div>
    </>
  );
}
