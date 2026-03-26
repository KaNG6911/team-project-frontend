import Image from "next/image";
import LevelSelector from "./about/components/LevelSelector";
import Hero from "./components/Hero";
import Vision from "./about/components/Vision";
import ClassSelection from "./about/components/ClassSelection";
import Solution from "./about/components/Solution";
import Classmap from "./about/components/Classmap";
export default function Home() {
  return (
    <div>
      <main>
           <Hero />
            <Solution />
           {/* <ClassSelection/> */}
           <Classmap/>
           <Vision/>
      </main>
    </div>
  );
}
