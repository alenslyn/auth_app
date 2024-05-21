import axios from "axios";

const API_KEY = "AIzaSyAME42w2Q0ledrN04mgcGoGB5XiTN_5URQ";

export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
