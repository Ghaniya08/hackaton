import ActiveProcess from "@/components/layout/Activeprocess";
import Bestfoodyproduct from "@/components/layout/Bestfoodyproduct";
import Blog from "@/components/layout/Blog";
import Chef from "@/components/layout/Chefs";
import Foodcatr from "@/components/layout/Foodcatr";
import HeroSection from "@/components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Ourmenu from "@/components/layout/Ourmenu";
import Review from "@/components/layout/Review";
import Testi from "@/components/layout/Testi";
import Whyus from "@/components/layout/Whyus";

export default function Home() {
  return (
    <>
     <div className="bg-blackkk">
     <Nav/>
     <HeroSection/>
     <Bestfoodyproduct/>
    <Foodcatr/>
    <Whyus/>
    <Review/>
    <Ourmenu/>
    <Chef/>
    <Testi/>
    <ActiveProcess/>
    <Blog/>
    </div>
    </> 
  );
}
