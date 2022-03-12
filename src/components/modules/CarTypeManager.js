// FETCHES CARTYPES FOR DROPDOWN

const remoteURL = "http://localhost:8088"
  
  export const getAllCarTypes = () => {
    return fetch(`${remoteURL}/carTypes`)
    .then(res => res.json())
  }