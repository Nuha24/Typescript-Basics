let a: string | null; // Union 

// user 
type NewUser = {
    name: string;
    email: string;
};

type Admin = NewUser & { //intersection
    getDetails(userInfo: string): void;
};

function abcd(a: Admin) {
    a.getDetails("User details here");
}
// Example 
const adminUser: Admin = {
    name: "Nuha",
    email: "n@h.com",
    getDetails: (userInfo: string) => {
        console.log("Admin Details:", userInfo);
    },
};

abcd(adminUser);
