
let getClientDetails = async () => {
    let id = '';
    let name = '';
    let email = '';
    let required=[];
    try {
      id = await localStorage.getItem('id') || 'none';
      name = await localStorage.getItem('name') || 'none';
      email = await localStorage.getItem('email') || 'none';
      required=[id,name,email]
    } catch (error) {
    }
    return required
  }
  
  export default getClientDetails