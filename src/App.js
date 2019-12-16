import React, { useState, useEffect } from 'react';
// Components
import Header from './components/Header';
import Title from './components/Title';
import Search from './components/Search';
import List from './components/List';
import Footer from './components/Footer';
import githubService from './services/github.service';
// Styles
import './App.scss';
import Languages from './components/Languages';
import Profile from './components/Profile';

const App = () => {
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

  // const mostPopularRepositories = repos => {
  //   // console.log('FIRST FAVE MOST POPULAR REPOS', repos);
  //   const maxStars = 0;
  //   const popular = repos.reduce((prev, current) => {
  //     if (current.stargazers_count) console.log('PREV', prev.stargazers_count);
  //     return current;
  //   });
  //   // console.log('popular', popular);
  // };

  const handleUserProfile = async (userName = 'zmlalex') => {
    try {
      setLoading(true);

      const user = await githubService.getUserData(userName);
      const repos = await githubService.getUserRepos(userName);

      console.log('REPO', repos);

      const validLanguages = repos.data.items
        .filter(repo => repo.language)
        .map(repo => repo.language);
      const languagesWithPercentage = calculatePercentageOfLanguages(validLanguages);
      // mostPopularRepositories(repos.data);

      setCurrentProfile(user.data);
      setRepos(repos.data.items);
      setLanguages(languagesWithPercentage);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleUserProfile();
  }, []);

  console.log('REPOS', repos);

  return (
    <div className="App">
      <Header />
      <Title />
      <Search handleUserProfile={handleUserProfile} />
      {loading && 'Loading...'}
      {/* <Languages languages={languages} /> */}
      {currentProfile && (
        <List languages={languages} currentProfile={currentProfile} repos={repos} />
      )}
      <Footer />
    </div>
  );
};

export default App;
