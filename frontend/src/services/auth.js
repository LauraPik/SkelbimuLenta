export const login = async (loginData) => {
    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      return await res.json();
    } catch (err) {
      console.log(err.message);
    }
  };

  export const register = async (RegisterData) => {
    try {
      const res = await fetch('http://localhost:8000/api/auth/signup', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(RegisterData),
      });
      return await res.json();
    } catch (err) {
      console.log(err.message);
    }
  };



 