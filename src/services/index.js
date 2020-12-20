const RSS2JSON_URL = "https://api.rss2json.com/v1/api.json?rss_url";

//RSS2JSON provides a simplified way to generate JSON from XML without the need of an external library
export const fetchFeed = async (URL) => {
  const result = await fetch(`${RSS2JSON_URL}=${URL}`).then((res) =>
    res.json()
  );

  return result;
};
