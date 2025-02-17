class NUser {
    public email: string; 
    private courseCount = 1;

    constructor(email: string, password: string, age: number) 
    {
      this.email = email;
    }

    //annotate with get keyword ---> getter
    get getAppleEmail(): string{
         return `apple ${this.email}`
    }
    
    get coureCCount(): number{ //user for get any property --> mostly private property
        return this.courseCount
    }
    //setter cant be void/or any other data type!! no return type!
    set coureCCount(courseNum){
      if(courseNum <= 1)
      {
        throw new Error("Course Count Shall be more than 1")
      }
      this.courseCount=courseNum
    }
  }
