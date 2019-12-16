import API from '../utils/API';

const getUserData = async id => {
  const data = await API.get(`/users/${id}`);
  return data;
};

const getUserRepos = async id => {
  const data = await API.get(`/search/repositories?q=+user:${id}&sort=stars&order=desc&per_page=5`);
  return data;
};

const getRepoLanguages = async (id, repo) => {
  const data = await API.get(`/repos/${id}/${repo}/languages`);
  return data;
};

const githubService = {
  getUserData,
  getUserRepos,
  getRepoLanguages
};

export default githubService;
