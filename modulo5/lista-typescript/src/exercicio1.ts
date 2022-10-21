// class dadosEntrada {
//     name: string;
//     date: string;

//     constructor(name: string, date: string) {
//         this.name = name
//         this.date = date
//     }
// }

function Cadastro (name:string, data:string): string {
    var [day, month, year] = data.split("/")    
    return `Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}` 
}