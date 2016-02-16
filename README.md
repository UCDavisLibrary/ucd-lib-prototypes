### Prerequesites 

You'll need [node.js](http://nodejs.org).

```bash
sudo npm install --global grunt-cli bower
```

## Install and setup
    
After cloning and changing into that directory, run this to install dependencies:

    npm install
    bower install

You may have to run that again for updates; so it may be wise to save this: `npm install && bower install`. **If you have any problems; this is the first thing to run.**

Finally, to do an intial build of the site and start watching for changes run `grunt`

```bash
grunt
```

### LiveReload
If you want to utilize LiveReload (recommended) so that your browser loads in changes in realtime without needing to refresh the browser, then you need to install a browser plugin/extension.

[http://livereload.com/extensions/](http://livereload.com/extensions/)

## Assets (CSS & JS)

To add either CSS or JS to Pattern Lab, use one of these methods:

### Bower

Installing any [Bower](http://bower.io) component with the `--save` or `--save-dev` flag will get the `main` asset's `<link>` or `<script>` tags added to Pattern Lab automatically via [wiredep](https://github.com/taptapship/wiredep). So, you can search for [anything that Bower can install](http://bower.io/search/) and run:

    bower install {thing} --save

### Editing the head or foot partial

If you want the most direct access, which the above method injects into, then just head to one of these files:

- `pattern-lab/source/_patterns/00-atoms/00-meta/_00-head.mustache`
- `pattern-lab/source/_patterns/00-atoms/00-meta/_01-foot.mustache`

## About Grunt

- [Grunt Website](http://gruntjs.com)
- Article by Chris Coyier: [Grunt for People Who Think Things Like Grunt are Weird and Hard ◆ 24 ways](http://24ways.org/2013/grunt-is-not-weird-and-hard/)

### Local Grunt Configuration

Grunt configuration can be customized to a local environment by creating a `Gruntconfig--custom.yml` file. Any custom config specific to a local setup can be placed in here and it will not be committed to Git.

### Using Grunt with PHPStorm

PHPStorm has [Grunt Tool Window](https://www.jetbrains.com/webstorm/help/using-grunt-task-runner.html) for easy use of Grunt tasks.
Right-click on the `Gruntfile.js` file and choose `Open Grunt Console` to open the window.

`Alias tasks` contains the main group of tasks. Double click `default` to start grunt and begin watching files for changes.


## About Pattern Lab
- [Pattern Lab Website](http://patternlab.io/)
- [About Pattern Lab](http://patternlab.io/about.html)
- [Documentation](http://patternlab.io/docs/index.html)
- [Demo](http://demo.patternlab.io/)

The PHP version of Pattern Lab is, at its core, a static site generator. It combines platform-agnostic assets, like the [Mustache](http://mustache.github.io/)-based patterns and the JavaScript-based viewer, with a PHP-based "builder" that transforms and dynamically builds the Pattern Lab site. By making it a static site generator, Pattern Lab strongly separates patterns, data, and presentation from build logic. 

## Demo

You can play with a demo of the front-end of Pattern Lab at [demo.patternlab.io](http://demo.patternlab.io).

## Getting Started

* [Requirements](http://patternlab.io/docs/requirements.html)
* [Installing the PHP Version of Pattern Lab](http://patternlab.io/docs/installation.html)
* [Upgrading the PHP Version of Pattern Lab](http://patternlab.io/docs/upgrading.html)
* [Generating the Pattern Lab Website for the First Time](http://patternlab.io/docs/first-run.html)
* [Editing the Pattern Lab Website Source Files](http://patternlab.io/docs/editing-source-files.html)
* [Using the Command-line Options](http://patternlab.io/docs/command-line.html)
* [Command Prompt on Windows](http://patternlab.io/docs/command-prompt-windows.html)

## Working with Patterns

Patterns are the core element of Pattern Lab. Understanding how they work is the key to getting the most out of the system. Patterns use [Mustache](http://mustache.github.io/) so please read [Mustache's docs](http://mustache.github.io/mustache.5.html) as well.

* [How Patterns Are Organized](http://patternlab.io/docs/pattern-organization.html)
* [Adding New Patterns](http://patternlab.io/docs/pattern-add-new.html)
* [Reorganizing Patterns](http://patternlab.io/docs/pattern-reorganizing.html)
* [Including One Pattern Within Another via Partials](http://patternlab.io/docs/pattern-including.html)
* [Managing Assets for a Pattern: JavaScript, images, CSS, etc.](http://patternlab.io/docs/pattern-managing-assets.html)
* [Modifying the Pattern Header and Footer](http://patternlab.io/docs/pattern-header-footer.html)
* [Using Pseudo-Patterns](http://patternlab.io/docs/pattern-pseudo-patterns.html)
* [Using Pattern Parameters](http://patternlab.io/docs/pattern-parameters.html)
* [Using Pattern State](http://patternlab.io/docs/pattern-states.html)
* ["Hiding" Patterns in the Navigation](http://patternlab.io/docs/pattern-hiding.html)
* [Adding Annotations](http://patternlab.io/docs/pattern-adding-annotations.html)
* [Viewing Patterns on a Mobile Device](http://patternlab.io/docs/pattern-mobile-view.html)

## Creating & Working With Dynamic Data for a Pattern

The PHP version of Pattern Lab utilizes Mustache as the template language for patterns. In addition to allowing for the [inclusion of one pattern within another](http://patternlab.io/docs/pattern-including.html) it also gives pattern developers the ability to include variables. This means that attributes like image sources can be centralized in one file for easy modification across one or more patterns. The PHP version of Pattern Lab uses a JSON file, `source/_data/data.json`, to centralize many of these attributes.

* [Introduction to JSON & Mustache Variables](http://patternlab.io/docs/data-json-mustache.html)
* [Overriding the Central `data.json` Values with Pattern-specific Values](http://patternlab.io/docs/data-pattern-specific.html)
* [Linking to Patterns with Pattern Lab's Default `link` Variable](http://patternlab.io/docs/data-link-variable.html)
* [Creating Lists with Pattern Lab's Default `listItems` Variable](http://patternlab.io/docs/data-listitems.html)

## Using Pattern Lab's Advanced Features

By default, the Pattern Lab assets can be manually generated and the Pattern Lab site manually refreshed but who wants to waste time doing that? Here are some ways that Pattern Lab can make your development workflow a little smoother:

* [Watching for Changes and Auto-Regenerating Patterns](http://patternlab.io/docs/advanced-auto-regenerate.html)
* [Auto-Reloading the Browser Window When Changes Are Made](http://patternlab.io/docs/advanced-reload-browser.html)
* [Multi-browser & Multi-device Testing with Page Follow](http://patternlab.io/docs/advanced-page-follow.html)
* [Keyboard Shortcuts](http://patternlab.io/docs/advanced-keyboard-shortcuts.html)
* [Special Pattern Lab-specific Query String Variables ](http://patternlab.io/docs/pattern-linking.html)
* [Preventing the Cleaning of public/](http://patternlab.io/docs/advanced-clean-public.html)
* [Generating CSS](http://patternlab.io/docs/advanced-generating-css.html)
* [Modifying the Pattern Lab Nav](http://patternlab.io/docs/advanced-pattern-lab-nav.html)
* [Editing the config.ini Options](http://patternlab.io/docs/advanced-config-options.html)
* [Integration with Compass](http://patternlab.io/docs/advanced-integration-with-compass.html)
