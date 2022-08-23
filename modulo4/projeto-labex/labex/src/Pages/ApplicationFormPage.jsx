import React from "react";
import { useNavigate } from "react-router-dom";

function ApplicationFormPage() {
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

  return (
    <>
      <h1>Form Page</h1>
      <button onClick={goToCreatePage}>Criar Pagina</button>
      <button onClick={goToApplication}>Página Aplicação</button>
      <button onClick={goToTripDetail}>Detalhes da Viagem</button>
      <button onClick={goToListTrip}>Detahes da viagem</button>
    </>
  );
}

export default ApplicationFormPage;
