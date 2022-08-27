import axios from "axios";
import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ulrTripsDetails } from "../url/url";
import { useRequestData } from "../hooks/useRequestData";
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
  const goToListTrip = () => {
    navigate("/detalhes-da-viagem");
  };

  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    }
  }
  const {searchParams, setSearchParams} = useSearchParams ()
  const search = useLocation ().search

  const listOfTrips = (id) => {


    axios.get(
      `${ulrTripsDetails}darvas/trip/${id}`, headers
    )
    .then((response) =>{
      console.log(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  };

  useEffect(() => {
    const actualId = new URLSearchParams(search).get("id")
    console.log(actualId)
    listOfTrips(actualId)
  }, [])
  
  
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
