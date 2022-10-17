export const presets = ["module:metro-react-native-babel-preset", "babel-preset-expo"];
export const env = {
  production: {},
};
export const plugins = [
  [
    "@babel/plugin-proposal-decorators",
    {
      legacy: true,
    },
  ],
  ["@babel/plugin-proposal-optional-catch-binding"],
];
