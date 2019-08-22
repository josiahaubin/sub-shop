import SandwichController from "../controllers/SandwichController.js";


class App {
  constructor() {
    this.controllers = {
      sandwichController: new SandwichController()
    }
  }
}

window["app"] = new App()