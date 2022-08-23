import React from "react";
import { useRequestData } from "../hooks/useRequestData"
import { urlTrips } from "../url/url";
import { useNavigate } from "react-router-dom";

function HomePage () {

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

    const [data, loadingViagens, errorViagens] = useRequestData(`${urlTrips}guilherme-maciosek-jemison/trips`)
    
    const displayList = 
    data && data.trips && data.trips.map((trips) => {
            return <li key={trips.id}>{trips.name}</li>
        })

       
    return (
        <div>
            {loadingViagens && <p>Carregando...</p>}
            {!loadingViagens && errorViagens && <p>Ocorreu um erro</p>}
            {!loadingViagens && data && data.length > 0 && displayList}
            {!loadingViagens && data && data.length === 0 && (
                <p>Não há viagens</p>
            )}

        </div>

        
    )
}

export default HomePage