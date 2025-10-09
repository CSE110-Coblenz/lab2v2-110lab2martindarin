import { animateFeature } from './animation';

// Define a list of snacks
export const snacks: string[] = [
    "Chips",
    "Cookies",
];

// Define and export a function that prints the snacks to the console
export function printSnacks(): void {
    animateFeature("Snacks");
    console.log("Available snacks:");
    snacks.forEach((snack, index) => {
        console.log(`${index + 1}. ${snack}`);
    });
}
