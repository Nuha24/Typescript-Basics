//ENUMS -> define funct , const, any string 
// suppose in a plane ticket booking 3 aeroplane seat
//const aisle = 0
//const middle = 1
//const windoww = 2
//if(seat === aisle){}

//in enums first var is default as 0, then increement of 1, 
// you can also set it but next will be as the same increement 1 of that number... 
const enum SeatChoice{  //use const before enum to avoid long code
    aisle,
    middle,
    windoww,
    fourth
}

const hcSeat = SeatChoice.aisle