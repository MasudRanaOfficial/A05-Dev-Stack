import { Suspense } from "react";
import Loader from "./components/common/Loader";
import TechnologiesContent from "./components/technologies/TechnologiesContent";
import type { Technology } from "./types/technology";


const technologiesPromise: Promise<Technology[]> = fetch(
  "/data/technologies.json",
).then((res) => {
  if (!res.ok) {
    throw new Error("Failed to load technologies");
  }

  return res.json();
});

function App() {
  return (
    <Suspense fallback={<Loader message="Loading technologies..." />}>
      <TechnologiesContent technologiesPromise={technologiesPromise} />
    </Suspense>
  );
}

export default App;
