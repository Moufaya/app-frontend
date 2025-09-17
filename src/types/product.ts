export type Product = {
    id: string;
    name: string;
    category: "Running" | "Lifestyle" | "Basketball" | "Hiking";
    price: number;       // en €
    sizes: number[];     // pointures disponibles
    colors: string[];    // noms simples (noir, blanc...)
};

export type CategoryName = Product["category"];