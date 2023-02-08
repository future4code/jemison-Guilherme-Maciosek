
export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: ROLE
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string
   role: ROLE
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   nickname: string,
   id: string,
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}

export enum ROLE {
   ADMIN="ADMIN",
   NORMAL="NORMAL"
}

export interface AuthenticationData {
   id: string,
   role: ROLE

}