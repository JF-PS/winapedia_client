import Axios from "axios";

const API = Axios.create({
  baseURL: `https://winapedia-api.herokuapp.com/articles`,
});

class ArticleServices {
  create(formData) {
    return new Promise((resolve, reject) => {
      API.post(`create/`, formData)
        .then((response) => {
          resolve(response);
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

const articleServices = new ArticleServices();
export default articleServices;
