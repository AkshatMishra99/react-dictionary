import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles({
  root: { padding: "15px" },
  heading: {
    color: "rgb(74,74,74)",
    fontWeight: "600",
    marginBottom: "10px",
    textTransform: "capitalize"
  },
  definitions: {
    padding: "20px"
  }
});
const Meaning = ({ meaning }) => {
  const classes = useStyles();
  const definitions = meaning.definitions.map((definition, index) => (
    <div>
      {index + 1}. {definition.definition}
    </div>
  ));
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <span>{meaning.partOfSpeech}</span>
      </div>
      <div className={classes.definitions}>{definitions}</div>
    </div>
  );
};

export default Meaning;
