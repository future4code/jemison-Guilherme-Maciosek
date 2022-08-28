import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ulrTripsDetails, urlDelteTrip } from "../url/url";
import { useEffect } from "react";
import { useState } from "react";

function TripDetailsPage() {
  const navigate = useNavigate();
  const goToCreatePage = () => {
    navigate("/criar-viagem");
  };
  const goToApplication = () => {
    navigate("/formulario");
  };
  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const search = useLocation().search;

  const [listDetail, setListDetail] = useState([]);

  function delTrip(id) {
    axios
      .delete(`${urlDelteTrip}darvas/trips/${id}`, headers)
      .then(() => {
        alert("Viagem excluida");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const listOfTrips = (id) => {
    axios
      .get(`${ulrTripsDetails}darvas/trip/${id}`, headers)

      .then((response) => {
        setListDetail(response.data.trip);
        console.log(response.data.trip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const actualId = new URLSearchParams(search).get("id");
    listOfTrips(actualId);
  }, []);

  return (
    <>
      <div>
        <h1>{listDetail.name}</h1>
        <h1>{listDetail.planet}</h1>
        <h1>{listDetail.date}</h1>
        <h1>{listDetail.description}</h1>
        <h1>{listDetail.durationInDays}</h1>
        <button onClick={delTrip}>Deletar</button>
      </div>
      <h1>Detail Page</h1>
      <button onClick={goToCreatePage}>Criar Pagina</button>
      <button onClick={goToApplication}>Página Aplicação</button>
    </>
  );
}

export default TripDetailsPage;
