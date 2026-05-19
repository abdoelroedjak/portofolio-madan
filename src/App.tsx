/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="relative overflow-hidden bg-surface text-on-surface">
      <AnimatedBackground />
      <div className="grain-overlay" />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Portfolio />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
