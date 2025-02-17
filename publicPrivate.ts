class User {
    public email: string; //everyone can access
    private password: string; //only user class can access
    protected age: number; //only this and its subclass can access
    //readonly -> something once set, can never change 
    readonly city: string = "Dhaka"; 
  
    constructor(email: string, password: string, age: number) 
    {
      this.email = email;
      this.password = password;
      this.age = age;
    }
    public getEmail(): string { //we dont need it as its already public
      return this.email;
    }
    private getPassword(): string {
      return this.password; 
      //method to get password as its private accessed only in this class
    }
    protected getAge(): number {
      return this.age;
      //only this and its subclass can as its protected
    }
  }

  class Admin extends User { //suppose admin is extending user
    constructor(email: string, password: string, age: number) {
      super(email, password, age);
    }
    getAdminAge(): number {
      return this.age; 
      // admin shall check their age and it works because age is protected 
    }
  }
  
  const user = new User("nuha@example.com", "superSecret", 25); 
  console.log(user.email);  
  console.log(user.city);   
  console.log(user.password); //none can access it and it's private
  console.log(user.age);      // none can access it and it's protected
  
  //suppose a new admin
  const admin = new Admin("admin@example.com", "adminPass", 30);
  console.log(admin.getAdminAge()); // works as its using a protected property 
  