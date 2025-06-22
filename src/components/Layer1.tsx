import '@/styles/Layer1.css';

export function Layer1() {
  return <article className='layer1 layer-container'>
    <aside className="padTop"></aside>
    <section className="container-grid">
      {
        [...new Array(35).keys()].map((n) => <aside className="social-container">
          <article className="social-top"></article>
          <article className="social-bottom">Tik Tok</article>
        </aside>)
      }
    </section>
  </article>;
}
