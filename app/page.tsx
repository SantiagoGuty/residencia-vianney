"use client";

import useReveal from "@/components/ui/useReveal";

import HeroSlider from "@/components/hero/HeroSlider";
import Purpose from "@/components/sections/Purpose";
import Assessment from "@/components/sections/Assessment";
import Classification from "@/components/sections/Classification";
import Cognitive from "@/components/sections/Cognitive";
import Emotional from "@/components/sections/Emotional";
import Modalities from "@/components/sections/Modalities";
import Footer from "@/components/Footer";


export default function Home() {
  useReveal(); // 👈 activates global smooth reveals

  return (
    <main>
      <HeroSlider />
      <Purpose />
      <Assessment />
      <Classification />
      <Cognitive />
      <Emotional />
      <Modalities />
      <Footer />
    </main>
  );
}
