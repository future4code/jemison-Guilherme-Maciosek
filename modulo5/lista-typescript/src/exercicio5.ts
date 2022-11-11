type cadastro = {
    name: string;
    email: string;
    role: string;
}

const base:cadastro[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function retornaEmail (baseClientes:cadastro[]):cadastro[] {
    const extraiEmail = baseClientes.filter((cadastro) => {
        return cadastro.email
    })
    return extraiEmail
}