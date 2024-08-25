let games = [
  {
    id: "1",
    title: "Call of Duty",
    platform: ["PS4", "XBOX", "PC"],
  },
  {
    id: "2",
    title: "GTA V",
    platform: ["PS4", "XBOX", "PC"],
  },
  {
    id: "3",
    title: "Red Dead Redemption",
    platform: ["PS4", "XBOX", "PC"],
  },
  {
    id: "4",
    title: "Halo",
    platform: ["PS4", "XBOX", "PC"],
  },
  {
    id: "5",
    title: "Fifa 2022",
    platform: ["PS4", "XBOX", "PC"],
  },
  {
    id: "6",
    title: "Gears of War",
    platform: ["PS4", "XBOX", "PC"],
  },
  {
    id: "7",
    title: "Horizon Zero Dawn",
    platform: ["PS4", "XBOX", "PC"],
  },
];

let authors = [
  { id: "1", name: "AbdulRahman", verified: true },
  { id: "2", name: "Ahmed", verified: true },
  { id: "3", name: "Ali", verified: true },
  { id: "4", name: "Amer", verified: true },
  { id: "5", name: "Bilal", verified: true },
];

let reviews = [
  { id: "1", rating: "5", content: "Good Game", author_id: "1", game_id: "1" },
  { id: "2", rating: "4", content: "Good Game", author_id: "2", game_id: "1" },
  { id: "3", rating: "3", content: "Good Game", author_id: "3", game_id: "1" },
  { id: "4", rating: "2", content: "Good Game", author_id: "4", game_id: "1" },
  { id: "5", rating: "1", content: "Good Game", author_id: "5", game_id: "1" },
  { id: "6", rating: "5", content: "Good Game", author_id: "1", game_id: "2" },
  { id: "7", rating: "4", content: "Good Game", author_id: "2", game_id: "2" },
];

export default { games, authors, reviews };
