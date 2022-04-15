export const registerAccount = async (userInformation, errorInformation) => {
 let fetchResponse = null;
 // Check if userInformation is not empty
 if (Object.values(userInformation).every((values) => values !== "")) {
  //  Check if error object is empty once userinformation is filled up
  if (Object.values(errorInformation).every((values) => values === "")) {
   //Everything passed the test
   const { username, password } = userInformation;
   await fetch(`http://localhost:4000/api/register`, {
    headers: {
     "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ username, password }),
   })
    .then((res) => res.json())
    .then((data) => {
     if (data.status >= 200 && data.status <= 299) {
      //{ status: 200, message: "Account created successfully!" }
      fetchResponse = data;
     } else {
      throw data;
     }
    })
    .catch((error) => {
     //A user already has that username, please choose another one.
     fetchResponse = error;
    });
  } else {
   //User inputs have errors
   return (fetchResponse = { status: 400, message: "Some inputs have errors, please fix them up." });
  }
 } else {
  //User inputs are not not filled up
  return (fetchResponse = { status: 400, message: "Some inputs are empty, please fill them up." });
 }
 return fetchResponse;
};

export const loginAccount = async (userInformation, errorInformation) => {
 let fetchResponse = null;
 // Check if userInformation is not empty
 if (Object.values(userInformation).every((values) => values !== "")) {
  //  Check if error object is empty once userinformation is filled up
  if (Object.values(errorInformation).every((values) => values === "")) {
   //Everything passed the test
   const { username, password } = userInformation;
   await fetch(`http://localhost:4000/api/login`, {
    headers: {
     "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ username, password }),
   })
    .then((res) => res.json())
    .then((data) => {
     if (data.status >= 200 && data.status <= 299) {
      //{ status: 200, message: "Account created successfully!" }
      fetchResponse = data;
     } else {
      throw data;
     }
    })
    .catch((error) => {
     //A user already has that username, please choose another one.
     fetchResponse = error;
    });
  } else {
   //User inputs have errors
   return (fetchResponse = { status: 400, message: "Invalid user information" });
  }
 } else {
  //User inputs are not not fulled up
  return (fetchResponse = { status: 400, message: "User inputs are not not filled up" });
 }
 return fetchResponse;
};
