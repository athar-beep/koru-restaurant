import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Chef from "@/components/Chef";
import MenuTabs from "@/components/MenuTabs";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Visit from "@/components/Visit";
import ReserveDialog from "@/components/ReserveForm";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="pb-20 lg:pb-0">
        <Hero />
        <Chef />
        <MenuTabs compact />
        <Story />
        <Gallery />
        <Events />
        <Visit />
      </main>
      <Footer />
      <StickyBar />
      <ReserveDialog />
    </>
  );
}
