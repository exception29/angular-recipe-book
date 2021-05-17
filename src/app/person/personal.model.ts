import { Address } from "./address.model";

export class Personal{
    public name:string;
    public age:number;
    public dob:string;
    public address:Address;

    constructor(name:string, age:number, dob:string, address:Address){
        this.name = name;
        this.age  =age;
        this.dob = dob;
        this.address = address;

    }
} 