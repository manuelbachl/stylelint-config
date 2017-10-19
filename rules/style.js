module.exports = {
    rules: {
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'font-family-name-quotes': 'always-where-required',
        'font-weight-notation': 'named-where-possible',
        'function-comma-space-after': 'always',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',
        'number-leading-zero': 'never',
        'number-no-trailing-zeros': true,
        'string-quotes': 'single',
        'length-zero-no-unit': true,
        'unit-case': 'lower',
        'value-keyword-case': 'lower',
        'value-list-comma-space-after': 'always',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,
        'custom-property-empty-line-before': 'always',
        'property-case': 'lower',
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': 'never',
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',
        'block-closing-brace-empty-line-before': 'always-multi-line',
        'block-closing-brace-newline-after': ['always', {
            ignoreAtRules: ['if', 'else'],
        }],
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-after': 'always-single-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-newline-before': 'never-single-line',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-type-case': 'lower',
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',
        'rule-empty-line-before': 'always',
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',
        'at-rule-empty-line-before': 'always',
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': 'always-multi-line',
        'at-rule-name-space-after': 'always',
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',
        indentation: [4, {
            indentClosingBrace: false,
        }],
        'max-empty-lines': [1, {
            ignore: ['comments'],
        }],
        'max-line-length': [120, {
            ignore: ['comments'],
        }],
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
    },
};
