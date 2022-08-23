import axios from "axios";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

function CreateTripPage() {
  const navigate = useNavigate();
  const goToCreatePage = () => {
    navigate("/criar-viagem");
  };
  const goToApplication = () => {
    navigate("/formulario");
  };
  const goToTripDetail = () => {
    navigate("/detalhes-da-viagem");
  };
  const goToListTrip = ()=> {
    navigate("/detalhes-da-viagem")
  }

  const {form, onChange, clear} = useForm({
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: "",
    });

    const body = {
      ...form
    } 

  const token = localStorage.getItem("token")
  const headers =        {
    headers: {
      auth: token
    }}

  const saveData = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-maciosek-jemison/trips`, body, headers

          
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    clear();
  };

  return (
    <>
      <div>
        <h1>Nome</h1>
        <form onSubmit={saveData}></form>
        <input
          type="name"
          name="name"
          placeholder="Insira seu nome"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          type="name"
          name="planet"
          placeholder="Insira o planeta de destino"
          value={form.planet}
          onChange={onChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Insira a data de partida"
          value={form.date}
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Insira a descrição"
          value={form.description}
          onChange={onChange}
          required
        />
        <input
          type="number"
          name="durationInDays"
          placeholder="Insira a quantidade de dias"
          value={form.durationInDays}
          onChange={onChange}
          required
        />
        <button>Enviar</button>
      </div>
      <button onClick={goToCreatePage}>Criar Pagina</button>
      <button onClick={goToApplication}>Página Aplicação</button>
      <button onClick={goToTripDetail}>Detalhes da Viagem</button>
      <button onClick={goToListTrip}>Detahes da viagem</button>
    </>
  );
}

export default CreateTripPage;
