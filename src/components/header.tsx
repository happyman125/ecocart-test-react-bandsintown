import { useContext, useState } from 'react';
import { AppContext } from '../App';

export default function Header() {
  const [artistName, setArtistName] = useState<string>('')
  const { onSearch } = useContext(AppContext);

  const onSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    onSearch(artistName)
  }

  return (
    <header className='flex items-center space-between'>
      <img src='./logo.svg' alt='logo' />
      <form onSubmit={onSubmit}>
        <label className='search-input flex items-center'>
          <svg width='16' height='16'>
            <path
              fill='#8F8F8F'
              fillRule='evenodd'
              d='M11.077 6.77c0-1.187-.422-2.201-1.264-3.044-.843-.843-1.858-1.264-3.044-1.264s-2.2.421-3.043 1.264-1.264 1.857-1.264 3.043c0 1.186.421 2.2 1.264 3.043s1.857 1.265 3.043 1.265c1.186 0 2.2-.422 3.043-1.264.843-.843 1.265-1.858 1.265-3.044zm4.923 8c0 .333-.122.621-.365.865a1.183 1.183 0 01-.866.365c-.346 0-.634-.122-.865-.365l-3.298-3.289a6.584 6.584 0 01-3.837 1.192 6.652 6.652 0 01-2.63-.533 6.768 6.768 0 01-2.163-1.443A6.768 6.768 0 01.534 9.4 6.652 6.652 0 010 6.769c0-.916.178-1.793.534-2.63a6.768 6.768 0 011.442-2.163A6.768 6.768 0 014.139.534 6.652 6.652 0 016.77 0 6.65 6.65 0 019.4.534a6.768 6.768 0 012.164 1.442 6.768 6.768 0 011.442 2.163c.356.837.533 1.714.533 2.63 0 1.41-.397 2.69-1.192 3.837l3.298 3.298c.237.237.356.525.356.865z'
            />
          </svg>
          <input onChange={(e) => setArtistName(e.target.value) } placeholder='Search for artists' />
        </label>
      </form>
      <ul className='nav flex'>
        <li>Sign up</li>
        <li>Log in</li>
      </ul>
    </header>
  );
}
