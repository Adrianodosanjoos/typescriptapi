import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,


  "rules", {
  "prettier/prettier": "warn",
  "no-useless-constructor": "off",
  "@typescript-eslint/on-unused-vars": "off",
  "import-helpers/order-imports": [
    "warn",
    {
      "newlinesBetween": "always",
      "groups": [
            "/^node:*/",
            "module",
            [
              "parents",
              "sibling",
              "index"
            ] 
      ],
      "alphabetize": {
        "order": "asc",
        "ignoreCase":true
      }
    }
  ]
}
];

