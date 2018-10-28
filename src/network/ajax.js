import axios from 'axios';

export default class HTTPMethods {
  BASE_URL = 'https://hooks.slack.com/services/{YOUR_SLACK_TOKEN}';

  constructor(message) {
    this.message = message;
  }
  postAjax() {
    const options = {
      method: 'post',
      baseURL: this.BASE_URL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      data: `payload={"text": "${this.message}"}`
    };
    return axios.request(options);
  }
}
