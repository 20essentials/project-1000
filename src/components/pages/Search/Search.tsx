import '@/components/pages/Search/Search.css';
import { WatchIcon } from './WatchIcon';
// import { DeleteIcon } from './DeleteIcon';
import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useUserCreator } from '@/store/useUserCreator';
import { useEffect, useRef, useState } from 'react';

export function Search() {
  const [searchText, setSearchText] = useState('');
  const FOLLOWED = useGlobalArrayPosts(state => state.FOLLOWED);
  const FOR_YOU = useGlobalArrayPosts(state => state.FOR_YOU);
  const ALL_POSTS = [...FOR_YOU, ...FOLLOWED];
  const searchBottomRef = useRef<HTMLElement | null>(null);
  const arrayUserNameAndId = ALL_POSTS.map(user => ({
    userId: user[0].userId,
    username: user[0].username
  })).toSorted(() => Math.random() - 0.5);
  const filteredArray =
    searchText !== ''
      ? arrayUserNameAndId.filter(({ username }) => username.includes(searchText))
      : arrayUserNameAndId;
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const setCommonProps = useUserCreator(state => state.setCommonProps);

  function nextToProfileCreator({ userId }: { userId: string }) {
    setCurrentPage(IS_ACTIVE_BUTTON.PROFILE_CREATOR);
    const currentUser = ALL_POSTS.find(user => user[0].userId === userId);
    const [commonPropsUser, arrayPosts] = currentUser || ALL_POSTS[0];
    setCommonProps(commonPropsUser);
    setArrayOfPosts(arrayPosts);
  }

  function handleChange(e: React.ChangeEvent) {
    const inputElement = e.target as HTMLInputElement;
    const { value } = inputElement;
    setSearchText(value);
  }

  useEffect(() => {
    function handlekeydown(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        const firstElement = searchBottomRef.current
          ?.firstElementChild as HTMLElement | null;
        if (firstElement) {
          firstElement.click();
        }
      }
    }

    document.addEventListener('keydown', handlekeydown);

    return () => {
      document.removeEventListener('keydown', handlekeydown);
    };
  }, []);
  return (
    <article className='search'>
      <aside className='search-top'>
        <input
          onChange={handleChange}
          type='text'
          placeholder='Search some user...'
        />
        <img
          src='/assets/search-gif.gif'
          alt='Search Gif Logo'
          className='search-gif'
        />
      </aside>
      <section className='search-bottom' ref={searchBottomRef}>
        {filteredArray.map(({ userId, username }) => (
          <article
            className='user-search'
            key={userId}
            onClick={() => nextToProfileCreator({ userId })}
          >
            <div className='user-search-left'>
              <WatchIcon className='watch' />
              <h5 className='user-name'>{username}</h5>
              <aside className='line'></aside>
            </div>
            {/* <DeleteIcon className='delete-icon' /> */}
          </article>
        ))}
      </section>
    </article>
  );
}
