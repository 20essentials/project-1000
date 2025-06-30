import '@/components/pages/ProfileCreator/ProfileCreator.css';
import { useUserCreator } from '@/store/useUserCreator';

export function ProfileCreator() {
  const setCommonProps = useUserCreator(state => state.setCommonProps);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const { profileImageSrc, username, followed, followers, totalLikes } =
    commonProps;

  return (
    <article className='profile-creator'>
      <aside className='profile-creator-top'>
        <img
          className='profile-of-the-user'
          src={profileImageSrc}
          alt={username}
        />
        <p className='name-of-the-user'>@{username}</p>
        <aside className='container-data-user'>
          <article className='tab-data'>
            <p>{followed}</p>
            <p>Followed</p>
          </article>
          <article className='tab-data'>
            <p>{followers.toLocaleString('es-ES')}</p>
            <p>Followers</p>
          </article>
          <article className='tab-data'>
            <p>
              {(totalLikes / 1_000_000).toLocaleString('es-ES', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1
              })} Mln
            </p>
            <p>Likes</p>
          </article>
        </aside>
      </aside>
      <aside className='profile-creator-bottom'>
        {arrayOfPosts.map((post, index) => {
          const { videoSrc, arrayImages } = post;

          return (
            <aside key={index} className='content-post'>
              {videoSrc ? (
                <video
                  className='square_user_creator profile-creator__video'
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : arrayImages && arrayImages.length > 0 ? (
                <img
                  className='square_user_creator profile-creator__image'
                  src={arrayImages[0]}
                  alt={`Post ${index}`}
                />
              ) : null}
            </aside>
          );
        })}
      </aside>
    </article>
  );
}
