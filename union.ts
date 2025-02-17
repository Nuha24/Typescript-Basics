
type User = {
    name: string;
    id: number;
  };
  
  //declaring a user object
  let hitesh: User = { name: "Hitesh", id: 334 };
  //union
  function getDbId(id: number | string) {
    //making some API calls
    console.log(`DB id is: ${id}`);
  }
  
  // Function calls with different types
  getDbId(101); 
  getDbId("abc"); 
  
  let score: number | string = "55";
  score = 55; 
  score = "Sixty"; 
  