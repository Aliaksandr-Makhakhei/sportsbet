import { React, useEffect, useState } from "react";
import eventsService from "../../services/getEvents";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";

const Events = () => {
  const [events, setEvents] = useState([]);
  const game = useSelector((state) => state.game);
  const [firstTeam, secondTeam] = game;
  const bet = useSelector((state) => state.bet);
  const dispatch = useDispatch();
  const url = useLocation();

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "RATE", payload: "" });
    }, 10000);
  }, [bet]);

  async function getEvents() {
    try {
      const data = await eventsService.loadEvents();
      setEvents(data);
    } catch (error) {
      alert("Update page");
    }
  }

  const allEvents = events.map(item => {
    return (
      <Link to={`${url.pathname}event/${item.id}`} key={item.id}>
        <div className="event">
          <div className="event__game">{item.game}</div>
          <div className="event__teams">{item.firstTeam} - {item.secondTeam}</div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className={bet === "" ? "event__bet" : "event__bet-visible"}>
        <div className="event__bet-teams">{firstTeam} - {secondTeam}</div>
        <div className="event__bet-rate">Your bet - {bet}</div>
      </div>
      {allEvents}
    </>
  );
};

export default Events;