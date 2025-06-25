import '@/styles/Layer1.css';
import { Container1 } from '@/components/Container1';
import { Container2 } from '@/components/Container2';
import { useNcontainer } from '@/store/useNcontainer';
import { CONTAINER } from '@/types/consts';
import { Container3 } from './Container3';
import { NavbarTop } from "@/components/pages/SliderPosts/NavbarTop";
import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';

export function Layer1() {
  const containerNum = useNcontainer(state => state.containerNum);
  const currenPage = useCurrentPage(state => state.currenPage)

  return (
    <article className='layer1 layer-container'>
      <aside className='padTop'>
        {(IS_ACTIVE_BUTTON.HOME === currenPage && CONTAINER.HOME === containerNum) && <NavbarTop />}
      </aside>
      <section className='container-content'>
        {/* After prove with an Array */}
        {CONTAINER.DRAG_AND_DROP_ICON === containerNum && <Container1 />}
        {CONTAINER.INTRO_PAGE === containerNum && <Container2 />}
        {CONTAINER.HOME === containerNum && <Container3 />}
      </section>
    </article>
  );
}
