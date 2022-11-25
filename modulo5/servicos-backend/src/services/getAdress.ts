import axios from "axios";

async function getAdress(cep: string) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return `${data.logradouro}, ${data.bairro}, ${data.cidade}, ${data.estado}`;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export default getAdress;
