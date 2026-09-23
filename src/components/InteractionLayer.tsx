import { useEffect, useRef, useState } from 'react';

const CURSOR_LABELS: Record<string, string> = {
  explore: 'EXPLORE',
  external: '↗',
  read: 'READ',
  view: 'VIEW',
  write: 'WRITE',
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function InteractionLayer() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine) and (hover: hover) and (min-width: 701px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateAvailability = () => setEnabled(finePointer.matches && !reducedMotion.matches);
    updateAvailability();

    finePointer.addEventListener('change', updateAvailability);
    reducedMotion.addEventListener('change', updateAvailability);

    return () => {
      finePointer.removeEventListener('change', updateAvailability);
      reducedMotion.removeEventListener('change', updateAvailability);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!enabled || !cursor || !label) return;

    document.documentElement.classList.add('has-custom-cursor');

    let frame = 0;
    let pointerX = -100;
    let pointerY = -100;
    let activeTarget: Element | null = null;
    let activeMagnetic: HTMLElement | null = null;

    const resetMagnetic = () => {
      if (!activeMagnetic) return;
      activeMagnetic.style.setProperty('--magnetic-x', '0px');
      activeMagnetic.style.setProperty('--magnetic-y', '0px');
      activeMagnetic = null;
    };

    const updateCursorState = (target: Element | null) => {
      const explicitTarget = target?.closest<HTMLElement>('[data-cursor]');
      const interactiveTarget = explicitTarget ?? target?.closest('a, button, [role="button"]');
      if (interactiveTarget === activeTarget) return;

      activeTarget = interactiveTarget;
      const state = explicitTarget?.dataset.cursor || (interactiveTarget ? 'link' : 'base');
      cursor.dataset.state = state;
      label.textContent = CURSOR_LABELS[state] ?? '';
    };

    const renderPointer = () => {
      cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.dataset.visible = 'true';
      updateCursorState(event.target instanceof Element ? event.target : null);

      const magnetic = event.target instanceof Element
        ? event.target.closest<HTMLElement>('[data-magnetic]')
        : null;

      if (magnetic !== activeMagnetic) {
        resetMagnetic();
        activeMagnetic = magnetic;
      }

      if (activeMagnetic) {
        const bounds = activeMagnetic.getBoundingClientRect();
        const offsetX = clamp((event.clientX - (bounds.left + bounds.width / 2)) * 0.08, -5, 5);
        const offsetY = clamp((event.clientY - (bounds.top + bounds.height / 2)) * 0.08, -5, 5);
        activeMagnetic.style.setProperty('--magnetic-x', `${offsetX}px`);
        activeMagnetic.style.setProperty('--magnetic-y', `${offsetY}px`);
      }

      if (!frame) frame = window.requestAnimationFrame(renderPointer);
    };

    const handlePointerLeave = () => {
      cursor.dataset.visible = 'false';
      resetMagnetic();
    };

    const handleScroll = () => {
      updateCursorState(document.elementFromPoint(pointerX, pointerY));
      resetMagnetic();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
      if (frame) window.cancelAnimationFrame(frame);
      resetMagnetic();
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="custom-cursor" ref={cursorRef} data-state="base" data-visible="false" aria-hidden="true">
      <span className="custom-cursor-dot" />
      <span className="custom-cursor-label" ref={labelRef} />
    </div>
  );
}
