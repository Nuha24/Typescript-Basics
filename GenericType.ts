//() input
function anotherFunction<T, U extends string>(valOne: T, valTwo: U): object{
 return{
    valOne,
    valTwo
 }
}
interface Database{
    connection: string,
    username: string,
    password: string

}
//function anotherFunction<T, U extends number> 
anotherFunction(3, "4") 
//if we use U extends number then it will show error when we use string value

function Function2<T, U extends Database>(valOne: T, valTwo: U): object{
    return{
       valOne,
       valTwo
    }
   }

   //Function2(3, {})

   //class type in generics
interface Quiz{
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string 
}

class sellable<T>{
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}
