import type { Product } from "../types/product";

export const CATEGORIES = ["Running", "Lifestyle", "Basketball", "Hiking"] as const;

export const PRODUCTS: Product[] = [
    { id: "p1", name: "Sprint Lite", category: "Running", price: 89, sizes: [38, 39, 40, 41, 42, 43], colors: ["noir", "blanc"] },
    { id: "p2", name: "Trail Ridge", category: "Hiking", price: 129, sizes: [40, 41, 42, 43, 44], colors: ["kaki", "noir"] },
    { id: "p3", name: "Court Pro", category: "Basketball", price: 119, sizes: [39, 40, 41, 42, 43, 44, 45], colors: ["blanc", "rouge"] },
    { id: "p4", name: "City Flow", category: "Lifestyle", price: 99, sizes: [36, 37, 38, 39, 40, 41, 42], colors: ["beige", "noir"] },
    { id: "p5", name: "Marathon X", category: "Running", price: 149, sizes: [40, 41, 42, 43, 44, 45], colors: ["bleu", "noir"] },
    { id: "p6", name: "Summit Grip", category: "Hiking", price: 139, sizes: [39, 40, 41, 42, 43], colors: ["vert", "gris"] },
    { id: "p7", name: "Street Ease", category: "Lifestyle", price: 79, sizes: [35, 36, 37, 38, 39, 40], colors: ["blanc", "rose"] },
    { id: "p8", name: "Hoops Max", category: "Basketball", price: 159, sizes: [42, 43, 44, 45, 46], colors: ["noir", "or"] },
    { id: "p9", name: "Tempo Air", category: "Running", price: 109, sizes: [37, 38, 39, 40, 41], colors: ["gris", "bleu"] },
    { id: "p10", name: "Urban Low", category: "Lifestyle", price: 69, sizes: [36, 37, 38, 39, 40, 41, 42], colors: ["noir"] },
    { id: "p11", name: "Rock Path", category: "Hiking", price: 119, sizes: [41, 42, 43, 44], colors: ["brun", "noir"] },
    { id: "p12", name: "Court Prime", category: "Basketball", price: 139, sizes: [39, 40, 41, 42, 43, 44], colors: ["blanc", "bleu"] },
];