const fs = require('fs/promises');

class Model {
  constructor(topic) {
    this.topic = topic;
  }

  async readFiles() {
    const files = await fs.readdir('./topics');

    const file = (
      await fs.readFile(`./topics/${files[this.topic - 1]}`, 'utf-8')
    )
      .trim()
      .split('\r\n')
      .filter((item) => item !== '');

    const questions = file.filter((item, index) => index % 2 === 0);
    const questionsAndAnswers = file
      .filter((item, index) => index % 2 !== 0)
      .map((item, index) => ({ question: questions[index], answer: item }));

    return questionsAndAnswers;
  }
}
