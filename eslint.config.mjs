import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,jsx}"] },
	{ files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node, // Add Node.js globals here
			},
		},
	},
	{
		rules: {
			"prefer-const": "warn",
			"no-constant-binary-expression": "error",
		},
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
];
