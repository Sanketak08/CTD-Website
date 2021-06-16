import { Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../axios";
import DetailsModal from "./DetailsModal";

const Event = (props) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.id);

    axiosInstance
      .post("/place_order/", {
        eventID: props.id,
      })
      .then((res) => {
        console.log(res.data.detail);
        alert(res.data.detail);
        history.push("/events");
        console.log(res.status);
      });
  };

  //   function flip(event) {
  //     var element = event.currentTarget;
  //     if (element.className === "card") {
  //       if (element.style.transform === "rotateY(180deg)") {
  //         element.style.transform = "rotateY(0deg)";
  //       } else {
  //         element.style.transform = "rotateY(180deg)";
  //       }
  //     }
  //   }

  return (
    <div className="container1  d-flex justify-content-center mt-res">
      <div className="card1">
        <div className="imgBx">
          <img alt={props.eventName} src={props.icon} />
        </div>
        <div className="contentBx">
          <h3>{props.name}</h3>

          <Button
            className="mt-3 mb-3 pl-4 pr-4"
            onClick={() => setModalShow(true)}
            variant="outline-light"
          >
            Details
          </Button>
          <DetailsModal
            eventName={props.eventName}
            logo={props.icon}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <div>
            <Button variant="light" onClick={handleSubmit}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

//           <Button
//             className="buttons"
//             variant="outline-light"
//             onClick={handleSubmit}
//           >
