import React from "react";


const About = () => {
    return (
      <div>
        <h3 style={{textAlign: "left", paddingLeft: "50px", fontSize: "25px"}}>About:</h3>
        <p
        style={{
          color:"white",
          backgroundColor: "rgb(66, 68, 125)",
          textAlign: "center",
          fontSize: "21px",
          padding: "60px",
          paddingRight: "50px",
          paddingLeft: "50px",
          marginLeft: "200px",
          width: "800px",
          height: "750px",
          borderRadius: "15px"
          

        }}
      >
       <strong>Ticket Tracker</strong> was inspired by my own concert ticket collection from childhood.
       After every show I would retrieve my tickets and a keep them in a box with other trinkets and photos
       for safe keeping. Every so often I would take the box out to go through my tickets to relive the memories
       I had from each concert. Concerts have changed quite a bit since then but tickets continue to be a momento that encapsulates
       special moments in time. The digitization of tickets and concerts all together is what ultimately 
       inspired me to bring this concept into a new age.<br></br>
       <img
          style={{ float: "center", height: "400px", width: "500px", paddingTop: "50px", borderRadius: "50%"  }}
          src="https://media.giphy.com/media/J9dXe6GwvmJmU/giphy.gif"
          alt="Jake from Adventure Time listening to a walkman"
        
        />


      </p>
       
      </div>
    );
  };
export default About;