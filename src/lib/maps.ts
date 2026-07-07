// Build a Google Maps link that opens the place for a query (clinic name +
// address + city resolves to the real Affidea POI, with a Directions button).
export function googleMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
