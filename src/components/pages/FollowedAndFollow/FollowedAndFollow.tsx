import '@/components/pages/FollowedAndFollow/FollowedAndFollow.css';
import { ArrowLeft } from '../ProfileCreator/ArrowLeft';
// import { Logout } from '../Profile/Logout';
import { useCurrentUser } from '@/store/useCurrentUser';
import { baseUrl } from '@/utils/functions';
import { useUserCreator } from '@/store/useUserCreator';
const urlFirework = baseUrl('/assets/firework.gif');

//New
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import type {
  arrayOfPosts,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { FollowButton } from '../ProfileCreator/FollowButton';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];

export function FollowedAndFollow() {
  const commonProps = useUserCreator(state => state.commonProps);
  const username = commonProps.username;
  const user = useCurrentUser(state => state.user);
  const theUserIsInItsSameProfile = username === user?.username;
  const arrayOfFollowedAccountsIds = useFollowedAccount(
    state => state.arrayOfFollowedAccounts
  );
  let arrayOfRandomRandomFollowed: postComonProps[] = [];
  let arrayOfFollowedAccounts = theUserIsInItsSameProfile
    ? ALL_POSTS.filter(el =>
        arrayOfFollowedAccountsIds.includes(el[0].userId)
      ).map(el => el[0])
    : arrayOfRandomRandomFollowed;
  console.log(arrayOfFollowedAccounts);
  //con los followed es diferente
  //Pero con los following es igual tanto para un creator aleatorio y el mismo usuario.
  //En UserProfile se puede ir a un perfil solo con el Id

  return (
    <article className='followed-and-follow-container'>
      <header className='section-top'>
        <ArrowLeft className='arrow-left' />
        <h3 className='titulin'>{username}</h3>
        <img src={urlFirework} alt='firework' className='firework' />
      </header>
      <section className='section-nav'>
        <button className='followed navi navi-active'>Followed</button>
        <button className='followed navi'>Followers</button>
      </section>

      <section className='section-bottom'>
        {arrayOfFollowedAccounts.map((el, index) => {
          return (
            <div key={index} className='followed-account-row'>
              <aside className='left'>
                <img
                  src={el.profileImageSrc}
                  alt={`${el.username}'s profile`}
                  className='profile-image'
                />
                <h4 className='username'>{el.username}</h4>
              </aside>
              <FollowButton classNameExtra='followcito' userId={el.userId} />
            </div>
          );
        })}
      </section>
    </article>
  );
}
