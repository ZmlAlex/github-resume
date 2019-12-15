import API from '../utils/API';

const getUserData = async id => {
  const data = await API.get(`/user/${id}`);
  return data;
};

const userService = {
  getUserData
};

export default userService;
