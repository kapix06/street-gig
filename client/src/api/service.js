// src/api/service.js
 
import axios from "axios";
 
const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "https://streetgig.herokuapp.com/api"
  // withCredentials: true // => you might need this option if using cookies and sessions
});
 
const errorHandler = err => {
  throw err;
};
 
const getEvents = () => {
  return service
    .get("/events")
    .then((res) => res.data)
    .catch(errorHandler);
};
 
const uploadImage = (file) => {
  return service
    .post("/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};
 
const addEvent = (newEvent) => {
  return service
    .post("/events", newEvent)
    .then(res => res.data)
    .catch(errorHandler);
};
 
export default {
  service,
  getEvents,
  uploadImage,
  addEvent,
};