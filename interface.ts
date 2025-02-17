interface User {
    readonly dbID: number;
    email: string;
    userID: number;
    googleID?: string;
    
    // Trial User
    startTrial(): string;
    
    // Discount
    getCoupon(couponname: string, value: number): number;
}

//Interface vs Type - 
// One can easily extend or reopen the interface & it has advantage in inheritance 
interface User {
    githubToken: string;
     
 }
 
const nuha: User = {dbID: 23, email: "n@h.com", userID: 2211,
    githubToken: "NUHA24"
    startTrial: () => {
        return "trial started";  },
    // Discount
    getCoupon: (couponname, value) => {
        return value;
    }
};

// modifying allowed 
nuha.email = "n@hdhdf.com";
