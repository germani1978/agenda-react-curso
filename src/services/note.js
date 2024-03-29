import axios from 'axios'

const baseUrl = '/api/notes'

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = newObject => axios.post(baseUrl, newObject)

const update = (updateOject, id) => axios.put(`${baseUrl}/${id}`, updateOject)

const erase = id => axios.delete(`${baseUrl}/${id}`)

export default { getAll, create, update, erase }
