import Image from "next/image";
import FlightBanner from "./components/FlightBanner";
import OverViewBanner from "./components/OverViewBanner";
import ExploreMore from "./components/ExploreMore";
import LinkFareAppSection from "./components/LinkFareAppSection";


export default function Home() {
  return (
<div>
  <FlightBanner/>
  <OverViewBanner/>
  <ExploreMore/>
  <LinkFareAppSection/>
  </div>
  );
}
