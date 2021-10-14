import React from "react";


const Home = () => {
    return (
      <div>
        <h3 style={{textAlign: "left", paddingLeft: "50px"}}>"<em>Tracking concerts and memories"</em></h3>
        <p
        style={{
          
          textAlign: "center",
          fontSize: 21,
          padding: "30px",
          paddingRight: "50px",
          paddingLeft: "20px",
          borderStyle: "dashed",
          borderRadius: "25px",
          borderWidth: "2px",
          borderColor: "#3621ad",
          marginLeft: "20px",
          marginRight: "20px"
    
        }}
      >
        <strong>Ticket Tracker</strong> is a single page application that helps you keep track of 
        your concerts and live shows. It allows you to view concerts you've seen in the past and logs shows you have
        planned for the future.

      </p>
        <img
          style={{ float: "left", padding: "10px", paddingLeft: "220px", marginTop: "-260px" }}
          src="https://media.giphy.com/media/MUFlTPzL3fBmwIPiTK/giphy.gif"
          alt="blinking ticket gif"
          height="50px"
          width="50px"
        />
      </div>
    );
  };
export default Home;