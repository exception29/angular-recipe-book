// model is a class/blueprint for each recipe 

export class Fruit{
    public name:string;
    public description:string;
    public imagePath:string;


    constructor(name:string,imagePath:string){
        this.name = name;
        
        this.imagePath = imagePath;
    }
}