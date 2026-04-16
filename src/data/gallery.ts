export type VideoItem = {
  title: string;
  date: string; // ISO YYYY-MM-DD
  src: string; // direct MP4 URL (e.g. R2 public URL)
  place?: string;
  caption?: string;
  poster?: string; // optional JPG thumbnail URL or /posters/... path
};

export const videos: VideoItem[] = [
  {
    title: "tech@nyu's eboard social!",
    date: "2026-04-16",
    place: "NYU",
    caption: "A fun evening social with the tech@nyu eboard at WSQ park",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/Social.m4v",
  },
  {
    title: "Startup Week",
    date: "2026-03-25",
    place: "NYU",
    caption: "Cuts from NYU Startup Week.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/Final%20upload%20ready.m4v",
  },
  {
    title: "South of Green Mountain Forest",
    date: "2025-12-03",
    place: "Lye Brook Falls, VT",
    caption: "Trekking in Vermont with family. Lye Brook Falls.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/final%20old%20man.MOV",
  },
  {
    title: "3am, Brooklyn",
    date: "2025-11-15",
    place: "Brooklyn, NY",
    caption: "3am in Dumbo, Brooklyn. cuts from the promenade.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/brooklyn%20paalam.MOV",
  },
  {
    title: "Return to Nikon",
    date: "2025-11-20",
    place: "",
    caption: "Bought a Nikon ZR, a return to Nikon after years.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/NIKON.MOV",
  },
  {
    title: "Blacksburg, With Love",
    date: "2025-02-25",
    place: "Blacksburg, VA",
    caption: "Strolling Blacksburg, VA during snows",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/Blacksburg_Edit.MP4",
  },
  {
    title: "In Memory of Old Times",
    date: "2023-08-27",
    place: "",
    caption: "a short film to nillavil elame",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/In%20Memory%20of%20Old%20Time%20-%20Short.M4V",
  },
  {
    title: "Kochi Biennale 2023",
    date: "2023-04-02",
    place: "Kochi, India",
    caption: "Fort Kochi, Biennale Exhibits.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/Kochi%20Bienalle%20-%20Short.mov",
  },
  {
    title: "M4 Competition",
    date: "2024-05-22",
    place: "",
    caption: "BMW M4 Competition.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/M4_Reel.MP4",
  },
  {
    title: "Goa with hometown friends",
    date: "2024-06-24",
    place: "Goa, India",
    caption: "Goa with the hometown crew.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/Travel_Vlog.MP4",
  },
  {
    title: "Michelle Obama — EClub",
    date: "2024-04-15",
    place: "Virginia Tech",
    caption: "Michelle Obama's visit to VT EClub. highlights reel.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/EClub_Michelle%20obama%20speech%20highlight.MP4",
  },
  {
    title: "EClub Networking Event Promo",
    date: "2024-04-15",
    place: "Virginia Tech",
    caption: "Promo cut for EClub's networking night. Blacksburg, VA.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/Eclub_Event_Promo.MP4",
  },
  {
    title: "Kerala Kaayal",
    date: "2022-05-28",
    place: "Kerala, India",
    caption: "Kaayal — Kerala's backwaters.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/Kerala%20Kaayal.MP4",
  },
  {
    title: "Boothakalam — The Past",
    date: "2019-08-01",
    place: "Kochi, Kerala",
    caption: "Boothakalam. an early short on memory, shot in Kochi.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/Boothakalam%20The%20Past.MP4",
  },
  {
    title: "The 718",
    date: "2020-02-14",
    place: "Highway 1, CA",
    caption: "top down on Highway 1. California coast",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/718%20v2.MP4",
  },
  {
    title: "NYC — Short",
    date: "2022-08-14",
    place: "New York, NY",
    caption: "another cut of the NY short. same week, different edit.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/NYC%20-%20Short.MP4",
  },
  {
    title: "ATV — Cozumel",
    date: "2025-08-02",
    place: "Cozumel, Mexico",
    caption: "ATVs through Cozumel.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/atv%20cozumel.mov",
  },
  {
    title: "Boxster",
    date: "2025-01-14",
    place: "",
    caption: "the Boxster. quiet roads, top down.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/popu.mov",
  },
  {
    title: "Illahi",
    date: "2023-10-14",
    place: "Chicago, IL",
    caption: "Chicago nights.",
    src: "https://pub-7b3afe1476824e7d9ad09c338b8c0477.r2.dev/illahi.M4V",
  },
];
