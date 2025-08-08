import '@/components/pages/Upload/Upload.css';
import CamaraVideo from './CamaraVideo';

export function Upload() {
  return (
    <article className='upload'>
      <aside className='container-of-upload-and-create scroll-x'>
          <CamaraVideo />

        <section className='upload-section'></section>
      </aside>
      <footer className='footer-upload'>
        <button className='footer-button-create'>Create</button>
        <button className='footer-button-upload'>Upload</button>
      </footer>
    </article>
  );
}
