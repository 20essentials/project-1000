import '@/components/pages/Search/Search.css';
import { WatchIcon } from '@/components/pages/Search/WatchIcon';
import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useUserCreator } from '@/store/useUserCreator';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { wrapValue } from '@/utils/gsap/gsapFunction';
const ROW_ACTIVE_CLASSNAME = 'active-search-item';

export function Search() {
  const [searchText, setSearchText] = useState('');
  const arrayOfRows = useRef<HTMLElement[]>([]);
  const currentIndexOfRow = useRef(-1);
  const lastRowWActive = useRef<HTMLElement | null>(null);
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
      ? arrayUserNameAndId
          .filter(({ username }) => {
            let theSearchText = searchText.toLowerCase().replace(/\s/g, '_');
            let theUsername = username.toLowerCase();
            return theUsername.includes(theSearchText);
          })
          .map(el => ({ ...el, username: el.username.replaceAll('_', ' ') }))
      : arrayUserNameAndId;
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const setCommonProps = useUserCreator(state => state.setCommonProps);
  const wrapCustom = useMemo(() => {
    currentIndexOfRow.current = -1;
    return wrapValue(0, filteredArray.length);
  }, [filteredArray]);

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
      const { key } = event;
      if (key === 'Enter') {
        const firstElement = searchBottomRef.current
          ?.firstElementChild as HTMLElement | null;
        if (firstElement && currentIndexOfRow.current === -1) {
          firstElement.click();
          return;
        }

        const currentRow = lastRowWActive.current;
        currentRow && currentRow.click();
      }

      if (key === 'ArrowDown') {
        const lastRowActived = lastRowWActive.current;
        if (lastRowActived) lastRowActived.classList.remove(ROW_ACTIVE_CLASSNAME);
        const nextValue = wrapCustom(currentIndexOfRow.current + 1);
        currentIndexOfRow.current = nextValue;
        const currentRow = arrayOfRows.current[currentIndexOfRow.current];
        currentRow.classList.add(ROW_ACTIVE_CLASSNAME);
        currentRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        lastRowWActive.current = currentRow;
      }
      if (key === 'ArrowUp') {
        if (currentIndexOfRow.current === -1) currentIndexOfRow.current = 0;
        const lastRowActived = lastRowWActive.current;
        if (lastRowActived) lastRowActived.classList.remove(ROW_ACTIVE_CLASSNAME);
        const nextValue = wrapCustom(currentIndexOfRow.current - 1);
        currentIndexOfRow.current = nextValue;
        const currentRow = arrayOfRows.current[currentIndexOfRow.current];
        currentRow.classList.add(ROW_ACTIVE_CLASSNAME);
        currentRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        lastRowWActive.current = currentRow;
      }
    }

    document.addEventListener('keydown', handlekeydown);

    return () => {
      document.removeEventListener('keydown', handlekeydown);
      const lastRowActived = lastRowWActive.current;
      if (lastRowActived) lastRowActived.classList.remove(ROW_ACTIVE_CLASSNAME);
    };
  }, [wrapCustom]);

  return (
    <article className='search'>
      <aside className='search-top'>
        <input
          onChange={handleChange}
          type='text'
          placeholder='Search some user...'
          autoFocus={true}
        />
        <img
          src='/assets/search-gif.gif'
          alt='Search Gif Logo'
          className='search-gif'
          draggable='false'
        />
      </aside>
      <section className='search-bottom' ref={searchBottomRef}>
        {filteredArray.length > 0 ? (
          filteredArray.map(({ userId, username }, index) => (
            <article
              className='user-search'
              key={userId}
              onClick={() => nextToProfileCreator({ userId })}
              ref={el => {
                el && (arrayOfRows.current[index] = el);
              }}
            >
              <div className='user-search-left'>
                <WatchIcon className='watch' />
                <h5 className='user-name'>{username}</h5>
                <aside className='line'></aside>
              </div>
            </article>
          ))
        ) : (
          <p className='not-found'>😅 Nothing for here</p>
        )}
      </section>
    </article>
  );
}
