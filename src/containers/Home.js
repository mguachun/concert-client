import React from "react";


const Home = () => {
    return (
      <div>
        <h3 style={{textAlign: "left", paddingLeft: "50px"}}>Home:</h3>
        <p
        style={{
          textAlign: "justify",
          fontSize: 20,
          fontFamily: "serif",
          fontStyle: "oblique",
          padding: "50px",
          paddingRight: "300px",
          paddingLeft: "20px"
        }}
      >
        Ticket Tracker is a single page application that helps you keep track of 
        your concerts and live shows. It allows you to view concerts you've seen in the past and logs shows you have
        planned for the future.

      </p>
        <img
          style={{ float: "left", padding: "10px", paddingLeft: "220px", marginTop: "-280px" }}
          src="https://media.giphy.com/media/MUFlTPzL3fBmwIPiTK/giphy.gif"
          height="50px"
          width="50px"
        />
      </div>
    );
  };
export default Home;