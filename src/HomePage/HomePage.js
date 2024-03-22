import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import slika from "../Image/tree.jpg";
import "./HomePage.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const HomePage = () => {
  const navigate = useNavigate();
  const [brojSlova, setBrojSlova] = useState(0);
  const [nizBrojeva, setNizBrojeva] = useState(
    localStorage
      .getItem("nizBrojeva")
      ?.split(",")
      .map((p) => parseInt(p)) || []
  );

  const goToInfoPage = () => {
    navigate("/infoPage");
  };

  const generisiBrojeve = () => {
    nizBrojeva.length = 0; 

   
    if (brojSlova !== "") {
      for (let i = 0; i < brojSlova; i++) {
        nizBrojeva.push(Math.floor(Math.random() * 100));

        setNizBrojeva([...nizBrojeva]);
      }
    } else {
      setNizBrojeva([...[]]);
    }

    localStorage.setItem("nizBrojeva", nizBrojeva);
  };

  return (
    <>
      <div className="DivImgBg">
        <img src={slika} className="divImg" onClick={goToInfoPage} />
        <h1 className="h1tekst"> Petar Mancic</h1>
      </div>

      <div className="underImg">
        <div className="leftSide">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="rightSide">
          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            onClick={generisiBrojeve}
          >
            {" "}
            Generisi niz brojeva
          </Button>
          <TextField
            id="standard-basic"
            label="Unesite broj "
            variant="standard"
            type="number"
            onChange={(event) => setBrojSlova(event.target.value)}
          />

          <ul>
            {nizBrojeva.map((broj, index) => (
              <li className="LiBrojevi" key={index}>
                {broj}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
