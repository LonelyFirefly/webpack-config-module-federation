import { BuildOptions } from "config/build/types/types";
import { removeDataTestidPlugin } from "./removeDataTestidPlugin";

export const buildBabelLoader = (options: BuildOptions) => {
   const isDev = options.mode === "development";
   const isProd = options.mode === "production";

   const plugins = [];

   if (isProd) {
      plugins.push([
         [
            removeDataTestidPlugin,
            {
               props: ["data-testid"],
            },
         ],
      ]);
   }

   return {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
         loader: "babel-loader",
         options: {
            presets: [
               "@babel/preset-env",
               "@babel/preset-typescript",
               [
                  "@babel/preset-react",
                  {
                     // runtime: isDev ? "automatic" : "classic",
                     runtime: "automatic",
                  },
               ],
            ],
            plugins: plugins.length ? plugins : undefined,
         },
      },
   };
};
