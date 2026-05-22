import Hero from "./components/Hero/Hero.tsx";
import About from "./components/Hero/About.tsx";
import ProjectSection from "./components/Projects/ProjectSection.tsx";
import ContactInfo from "./components/Contact/ContactSection.tsx";
import { aboutData } from "./data/About.ts";
import { contactInfo } from "./data/ContactInfo.ts";

//Vilka delar vill jag ha med?
//Struktur: en sida, navbar scrollar ner till de olika sektionerna. Lite snygga scroll-animationer. Diskreta hover-animationer.

//1. Hero-sektion med namn, bild och kort beskrivning

//2. Projekt-sektion med bild + kort beskrivning av utvalda projekt och länkar till dem!

//3. Kontaktinfo

//4. CV? Arbetserfarenheter? Mer text kring mig? Prio 2.
function App() {
  const { name, description } = aboutData;
  const contactInfoData = contactInfo;

  return (
    <>
      <Hero />
      <About name={name} description={description} />
      <ProjectSection />
      <ContactInfo {...contactInfoData} />
    </>
  );
}

export default App;
