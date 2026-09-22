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
  window.va?.(event, payload);
  window.gtag?.('event', event, payload);
  window.plausible?.(event, { props: payload });
  window.dispatchEvent(new CustomEvent('portfolio:track', { detail: { event, payload } }));
};
