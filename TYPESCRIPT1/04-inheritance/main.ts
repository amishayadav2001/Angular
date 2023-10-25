import { shape} from "./shape";
import { Rectangle} from "./rectangle";


let rectangle = new Rectangle(11,22,33,44);

let shapes :shape[]=[];

shapes.push(rectangle);

shapes.forEach(s => { 
    console.log("Info : " + s.getInfo());
    console.log("Area : " + s.calculateArea());
    
    console.log("--------------");   
})