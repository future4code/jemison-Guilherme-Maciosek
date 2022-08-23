import React from "react";
import { useNavigate } from "react-router-dom";

function TripDetailsPage() {
  const navigate = useNavigate();
  const goToCreatePage = () => {
    navigate("/criar-viagem");
  };
  const goToApplication = () => {
    navigate("/formulario");
  };
  const goToListTrip = ()=> {
    navigate("/detalhes-da-viagem")
  }

  return (
    <>
      <h1>Detail Page</h1>
      <button onClick={goToCreatePage}>Criar Pagina</button>
      <button onClick={goToApplication}>Página Aplicação</button>
      <button onClick={goToListTrip}>Detahes da viagem</button>
    </>
  );
}

export default TripDetailsPage;
