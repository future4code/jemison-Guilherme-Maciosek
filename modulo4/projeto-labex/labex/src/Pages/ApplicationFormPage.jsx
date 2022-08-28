import React from "react";
import { useNavigate } from "react-router-dom";

function ApplicationFormPage() {
  const navigate = useNavigate();
  const goToCreatePage = () => {
    navigate("/criar-viagem");
  };

  return (
    <>
      <h1>Form Page</h1>
      <button onClick={goToCreatePage}>Criar Pagina</button>
    </>
  );
}

export default ApplicationFormPage;
