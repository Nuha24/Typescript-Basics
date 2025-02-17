//<>
const Score: Array<number> = []
const Name: Array<string> = []

function identityOne(val: boolean | number): boolean | string | number{
    return val
}

function identityTwo(val: any): any{
    return val
}
function identityThree<Type>(val: Type): Type{ //return type same 
    return val
}

//function identityThree<"3">(val: "3"): "3"
identityThree("3")

function identityFour<T>(val: T): T{ //exact as Type
    return val
}

interface bottle{
    brand: string,
    type: number,
}
//identityFour<bottle>({})

function getSearchProducts<T>(products: T[]): T{
   //database operations
   const myIndex=5
    return products[myIndex]
}
//how to define a arrow function & definition <T>(): => {}
// , -> to ensure its not an ordinary syntax rather a syntax for generics
const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex=4
    return products[myIndex]
}
