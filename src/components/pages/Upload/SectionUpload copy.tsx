import { useEffect, useRef } from 'react';
import { $, $$ } from '@/utils/functions';

export function SectionUpload() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerImgsRef = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    if (!containerImgsRef.current) return;
    const $input = inputRef.current;
    const $containerImgs = containerImgsRef.current;

    function createImg(file: File) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener('load', e => {
        const src = e.target?.result;
        $containerImgs.insertAdjacentHTML(
          'beforeend',
          `<article class="parent-img">
        <img src="${src}" alt="general img" dragabble="false">
        <button class='button-remove-element'">
          ❌
        </button>
      </article>`
        );
      });
    }

    $input.addEventListener('change', e => {
      if (!(e.target instanceof HTMLInputElement)) return;
      const { files } = e.target;
      if (!files || files.length === 0) return;
      [...files].forEach(file => createImg(file));
      const $opaco = $('.opaco');
      if (!$opaco) {
        $$('.thisWouldBeOpaco').forEach(el => el.classList.add('opaco'));
      }
    });

    $containerImgs.addEventListener('drop', e => {
      e.preventDefault();
      const { dataTransfer } = e;
      if (dataTransfer) {
        const { files } = dataTransfer;
        [...files].forEach(file => createImg(file));
      }
    });

    $containerImgs.addEventListener('dragover', e => {
      e.preventDefault();
    });

    document.addEventListener('click', e => {
      const target = e.target as HTMLElement;
      if (target.matches('.button-remove-element')) {
        const closestParentElementVideoORImage = target.closest(
          '.parent-img'
        ) as HTMLElement;
        closestParentElementVideoORImage.remove();
        e.preventDefault();
      }
    });
  }, []);

  return (
    <section className='upload-section'>
      <label
        className='container-of-files scroll-y'
        id='files'
        ref={containerImgsRef}
      >
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
        <h2 className='thisWouldBeOpaco text-description'>Drop images here</h2>
        <input
          type='file'
          multiple
          name='files'
          accept='image/*'
          hidden
          ref={inputRef}
        />
        {/* <article className='parent-img'>
          <img
            draggable='false'
            src='/preview/preview-og.avif'
            alt='general img'
          />
          <button className='button-remove-element'>❌</button>
        </article> */}
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
              stroke-linejoin='round'
              stroke-linecap='round'
              stroke-width='2'
              stroke='white'
              d='M3 12L9 18M3 12L9 6M3 12H21'
            ></path>
          </svg>
        </aside>
      </article>
    </section>
  );
}
