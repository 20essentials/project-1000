import { useRef, type JSX } from 'react';
import { CloseContainer } from './CloseContainer';
import { RepublishItemShare } from './RepublishItemShare';
import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { URL_PHOTO_MISSING_IMAGE } from '@/utils/conts';

type ItemType = {
  title: string;
  id: string;
  gradient: string;
  svg: JSX.Element;
  onclick?: (...args: any[]) => void;
};

const ARRAY_OF_SHARE: ItemType[] = [
  {
    title: 'Save Video',
    id: '7e46518d-d7cb-43e0-bdab-4aab2fda1e06',
    gradient: 'linear-gradient(to bottom, #333, #555)',
    svg: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path
          fill='currentColor'
          d='m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z'
        />
      </svg>
    ),
    onclick: ({
      urls,
      nombreArchivo,
      refButton,
      updateIsContainerShareOpen
    }: {
      urls: string[];
      nombreArchivo: string;
      refButton: React.RefObject<HTMLButtonElement | null>;
      updateIsContainerShareOpen: () => void;
    }) => {
      if (urls.length === 0) return;
      const $buttonSystem = refButton?.current;
      if ($buttonSystem instanceof HTMLButtonElement) {
        $buttonSystem.classList.remove('btn-hidden');
        $buttonSystem.innerHTML = 'Downloading';
      }

      const downloadPromises = urls.map((url, index) =>
        fetch(url)
          .then(response => {
            if (!response.ok) {
              console.warn(`The file at ${url} cannot be downloaded`);
              return null;
            }
            return response.blob();
          })
          .then(blob => {
            if (!blob) return;
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download =
              urls.length === 1 ? nombreArchivo : `${nombreArchivo}-${index + 1}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(blobUrl);
          })
          .catch(err => {
            console.error(`Error downloading ${url}`, err);
          })
      );

      Promise.allSettled(downloadPromises).finally(() => {
        if ($buttonSystem) {
          $buttonSystem.innerHTML = 'Downloaded';
          $buttonSystem.classList.add('btn-hidden');
          updateIsContainerShareOpen();
        }
      });
    }
  },
  {
    title: 'Copy Link',
    id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3g4h5i6j',
    gradient: 'linear-gradient(to bottom, dodgerblue, rgb(7, 108, 209))',
    svg: (
      <svg
        viewBox='0 0 48 48'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        className='are-pure-svg'
      >
        <g clipPath='url(#Icon_Color-Link_Circle_svg__a)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M24 48a24 24 0 1 0 0-48 24 24 0 0 0 0 48Z'
            fill='#2E75FD'
          ></path>
          <path
            d='M17.1 21.7c.2-.2.52-.2.71 0l1.17 1.17c.2.2.2.51 0 .7l-1.94 1.95a3.85 3.85 0 1 0 5.44 5.45l1.94-1.95c.2-.2.52-.2.71 0l1.17 1.17c.2.2.2.5 0 .7l-1.95 1.95a6.5 6.5 0 0 1-9.19-9.2l1.95-1.94ZM29.02 24.42a.5.5 0 0 0 0 .71l1.17 1.17c.2.2.5.2.7 0l1.95-1.95a6.5 6.5 0 0 0-9.2-9.19l-1.94 1.95a.5.5 0 0 0 0 .7l1.17 1.17c.2.2.51.2.7 0l1.95-1.95a3.85 3.85 0 1 1 5.45 5.45l-1.95 1.94Z'
            fill='#fff'
          ></path>
          <path
            d='M19.88 26.24a.5.5 0 0 0 0 .71l1.17 1.17c.2.2.51.2.7 0l6.37-6.37a.5.5 0 0 0 0-.7l-1.17-1.17a.5.5 0 0 0-.7 0l-6.37 6.36Z'
            fill='#fff'
          ></path>
        </g>
        <defs>
          <clipPath id='Icon_Color-Link_Circle_svg__a'>
            <path fill='#fff' d='M0 0h48v48H0z'></path>
          </clipPath>
        </defs>
      </svg>
    ),
    onclick: ({
      refButton
    }: {
      refButton: React.RefObject<HTMLButtonElement | null>;
    }) => {
      const $buttonSystem = refButton?.current;
      if ($buttonSystem instanceof HTMLButtonElement) {
        $buttonSystem.classList.remove('btn-hidden');
        $buttonSystem.innerHTML = 'Link copied';
        navigator.clipboard.writeText(window.location.href);

        let timer = setTimeout(() => {
          $buttonSystem.classList.add('btn-hidden');
          window.clearTimeout(timer);
        }, 1234);
      }
    }
  },
  {
    title: 'Repost',
    id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3g4h5i6k',
    gradient: 'linear-gradient(to bottom, #e5e515, #ffa500)',
    svg: (
      <svg
        viewBox='0 0 48 48'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        className='are-pure-svg'
        style={{ borderRadius: '50%' }}
      >
        <path fill='#FFC300' d='M0 0h48v48H0z'></path>
        <path
          d='M30.01 22.53v5.22h-3.46a.82.82 0 0 0-.62 1.35l4.56 5.32c.43.5 1.22.5 1.65 0l4.56-5.32a.82.82 0 0 0-.62-1.35h-3.13v-5.28c0-1.14 0-2.36-.07-3.1a5.68 5.68 0 0 0-.57-2.24 5.74 5.74 0 0 0-2.5-2.5c-.7-.36-1.45-.5-2.25-.57-.78-.06-.92-.06-2.07-.06H23.7a.79.79 0 0 0-.78.79v1.36c0 .43.35.78.78.78h1.73c1.22 0 1.25 0 1.89.06.62.05.93.14 1.15.25.53.27.96.7 1.23 1.22.1.18.2.53.25 1.15.05.64.06 1.7.06 2.92ZM17.89 21.2h3.46c.7 0 1.08-.82.63-1.35l-4.56-5.32a1.1 1.1 0 0 0-1.66 0l-4.56 5.32a.82.82 0 0 0 .62 1.35h3.13v5.28c0 1.14.01 2.37.07 3.1.07.84.21 1.54.57 2.24a5.74 5.74 0 0 0 2.5 2.5c.7.36 1.45.5 2.25.57.78.06.92.06 2.07.06h1.79c.43 0 .78-.35.78-.78V32.8a.79.79 0 0 0-.78-.78h-1.73c-1.22 0-1.25 0-1.89-.06a3.04 3.04 0 0 1-1.15-.25 2.8 2.8 0 0 1-1.22-1.22c-.11-.18-.2-.53-.26-1.15-.05-.64-.06-1.7-.06-2.92V21.2Z'
          fill='#fff'
        ></path>
      </svg>
    )
  },
  {
    title: 'X',
    id: 'b1c8f0d2-3a4e-4c5b-9f6d-7e8f9a0b1c2d',
    gradient: 'linear-gradient(to bottom, #000, #111)',
    svg: (
      <svg
        viewBox='0 0 48 48'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        className='are-pure-svg'
      >
        <g clipPath='url(#Icon_Color-Twitter_Circle_svg__a)'>
          <circle cx='24' cy='24' r='24' fill='#000'></circle>
          <path
            d='M31.76 11.8h4.14l-9.04 10.34L37.5 36.2h-8.33l-6.53-8.53-7.46 8.53h-4.15l9.68-11.05L10.5 11.8h8.54l5.9 7.8 6.82-7.8Zm-1.45 21.92h2.3L17.8 14.15h-2.47l14.98 19.57Z'
            fill='#fff'
          ></path>
        </g>
        <defs>
          <clipPath id='Icon_Color-Twitter_Circle_svg__a'>
            <path fill='#fff' d='M0 0h48v48H0z'></path>
          </clipPath>
        </defs>
      </svg>
    ),
    onclick: ({
      refButton,
      username
    }: {
      refButton: React.RefObject<HTMLButtonElement | null>;
      username: string;
    }) => {
      const $buttonSystem = refButton?.current;
      if ($buttonSystem instanceof HTMLButtonElement) {
        $buttonSystem.classList.remove('btn-hidden');
        $buttonSystem.innerHTML = 'Link copied';
        navigator.clipboard.writeText(window.location.href);

        let timer = setTimeout(() => {
          $buttonSystem.classList.add('btn-hidden');
          window.clearTimeout(timer);
        }, 1234);
      }
      const intent = 'https://twitter.com/intent/tweet';
      const text = `Post from @${username} in TikTok Lite → ${window.location.href}`;
      window.open(`${intent}?text=${encodeURIComponent(text)}`);
      return;
    }
  },
  {
    title: 'Pinterest',
    id: 'c3d4e5f6-7a8b-9a0b-1c2d-3e4f5g6h7i8j',
    gradient: `radial-gradient(
              circle at 30% 107%,
              #fd5949 45%,
              #d6249f 60%
            )`,
    svg: (
      <svg
        viewBox='0 0 48 48'
        fill='currentColor'
        className='are-pure-svg'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='24' cy='24' r='24' fill='#D22D29'></circle>
        <path
          d='M24.02 12a11.97 11.97 0 0 0-4.37 23.13c-.1-.94-.2-2.4.04-3.44l1.4-5.95s-.35-.72-.35-1.77c0-1.67.96-2.9 2.16-2.9 1.03 0 1.52.76 1.52 1.68 0 1.02-.65 2.56-1 3.99-.28 1.19.6 2.17 1.78 2.17 2.13 0 3.76-2.25 3.76-5.48 0-2.87-2.06-4.87-5-4.87-3.41 0-5.41 2.55-5.41 5.2 0 1.02.4 2.12.89 2.72.1.12.1.23.07.35-.08.37-.3 1.19-.33 1.36-.05.21-.18.26-.4.15-1.48-.7-2.4-2.9-2.4-4.65 0-3.77 2.73-7.24 7.9-7.24 4.15 0 7.38 2.96 7.38 6.92 0 4.13-2.6 7.45-6.2 7.45-1.22 0-2.36-.63-2.74-1.38l-.75 2.85c-.27 1.04-1 2.34-1.49 3.14A11.97 11.97 0 1 0 24.02 12Z'
          fill='#fff'
        ></path>
      </svg>
    ),
    onclick: ({
      refButton,
      url,
      media,
      description
    }: {
      refButton: React.RefObject<HTMLButtonElement | null>;
      url: string;
      media: string;
      description: string;
    }) => {
      const $buttonSystem = refButton?.current;
      if ($buttonSystem instanceof HTMLButtonElement) {
        $buttonSystem.classList.remove('btn-hidden');
        $buttonSystem.innerHTML = 'Link copied';
        navigator.clipboard.writeText(url);
        setTimeout(() => {
          $buttonSystem.classList.add('btn-hidden');
        }, 1200);
      }

      const pinterestUrl =
        `https://www.pinterest.com/pin/create/button/?` +
        `url=${encodeURIComponent(url)}` +
        `&media=${encodeURIComponent(media)}` +
        `&description=${encodeURIComponent(description)}`;

      window.open(pinterestUrl, '_blank');
      return;
    }
  },
  {
    title: 'Reddit',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3pASDFAS',
    gradient: 'linear-gradient(135deg, transparent, transparent)',
    svg: (
      <svg
        viewBox='0 0 48 48'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        className='are-pure-svg'
      >
        <path d='M24 48a24 24 0 1 1 0-48 24 24 0 0 1 0 48Z' fill='#FF4500'></path>
        <path
          d='M29.15 28.47a2.36 2.36 0 0 1-2.34-2.36c0-1.31 1.05-2.37 2.34-2.37 1.3 0 2.35 1.06 2.35 2.37 0 1.3-1.05 2.36-2.35 2.36Zm.42 3.9c-1.6 1.6-4.67 1.73-5.57 1.73-.9 0-3.97-.12-5.57-1.74a.62.62 0 0 1 0-.87.6.6 0 0 1 .86 0c1 1.02 3.16 1.39 4.7 1.39 1.55 0 3.7-.37 4.72-1.39a.6.6 0 0 1 .86 0c.23.24.23.63 0 .87ZM16.49 26.1c0-1.31 1.05-2.37 2.34-2.37 1.3 0 2.35 1.06 2.35 2.37 0 1.3-1.05 2.36-2.35 2.36a2.36 2.36 0 0 1-2.34-2.36ZM39 23.74a3.3 3.3 0 0 0-3.28-3.32c-.89 0-1.7.36-2.28.93a15.96 15.96 0 0 0-8.78-2.81l1.5-7.1 4.88 1.04a2.35 2.35 0 0 0 2.33 2.26c1.3 0 2.35-1.06 2.35-2.37a2.33 2.33 0 0 0-4.44-1.05l-5.46-1.17a.58.58 0 0 0-.7.45l-1.63 7.8v.13c-3.5.1-6.66 1.16-8.94 2.81a3.24 3.24 0 0 0-2.27-.92 3.32 3.32 0 0 0-1.34 6.34c-.05.33-.08.66-.08 1 0 5.1 5.88 9.24 13.14 9.24 7.25 0 13.13-4.13 13.13-9.23 0-.34-.03-.67-.08-1A3.33 3.33 0 0 0 39 23.74Z'
          fill='#fff'
        ></path>
      </svg>
    ),
    onclick: ({
      refButton,
      url,
      description = 'Post of TikTok Lite'
    }: {
      refButton: React.RefObject<HTMLButtonElement | null>;
      url: string;
      description: string;
    }) => {
      const $buttonSystem = refButton?.current;
      if ($buttonSystem instanceof HTMLButtonElement) {
        $buttonSystem.classList.remove('btn-hidden');
        $buttonSystem.innerHTML = 'Link copied';
        navigator.clipboard.writeText(url);
        setTimeout(() => {
          $buttonSystem.classList.add('btn-hidden');
        }, 1200);
      }

      const redditUrl =
        `https://www.reddit.com/submit?` +
        `url=${encodeURIComponent(url)}` +
        `&title=${encodeURIComponent(description)}`;

      window.open(redditUrl, '_blank');
      return;
    }
  },
  {
    title: 'Facebook',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6s',
    gradient: 'linear-gradient(135deg, #1877f2, #3b5998)',
    svg: (
      <svg
        viewBox='0 0 48 48'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        className='are-pure-svg'
      >
        <g clipPath='url(#Icon_Color-Facebook_Circle_svg__a)'>
          <circle cx='24' cy='24' r='22' fill='#fff'></circle>
          <path
            d='M27.75 47.7a24 24 0 1 0-7.52 0V31.15H14.1v-6.98h6.13s-.03-3.98 0-5.75.38-3.47 1.3-5.03c1.4-2.4 3.58-3.57 6.26-3.9 2.27-.29 4.67-.03 6.92.4v5.96l-.68-.02c-1.02-.03-2.32-.07-3.24.07-1.9.3-3 1.52-3.03 3.44-.04 1.5-.02 4.83-.02 4.83h6.69l-1.09 6.98h-5.6v16.57Z'
            fill='#0075FA'
          ></path>
        </g>
        <defs>
          <clipPath id='Icon_Color-Facebook_Circle_svg__a'>
            <path fill='#fff' d='M0 0h48v48H0z'></path>
          </clipPath>
        </defs>
      </svg>
    ),
    onclick: ({
      refButton,
      url,
      description = 'Compartir en Facebook'
    }: {
      refButton: React.RefObject<HTMLButtonElement | null>;
      url: string;
      description?: string;
    }) => {
      const $btn = refButton?.current;
      if ($btn instanceof HTMLButtonElement) {
        // Mostrar retroalimentación visual
        $btn.classList.remove('btn-hidden');
        $btn.innerHTML = 'Link Copied';
        navigator.clipboard.writeText(url);

        setTimeout(() => {
          $btn.classList.add('btn-hidden');
        }, 1200);
      }

      // Construir URL de compartir en Facebook
      const facebookUrl =
        `https://www.facebook.com/sharer/sharer.php` +
        `?display=popup` +
        `&sdk=joey` +
        `&u=${encodeURIComponent(url)}` +
        `&quote=${encodeURIComponent(description)}`;

      window.open(facebookUrl, '_blank', 'width=600,height=500');
    }
  },
  {
    title: 'WhatsApp',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6t',
    gradient: 'linear-gradient(135deg, #26d461, #26d461aa)',
    svg: (
      <svg
        viewBox='0 0 48 48'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        className='are-pure-svg'
      >
        <g
          clipPath='url(#Icon_Color-Whatsapp_Circle_svg__a)'
          fillRule='evenodd'
          clipRule='evenodd'
        >
          <path
            d='M24 48a24 24 0 1 0 0-48 24 24 0 0 0 0 48Z'
            fill='#25D366'
          ></path>
          <path
            d='M29.96 26.58c-.33-.16-1.92-.94-2.21-1.05-.3-.1-.52-.16-.73.16-.22.33-.84 1.05-1.03 1.27-.18.21-.37.24-.7.08-.32-.16-1.36-.5-2.6-1.6a9.7 9.7 0 0 1-1.8-2.23c-.19-.32-.02-.5.14-.66.15-.14.33-.37.49-.56.16-.19.22-.32.32-.54.11-.21.06-.4-.02-.56-.08-.16-.73-1.75-1-2.4-.26-.62-.53-.54-.73-.55h-.62c-.21 0-.56.07-.86.4-.3.32-1.13 1.1-1.13 2.68 0 1.59 1.16 3.12 1.32 3.33.16.22 2.28 3.47 5.52 4.86.77.33 1.38.53 1.85.68.77.25 1.48.21 2.03.13.63-.1 1.92-.78 2.19-1.53s.27-1.4.19-1.53c-.08-.14-.3-.22-.62-.38Zm-5.9 8.02c-2.12 0-4.08-.66-5.88-1.72l-4.07 1.06 1.09-3.95a11.32 11.32 0 0 1-1.9-6.1 10.75 10.75 0 0 1 21.50 0c0 5.9-4.83 10.71-10.76 10.71Zm0-23.6A12.93 12.93 0 0 0 11.1 23.88c0 2.27.6 4.49 1.73 6.44L11 37l6.86-1.8a12.98 12.98 0 0 0 6.19 1.58C31.1 36.78 37 30.9 37 23.89 37 16.84 31.09 11 24.05 11Z'
            fill='#fff'
          ></path>
        </g>
        <defs>
          <clipPath id='Icon_Color-Whatsapp_Circle_svg__a'>
            <path fill='#fff' d='M0 0h48v48H0z'></path>
          </clipPath>
        </defs>
      </svg>
    ),
    onclick: ({
      refButton,
      url,
      description = 'Check out this Post'
    }: {
      refButton: React.RefObject<HTMLButtonElement | null>;
      url: string;
      description?: string;
    }) => {
      const $btn = refButton?.current;
      if ($btn instanceof HTMLButtonElement) {
        // Show temporary button feedback
        $btn.classList.remove('btn-hidden');
        $btn.innerHTML = 'Link copied';
        navigator.clipboard.writeText(url);

        setTimeout(() => {
          $btn.classList.add('btn-hidden');
        }, 1200);
      }

      // Build WhatsApp share URL
      const whatsappUrl =
        `https://api.whatsapp.com/send/` +
        `?text=${encodeURIComponent(`${description} ${url}`)}` +
        `&type=custom_url` +
        `&app_absent=0`;

      // Open WhatsApp share in a new tab/window
      window.open(whatsappUrl, '_blank');
    }
  },
  {
    title: 'Email',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6v',
    gradient: 'linear-gradient(135deg, cyan, dodgerblue)',
    svg: (
      <svg
        viewBox='0 0 48 48'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        className='are-pure-svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M24 48a24 24 0 1 0 0-48 24 24 0 0 0 0 48Z'
          fill='#0DBEF3'
        ></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.63 14.9a2.1 2.1 0 0 0-2.09 2.09V31c0 1.16.94 2.1 2.1 2.1h20.73a2.1 2.1 0 0 0 2.09-2.1V17a2.1 2.1 0 0 0-2.1-2.1H13.64Zm20.1 2.48L24 24.11l-9.72-6.73a.52.52 0 0 0-.82.43v1.28L24 26.4l10.54-7.3v-1.28a.52.52 0 0 0-.82-.43Z'
          fill='#fff'
        ></path>
      </svg>
    ),
    onclick: ({
      refButton,
      url,
      description = 'Check out this Post'
    }: {
      refButton: React.RefObject<HTMLButtonElement | null>;
      url: string;
      description?: string;
    }) => {
      const $btn = refButton?.current;
      if ($btn instanceof HTMLButtonElement) {
        // Show temporary button feedback
        $btn.classList.remove('btn-hidden');
        $btn.innerHTML = 'Link copied';
        navigator.clipboard.writeText(url);

        setTimeout(() => {
          $btn.classList.add('btn-hidden');
        }, 1200);
      }

      // Build Email share URL
      const subject = encodeURIComponent(description);
      const body = encodeURIComponent(`${description}\n\n${url}`);
      const emailUrl = `mailto:?subject=${subject}&body=${body}`;

      // Open email client
      window.open(emailUrl, '_blank');
    }
  },
  {
    title: 'Discord',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6u',
    gradient: 'linear-gradient(135deg, #7289da, #5b6eae)',
    svg: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path
          fill='currentColor'
          d='M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12'
        />
      </svg>
    ),
    onclick: ({
      refButton,
      url,
      description = 'Check out this post'
    }: {
      refButton: React.RefObject<HTMLButtonElement | null>;
      url: string;
      description?: string;
    }) => {
      const $btn = refButton?.current;
      if ($btn instanceof HTMLButtonElement) {
        // Show feedback
        $btn.classList.remove('btn-hidden');
        $btn.innerHTML = 'Link copied';
        navigator.clipboard.writeText(`${description} ${url}`);

        setTimeout(() => {
          $btn.classList.add('btn-hidden');
        }, 1200);
      }

      // Optionally, open Discord web app (no prefilled message possible)
      window.open('https://discord.com/app', '_blank');
    }
  },

  {
    title: 'Telegram',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6w',
    gradient: 'linear-gradient(135deg, #37aee2, #1e96c8)',
    svg: (
      <svg
        viewBox='0 0 48 48'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        className='are-pure-svg'
      >
        <g clipPath='url(#Icon_Color-Telegram_Circle_svg__a)'>
          <path
            d='M7.03 40.97A24 24 0 1 0 40.97 7.03 24 24 0 0 0 7.03 40.97Z'
            fill='url(#Icon_Color-Telegram_Circle_svg__b)'
          ></path>
          <path
            d='m9.99 23.8 16.16-6.67c1.6-.7 7-2.91 7-2.91s2.5-.97 2.3 1.39c-.07.97-.63 4.37-1.18 8.04l-1.74 10.9s-.14 1.59-1.32 1.87c-1.18.27-3.12-.97-3.46-1.25-.28-.21-5.2-3.33-7.01-4.86-.49-.41-1.04-1.25.07-2.22 2.5-2.29 5.48-5.13 7.28-6.93.84-.84 1.67-2.78-1.8-.42l-9.78 6.59s-1.11.7-3.2.07c-2.07-.63-4.5-1.46-4.5-1.46S7.14 24.9 9.99 23.8Z'
            fill='#fff'
          ></path>
        </g>
        <defs>
          <linearGradient
            id='Icon_Color-Telegram_Circle_svg__b'
            x1='40.97'
            y1='7.03'
            x2='7.03'
            y2='40.97'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#37AEE2'></stop>
            <stop offset='1' stopColor='#1E96C8'></stop>
          </linearGradient>
          <clipPath id='Icon_Color-Telegram_Circle_svg__a'>
            <path fill='#fff' d='M0 0h48v48H0z'></path>
          </clipPath>
        </defs>
      </svg>
    ),
    onclick: ({
      refButton,
      url,
      description = 'Check out this post'
    }: {
      refButton: React.RefObject<HTMLButtonElement | null>;
      url: string;
      description?: string;
    }) => {
      const $btn = refButton?.current;
      if ($btn instanceof HTMLButtonElement) {
        // Show temporary button feedback
        $btn.classList.remove('btn-hidden');
        $btn.innerHTML = 'Link copied';
        navigator.clipboard.writeText(url);

        setTimeout(() => {
          $btn.classList.add('btn-hidden');
        }, 1200);
      }

      // Build Telegram share URL
      const telegramUrl =
        `https://t.me/share/url` +
        `?text=${encodeURIComponent(description)}` +
        `&url=${encodeURIComponent(url)}`;

      // Open Telegram share
      window.open(telegramUrl, '_blank');
    }
  }
];

const MODE_SHARE = {
  SAVE_VIDEO_OR_IMAGE: 0,
  COPY_LINK: 1,
  REPOST: 2,
  X: 3,
  PINTEREST: 4,
  REDDIT: 5,
  FACEBOOK: 6,
  WHATSAPP: 7,
  EMAIL: 8,
  DISCORD: 9,
  TELEGRAM: 10
};

export function AsideBottomOfShare({
  updateIsContainerShareOpen,
  videoSrc,
  arrayImages,
  username,
  containerRef,
  isContainerShareOpen = false,
  post
}: {
  updateIsContainerShareOpen: () => void;
  isContainerShareOpen?: boolean;
  videoSrc?: string;
  arrayImages?: string[];
  username: string;
  containerRef: React.RefObject<HTMLElement | null>;
  post: postProps & postComonProps;
}) {
  const systembtn = useRef<null | HTMLButtonElement>(null);
  const posterOfPoster = post.arrayImages
    ? post.arrayImages[0]
    : URL_PHOTO_MISSING_IMAGE;

  if (containerRef.current) {
    containerRef.current?.classList.toggle(
      'showBackgroundBlackInText',
      isContainerShareOpen
    );
  }

  return (
    <article className='aside-bottom-of-share'>
      <header className='am-header-of-share'>
        Options to share
        <CloseContainer
          className='close-container-bottom'
          onClick={updateIsContainerShareOpen}
        />
        <div className='system-container'>
          <button className='system-btn btn-hidden' ref={systembtn}>
            OK
          </button>
        </div>
      </header>
      <section className='am-footer-of-the-share'>
        {ARRAY_OF_SHARE.map(
          (
            {
              id,
              title,
              gradient,
              svg,
              onclick = () => console.log('Without Function')
            },
            index
          ) => {
            let amTitle =
              index === MODE_SHARE.SAVE_VIDEO_OR_IMAGE
                ? videoSrc
                  ? 'Save Video'
                  : `Save Photo${(arrayImages?.length ?? 0) > 1 ? 's' : ''}`
                : title;

            if (index === MODE_SHARE.REPOST) {
              return (
                <RepublishItemShare
                  amTitle={amTitle}
                  gradient={gradient}
                  id={id}
                  post={post}
                  svg={svg}
                  key={id}
                />
              );
            }

            return (
              <aside
                className='item-share'
                key={id}
                onClick={() => {
                  if (index === MODE_SHARE.SAVE_VIDEO_OR_IMAGE) {
                    onclick({
                      refButton: systembtn,
                      nombreArchivo: username,
                      urls: videoSrc ? [videoSrc] : arrayImages ?? [],
                      updateIsContainerShareOpen
                    });
                  } else if (index === MODE_SHARE.COPY_LINK) {
                    onclick({
                      refButton: systembtn
                    });
                  } else if (index === MODE_SHARE.X) {
                    onclick({
                      username,
                      refButton: systembtn
                    });
                  } else if (index === MODE_SHARE.PINTEREST) {
                    onclick({
                      refButton: systembtn,
                      url: window.location.href,
                      media: posterOfPoster,
                      description: post.description
                    });
                  } else if (
                    index === MODE_SHARE.REDDIT ||
                    index === MODE_SHARE.FACEBOOK ||
                    index === MODE_SHARE.WHATSAPP ||
                    index === MODE_SHARE.EMAIL ||
                    index === MODE_SHARE.DISCORD ||
                    index === MODE_SHARE.TELEGRAM
                  ) {
                    onclick({
                      refButton: systembtn,
                      url: window.location.href,
                      description: post.description
                    });
                  }
                }}
              >
                <article
                  className='circle-gradient'
                  style={{ backgroundImage: gradient }}
                >
                  {svg}
                </article>
                <h4 className='title-share'>{amTitle}</h4>
              </aside>
            );
          }
        )}
      </section>
    </article>
  );
}
