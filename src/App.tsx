import { createContext, useState } from 'react';

import Header from './components/header';
import Hero from './components/hero';
import { useArtist } from './hooks';
import { Artist } from './services';

type State = {
  artist: Artist | undefined;
  onSearch: (artistName: string) => void;
  loading: boolean;
  error: any;
};

const initialState: State = {
  artist: undefined,
  onSearch: () => {},
  loading: false,
  error: null,
};

export const AppContext = createContext(initialState);

function App() {
  const [artistName, setArtistName] = useState<string>('Rihanna');
  const { data, loading, error } = useArtist(artistName);

  const onSearch = (artistName: string) => {
    setArtistName(artistName);
  };

  const state = {
    artist: data,
    loading,
    error,
    onSearch,
  };

  return (
    <AppContext.Provider value={state}>
      <div>
        <Header />
        <main className='container'>
          {loading ? <div className="text-center">Loading...</div> : <Hero artist={data } />}
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
