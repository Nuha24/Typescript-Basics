// class TakePhoto {
  //constructor(
   // public cameraMode: string,
   // public filter: string
  //) {}
//}
abstract class TakePhoto {
    constructor(
      public cameraMode: string,
      public filter: string,
      public burst: number
    ) {}
  //method definition
 abstract getSepia(): void 
 getReelTime(): number{
  //some complex calculation
  return 8
 }
  //if we write abstract before any method / feature and can have overriding
  }
  
//const hc = new TakePhoto("test", "Test"); 
// abstract classes cannot create object of their own
//but they help you define the classes who are inhereting them
//in the correct way we have to extend the abstract class 
// --> extend is like having a inheritance here
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string, 
    public filter: string, 
    public burst: number) {
    super(cameraMode, filter, burst); //must use super
  }
  getSepia() : void{
    console.log("Sepia");
  }
}

const nh = new Instagram("testing", "testing", 7)
