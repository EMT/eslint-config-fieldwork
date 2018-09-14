module.exports = {
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [
            "error",
            100,
            2,
            {
                "ignoreUrls": true,
                "ignoreComments": false,
                "ignoreRegExpLiterals": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignorePattern": "\\s*<"
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "brace-style": [
            "error",
            "stroustrup"
        ],
        "template-curly-spacing": [
            "error",
            "always"
        ],
        "computed-property-spacing": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "always"
        ],
        "react/jsx-curly-spacing": [
            "error",
            "always",
            {
                "allowMultiline": true
            }
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        // make default props work with flow types
        "react/default-props-match-prop-types": [
            "error", {
                "allowRequiredDefaults": true
            }
        ],
        "react/require-default-props": [
            "error", {
                "forbidDefaultForRequired": false
            }
        ],
    }
}
