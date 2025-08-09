import { useEffect } from 'react';
import { $, $$ } from '@/utils/functions';

export function SectionUpload() {
  useEffect(() => {
    const $input = $('input[type=file]') as HTMLInputElement;
    const $containerImgs = $('.container-of-files');
    const $minimodal = $('.minimodal');

    function createImg(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener('load', e => {
        const src = e.target.result;
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
      const files = e.target.files;
      if (files) {
        [...files].forEach(file => createImg(file));
        const $opaco = $('.opaco');
        if (!$opaco) {
          $$('.thisWouldBeOpaco').forEach(el => el.classList.add('opaco'));
        }
      }
    });

    $containerImgs.addEventListener('drop', e => {
      e.preventDefault();
      const { dataTransfer } = e;
      const { files } = dataTransfer;
      [...files].forEach(file => createImg(file));
    });

    $containerImgs.addEventListener('dragover', e => {
      e.preventDefault();
    });

    document.addEventListener('click', e => {
      if (e.target.matches('.button-remove-element')) {
        const closestParentElementVideoORImage = e.target.closest('.parent-img');
        closestParentElementVideoORImage.remove();
        e.preventDefault();
      }
    });
  }, []);

  return (
    <section className='upload-section'>
      <label className='container-of-files scroll-y' id='files'>
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
        <input type='file' multiple name='files' accept='image/*' hidden />
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
