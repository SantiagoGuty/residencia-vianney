// app/page.tsx  ← no "use client" here
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Club House Vianey | Cuidado Integral para el Adulto Mayor",
  description:
    "Internación y cuidado para adultos mayores en Puerto Colombia. Atención profesional y acompañamiento emocional.",
  openGraph: {
    title: "Club House Vianey | Cuidado Integral para el Adulto Mayor",
    description:
      "Entorno seguro, profesional y cálido para el adulto mayor. Internación 24/7, Adulto Día y estancia temporal.",
    url: "https://clubhousevianey.com",
    siteName: "Club House Jean Batista Marie Vianey",
    locale: "es_CO",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}