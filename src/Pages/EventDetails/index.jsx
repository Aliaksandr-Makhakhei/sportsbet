import { React, useState, useEffect } from "react";
import eventsService from "../../services/getEvents";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./style.scss";

const EventDetails = () => {
  const [rateClass, setRateClass] = useState("");
  const [eventDetails, setEventDetails] = useState([]);
  const { game, firstTeam, secondTeam, date, firstTeamRate, secondTeamRate, drawRate } = eventDetails;
  const { eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bet = useSelector((state) => state.bet);
  
  useEffect(() => {
    getEvents();
  }, [eventId]);

  const getEvents = async () => {
    try {
      const data = await eventsService.loadEventDetails(eventId);
      setEventDetails(data);
    } catch (error) {
      alert("Update page");
    }
  };

  const onRateClick = (e, rate) => {
    setRateClass(e.target.className);
    dispatch({ type: "RATE", payload: rate });
  };

  const onSubmitClick = () => {
    dispatch({ type: "BET", payload: [firstTeam, secondTeam, bet] });
    navigate("/");
  };

  return (
    <div className="event__details">
      <div className="event__details-game">{game}</div>
      <div className="event__details-date">{date}</div>
      <div className="event__details-rates">
        <div className="event__details-teams">{firstTeam} - {secondTeam}</div>
        <div onClick={(e) => onRateClick(e, firstTeamRate)} className={rateClass === "event__details-rates-t1" ? "event__details-rates-choose": "event__details-rates-t1"}>{firstTeamRate}</div>
        <div onClick={(e) => onRateClick(e, drawRate)} className={rateClass === "event__details-rates-draw" ? "event__details-rates-choose" : "event__details-rates-draw"}>{drawRate}</div>
        <div onClick={(e) => onRateClick(e, secondTeamRate)} className={rateClass === "event__details-rates-t2" ? "event__details-rates-choose" : "event__details-rates-t2"}>{secondTeamRate}</div>
      </div>
      <button onClick={() => onSubmitClick()} className="event__details-submit">Place a bet</button>
    </div>
  );
};

export default EventDetails;