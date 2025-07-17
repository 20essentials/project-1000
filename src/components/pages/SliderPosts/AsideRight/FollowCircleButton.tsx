import { useFollowButtonLogic } from "@/hooks/useFollowButtonLogic";

export function FollowCircleButton({
  userId = '',
  theCreatorOfThisPostIsTheSameUser
}: {
  userId: string | undefined;
  theCreatorOfThisPostIsTheSameUser: boolean;
}) {
  const { className, followThisUser } = useFollowButtonLogic({
    userId,
    theCreatorOfThisPostIsTheSameUser
  });

  return (
    <img
      onClick={followThisUser}
      src="/assets/plus.png"
      draggable="false"
      alt="Badge"
      className={className}
    />
  );
}
