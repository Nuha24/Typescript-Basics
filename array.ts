// Type definition for User objects
type User = {
    name: string;
    isActive: boolean;
};

// Arrays with specific types
const superHeros: string[] = [];
const heroPower: number[] = [];
const allUsers: User[] = [];

// Adding elements to arrays
superHeros.push("spiderman");
heroPower.push(2);
allUsers.push({ name: "", isActive: true });

// Multi-dimensional array example for ML models
const MLModels: number[][] = [
    [255, 255, 255],
    [128, 64, 32] // Added another row for better clarity
];
