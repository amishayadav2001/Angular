import {shape} from "./shape";

export class Rectangle extends shape{

    constructor(theX:number,theY:number, private _height:number,private _width:number){
        super(theX,theY);
    }

    public getInfo():string{
        // super.getInfo();
        // console.log("Height :"+ this._height);
        // console.log("Width :"+ this._width);
        
        
        return super.getInfo()+` height : ${this. _height} and width :${this. _width}`;
    }

    public calculateArea():number{
        return this._height*this._width;
    }
}