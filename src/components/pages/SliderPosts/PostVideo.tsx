
export function PostVideo(props: currentPostProps) {
  const {
    videoSrc,
    description,
    tags,
    dateOfPublication,
    totalViewsOfThePost,
    hearts,
    comments,
    saved,
    shared
  } = props;


  return (
    <aside className='post-video'>
      <video src={videoSrc}></video>
    </aside>
  );
}
