import '@/styles/Layer1.css';
import { Container1 } from '@/components/Container1';
import { Container2 } from '@/components/Container2';

export function Layer1() {
  return (
    <article className='layer1 layer-container'>
      <aside className='padTop'></aside>
      <section className='container-content'>
        <Container1 />
        <Container2 />
      </section>
    </article>
  );
}
