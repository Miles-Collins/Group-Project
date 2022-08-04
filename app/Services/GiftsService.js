import { ProxyState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { giftApi, sandboxApi } from "./AxiosService.js"


class GiftsServices {
  
// async flip(reveal) {
//   if(!reveal) {

//   }
// }

  
async getGift() {
  let res = await sandboxApi.get('/gifts')
  console.log("Gift", res.data)
  ProxyState.gifts = res.data.map(g => new Gift(g))
}





}









export const giftsServices = new GiftsServices