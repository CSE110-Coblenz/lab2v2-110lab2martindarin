// src/snacks.ts

const snacks = ["Chips", "Guacamole", "Cookies", "Popcorn"];

export function printSnacks() {
  console.log("Snacks for the party:");
  snacks.forEach((snack) => console.log("- " + snack));
}

// Run the function
printSnacks();
