let found : boolean = false;
let first_name : string = "Amisha";

let scores : number[] = [11,22,33,44,55];

console.log(found);

console.log(first_name);

scores.forEach(score=>{
    console.log(score); 
});

let sum:number=scores.reduce((acc,currentValue)=>{
    return acc + currentValue
},0);

let average = sum/5;
console.log(sum);
console.log("average : "+average);

let players : string[]=["Sachin", "Sehwag", "Dhoni"];

for (let player of players) {
    console.log(`${player}`); 
}




