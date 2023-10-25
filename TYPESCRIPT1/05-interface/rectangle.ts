// import {shape} from "./shape";

// export class Rectangle implements shape{

//     constructor(theX:number,theY:number, private _height:number,private _width:number){
//         super(theX,theY);
//     }

//     public getInfo():string{
//         // super.getInfo();
//         // console.log("Height :"+ this._height);
//         // console.log("Width :"+ this._width);
        
        
//         return super.getInfo()+` height : ${this. _height} and width :${this. _width}`;
//     }

//     public calculateArea():number{
//         return this._height*this._width;
//     }
// }


import { shape } from "./shape";

export class Rectangle implements shape {

    constructor(private _x: number, private _y: number, private _height: number, private _width: number) {

    }

    public getInfo(): string {
        return `x=${this._x} and y=${this._y} height : ${this._height} and width : ${this._width}`;
    }

    public calculateArea(): number {
        return this._height * this._width;
    }
}
