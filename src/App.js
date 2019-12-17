import React from 'react';
// Components
import Header from './components/Header';
import Title from './components/Title';
import Search from './components/Search';
import List from './components/List';
import Footer from './components/Footer';
import Error from './components/Error';
import Loader from './components/Loader';
// Hooks
import useProfile from './hooks/useProfile';
// Styles
import './App.scss';

const App = () => {
  const { currentProfile, repos, languages, loading, error, handleUserProfile } = useProfile();

  return (
    <div className="App">
      <Header />
      <Title />
      <Search handleUserProfile={handleUserProfile} />
      {loading && <Loader />}
      {error && <Error message={error} />}
      {currentProfile && !error && (
        <List languages={languages} currentProfile={currentProfile} repos={repos} error={error} />
      )}
      <Footer />
    </div>
  );
};

export default App;
