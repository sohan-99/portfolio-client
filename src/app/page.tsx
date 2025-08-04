import Navbar from "./components/Navber";
import PhilosophyIntro from "./components/PhilosophyIntro";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
   <div>
    <Navbar />
    <ProfileCard />
    <PhilosophyIntro />
   </div>
  );
}
