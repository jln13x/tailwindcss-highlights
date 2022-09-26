# tailwindcss highlights (to be optimized)

This plugin adds utility classes to easily add highlights to your texts.

## Installation

To install the package, run

    npm install tailwindcss-highlights

Add the plugin to the `tailwind.config.js` file in the root of your project:

```javascript
module.exports = {
  plugins: [
    require('tailwindcss-highlights')),
  ]
}
```

## Utility Classes

`highlight` - Required to setup the highlight

`highlight-variant-{VALUE}` - Choose a variant (value being a number between 1 and 8)

`highlight-{color}` - Choose any color that you defined in your theme

`highlight-spread-{VALUE}` - Let the highlight spread on the x and y achsis.
`highlight-spread-x-{VALUE}` - Let the highlight spread on the x.
`highlight-spread-y-{VALUE}` - Let the highlight spread on the y.

Possible Spread Values: 1,2,3,4
