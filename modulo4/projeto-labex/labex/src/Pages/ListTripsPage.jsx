import React from "react";
import axios from "axios";
import { urlTrips } from "../url/url";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ListTripsPage () {

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


    useEffect(() => {
        const token = localStorage.getItem("token");
        
        axios.get(
            (`${urlTrips}trips`),
            {
                headers: {
                    auth: token
                }
            }).then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log("deu erro", error.response)
            })
    }, [])
    return(
        <>
            <h1>MyTrips</h1>
            <button onClick={goToCreatePage}>Ir para Criar Viagem</button>
            <button onClick={goToApplication}>Ir para Formulário</button>
            <button onClick={goToTripDetail}>Ir para Detalhes da Viagem</button>
            <button onClick={goToListTrip}>Detahes da viagem</button>
        </>
    )
}

export default ListTripsPage