import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AdminHomePage from "./AdminHomePage";
import ApplicationFormPage from "./ApplicationFormPage";
import CreateTripPage from "./CreateTripPage";
import HomePage from "./HomePage";
import ListTripsPage from "./ListTripsPage";
import LoginPage from "./LoginPage";
import TripDetailsPage from "./TripDetailsPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="home" index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/formulario" element={<ApplicationFormPage />} />
                <Route path="/criar-viagem" element={<CreateTripPage />} />
                <Route path="/lista-de-viagens" element={<ListTripsPage />} />
                <Route path="/detalhes-da-viagem" element={<TripDetailsPage />} />
                <Route path="/admin" element={<AdminHomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router