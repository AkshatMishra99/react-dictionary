import { makeStyles } from "@material-ui/styles";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import React, { useEffect, useState } from "react";
import ResultCard from "./Results/ResultCard";
import axios from "axios";
import getUrl from "./API";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "left",
    backgroundColor: "#eeeeee",
    padding: "50px",
    width: "80%",
    margin: "20px auto"
  },
  header: {
    fontWeight: "800",
    fontSize: "29px"
  },
  errorMessage: {}
});
const ResultContainer = ({ text }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  useEffect(() => {
    const getSearchedText = async () => {
      setIsLoading(true);
      const url = getUrl("en_US", text);
      const data = await axios.get(url);
      console.log(data);
      if (data.status === 200) {
        setResult(data.data);
      } else setResult(null);
      setIsLoading(false);
    };
    getSearchedText().catch(err => {
      console.log(err);
      setResult(null);
      setIsLoading(false);
    });
  }, [text]);
  const content = result
    ? result.map(word => <ResultCard result={word} />)
    : null;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {isLoading && (
        <div className="spinner-grow text-success">
          {/* <i class="fa fa-spinner fa-pulse" /> */}
        </div>
      )}
      {!isLoading && result && content}
      {!isLoading && !result && text && (
        <FormattedMessage {...messages.notFound} />
      )}
    </div>
  );
};

export default ResultContainer;
