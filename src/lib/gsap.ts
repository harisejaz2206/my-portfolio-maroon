type GsapBundle = {
  gsap: typeof import('gsap').gsap;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
};

let cachedBundle: Promise<GsapBundle> | null = null;

export const loadGsap = async (): Promise<GsapBundle> => {
  if (!cachedBundle) {
    cachedBundle = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([gsapModule, scrollTriggerModule]) => {
        const gsap = gsapModule.gsap || gsapModule.default || (gsapModule as unknown as typeof import('gsap').gsap);
        const ScrollTrigger =
          scrollTriggerModule.ScrollTrigger ||
          (scrollTriggerModule.default as typeof import('gsap/ScrollTrigger').ScrollTrigger);

        gsap.registerPlugin(ScrollTrigger);
        return { gsap, ScrollTrigger };
      }
    );
  }

  return cachedBundle;
};
