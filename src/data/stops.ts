

export type Stop = {
  id: string;
  name: string;
  path: string[];
};

export const stops: Stop[] = [
  {
    id: "stop1",
    name: "Ehor",
    path: ["Ehor", "Oluku Junction", "Ramat Park", "Stadium"],
  },
  {
    id: "stop2",
    name: "Main Park",
    path: ["Main Park", "Central Avenue", "West Bridge", "Stadium"],
  },
  {
    id: "stop3",
    name: "Market Square",
    path: ["Market Square", "Broadway", "Old Town Road", "Stadium"],
  },
  {
    id: "stop4",
    name: "Airport Rd",
    path: ["Airport Rd", "Okada Junction", "Unity Street", "Stadium"],
  },
  {
    id: "stop5",
    name: "University Gate",
    path: ["University Gate", "Library Road", "Unity Street", "Stadium"],
  },
  {
    id: "stop6",
    name: "East Junction",
    path: ["East Junction", "Green Road", "River Lane", "Stadium"],
  },
];
