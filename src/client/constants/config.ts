import getConfig from 'next/config';

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { publicRuntimeConfig } = getConfig();

// only available to both node server and browser
export const config = {
  API_BASE_URL: publicRuntimeConfig.API_BASE_URL,
};
