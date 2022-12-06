export class Product{
    private name: string;
    private price: number;

    public getEmail():string {
        return this.name
    }
    public setEmail(newName:string):void {
        this.name=newName
    }
    public getPrice():number {
        return this.price
    }
    public setprice(newPrice:string):void {
        this.name=newPrice
    }

    constructor(name: string, price:number) {
        this.name = name;
        this.price = price
    }


}