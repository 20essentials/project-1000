import { CloseContainer } from './CloseContainer';

const ARRAY_OF_SHARE = [
  {
    title: 'Save Video',
    id: '7e46518d-d7cb-43e0-bdab-4aab2fda1e06'
  },
  {
    title: 'Copy Link',
    id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3g4h5i6j'
  },
  {
    title: 'Republish',
    id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3g4h5i6k'
  },
  {
    title: 'X',
    id: 'b1c8f0d2-3a4e-4c5b-9f6d-7e8f9a0b1c2d'
  },
  {
    title: 'Instagram',
    id: 'c3d4e5f6-7a8b-9a0b-1c2d-3e4f5g6h7i8j'
  },
  {
    title: 'Facebook',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6s'
  },
  {
    title: 'SMS',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3pASDFAS'
  },
  {
    title: 'WhatsApp',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6t'
  },
  {
    title: 'Discord',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6u'
  },
  {
    title: 'Email',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6v'
  },
  {
    title: 'Telegram',
    id: 'd1e2f3g4-5h6i-7j8k-9l0m-1n2o3p4q5r6w'
  }
];

export function AsideBottomOfShare({
  updateIsContainerShareOpen
}: {
  updateIsContainerShareOpen: () => void;
}) {
  return (
    <article className='aside-bottom-of-share'>
      <header className='am-header-of-share'>
        Options to share
        <CloseContainer
          className='close-container-bottom'
          onClick={updateIsContainerShareOpen}
        />
      </header>
      <section className='am-footer-of-the-share'>
        {ARRAY_OF_SHARE.map(({ id, title }) => {
          return (
            <aside className='item-share' key={id}>
              <article className='circle-gradient'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z'
                  />
                </svg>
              </article>
              <h4 className='title-share'>{title}</h4>
            </aside>
          );
        })}
      </section>
    </article>
  );
}
