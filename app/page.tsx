"use client";

import useReveal from "@/components/ui/useReveal";

import HeroSlider from "@/components/hero/Hero";
import Purpose from "@/components/sections/Purpose";
import Assessment from "@/components/sections/Assessment";
import Classification from "@/components/sections/Classification";
import Cognitive from "@/components/sections/Cognitive";
import Emotional from "@/components/sections/Emotional";
import Modalities from "@/components/sections/Modalities";
import Services from "@/components/sections/Services";
import ContactBand from "@/components/sections/ContactBand";
import ClubGallery from "@/components/sections/ClubGallery";


export default function Home() {
  useReveal(); // 👈 activates global smooth reveals

  return (
    <main>
      <div className="home">
      <HeroSlider />
      <Purpose />
      <Classification />
      <Assessment />
      <Emotional />
      <Cognitive />
      <Services />
      <ClubGallery />
      <Modalities />
      <ContactBand />
      </div>
    </main>
  );
}
