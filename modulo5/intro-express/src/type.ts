export type User = {
    name: string,
    username: string,
    email: string,
    adress: Adress[]
}

export type Adress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo[]
}

export type Geo = {
    lat: number,
    lng: number,
 }

 export type PersonalPhoneWebCompany = {
    phone: number,
    website: number,
    company: Company[]
 }

 export type Company= {
    name: string;
    catchPhrase: string;
    bs: string
 }

