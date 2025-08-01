import '@/styles/Layer1.css';
import { Container1 } from '@/components/Container1';
import { Container2 } from '@/components/Container2';
import { useNcontainer, CONTAINER_IS } from '@/store/useNcontainer';
import { Container3 } from '@/components/Container3';
import { NavbarTop } from '@/components/pages/SliderPosts/NavbarTop';
import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { useEffect, useRef, useState } from 'react';

function NavbarTopWithHourAndWifi() {
  const hourRef = useRef<HTMLButtonElement | null>(null);
  const [currentHour, setCurrentHour] = useState<string>('');

  useEffect(() => {
    const updateHour = () => {
      const now = new Date();
      setCurrentHour(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };

    updateHour();
    const intervalId = setInterval(updateHour, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <aside className='navbar-top'>
      <button className='navbar-top-button hour-and-wifi' ref={hourRef}>
        {currentHour}
      </button>
      <button className='navbar-top-button hour-and-wifi container-sprites'>
        <div className='iphone-sprite sprite-1'></div>
        <div className='iphone-sprite sprite-2'></div>
        <div className='iphone-sprite sprite-3'></div>
      </button>
    </aside>
  );
}

export function Layer1() {
  const containerNum = useNcontainer(state => state.containerNum);
  const currenPage = useCurrentPage(state => state.currenPage);

  return (
    <article className='layer1 layer-container'>
      <aside className='padTop'>
        {IS_ACTIVE_BUTTON.HOME === currenPage &&
          CONTAINER_IS.HOME === containerNum && <NavbarTop />}
        {IS_ACTIVE_BUTTON.HOME !== currenPage &&
          CONTAINER_IS.HOME === containerNum && <NavbarTopWithHourAndWifi />}
        {(CONTAINER_IS.DRAG_AND_DROP_ICON === containerNum || CONTAINER_IS.INTRO_PAGE === containerNum) && (
          <NavbarTopWithHourAndWifi />
        )}
      </aside>
      <section className='container-content'>
        {CONTAINER_IS.DRAG_AND_DROP_ICON === containerNum && <Container1 />}
        {CONTAINER_IS.INTRO_PAGE === containerNum && <Container2 />}
        {CONTAINER_IS.HOME === containerNum && <Container3 />}
      </section>
    </article>
  );
}
