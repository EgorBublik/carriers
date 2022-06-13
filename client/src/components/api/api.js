import axios from 'axios'

const HOSTCarriers = ""
const HOSTRoutes = ""

export const getCarriers = async () => {
  return await axios.get(HOSTCarriers)
}

export const createCarrier = async (carrier) => {
  return await axios.post(`${HOSTCarriers}`, carrier)
}

export const updateCarrier = async (carrier) => {
  return await axios.put(`${HOSTCarriers}${carrier._id}`, carrier)
}

export const deleteCarrier = async (id) => {
  return await axios.delete(`${HOSTCarriers}${id}`)
}

export const getRoutes = async () => {
  return await axios.get(HOSTRoutes)
}

export const createRoutes = async (route) => {
  return await axios.post(`${HOSTRoutes}`, route)
}

export const updateRoute = async (route) => {
  return await axios.put(`${HOSTRoutes}${route._id}`, route)
}

export const deleteRoute = async (id) => {
  return await axios.delete(`${HOSTRoutes}${id}`)
}
