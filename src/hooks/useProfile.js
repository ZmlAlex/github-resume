// api services
import { useState } from 'react';
import githubService from '../services/github.service';

const useProfile = () => {
  const [currentProfile, setCurrentProfile] = useState('');
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const calculatePercentageOfLanguages = langs => {
    const total = langs.length;
    const newLanguages = langs.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

    const percentage = Object.keys(newLanguages).map(lang => ({
      type: lang,
      percentage: `${Math.round((newLanguages[lang] / total) * 100)}%`
    }));

    return percentage;
  };

  const handleUserProfile = async userName => {
    try {
      setLoading(true);
      setError('');

      const user = await githubService.getUserData(userName);
      const repos = await githubService.getUserRepos(userName);

      const validLanguages = repos.data.items
        .filter(repo => repo.language)
        .map(repo => repo.language);
      const languagesWithPercentage = calculatePercentageOfLanguages(validLanguages);
      const mostPopularRepos = repos.data.items.slice(0, 5);

      setCurrentProfile(user.data);
      setRepos(mostPopularRepos);
      setLanguages(languagesWithPercentage);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      setCurrentProfile('');
    }
  };

  return {
    currentProfile,
    repos,
    languages,
    loading,
    error,
    handleUserProfile
  };
};

export default useProfile;
