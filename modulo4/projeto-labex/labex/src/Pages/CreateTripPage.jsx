import axios from "axios";
import { urlCreateTrip } from "../url/url";
import { useForm } from "../hooks/useForm";


function CreateTripPage() {

  // const navigate = useNavigate()

  const [body, onChange, clear] = useForm({
    nome: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const saveData = (e) => {
    e.preventDefault();
    axios
      .post(`${urlCreateTrip}trips`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("deu erro");
      });
    clear();
  };
  return (
    <div>
      <h1>Nome</h1>
      <form onSubmit={saveData}></form>
      <input
        type="name"
        name="nome"
        placeholder="Insira seu nome"
        value={body.nome}
        onChange={onChange}
        required
      />
      <input
        type="name"
        name="planet"
        placeholder="Insira o planeta de destino"
        value={body.planet}
        onChange={onChange}
        required
      />
        <input
        type="date"
        name="data"
        placeholder="Insira a data de partida"
        value={body.date}
        onChange={onChange}
        required
      />
        <input
        type="text"
        name="description"
        placeholder="Insira a descrição"
        value={body.description}
        onChange={onChange}
        required
      />
        <input
        type="number"
        name="durationInDays"
        placeholder="Insira a quantidade de dias"
        value={body.durationInDays}
        onChange={onChange}
        required
      />
    <button>Enviar</button>  
    </div>
  );
}

export default CreateTripPage;
