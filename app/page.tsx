import Carousel from "./components/Carousel";
import ExecutiveMembersSection from "./components/Members";
import PresidentsMessage from "./components/President";
import TopFeatures from "./components/TopFeatures";

export default function Home() {
  return (
    <>
      <Carousel />
      <TopFeatures />
      <PresidentsMessage />
      <ExecutiveMembersSection />
    </>
  );
}
