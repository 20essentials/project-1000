
import '@/styles/Container3.css';
import { baseUrl } from '@/utils/functions';
import { SliderPosts } from '@/components/SliderPosts/SliderPosts';
import { NavbarBottom } from '@/components/NavBarBottom/NavbarBottom';

export function Container3() {
  
  return <article className='Container3 inner-content'>
    <SliderPosts />
    <NavbarBottom />
  </article>;
}
