import { Suspense, useState } from "react";
import Loader from "./components/common/Loader";
import TechnologiesContent from "./components/technologies/TechnologiesContent";
import type { Technology } from "./types/technology";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/layout/Navbar";
import { HeroBanner } from "./components/home/HeroBanner";


const technologiesPromise: Promise<Technology[]> = fetch(
  "/data/technologies.json",
).then((res) => {
  if (!res.ok) {
    throw new Error("Failed to load technologies");
  }

  return res.json();
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navLinks={navLinks}
      />
      <HeroBanner/>
      <Suspense fallback={<Loader message="Loading technologies..." />}>
        <TechnologiesContent technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;
