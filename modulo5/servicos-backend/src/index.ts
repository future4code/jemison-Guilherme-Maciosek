import app from "./app";
import getNewAdress from "./endpoints/example";

app.post("/users/adress", getNewAdress);