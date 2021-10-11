import React from "react";


const About = () => {
    return (
      <div>
        <h3 style={{textAlign: "left", paddingLeft: "50px"}}>About:</h3>
        <p
        style={{
          
          textAlign: "center",
          fontSize: 21,
          padding: "30px",
          paddingRight: "50px",
          paddingLeft: "50px",
          marginLeft: "20px",
          borderStyle: "dashed",
          borderRadius: "25px",
          borderWidth: "2px",
          borderColor: "#3621ad",
          width: "500px",
          height: "200px"
          

        }}
      >
       <strong>Ticket Tracker</strong> was inspired by my own concert ticket collection from childhood.
       After every show I would retrieve my tickets and a keep them in a box with other trinkets and photos
       for safe keeping. Every so often I would take the box out to go through my tickets to relive the memories
       I had from each show and concert. Concerts have changed quite a bit since then which inspired me to bring this 
       concept into the new age of digital concerts and streaming. 


      </p>
        <img
          style={{ float: "right", padding: "50px", paddingLeft: "220px", marginTop: "-339px", height: "260px", width: "500px"}}
          src="https://media.giphy.com/media/cgW5iwX0e37qg/giphy.gif"
          alt="Jake from Adventure Time listening to a walkman"
          height="50px"
          width="50px"
        />
      </div>
    );
  };
export default About;