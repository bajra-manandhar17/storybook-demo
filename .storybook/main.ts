import type { StorybookConfig } from "@storybook/react-vite";


const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // refs: {
  //   'design-system': {
  //     title: 'Storybook Design System',
  //     url: 'https://master--5ccbc373887ca40020446347.chromatic.com/',
  //     expanded: false, // Optional, true by default
  //   },
  // },


  // refs: (config, { configType }) => {
  //   if (configType === 'DEVELOPMENT') {
  //     return {
  //       react: {
  //         title: 'Composed React Storybook running in development mode',
  //         url: 'http://localhost:7007',
  //       },
  //       angular: {
  //         title: 'Composed Angular Storybook running in development mode',
  //         url: 'http://localhost:7008',
  //       },
  //     };
  //   }
  //   return {
  //     react: {
  //       title: 'Composed React Storybook running in production',
  //       url: 'https://your-production-react-storybook-url',
  //     },
  //     angular: {
  //       title: 'Composed Angular Storybook running in production',
  //       url: 'https://your-production-angular-storybook-url',
  //     },
  //   };
  // },
};
export default config;
