export default function sitemap() {
  return [
    {
      url: "https://clubhousevianey.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,  // most important page
    },
    {
      url: "https://clubhousevianey.com/servcios",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://clubhousevianey.com/quienes-somos",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: "https://clubhousevianey.com/contactanos",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: "https://clubhousevianey.com/terminos-condiciones",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.2,  // low priority, not relevant for search
    },
  ];
}