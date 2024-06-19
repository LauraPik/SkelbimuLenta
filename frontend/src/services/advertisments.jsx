
export const getAllAdds = async (token) => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/add", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: "Bearer " + token,
        },
      });
      return await res.json();
    } catch (err) {
      console.log(err.message);
    }
  };