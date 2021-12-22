import Axios from "axios";

const API = Axios.create({
  baseURL: `https://winapedia-api.herokuapp.com/users`,
});

class ThemeServices {
  signIn(formData) {
    console.log(formData);
    return new Promise((resolve, reject) => {
      API.post(`signin`, formData)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

const themeServices = new ThemeServices();
export default themeServices;
