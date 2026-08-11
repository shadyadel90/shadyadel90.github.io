import { RoleProvider, useRole } from "./context/RoleContext";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function Portfolio() {
  const { roleId } = useRole();

  return (
    <>
      <Nav />
      <main key={roleId}>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <RoleProvider>
      <Portfolio />
    </RoleProvider>
  );
}
