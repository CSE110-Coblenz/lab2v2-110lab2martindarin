import { animateFeature } from './animation';

const music = ["Hip-Hop", "Rap", "Pop", "R&B", "Jazz"];

export function printMusic() {
  animateFeature("Music");
  console.log("Music for the party:");
  music.forEach((genre) => console.log("- " + genre));
}