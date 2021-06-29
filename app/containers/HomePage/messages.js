/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from "react-intl";

export const scope = "app.containers.HomePage";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "React Dictionary"
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: "The word you searched for -"
  },
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: "Meaning not found!"
  }
});
