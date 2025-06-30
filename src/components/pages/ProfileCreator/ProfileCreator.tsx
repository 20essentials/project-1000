import "@/components/pages/ProfileCreator/ProfileCreator.css";
import { useUserCreator } from "@/store/useUserCreator";

export function ProfileCreator() {
  const setCommonProps = useUserCreator(state => state.setCommonProps);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);

  return (
    <article className="profile-creator">
      {arrayOfPosts.map((post, index) => {
        const { videoSrc, arrayImages } = post;

        return (
          <aside key={index} className="content-post">
            {videoSrc ? (
              <video
                className="square_user_creator profile-creator__video"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : arrayImages && arrayImages.length > 0 ? (
              <img
                className="square_user_creator profile-creator__image"
                src={arrayImages[0]}
                alt={`Post ${index}`}
              />
            ) : null}
          </aside>
        );
      })}
    </article>
  );
}
