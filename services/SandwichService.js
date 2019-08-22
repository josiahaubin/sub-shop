import Sandwich from "../models/Sandwich.js";

let _state = {
  sandwich: [new Sandwich({
    bread: "white",
    meat: "ham",
    condiments: ["mustard"],
    price: 0
  })]
}

export default class SandwichService {
  constructor() {
    //console.log("service sandwich")
  }


}