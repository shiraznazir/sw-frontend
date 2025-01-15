import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Add base configurations from Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // Custom configuration
  ...compat.config({
    extends: ["next"],
    rules: {
      // Disable specific rules
      "react/no-unescaped-entities": "off", // Allow unescaped entities in JSX
      "@next/next/no-page-custom-font": "off", // Disable warnings about custom fonts
      
      // Additional examples of disabled rules
      "no-console": "off", // Allow console statements
      "react/prop-types": "off", // Disable prop-types requirement
      

    },
  }),
];

export default eslintConfig;
