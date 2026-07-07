// București 6 sectors, projected from geoBoundaries ADM2 (SECTOR 1..6).
export const BUC_VIEWBOX = "0 0 1000 1107.9";
export const BUC_SECTORS: { id: string; lx: number; ly: number }[] = [
  { id: "Sector 1", lx: 38.87, ly: 30.46 },
  { id: "Sector 2", lx: 67.35, ly: 43.72 },
  { id: "Sector 3", lx: 76.96, ly: 55.51 },
  { id: "Sector 4", lx: 55.89, ly: 73.76 },
  { id: "Sector 5", lx: 36.54, ly: 63.91 },
  { id: "Sector 6", lx: 26.29, ly: 51.80 },
];

// Ilfov centres in the București metro ring — shown in the sector view (as dots
// north of the city) instead of cluttering the national map. `city` matches the
// Title in affidea-clinics.ts. Positions are approximate, above the sectors.
export const BUC_ILFOV: { label: string; city: string; lx: number; ly: number }[] = [
  { label: "Otopeni", city: "Otopeni", lx: 32, ly: 7.5 },
  { label: "Ștefănești", city: "Ștefaneștii de Jos", lx: 62, ly: 11 },
];
