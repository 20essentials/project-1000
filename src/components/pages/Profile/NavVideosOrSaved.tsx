import { useUserCreator } from '@/store/useUserCreator';

export function NavVideosOrSaved() {
  const setShowSavedPosts = useUserCreator(state => state.setShowSavedPosts);
  const showSavedPosts = useUserCreator(state => state.showSavedPosts);
  const navLeftClassName = `aside-nav nav-left ${
    showSavedPosts ? '' : 'aside-nav-active'
  }`;
  const navRightClassName = `aside-nav nav-left ${
    showSavedPosts ? 'aside-nav-active' : ''
  }`;

  function seeSavedPosts(aBoolean: boolean) {
    setShowSavedPosts(aBoolean);
  }

  return (
    <article className='nav-videos-or-saved'>
      <aside className={navLeftClassName}>
        <svg
          fill='currentColor'
          viewBox='0 0 48 48'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => seeSavedPosts(false)}
        >
          <path d='M11 8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2Zm0 18a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1h-2ZM22 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9Zm1 17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1h-2ZM34 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9Zm1 17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V27a1 1 0 0 0-1-1h-2Z'></path>
        </svg>
      </aside>
      <aside className={navRightClassName}>
        <svg
          fill='currentColor'
          viewBox='0 0 48 48'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => seeSavedPosts(true)}
        >
          <path d='M30.5 7.15a4 4 0 0 1 4 4v6.25a1 1 0 0 1-.88 1H32.5a1 1 0 0 1-1-1v-5.25a2 2 0 0 0-2-2h-18a2 2 0 0 0-2 2v25.72l9.67-5 .05-.04a2.5 2.5 0 0 1 2.56 0l.05.03 11.77 5.62c.5.23.71.82.48 1.32l-.42.9a1 1 0 0 1-1.33.5v-.01L20.5 35.55l-10.16 5.27-.03.02a2.5 2.5 0 0 1-3.24-.55l-.1-.13a2.5 2.5 0 0 1-.46-1.26l-.01-.2V11.16a4 4 0 0 1 4-4h20Zm-4.65 12.5a1 1 0 0 1 1.42 0l14.58 14.58a1 1 0 0 1 0 1.41l-.7.71a1 1 0 0 1-1.42 0l-1.94-1.94a9.57 9.57 0 0 1-4.29 1.09c-3.02 0-5.62-1.66-7.36-3.2a16.9 16.9 0 0 1-2.12-2.23 9.58 9.58 0 0 1-.84-1.3c-.04-.1-.18-.4-.18-.77 0-.3.09-.56.12-.64.04-.14.1-.27.16-.4a12.87 12.87 0 0 1 3.17-3.88l-1.3-1.32a1 1 0 0 1 0-1.41l.7-.7Zm2.74 5.55a9.68 9.68 0 0 0-2.43 2.72 13.9 13.9 0 0 0 1.96 2.14c1.53 1.34 3.43 2.44 5.38 2.44.68 0 1.36-.14 2.01-.37L28.6 25.2Zm4.91-4.7c3.5 0 6.1 1.6 7.79 3.23a12.87 12.87 0 0 1 2.43 3.22c.06.14.12.27.16.4.03.1.12.35.12.65 0 .37-.14.68-.18.76a9.58 9.58 0 0 1-.85 1.3c-.4.53-.95 1.16-1.62 1.8l-2.12-2.13a13.68 13.68 0 0 0 1.6-1.81l-.16-.26c-.31-.5-.8-1.14-1.46-1.77a8.16 8.16 0 0 0-6.2-2.38l-2.57-2.58c.93-.27 1.95-.43 3.06-.43Z'></path>
        </svg>
      </aside>
    </article>
  );
}
