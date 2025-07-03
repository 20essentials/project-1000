import '@/styles/Layer1.css';
import { Container1 } from '@/components/Container1';
import { Container2 } from '@/components/Container2';
import { useNcontainer, CONTAINER_IS } from '@/store/useNcontainer';
import { Container3 } from './Container3';
import { NavbarTop } from "@/components/pages/SliderPosts/NavbarTop";
import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';

export function Layer1() {
  const containerNum = useNcontainer(state => state.containerNum);
  const currenPage = useCurrentPage(state => state.currenPage)

  return (
    <article className='layer1 layer-container'>
      <aside className='padTop'>
        {(IS_ACTIVE_BUTTON.HOME === currenPage && CONTAINER_IS.HOME === containerNum) && <NavbarTop />}
      </aside>
      <section className='container-content'>
        {/* After prove with an Array */}
        {CONTAINER_IS.DRAG_AND_DROP_ICON === containerNum && <Container1 />}
        {CONTAINER_IS.INTRO_PAGE === containerNum && <Container2 />}
        {CONTAINER_IS.HOME === containerNum && <Container3 />}
      </section>
    </article>
  );
}
