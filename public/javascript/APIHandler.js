class APIHandler {
  constructor(baseURL) {
    this.axiosApp = axios.create({ baseURL })
  }

  getFullList() {
    return this.axiosApp.get('/characters')

  }

  getOneRegister(id) {
    return this.axiosApp.get(`/characters/${id}`)

  }

  createOneRegister(characterInfo) {
   
    return this.axiosApp.post(`/characters`, characterInfo)

  }

  updateOneRegister(id, characterInfo) {
    return this.axiosApp.put(`/characters/${id}`, characterInfo)

  }

  deleteOneRegister(id) {
    return this.axiosApp.delete(`/characters/${id}`)

  }
}
