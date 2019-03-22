/**
 * strvcom/eslint-config-react
 *
 * @author      Pavel Prichodko <pavel.prichodko@strv.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  root: true,
  extends: ['@strv/eslint-config-base'],

  parser: 'babel-eslint',

  plugins: ['react', 'jsx-a11y', 'react-hooks'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  /* eslint-disable max-len */
  rules: {
    // Enforces consistent naming for boolean props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'warn',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message:
          'Boolean prop: ({{ propName }}) should start with is/has - pattern: ({{ pattern }})',
      },
    ],

    // Prevent extraneous defaultProps on components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
    'react/default-props-match-prop-types': 'warn',

    // Forbid certain props on DOM Nodes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
    'react/forbid-dom-props': [
      'warn',
      {
        forbid: ['style', 'id'],
      },
    ],

    // Forbids using another component's prop types unless they are explicitly imported/exported
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],

    // Prevent using this.state inside this.setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',

    // Prevent using Array index in key props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'warn',

    // This rule helps prevent problems caused by using children and the dangerouslySetInnerHTML
    // prop at the same time
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // Prevent usage of setState in componentDidMount, no-op for >= v16.3
    'react/no-did-mount-set-state': 'warn',

    // Prevent usage of setState in componentDidUpdate, no-op for >= v16.3
    'react/no-did-update-set-state': 'warn',

    // Prevent usage of deprecated methods, including component lifecyle methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': 'warn',

    // NEVER mutate this.state directly, as calling setState() afterwards may replace the mutation
    //  you made. Treat this.state as if it were immutable
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in
    // the future. Use callback refs instead
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',

    // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its
    // way to being officially deprecated
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',

    // Declaring only one component per file improves readability and reusability of components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': [
      'warn',
      {
        ignoreStateless: true,
      },
    ],

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'warn',

    // Prevent usage of the return value of React.render
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',

    // Ensure no casing typos were made declaring static class properties and lifecycle methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // Currently, two ways are supported by React to refer to components. The first way, providing
    // a string identifier, is now considered legacy in the official documentation
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // Prevent using this in stateless functional components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // Rule prevents characters that you may have meant as JSX escape characters from being
    // accidentally injected as a text node in JSX statements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': ['error'],

    // In JSX all DOM properties and attributes should be camelCased to be consistent with standard
    // JavaScript style
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': ['error'],

    // Certain legacy lifecycle methods are unsafe for use in async React applications
    // and cause warnings in strict mode
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': ['warn', { checkAliases: true }],

    // Warns you if you have defined a prop type but it is never being used anywhere
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/no-unused-prop-types': ['warn'],

    // Warns you if you have defined a property on the state, but it is not being used anywhere
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
    'react/no-unused-state': 'warn',

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
    'react/no-will-update-set-state': ['error'],

    // PropTypes improve the reusability of your component by validating the received data
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': ['warn'],

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': ['warn', { forbidDefaultForRequired: true }],

    // Enforce ES5 or ES6 class for returning value in render function
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // Enforce component methods order (fixable)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/sort-comp': ['warn'],

    // Enforce style prop value being an object
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',

    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    'react/void-dom-elements-no-children': 'error',

    // Ensures that any component or prop methods used to handle events are correctly prefixed
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-handler-names': ['warn'],

    // Warn if an element that likely requires a key prop--namely, one present in an array literal
    //  or an arrow function expression
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'warn',

    // A bind call or arrow function in a JSX prop will create a brand new function on every single
    //  render. This is bad for performance, as it may cause unnecessary re-renders if a brand new
    // function is passed as a prop to a component that uses reference equality check on the prop
    // to determine if it should update
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],

    // This rule prevents comment strings (e.g. beginning with // or /*) from being accidentally
    // injected as a text node in JSX statements
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'warn',

    // Creating JSX elements with duplicate props can cause unexpected behavior in your application
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],

    // When creating a JSX element that has an a tag, it is often desired to have the link open
    // in a new tab using the target='_blank' attribute. Using this attribute unaccompanied by
    // rel='noreferrer noopener', however, is a severe security vulnerability. This rules requires
    //  that you accompany target='_blank' attributes with rel='noreferrer noopener'
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['warn', { enforceDynamicLinks: 'always' }],

    // This rule helps locate potential ReferenceErrors resulting from misspellings
    //  or missing components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // This rule allows you to enforce curly braces or disallow unnecessary curly braces
    //  in JSX props and/or children
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': ['warn', 'never'],

    // Enforce shorthand or standard form for React fragments
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
    'react/jsx-fragments': 'warn',

    // Enforces coding style that user-defined JSX components are defined andreferenced in
    // PascalCase
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],

    // JSX expands to a call to React.createElement, a file which includes React but only uses
    //  JSX should consider the React variable as used
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be incorrectly marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Plugin enforces the Rules of Hooks (https://reactjs.org/docs/hooks-rules.html)
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    // Enforce emojis are wrapped in and provide screenreader access
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
    'jsx-a11y/accessible-emoji': 'warn',

    // Enforce that all elements that require alternative text have meaningful information
    // to relay back to the end user
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
    'jsx-a11y/alt-text': 'warn',

    // Enforce that anchors have content and that the content is accessible to screen readers
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
    'jsx-a11y/anchor-has-content': 'warn',

    // Enforce all anchors are valid, navigable elements
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref'],
      },
    ],

    // Enforce elements with aria-activedescendant are tabbable
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',

    // Elements cannot use an invalid ARIA attribute
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
    'jsx-a11y/aria-props': 'warn',

    // ARIA state and property values must be valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
    'jsx-a11y/aria-proptypes': 'warn',

    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
    'jsx-a11y/aria-role': 'warn',

    // Enforce that elements that do not support ARIA roles, states, and properties do not have
    // those attributes
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
    'jsx-a11y/aria-unsupported-elements': 'warn',

    // Enforce heading (h1, h2, etc) elements contain accessible content
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
    'jsx-a11y/heading-has-content': 'warn',

    // <iframe> elements must have a unique title property to indicate its content to the user
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
    'jsx-a11y/iframe-has-title': 'warn',

    // Enforce <img> alt prop does not contain the word "image", "picture", or "photo"
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
    'jsx-a11y/img-redundant-alt': 'warn',

    // Enforce no accessKey prop on element. Access keys are HTML attributes that allow web
    // developers to assign keyboard shortcuts to elements. Inconsistencies between keyboard
    // shortcuts and keyboard commands used by screenreader and keyboard only users create
    // accessibility complications so to avoid complications, access keys should not be used
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
    'jsx-a11y/no-access-key': 'warn',

    // Enforces that no distracting elements are used. Elements that can be visually distracting
    // can cause accessibility issues with visually impaired users
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
    'jsx-a11y/no-distracting-elements': 'warn',

    // Enforce usage of onBlur over onChange on select menus for accessibility
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
    'jsx-a11y/no-onchange:': 'warn',

    // Enforce explicit role property is not the same as implicit/default role property on element
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
    'jsx-a11y/no-redundant-roles': 'warn',

    // Elements with ARIA roles must have all required attributes for that role
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
    'jsx-a11y/role-has-required-aria-props': 'warn',

    // Enforce that elements with explicit or implicit roles defined contain only aria-*
    // properties supported by that role
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
    'jsx-a11y/role-supports-aria-props': 'warn',

    // The scope scope should be used only on <th> elements
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
    'jsx-a11y/scope': 'warn',
  },
}
