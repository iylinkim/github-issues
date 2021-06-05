import axios from "axios";

class Api {
  async getIssues() {
    const result = await axios({
      method: "get",
      url: "https://api.github.com/repos/rails/rails/issues",
    });

    return result.data;
  }
}

export default Api;
