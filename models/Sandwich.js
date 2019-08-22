

export default class Sandwich {
  constructor(data) {
    //console.log("sandwich created")
    this.bread = data.bread
    this.meat = data.meat
    this.condiments = data.condiments
  }


  get Template() {
    return `
      <div class="col-12">
        <h1>Order:</h1>
        <h3>${this.bread}</h3>
        <h3>${this.meat}</h3>
        <h3>${this.condiments}</h3>
      </div>
    `
  }
}