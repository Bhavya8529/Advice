
let getClientToken = async () => {
  let accessToken = '';
  try {
    accessToken = await localStorage.getItem('accessToken') || 'none';
  } catch (error) {
  }
  return accessToken
}

export default getClientToken