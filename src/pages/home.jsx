import About from "../components/about";
import Hero from "../components/hero";
import Skills from "../components/skills";

function Home () {
  return (
    <div className="w-full max-w-[1366px] flex flex-col items-center pt-12 gap-6 lg:gap-4">
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default Home;
