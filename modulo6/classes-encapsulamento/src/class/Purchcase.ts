export class Purchase{
    private userId: string;
    private productId: number;
    private quantity: number;
    private totalPrice: number;


    public getUserId():string {
        return this.userId
    }
    public getPproductId():number {
        return this.productId
    }
    public setQuantify(newquantity:number):void {
        this.quantity=newquantity
    }
    public getQuantity():number {
        return this.quantity
    }
    public getTotalPrice():number {
        return this.totalPrice
    }

    constructor(userId: string, productId:number, quantity:number, totalPrice:number) {
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice 
    }


}