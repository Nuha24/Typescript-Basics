type User = { 
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return { name: "", email: "", isActive: true };
}

createUser({ name: "Alice", email: "alice@example.com", isActive: true });
