# tailwindcss-highlights - A plugin for tailwindcss

See it in Action 👉 [Preview](https://tailwindcss-highlights.hubatsch.dev/) or [Playground](https://play.tailwindcss.com/hM0gHS3erl)


This plugin adds utility classes to easily add highlights to your texts.

## Installation

To install the package, run

    npm install -D tailwindcss-highlights

Add the plugin to the `tailwind.config.js` file in:

```javascript
module.exports = {
  plugins: [
    require('tailwindcss-highlights')),
  ]
}
```

## Usage

Use `highlight` to add the default highlight (variant 1) to your element. 
```html
<p class="highlight">
    Lorem Ipsum
</p>
```
\
To change the color of the highlight use `highlight-{color}`. All the colors from your theme (default ones and customs) are available aswell as [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values).

```html
<p class="highlight highlight-indigo-600">
    Lorem Ipsum
</p>
```
\
You can choose from different kinds of variants with `highlight-variant-{value}`. Check out the available variants on the [Preview](https://tailwindcss-highlights.hubatsch.dev/) or use your own variant e.g. `highlight-variant-[url(./path/to/custom-variant.svg)]`.

```html
<p class="highlight highlight-indigo-600 highlight-variant-7">
    Lorem Ipsum
</p>
```
Credits for some of the variants: [svgbox](https://svgbox.net/)

\
Use the `highlight-spread-`-Utility to make the highlight spread into some direction.

- `highlight-spread-{size}` - Spread in all directions
- `highlight-spread-{y,x}-{size}` - Spread on the x or y axis
- `highlight-spread-{t,b,l,r}-{size}` - Set the spread for each direction individually
<br />

| Size   | Value   |
| ------ | ------- |
| `0`    | `0`     |
| `none` | `0`     |
| `sm`   | `-4px`  |
| `md`   | `-8px`  |
| `lg`   | `-12px` |
| `xl`   | `-16px` |

[Arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) are also supported.
<br />

```html
<p class="highlight highlight-indigo-600 highlight-variant-7 highlight-spread-md">
    Lorem Ipsum
</p>

<p class="highlight highlight-indigo-600 highlight-spread-x-sm highlight-spread-y-xl">
    Lorem Ipsum
</p>

<p class="highlight highlight-indigo-600 highlight-spread-l-xl highlight-spread-t-sm">
    Lorem Ipsum
</p>
```

## Other Examples
This plugin adds the highlight as `::after`-pseudo element so its possible to add additional styling by using the `after:`-utility.
\
<br />
**Change the position**
```html
<p class="highlight highlight-variant-5 after:translate-y-2 after:-translate-x-4">
    Lorem Ipsum
</p>
```
**Adding a gradient to the highlight**
```html
<p class="highlight highlight-variant-12 after:bg-gradient-to-tr after:from-amber-500 after:to-sky-500">
    Lorem Ipsum
</p>
```
\
**Rotate the highlight**
```html
<p class="highlight highlight-variant-12 after:rotate-12">
    Lorem Ipsum
</p>
```

Note: The owner of this repository is not with associated with the company Tailwind Labs Inc. This is just a plugin for [tailwindcss](https://tailwindcss.com/)
