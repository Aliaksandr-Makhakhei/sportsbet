import api from "../configs/api";

const loadEvents = async () => {
  const response = await api.get("/events");
  return response.data;
};

const loadEventDetails = async (eventId) => {
  const response = await api.get(`/events/${eventId}`);
  return response.data;
};

const exportObject = { loadEvents, loadEventDetails };

export default exportObject;