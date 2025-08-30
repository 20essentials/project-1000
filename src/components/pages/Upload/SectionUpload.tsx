import { useUploadVideoOrImages } from '@/store/useUploadVideoOrImages';
import { baseURL } from '@/utils/functions/baseURL';
import {
  useState,
  useRef,
  type DragEvent,
  type ChangeEvent,
  useEffect
} from 'react';
import { PublishKeyCap } from '@/components/pages/Upload/PublishKeyCap';
import { videoDurationValidator } from '@/utils/functions/videoDurationValidator';
import { TextareaDescriptionPost } from '@/components/pages/Upload/TextareaDescriptionPost';

const srcCross = baseURL('/assets/cross.png');

export function SectionUpload({ modePhoto }: { modePhoto: boolean }) {
  const images = useUploadVideoOrImages(s => s.arrayImages);
  const setImages = useUploadVideoOrImages(s => s.setArrayImages);
  const srcVideo = useUploadVideoOrImages(s => s.srcVideo);
  const setSrcVideo = useUploadVideoOrImages(s => s.setSrcVideo);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLLabelElement | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  function deleteVideo(e: React.MouseEvent) {
    setSrcVideo({ srcVideo: null });
    e.preventDefault();
  }

  const createImgsFromFiles = (files: FileList) => {
    const readers = Array.from(files).map(
      file =>
        new Promise<string>(resolve => {
          const reader = new FileReader();
          reader.onload = e => resolve(e.target?.result as string);
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then(newImgs =>
      setImages(prev => [...prev, ...newImgs])
    );
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (modePhoto) {
        createImgsFromFiles(e.target.files);
      } else {
        const file = e.target.files[0];
        const isValid = await videoDurationValidator(file);
        if (!isValid) {
          setMessage(`The video must not be longer than 10 minutes.`);
          return;
        }
        setMessage(null); // limpiar mensaje si pasa validación
        const reader = new FileReader();
        reader.onload = e => {
          setSrcVideo({ srcVideo: e.target?.result as string });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDrop = async (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (modePhoto) {
        createImgsFromFiles(e.dataTransfer.files);
      } else {
        const file = e.dataTransfer.files[0];
        const isValid = await videoDurationValidator(file);
        if (!isValid) {
          alert('El video no debe durar más de 10 minutos.');
          return;
        }
        const reader = new FileReader();
        reader.onload = e => {
          setSrcVideo({ srcVideo: e.target?.result as string });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const removeImage = (e: React.MouseEvent, index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    e.preventDefault();
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
        clearTimeout(timer);
      }
    }, 20);
  }, [images]);

  return (
    <section className='upload-section'>
      <label
        className={`container-of-files scroll-y ${
          images.length > 0 ? 'opaco' : ''
        }`}
        id='files'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        ref={containerRef}
      >
        {images.length === 0 && (
          <>
            <svg
              className='thisWouldBeOpaco'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
              <polyline points='17 8 12 3 7 8'></polyline>
              <line x1='12' x2='12' y1='3' y2='15'></line>
            </svg>
            <h2 className='thisWouldBeOpaco text-description'>
              Drop your {modePhoto ? 'images' : 'video'} here
              {message && !modePhoto && (
                <p className='message-error'>{message}</p>
              )}
            </h2>
          </>
        )}

        {srcVideo && (
          <>
            <video src={srcVideo} controls muted autoPlay className='am-video' />
            <button
              className='button-remove-element'
              type='button'
              onClick={e => deleteVideo(e)}
            >
              <img className='cross-img' src={srcCross} alt='cross-img' />
            </button>
          </>
        )}

        {modePhoto ? (
          <input
            type='file'
            multiple
            name='files'
            accept='image/*'
            hidden
            ref={inputRef}
            onChange={handleFileChange}
          />
        ) : (
          <input
            type='file'
            name='files'
            accept='video/*'
            hidden
            ref={inputRef}
            onChange={handleFileChange}
          />
        )}

        {images.length > 0 && (
          <>
            {images.map((src, index) => (
              <article key={index} className='parent-img'>
                <img
                  className='am-img-of-parent-img'
                  src={src}
                  alt='general img'
                  draggable='false'
                />
                <button
                  className='button-remove-element'
                  type='button'
                  onClick={e => removeImage(e, index)}
                >
                  <img className='cross-img' src={srcCross} alt='cross-img' />
                </button>
              </article>
            ))}
          </>
        )}
      </label>

      <TextareaDescriptionPost />
      <PublishKeyCap />
    </section>
  );
}
