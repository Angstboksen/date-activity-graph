import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "index.jsx",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "index.jsx",
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    url(),
    svgr(),
    resolve(),
    typescript(),
    babel(),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react/index.js": [
          "cloneElement",
          "createContext",
          "Component",
          "createElement",
        ],
        "node_modules/react-dom/index.js": ["render", "hydrate"],
        "node_modules/react-is/index.js": [
          "isElement",
          "isValidElementType",
          "ForwardRef",
        ],
      },
    }),
  ],
};
