import React from "react";

const JumboTron = props  => 
<div className="jummbotron">{props.children}</div>;
 <div className="jumbotron jumbotron-fluid ">
  <div className="container text-center">
    <h1 className="display-4">Clicky Game!</h1>
    <h2 className="lead">Click on an image to earn points, but don't click on any more than once!</h2>
  </div>
</div> 


export default JumboTron;