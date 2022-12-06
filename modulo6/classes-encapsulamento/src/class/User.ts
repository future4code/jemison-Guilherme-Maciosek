export class User{
    private email: string;
    private password: string;

    public getEmail():string {
        return this.email
    }
    public setEmail(newEmail:string):void {
        this.email=newEmail
    }
    public getPassword():string {
        return this.password
    }
    public setPassword(newPassword:string):void {
        this.email=newPassword
    }

    constructor(email: string, password:string) {
        this.email = email;
        this.password = password
    }


}