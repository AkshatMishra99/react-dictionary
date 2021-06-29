import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Meaning from "./Meaning";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    borderBottom: "1px solid rgba(74,74,74,.5)"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "7px"
  },
  h1: {
    fontSize: "30px",
    fontWeight: "800",
    padding: "5px",
    padding: "7px"
  },
  phonetics: {
    color: "#4A4A4A",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "7px",
    justifyContent: "flex-start"
  },
  play: {
    margin: "5px",
    padding: "7px"
  },
  meanings: {
    padding: "20px 10px"
  }
});
const ResultCard = ({ result }) => {
  const classes = useStyles();
  const playAudio = audio => {
    const myAudio = new Audio(audio);
    myAudio.play();
  };
  const meanings = result.meanings.map(meaning => (
    <Meaning meaning={meaning} />
  ));
  console.log(result.phonetics);
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.h1}>{result.word}</div>
        <div className={classes.phonetics}>
          [{result.phonetics.length > 0 && result.phonetics[0].text}]
          {result.phonetics.length > 0 && (
            <div className={classes.play}>
              <i
                class="fas fa-play"
                onClick={playAudio.bind(null, result.phonetics[0].audio)}
              />
            </div>
          )}
        </div>
      </div>
      <div className={classes.meanings}>{meanings}</div>
    </div>
  );
};

ResultCard.propTypes = {};

export default ResultCard;
