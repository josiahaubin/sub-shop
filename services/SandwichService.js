import Sandwich from "../models/Sandwich.js";

let _state = {
  sandwich: [new Sandwich({
    bread: "white",
  })]
}

export default class SandwichService {
  constructor() {
    console.log("service sandwich")
  }


}