import axios from "axios";

const service = axios.create({
  baseURL: "https://ironhack-pokeapi.herokuapp.com/pokemon"
});

export default {
  service: service,
  getAll: () => {
    return service.get("/");
  },
  
  getOne: id => {
    return service.get("/" + id);
  }
};
