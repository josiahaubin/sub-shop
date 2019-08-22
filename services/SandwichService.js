import Sandwich from "../models/Sandwich.js";

let _state = {
  sandwiches: [],
  sandwich: {}
}

export default class SandwichService {
  createSandwich(newSandwich) {
    _state.sandwiches.push(new Sandwich(newSandwich))
  }
  constructor() {
    //console.log("service sandwich")
  }

  get Sandwiches() {
    return _state.sandwiches
  }
}