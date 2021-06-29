import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import messages from "./messages";
import Input from "./Input";
const useStyles = makeStyles({
  home: {
    textAlign: "center",
    paddingTop: "100px"
  },
  header: {
    fontSize: "48px",
    fontWeight: "bold"
  }
});
const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div>
        <Input searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div />
    </>
  );
};

export default SearchContainer;
