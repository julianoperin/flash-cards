import React, { Component } from "react";
import MultiCard from "./MultiCard";
import RandomWeighted from "./RandomWeighted";
import RegularCard from "./RegularCard";

class FlashCard extends Component {
  render() {
    return (
      <div>
        <div className="row align-items-center card-holder">
          <div className="col-sm-6 offset-sm-3 card mb-3">
            <RandomWeighted />
          </div>
        </div>
      </div>
    );
  }
}

export default FlashCard;
