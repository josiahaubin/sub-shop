import SandwichService from "../services/SandwichService.js";

let _sandwichService = new SandwichService()

export default class SandwichController {
  constructor() {
    console.log("controller sandwich")
  }
}