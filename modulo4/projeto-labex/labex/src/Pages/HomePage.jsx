import React from "react";
import { useRequestData } from "../hooks/useRequestData";
import { urlTrips } from "../url/url";


function HomePage() {

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const { data, loadingViagens, errorViagens } = useRequestData(
    `${urlTrips}darvas/trips`,
    headers
  );

  const displayList =
    data &&
    data.trip &&
    data.trip.map((trip, id) => {
      return (
        <li key={id}>
          <h1>{data.trip.name}</h1>
          <h1>{trip.name}</h1>
        </li>
      );
    });

  return (
    <>
      <div>
        {loadingViagens && <p>Carregando...</p>}
        {!loadingViagens && errorViagens && <p>Ocorreu um erro</p>}
        {!loadingViagens && data && data.length > 0 && displayList}
        {!loadingViagens && data && data.length === 0 && <p>Não há viagens</p>}
      </div>
    </>
  );
}

export default HomePage;

// params = useParams()
