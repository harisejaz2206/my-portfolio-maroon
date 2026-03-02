type TrackPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: TrackPayload }) => void;
    va?: (event: string, payload?: TrackPayload) => void;
  }
}

export const track = (event: string, payload: TrackPayload = {}) => {
  if (typeof window === 'undefined') return;

  if (typeof window.va === 'function') {
    window.va(event, payload);
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, payload);
  }

  if (typeof window.plausible === 'function') {
    window.plausible(event, { props: payload });
  }

  window.dispatchEvent(new CustomEvent('portfolio:track', { detail: { event, payload } }));
};

