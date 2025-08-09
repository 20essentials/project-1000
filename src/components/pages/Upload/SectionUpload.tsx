import { useState, useRef, type DragEvent, type ChangeEvent } from 'react';

export function SectionUpload() {
  const [images, setImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      createImgsFromFiles(e.target.files);
    }
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      createImgsFromFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  console.log(images)

  return (
    <section className='upload-section'>
      <label
        className={`container-of-files scroll-y ${
          images.length > 0 ? 'opaco' : ''
        }`}
        id='files'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
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
              Drop images here
            </h2>
          </>
        )}

        <input
          type='file'
          multiple
          name='files'
          accept='image/*'
          hidden
          ref={inputRef}
          onChange={handleFileChange}
        />

        {images.map((src, index) => (
          <article key={index} className='parent-img'>
            <img src={src} alt='general img' draggable='false' />
            <button
              className='button-remove-element'
              type='button'
              onClick={() => removeImage(index)}
            >
              ❌
            </button>
          </article>
        ))}
      </label>

      <aside className='container-description'>
        <textarea
          className='scroll-y-textarea'
          placeholder={`I'm the best post #yes #fyp #no`}
        ></textarea>
      </aside>

      <article className='keycap'>
        <aside className='letter'>
          Publish
          <svg fill='none' viewBox='0 0 24 24' className='enter-icon'>
            <path
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2'
              stroke='white'
              d='M3 12L9 18M3 12L9 6M3 12H21'
            ></path>
          </svg>
        </aside>
      </article>
    </section>
  );
}
