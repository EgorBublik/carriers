import axios from 'axios'

const HOSTCarriers = ""
const HOSTRoutes = ""
const HOSTRequest = ""
const HOSTAuthorization = ""
const HOSTViber = ""

export const getCarriers = async () => {
  let list = await axios.get(HOSTCarriers)
  
  list.data.forEach(item => {
    item[item.name] = item.value;  
  });

  list.data.sort(function(a,b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  })
  return list
  // return await axios.get(HOSTCarriers)
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


export const getRequests = async () => {
  return await axios.get(HOSTRequest)
}

export const createRequest = async (request) => {
  return await axios.post(`${HOSTRequest}`, request)
}

export const updateRequest = async (request) => {
  return await axios.put(`${HOSTRequest}${request._id}`, request)
}

export const deleteRequest = async (id) => {
  return await axios.delete(`${HOSTRequest}${id}`)
}

export const postPhone = async (phoneState) => {
  return await axios.post(`${HOSTViber}`, phoneState)
}

export const checkAuthorization = async (authState) => {
  axios.post(HOSTAuthorization, authState)
    .then(response => {
      const token  =  response.data.access_token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", authState.username)
      setAuthToken(token);
      console.log('response')
      window.location.href = 'carriers'
      return
    })
  .catch(err => console.log(err));
}

export const logOut = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user")
  window.location.href = 'auth'
}

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
}