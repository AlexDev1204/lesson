export default class Api {
  static url = "https://jsonplaceholder.typicode.com";

  static getUsers() {
    return new Promise(async (res, rej) => {
      const response = await fetch(`${Api.url}/users`);

      if (response.status === 200) {
        res(await response.json());
      } else {
        rej(await response.json());
      }
    });
  }

  static getPosts() {
    return new Promise(async (res, rej) => {
      const response = await fetch(`${Api.url}/posts`);

      if (response.status === 200) {
        res(await response.json());
      } else {
        rej(await response.json());
      }
    });
  }

  static getComments() {
    return new Promise(async (res, rej) => {
      const response = await fetch(`${Api.url}/comments`);

      if (response.status === 200) {
        res(await response.json());
      } else {
        rej(await response.json());
      }
    });
  }

  static getTodos() {
    return new Promise(async (res, rej) => {
      const response = await fetch(`${Api.url}/todos`);

      if (response.status === 200) {
        res(await response.json());
      } else {
        rej(await response.json());
      }
    });
  }

  static getComment(postId) {
    return new Promise(async (res, rej) => {
      const response = await fetch(`${Api.url}/comments?postId=${postId}`);

      if (response.status === 200) {
        res(await response.json());
      } else {
        rej(await response.json());
      }
    });
  }
}
