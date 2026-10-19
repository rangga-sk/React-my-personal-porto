import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';

export default function HomePage() {
  return (
    <main className="page">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
