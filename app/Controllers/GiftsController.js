import { ProxyState } from "../AppState.js"
import { giftsServices } from "../Services/GiftsService.js"
import { Pop } from "../Utils/Pop.js"


function _draw() {
  let template = ''
  ProxyState.gifts.forEach(g => template += g.Template)
  document.getElementById('cards').innerHTML = template
}


export class GiftsController {
  constructor() {
    ProxyState.on('gifts', _draw)
    this.getGift()
  }

async getGift() {
  try {
    await giftsServices.getGift()
  } catch (error) {
    console.error('[Getting Gift]', error)
    Pop.error(error)
  }
}

async flip(reveal) {
  try {
    await giftsServices.flip(reveal)
  } catch (error) {
    console.error('[Flipping card]', error)
    Pop.error(error)
  }
}




}