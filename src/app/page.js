import Head from "next/head";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-16 mx-auto px-14 py-4">
        <HeroSection />
        <AboutSection />
        <ExperienceSection/>
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
