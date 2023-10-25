class Customer3{
    
    constructor(private _firstName:string,private _lastName:string){
        
    }

    public setFirstName(firstName:string){
        this._firstName=firstName;
    }

    public setLastName(lastName:string){
        this._lastName=lastName;
    }

    public getFirstName():string{
        return this._firstName;
    }

    public getLastName():string{
        return this._lastName;
    }
}

let newCustomer3 = new Customer3("Amisha","yadav");

console.log(newCustomer3.getFirstName());
console.log(newCustomer3.getLastName());
