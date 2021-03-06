import axios from "axios";

class Api {
  async getIssues(pageNum) {
    const result = await axios({
      method: "GET",
      url: `https://api.github.com/repos/angular/angular-cli/issues?state=open&sort=comments&page=${pageNum}`,
      header: "Accept:application/vnd.github.v3+json",
    });

    return result.data;
  }
}

export default Api;
