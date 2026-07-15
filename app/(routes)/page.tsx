import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { Skills } from "@/components/sections/Skills/Skills";
import { Services } from "@/components/sections/Services/Services";
import { Projects } from "@/components/sections/Projects/Projects";
import { Experience } from "@/components/sections/Experience/Experience";
import { OpenSource } from "@/components/sections/OpenSource/OpenSource";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { Contact } from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <OpenSource />
      <Testimonials />
      <Contact />
    </>
  );
}
