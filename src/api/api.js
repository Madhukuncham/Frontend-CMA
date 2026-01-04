// export const apiRequest = async (url, method = "GET", body) => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`http://localhost:3001/api${url}`, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//       ...(token && { Authorization: `Bearer ${token}` }),
//     },
//     body: body ? JSON.stringify(body) : null,
//   });

//   if (!res.ok) {
//     throw new Error("API error");
//   }

//   return res.json();
// };


export const apiRequest = async (url, method = "GET", body = null) => {
  const token = localStorage.getItem("token");

  const options = {
    method,
    headers: {},
  };

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const res = await fetch(`http://localhost:3001/api${url}`, options);

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
};
