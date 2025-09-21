import { useUploadVideoOrImages } from '@/store/useUploadVideoOrImages';

export function TextareaDescriptionPost() {
  const setDescriptionPost = useUploadVideoOrImages(s => s.setDescriptionPost);
  const descriptionPost = useUploadVideoOrImages(s => s.descriptionPost);

  return (
    <aside className='container-description'>
      <textarea
        spellCheck='false'
        className='scroll-y-textarea'
        placeholder={`Here is the description of your Post #yes #fyp #forYou`}
        onChange={e => setDescriptionPost({ descriptionPost: e.target.value })}
        value={descriptionPost ?? ''}
      ></textarea>
    </aside>
  );
}
