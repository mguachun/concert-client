import React from "react";
import HowTo from "../components/HowTo";
import TicketDecor from "../components/TicketDecor";


const Home = () => {
    return (
      <div className="ticket">
        <h3 style={{textAlign: "left", paddingLeft: "50px"}}>"<em>Tracking concerts and memories"</em></h3>
        <p
        style={{
          
          textAlign: "center",
          fontSize: 21,
          padding: "30px",
          paddingRight: "20px",
          paddingLeft: "20px",
          borderStyle: "dashed",
          borderRadius: "25px",
          borderWidth: "2px",
          borderColor: "rgb(34, 3, 31)",
          marginLeft: "20px",
          marginRight: "20px",
  
        }}
      >
        <strong>Ticket Tracker</strong> is an application that helps you keep track of 
        your concerts and live shows. It allows you to view concerts you've seen in the past and logs shows you have
        planned for the future. 
        <span className="how-to"> <HowTo /></span>
      </p> 
      <div><TicketDecor /></div>
      </div>
    );
  };
export default Home;