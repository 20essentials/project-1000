import '@/styles/phone.css';
import { Layer1 } from './Layer1';
import { Layer0 } from '@/components/Layer0';

export function Phone() {
  return (
    <main className='phone'>
      <Layer0 />
      <Layer1 />
    </main>
  );
}
