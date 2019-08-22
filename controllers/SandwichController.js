import SandwichService from "../services/SandwichService.js";

let _sandwichService = new SandwichService()

function _draw() {
  let template = ``
  let sandwiches = _sandwichService.Sandwiches

  sandwiches.forEach(s => {
    template += s.Template
  });

  document.querySelector('#sandwich').innerHTML = template
}

export default class SandwichController {
  constructor() {
    //console.log("controller sandwich")
  }

  //let service know that the user wants to order a sandwich
  createSandwich(e) {
    e.preventDefault()
    let form = e.target
    let newSandwich = {
      bread: form.bread.value,
      meat: [],
      condiments: []
    }
    form.meat.forEach(m => {
      if (m.checked) {
        newSandwich.meat.push(m.value)
      }
    })
    form.condiments.forEach(m => {
      if (m.checked) {
        newSandwich.condiments.push(m.value)
      }
    })

    _sandwichService.createSandwich(newSandwich)
    console.log(newSandwich)
    _draw()
  }
}