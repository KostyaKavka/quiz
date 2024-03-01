const View = require('./View');

class Controller {
  static async runQuiz() {
    await new View().show();
  }
}

Controller.runQuiz();
