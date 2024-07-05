import React, { useEffect, useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "./App.css";
import CardContainer from "./Components/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import demoFetchData from "./Components/data.json";

function App() {
  const [fetchedData, setFetchedData] = useState(demoFetchData);
  const [today, setToday] = useState(true);
  const FetchApiData = async () => {
    try {
      const req = await fetch("https://www.mohfw.gov.in/data/datanew.json", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const res = await req.json();
      setFetchedData(res);
    } catch (error) {
      console.log(error);
    }
  };

  function ranColor() {
    let colores = [
      "#0074D9",
      "#B10DC9",
      "#FF851B",
      "#FFDC00",
      "#01FF70",
      "#7FDBFF",
      "#FF4136",
      "#fff",
    ];
    return colores[Math.floor(Math.random() * 8)];
  }

  const ChangeGlobal = () => {
    today ? setToday(false) : setToday(true);
  };

  // useEffect(() => {
  //   FetchApiData();
  // }, []);

  useEffect(() => {
    console.log("fetchedData => ", fetchedData);
  }, [fetchedData]);

  return (
    <>
      <h1 align="center">Corona Live Tracker</h1>
      <div align="center">
        <ButtonGroup
          sx={{ bgcolor: "rgba(255,255,255,0.7)" }}
          size="small"
          color="secondary"
        >
          <Button
            onClick={today ? "" : ChangeGlobal}
            variant={today ? "contained" : "outlined"}
          >
            Today Cases
          </Button>
          <Button
            onClick={today ? ChangeGlobal : ""}
            variant={today ? "outlined" : "contained"}
          >
            Total Cases
          </Button>
        </ButtonGroup>
      </div>
      <Grid container spacing={2}>
        {fetchedData.map((value) => {
          return (
            <Stack
              sx={{
                margin: 0,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 2,
              }}
              direction="row"
              item
              key={value.sno}
            >
              <CardContainer
                color={ranColor}
                today={today}
                className={`card-${value.sno}`}
                body={value}
              />
            </Stack>
          );
        })}
      </Grid>
    </>
  );
}

export default App;
