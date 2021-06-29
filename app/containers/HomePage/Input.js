import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "34px",
    fontWeight: "bold"
  }
});
const Input = ({ searchText, setSearchText }) => {
  const classes = useStyles();
  const onTextChange = e => {
    const val = e.target.value;
    setSearchText(val);
  };
  return (
    <div>
      <TextField
        className={classes.root}
        id="standard-search"
        label="Enter Your Text"
        value={searchText}
        type="search"
        onChange={onTextChange}
        color="secondary"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="fas fa-search" />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};

export default Input;
