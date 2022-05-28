import axios from 'axios'

const HOST = "http://eb.tools-api.com/api/carriers"

export const getCarriers = async () => {
  return await axios.get(HOST)
}

export const createCarrier = async (carrier) => {
  return await axios.post(`${HOST}`, carrier)
}

export const updateCarrier = async (carrier) => {
  return await axios.put(`${HOST}${carrier._id}`, carrier)
}

export const deleteCarrier = async (id) => {
  return await axios.delete(`${HOST}/${id}`)
}

