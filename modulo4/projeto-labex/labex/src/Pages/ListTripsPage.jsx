import React, { useState } from "react";
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
      const goToTripDetail = (id) => {
        navigate(`/detalhes-da-viagem?id=${id}`);
      };
      const [list, setList] = useState ([])

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        axios.get(
            (`${urlTrips}darvas/trips`),
            {
                headers: {
                    auth: token
                }
            }).then((response) => {
                setList(response.data.trips)
            }).catch((error) => {
                console.log("deu erro", error.response)
            })
    }, [])
    return(
        <>
            <h1>MyTrips</h1>
            <button onClick={goToCreatePage}>Ir para Criar Viagem</button>
            <button onClick={goToApplication}>Ir para Formulário</button>
            <br />
            <div>
                {list.map((item, index)=>(
                    <div key={index}>
                        <span>
                        {item.description}
                        </span>
                        <button onClick={()=>goToTripDetail(item.id)}>Ir para Detalhes da Viagem</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListTripsPage