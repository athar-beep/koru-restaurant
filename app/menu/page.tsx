import type { Metadata } from "next";
import Header from "@/components/Header";
import MenuTabs from "@/components/MenuTabs";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import ReserveDialog from "@/components/ReserveForm";

export const metadata: Metadata = {
  title: "Menu | Koru Restaurant Lahore",
  description:
    "Browse the Koru menu: sushi bar, starters, soups and salads, pizza, pasta, seafood, steaks, burgers and desserts. Dish names from public listings, pending owner confirmation.",
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="main" className="pb-20 pt-16 lg:pb-0">
        <MenuTabs />
      </main>
      <Footer />
      <StickyBar />
      <ReserveDialog />
    </>
  );
}
