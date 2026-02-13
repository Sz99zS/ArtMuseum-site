import Header from "@/views/main/Header/Header";
import Footer from "@/Components/Footer/Footer";
import MainHero from "@/views/main/MainHero/MainHero";
import OurSpecialGallery from "@/views/main/OurSpecialGallery/OurSpecialGallery";
import { OtherWorks } from "@/views/main/OtherWorks/OtherWorks";

export default function Home() {
  return (
    <div>
      <Header />
      <MainHero />
      <OurSpecialGallery />
      <OtherWorks />
      <Footer />
    </div>
  );
}
