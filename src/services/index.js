const RSS2JSON_URL = "https://api.rss2json.com/v1/api.json?rss_url";

export const fetchFeed = async (URL) => {
  await fetch(`${RSS2JSON_URL}=${URL}`).then((res) => res.json());
};
