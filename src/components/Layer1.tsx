import "@/styles/Layer1.css";
import React, { useEffect, useRef, useState } from "react";

export function Layer1() {
  const [indexOfVisibleIcon, setindexOfVisibleIcon] = useState(12);
  const containerGrid = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerGrid.current;
    if (!container) return;

    let clone: HTMLElement | null = null;
    let target: HTMLElement | null = null;
    let offsetX = 0;
    let offsetY = 0;

    const handlePress = (e: MouseEvent) => {
      target = e.target as HTMLElement;
      if (!target.classList.contains("social-top")) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      offsetX = e.clientX - targetRect.left;
      offsetY = e.clientY - targetRect.top;

      clone = target.cloneNode(true) as HTMLElement;
      clone.classList.add("drag", "visible");
      clone.style.position = "absolute";
      clone.style.pointerEvents = "none";
      clone.style.zIndex = "9999";

      // Posición inicial
      let initLeft = e.clientX - containerRect.left - offsetX;
      let initTop = e.clientY - containerRect.top - offsetY;

      // Limitar desde el inicio también
      const maxLeft = container.clientWidth - target.offsetWidth;
      const maxTop = container.clientHeight - target.offsetHeight;

      initLeft = Math.max(0, Math.min(initLeft, maxLeft));
      initTop = Math.max(0, Math.min(initTop, maxTop));

      clone.style.left = `${initLeft}px`;
      clone.style.top = `${initTop}px`;

      container.appendChild(clone);
      target.classList.remove("visible");

      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", handleRelease);
    };

    const handleMove = (e: MouseEvent) => {
      if (!clone) return;

      const containerRect = container.getBoundingClientRect();
      const maxLeft = container.clientWidth - clone.offsetWidth;
      const maxTop = container.clientHeight - clone.offsetHeight;

      let newLeft = e.clientX - containerRect.left - offsetX;
      let newTop = e.clientY - containerRect.top - offsetY;

      // Limitar para que no se salga del container
      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      newTop = Math.max(0, Math.min(newTop, maxTop));

      clone.style.left = `${newLeft}px`;
      clone.style.top = `${newTop}px`;
    };

    const handleRelease = () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleRelease);

      if (clone) {
        clone.remove();
        clone = null;
      }
      if (target) {
        target.classList.add("visible");
        target = null;
      }
    };

    document.addEventListener("mousedown", handlePress);

    return () => {
      document.removeEventListener("mousedown", handlePress);
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleRelease);
    };
  }, []);

  return (
    <article className="layer1 layer-container">
      <aside className="padTop"></aside>
      <section className="container-grid" ref={containerGrid}>
        {[...Array(35).keys()].map((idx) => {
          const isVisible = idx === indexOfVisibleIcon;
          const className = `social-top ${isVisible ? "visible" : ""}`;
          return (
            <article key={idx} className={className} draggable="false">
              {isVisible && (
                <img
                  draggable="false"
                  src="/assets/tiktok-logo.avif"
                  className="titk-tok-logo"
                />
              )}
            </article>
          );
        })}
      </section>
    </article>
  );
}
