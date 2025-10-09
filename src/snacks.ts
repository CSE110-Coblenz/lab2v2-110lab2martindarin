

const music = ["Hip-Hop", "Rap", "Pop", "R&B"];

export function printMusic() {
  console.log("Music for the party:");
  music.forEach((genre) => console.log("- " + genre));
}


printMusic();
