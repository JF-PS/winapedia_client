import Axios from "axios";

const API = Axios.create({
  baseURL: `https://winapedia-api.herokuapp.com/figures`,
});

class FigureServices {
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

  update(formData, id) {
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

const figureServices = new FigureServices();
export default figureServices;
