export const UPWORK_URL = 'https://www.upwork.com/freelancers/harisejaz';

const UTM_SOURCE = 'portfolio';
const UTM_MEDIUM = 'link';
const UTM_CAMPAIGN = 'upwork_ref';

export const buildUpworkUrl = (placement: string): string => {
  try {
    const url = new URL(UPWORK_URL);
    url.searchParams.set('utm_source', UTM_SOURCE);
    url.searchParams.set('utm_medium', UTM_MEDIUM);
    url.searchParams.set('utm_campaign', UTM_CAMPAIGN);
    url.searchParams.set('utm_content', placement);
    return url.toString();
  } catch {
    const separator = UPWORK_URL.includes('?') ? '&' : '?';
    return `${UPWORK_URL}${separator}utm_source=${UTM_SOURCE}&utm_medium=${UTM_MEDIUM}&utm_campaign=${UTM_CAMPAIGN}&utm_content=${placement}`;
  }
};
