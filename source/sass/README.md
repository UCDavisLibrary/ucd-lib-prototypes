# SASS Folder Structure

```
|-- sass
|   |-- 0_utility
|   |-- 1_base_html
|   |-- 2_base_class
|   |-- 3_component
|   |-- 4_region
|   |-- 5_layout
|   |-- 6_skin
|   |-- _all-partials.scss
|   |-- _hacks.scss
|   |-- no-query.scss
|   |-- style.scss
```

## 0. Utility
This folder contains global tools or base settings.

**_variables.scss** contains all the site SASS variables which will be used by components, mixins, and anything else which needs values abstracted for site-wide use.

Mixins should be placed here so that they are usable for all SASS partials.


## 1. Base HTML
Only basic HTML tags should be used in this directory. This is the foundation for all classes which will follow.

> PatternLab mapping: Atoms

## 2. Base Class
Any basic element styles which would augment Base HTML or will be needed by various components should go here. Examples would be Buttons or other default styles before being turned into Components.

> PatternLab mapping: Atoms

## 3. Components
**The majority of all styles will go here.** Each component should be completely isolated from any other component. There should not be any sharing of styles among components. As well, cascading order should not be required for any component.

> PatternLab mapping: Molecules and Organisms

In general, stay away from assuming any sort of HTML structure. Obviously this isn't always possible, but it's a good rule of thumb to follow.

Don't Use:
```scss
.block div ul li {
  margin: 0;
}
```
Instead Use:
```scss
.block__item {
  margin: 0;
}
```

## 4. Region
This section is for any larger formatting to a specific region such as a header or footer. Think of this as something that augments and holds compontents inside of it. This section should be used sparingly.

> PatternLab mapping: Organisms

## 5. Layout
Use this folder for any sitewide layout classes. This should be agnostic from the rest of the site's styles.

> PatternLab mapping: Templates

Prefix layout classes with ``.l-`` which will make reading through html easy to spot layout items.

For Example:
```scss
.l-header {}
.l-footer {}
```

## 6. Skin
This folder is used for sitewide changes via a class on the ``<body>`` tag. This is useful for changing an entire site's appearance.


## Files
**_all-partials.scss**: this partial is auto-generated via ``grunt sass-globbing``. This allows all the partials from folders 1-6 to be imported without having to manually add each partial individually. Don't put anything in this file or it will be overridden the next time it is auto-generated.

**_hacks.scss**: this partial should be used sparingly when something needs to be done very quickly without time to put a style in its proper place. This file overrides everything so it should be cleaned up regularly so that styles go in their proper place.

**no-query.scss**: This is an auto generated duplicate of **style.css** but without media queries. It is used as a legacy fallback for ie7 & ie8. Adding "true" to any @breakpoint() mixin will place the contents of that mixin in this file.

**style.scss**: This is the main file which will be rendered into **style.css**. It contains all of the SASS libraries and partials necessary to build CSS. 

Don't put any styles directly into **no-query.scss** or **style.scss**!


# CSS formatting guidelines
We use the [Drual CSS guidlines](https://www.drupal.org/node/1887862) and [Drupal CSS Architecture](https://www.drupal.org/coding-standards/css/architecture)

One item to note is that this guideline is for CSS and does not take SASS/SCSS syntax into account. Because of this we do have one specific change.

Place a space in between each class. This allows better readability since each SASS partial will only have a few classes per file.

Example
```scss
.block {
  padding: 1em;
}

.block--success {
  color: green;
}
```

> ID tags should NEVER be used! Only use classes.

## SASS formatting guidelines
The order of mixins and placeholders:

1. extend %placeholder
2. include mixin()
3. regular styles
4. include breakpoint() //media query

```scss
.block {
  // Placeholder is extended
  @extend %default-block;
  
  // Mixin is added
  @include font-size(16px);
  
  // Normal styles are used
  padding: 0;
  text-align: center;
  
  // Use a Media Query to augment for responsive design
  @include breakpoint(500px) {
    padding: 1em;
  }
}
```

## BEM naming format using SASS
```scss
.block {
  // Add any .block styles here
 
  &__element {
    // Add any elements styles here
  }
  
  &--modifier {
    // Add modifiers here
  }
}
```

This will render into CSS
```scss
.block {
  // .block styles here
}
 
.block__element {
  // .block__element styles here
}
  
.block--modifier {
  // .block--modifier styles here
}
```

# Useful Articles and Links
Drupal CSS formating guides

* [Drual CSS guidlines](https://www.drupal.org/node/1887862)
* [Drupal CSS Architecture](https://www.drupal.org/coding-standards/css/architecture) - We are using a different folder structure, but if follows the same ideas.

BEM naming convention

* [http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
* [https://css-tricks.com/bem-101/](https://css-tricks.com/bem-101/)

Sass Info

* [http://sass-lang.com/guide](http://sass-lang.com/guide)
* [http://leveluptuts.com/tutorials/sass-tutorials](http://leveluptuts.com/tutorials/sass-tutorials)

Sass Libraries, Helpers, and Shortcut tools

* [Singularity](https://github.com/at-import/Singularity/wiki) - This is a very flexible grid system.
* [Breakpoint](http://breakpoint-sass.com/) & [Breakpoint Wiki](https://github.com/at-import/breakpoint/wiki) - Use Breakpoint for media queries in responsive design.
* [Toolkit](https://github.com/at-import/toolkit) - This is a library of cool mixins and helpers.

Sass Playground (use this to try things out)

* [SassMeister](http://sassmeister.com/)
* [CodePen](http://codepen.io/pen/)

