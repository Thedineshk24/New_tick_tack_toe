import React, { useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, Toast, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
// always import your css after bootstrap or other css library
import "./App.css";

const itemArray = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  // reload game
  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  // check winner
  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }else if(itemArray[4] === itemArray[5] && itemArray[4] === [6] && itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[4]} wins`)
    }else if(itemArray[7] === itemArray[8] && itemArray[7] === itemArray[9] && itemArray[7] !== "empty"){
      setWinMessage(`${itemArray[7]} wins`)
    }else if(itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }else if(itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1] !== "empty"){
      setWinMessage(`${itemArray[1]} wins`)
    }else if(itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8] && itemArray[2] !== "empty"){
      setWinMessage(`${itemArray[2]} wins`)
    }else if(itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }else if(itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6] && itemArray[2] !== "empty"){
      setWinMessage(`${itemArray[2]} wins`)
    }
  };

  // for checking which place user clicked
  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    // checking winner
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
        {winMessage ? (
          <div className="mb-2 mt-2">
            <h1 className="text-success text-uppercase text-center">
              {winMessage}
            </h1>
            <Button color="success"
             block
             onClick={reloadGame}>
               reload the Game
             </Button>
          </div>
        ) : (
          <h1 className="text-center text-warning">
            {isCross ? "cross" : "circle"} turns
          </h1>
        )}
          <div className="grid">
            {itemArray.map((item, index) => {
              return (
                <Card color="warning" onClick={() => changeItem(index)} key={index}>
                  <CardBody className="box">
                    <Icon name={item}  />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
