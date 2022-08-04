


export class Gift {

  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.tag = data.tag
    this.opened = data.opened
  }


  get Template() {
    return `
    <div class="col-md-3 my-3">
      <div onclick="app.giftsController.setActiveGift('${this.id}')" class="card elevation-2 selectable no-select" data-bs-toggle="modal" data-bs-target="#clue-modal">
        <div class="card-body text-center meme-card">
        <img class="img-fluid" src="${this.url}" alt="">
        <h2>${this.tag}</h2>
        </div>
      </div>
    </div>
    `
  }
}