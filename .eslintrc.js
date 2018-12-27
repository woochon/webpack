module.exports = {
    extends: ["plugin:vue/recommended"],
    //parser:'babel-eslint',
    parserOptions:{
        parse:'babel-eslint'
    },
    rules: {
        "indent": ["error", 2],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-console": "error",
        "arrow-parens": 0
    }
};

