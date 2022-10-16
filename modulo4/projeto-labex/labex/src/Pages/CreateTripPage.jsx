import axios from "axios";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { urlCreateTrip } from "../url/url";

function CreateTripPage() {
  const navigate = useNavigate();
  const goToCreatePage = () => {
    navigate("/criar-viagem");
  };
  const goToApplication = () => {
    navigate("/formulario");
  };
  const goToListTrip = () => {
    navigate("/lista-de-viagens");
  };

  const [form, onChange, clear] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const saveData = (e) => {
    const body = {
      ...form,
    };
    e.preventDefault();
    axios
      .post(`${urlCreateTrip}darvas/trips`, body, headers)
      .then((response) => {
        alert("Viagem cadastrada");
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
        <form onSubmit={saveData}>
          <input
            name="name"
            placeholder="Insira seu nome"
            value={form.name}
            onChange={onChange}
            required
          />
          <input
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
          <button type="submit">Enviar</button>
        </form>
      </div>
      <button onClick={goToCreatePage}>Criar Pagina</button>
      <button onClick={goToApplication}>Página Aplicação</button>
      <button onClick={goToListTrip}>Lista de Viagens</button>
    </>
  );
}

export default CreateTripPage;
