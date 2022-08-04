export const giftApi = new axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  timeout: 4000
})

// @ts-ignore
export const sandboxApi = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api',
  timeout: 4000
})