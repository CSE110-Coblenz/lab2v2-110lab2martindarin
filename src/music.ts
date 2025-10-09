import { animateFeature } from './animation';

export const music = ["Hip-Hop", "Rap", "Pop", "R&B"];

export function printMusic() {
  animateFeature("Music");
  console.log("Music for the party:");
  music.forEach((genre) => console.log("- " + genre));
}