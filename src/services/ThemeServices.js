import Axios from "axios";

const API = Axios.create({
  baseURL: `https://winapedia-api.herokuapp.com/themes`,
});

class ThemeServices {
  create(formData) {
    return new Promise((resolve, reject) => {
      API.post(`create`, formData)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getTheme(id) {
    return new Promise((resolve, reject) => {
      API.get(`reade/${id}`)
        .then((theme) => {
          resolve(theme);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getAllTheme() {
    return new Promise((resolve, reject) => {
      API.get(`reade`)
        .then((themes) => {
          resolve(themes);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  update(id, formData) {
    return new Promise((resolve, reject) => {
      API.put(`update/${id}`, formData)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      API.delete(`delete/${id}`)
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
