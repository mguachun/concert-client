import React from "react";


const About = () => {
    return (
      <div>
        <h3 style={{textAlign: "left", paddingLeft: "50px", fontSize: "25px"}}>About 🎫 :</h3>
        <p
        style={{
          
          textAlign: "center",
          fontSize: "21px",
          padding: "60px",
          paddingRight: "50px",
          paddingLeft: "50px",
          marginLeft: "200px",
          borderStyle: "dashed",
          borderRadius: "25px",
          borderWidth: "2px",
          borderColor: "rgb(34, 3, 31)",
          width: "700px",
          height: "600px"
          

        }}
      >
       <strong>Ticket Tracker</strong> was inspired by my own concert ticket collection from childhood.
       After every show I would retrieve my tickets and a keep them in a box with other trinkets and photos
       for safe keeping. Every so often I would take the box out to go through my tickets to relive the memories
       I had from each concert. Concerts have changed quite a bit since then but tickets continue to be a momento that encapsulates
       special moments in time. The digitization of tickets and concerts all together is what ultimately 
       inspired me to bring this concept into a new age. 
       <img
          style={{ float: "center", height: "260px", width: "500px", paddingTop: "50px"}}
          src="https://media.giphy.com/media/cgW5iwX0e37qg/giphy.gif"
          alt="Jake from Adventure Time listening to a walkman"
          height="50px"
          width="50px"
        />


      </p>
       
      </div>
    );
  };
export default About;