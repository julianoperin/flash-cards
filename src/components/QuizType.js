import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faFont,
  faFileAlt,
  faDice
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// $ npm i --save @fortawesome/fontawesome-svg-core
// $ npm i --save @fortawesome/free-solid-svg-icons
// $ npm i --save @fortawesome/react-fontawesome
library.add(faDumbbell);
library.add(faFont);
library.add(faFileAlt);
library.add(faDice);

function QuizType(props) {
  return (
    <li className="col-sm-3 text-center">
      <div
        className="nav-card"
        onClick={() => {
          props.userChoice(props.quizType);
        }}
      >
        <FontAwesomeIcon icon={props.icon} size="4x" />
        <span className="pt-4 ">{props.quizType}</span>
      </div>
    </li>
  );
}

export default QuizType;
