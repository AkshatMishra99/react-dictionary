const getUrl = (language, word) =>
  `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`;
export default getUrl;
// r = requests.get(url, (headers = { app_id: app_id, app_key: app_key }))
