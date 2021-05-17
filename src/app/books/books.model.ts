// model is a class/blueprint for each recipe 

export class Books{
    public name:string;
    public description:string;
    public imagePath:string;


    constructor(name:string, desc:string, imagePath:string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}