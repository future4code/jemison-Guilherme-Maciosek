import { CustomError } from './CustomError';

export class InvalidEmail extends CustomError {
    constructor(){
        super(400, "Email Inválido")
    }
}

export class InvalidPassword extends CustomError {
    constructor(){
        super(400, "Senha Inválida")
    }
}

export class InvalidName extends CustomError {
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidUser extends CustomError {
    constructor(){
        super(400, "Dados incompatíveis")
    }
}