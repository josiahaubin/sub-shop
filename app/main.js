import SandwichController from "../controllers/SandwichController.js";


class App {
  constructor() {
    this.controller = {
      sandwichController: new SandwichController()
    }
  }
}

window["app"] = new App()