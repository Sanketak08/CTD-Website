/* eslint-disable no-unused-vars */
import "./Events.css";
import Event from "./Event";
import Inquizitive from "./icons/inquizitive.png";
import NCC from "./icons/NCC.png";
import RC from "./icons/RC.png";
import NTH from "./icons/nth-logo.png";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/scrambleText.css";
import "../../styles.css";
import ScramblingText from "../../components/ScramblingText";

const Events = () => {
  const nccBasicInfo =
    "NCC is a platform where you can not only sharpen your problem solving ability but also showcase your programming skills.";
  const nthBasicInfo =
    "NTH is an online hunt played worldwide. Follow the trails of clues and piece them together to get to the puzzle.";

  const rc = {
    info: "Integer type questions which involve complex mathematical problems which are not easy to solve without coding. A 28-minute game for a person or a team of two people. Teams or players are allowed to use any IDE or software after the game has started. You will have 3 lifelines (description will be provided in the game itself). You will have two attempts to answer a particular question. In the first attempt, the marking scheme will be +4 0. In the second attempt, the marking scheme will be changed to +2  -1.",
  };
  const dataNCC = {
    info: "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one? National Coding Competition lets you test your coding skills with other coders. Sign Up to compete for the 'Overlord Coder' title and get a chance to experience real-world coding competition!",
    rules: [
      "The contest will contain 5-6 problems that need to be coded in C/C++/Python.",
      "It will be individual competition hence teaming up is strictly restricted. ",
      "- marking scheme - ",
      "The person who submits the most correct solutions will be considered WINNER.",
    ],
    contacts: ["Atharva Naphade: 9423754562", "Atharva Kulkarni: 9860429679"],
  };
  const dataNTH = {
    info: "Bored with the same regular classes? Want to deep dive into the world of ciphers and puzzles? NTH got you covered! Network Treasure Hunt is an online version of a treasure hunt but with more adventure and riddles!  Put on your thinking hats and join us in the event where LOGIC is all you can think of.",
    rules: [
      "All the puzzles will be displayed on nth.credenz.in",
      "Each puzzle leads to a unique keyword. This keyword will take you to the next question.",
      "The Contest will show a real-time leaderboard for all players.",
      "After the contest is concluded, the first person on the leaderboard will be declared as the winner.",
      "It is a solo contest, hence any activity with teaming up is strictly restricted.",
    ],
    contacts: ["Atharva Naphade: 9423754562", "Atharva Kulkarni: 9860429679"],
  };
  const dataQuiz = {
    info: "Inquisitive takes you on a journey where you get to test your general knowledge. It gives you the gist of all disciplines of study ranging from politics to history to science! So grab up this opportunity to compete against other explorers.",
    rules: [
      " Participants can register online on the official CTD website.",
      "Every participant can sign in only once. Once completed, you won't be able to sign in again.",
      "Each question has a set time after which you won't be able to answer nor come back to it later again.",
      "Participants can end the quiz any time using the 'End Test' button.",
      "Participants should not spell the answers incorrectly as they would be considered as wrong answers.",
    ],
    contacts: ["Atharva Naphade: 9423754562", "Atharva Kulkarni: 9860429679"],
  };
  const dataRC = {
    info: "The best algorithm is ten steps ahead of the second-best. So are you good enough to code the best one? National Coding Competition lets you test your coding skills with other coders. Sign Up to compete for the 'Overlord Coder' title and get a chance to experience real-world coding competition!",
    rules: [
      "The contest will contain 5-6 problems that need to be coded in C/C++/Python.",
      "It will be individual competition hence teaming up is strictly restricted. ",
      "- marking scheme - ",
      "The person who submits the most correct solutions will be considered WINNER.",
    ],
    contacts: ["Atharva Naphade: 9423754562", "Atharva Kulkarni: 9860429679"],
  };

  return (
    <div className="container-fluid body-ContactUs events">
      {/* <Container>
        <Row className="mb-5 d-flex justify-content-start no-gutters">
          <p
            className="h1 heading-wrapper"
            style={{ color: "#fff", fontWeight: 500 }}
          >
            <TextScramble text="Events" />
          </p>
        </Row>
      </Container> */}
      {/* <div className='heading-aboutUs display-3 mb-5 text-center'>Events</div> */}
      <Container className="container-upper-Events">
        <Row className="ml-5 mb-5 d-flex justify-content-start">
          <div
            className="h1 heading-wrapper"
            style={{ color: "#fff", fontWeight: 500 }}
          >
            <ScramblingText
              scrambleText={"Events"}
              mainContainer={"heading-wrapper"}
            />
          </div>
        </Row>
      </Container>
      <Row className="no-gutters">
        <Col lg={3} md={6} sm={12}>
          <Event info={dataRC} icon={RC} eventname="Reverse Coding" id={1} />
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Event
            info={dataNCC}
            icon={NCC}
            eventname="National Coding Contest"
            id={2}
          />
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Event
            info={dataQuiz}
            icon={Inquizitive}
            eventname="InQUIZitive"
            id={4}
          />
        </Col>
        <Col lg={3} md={6} sm={12}>
          <Event
            id={3}
            info={dataNTH}
            icon={NTH}
            eventname="Network Treasure Hunt"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Events;
