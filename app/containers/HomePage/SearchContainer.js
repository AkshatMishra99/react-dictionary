import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { makeStyles } from "@material-ui/styles";
import ResultContainer from "./ResultContainer";
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
  // console.log(searchText);
  return (
    <>
      <div>
        <Input searchText={searchText} setSearchText={setSearchText} />
      </div>
      <ResultContainer text={searchText} />
    </>
  );
};

export default SearchContainer;
