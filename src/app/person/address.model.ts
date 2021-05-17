export class Address{
    public flat:string;
    public building:string;
    public street:string;
    public city:string;

    constructor(flat:string, building:string, street:string, city:string){
        this.flat = flat;
        this.building = building;
        this.street = street;
        this.city =city;
    }
}