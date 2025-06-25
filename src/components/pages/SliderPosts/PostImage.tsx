import type { postProps } from '@/components/pages/SliderPosts/types.d.ts';

export function PostImage(props: postProps) {
  const {
    arrayImages,
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
    <article className='post-image'>
      {arrayImages?.map((src, i) => (
        <section key={i} className='container-img-post'>
          <img src={src} alt='image' draggable='false' />
        </section>
      ))}
    </article>
  );
}
