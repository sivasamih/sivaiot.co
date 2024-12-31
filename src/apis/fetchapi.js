export const Fetch = async (
  Url,
  params,
  headers = {
    "Content-Type": "application/json",
  }
) => {
  return await fetch(Url, {
    method: "post",
    headers: headers,
    body: JSON.stringify(params),
    cache: 'no-store'
  });
};
