function logValue(x: Date | string) 
{
    if (x instanceof Date)  //almost like TypeOf 
    // -> instanceof checks if it was an instance of some class or maybe something like that 
    // so here we checked wether the x is an instance od date or not
    {
      console.log(x.toUTCString()); //here ts knows x is a Date here
    } 
    else 
    {
      console.log(x.toUpperCase()); //and ts knows x is a string here
    }
}

//type Predicates
type Fish={swim: ()=> void};

type Bird={fly: ()=> void};

function isFish(pet: Fish | Bird)
{
   return (pet as Fish).swim !== undefined
   //pet is a Fish if it has a method of .swim not undefined then true
}

//function getFood(pet: Fish | Bird){
    function getFood(pet: Fish | Bird): pet is Fish{ 
        //has to be boolean so pet is Fish
    if (isFish(pet)){
        pet
        //return "it is fish food"
        return true
    }
    else{ 
    pet
   // return "It is a birds food"
   return false
    }
}
