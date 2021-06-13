
<p align="center">
  <img width="250" height="124" src="https://user-images.githubusercontent.com/33532265/121102624-0ec55000-c7cc-11eb-8350-a0d59a2c0b46.png">
</p>


# Super JSonic

A set of powerful and tiny JavaScript ES Module (ESM) tooling classes to help developers turn an opinionated JavaScript object, atomic CSS classes, HTML attributes, and copy into HTML DOM Elements.

<br>

# Table of Contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Generating Elements](#generating-elements)
* [Generating an Element](#generating-an-element)
* [A Navbar Example](#a-navbar-example)
* [The Benchmarks Class](docs/BENCHMARKS.md)
* [The Dom Generator Class](docs/DOM_GENERATOR.md)
* [The Type Checker Class](docs/TYPE_CHECKER.md)


<br>



## Introduction

Sometimes you just need to author some markup with JavaScript. Other times, you need to do this a LOT. It's times like those... that eventually lead to Super JSonic. Mostly because JS is awesome. But also, because JavaScript DOM creation is kind of verbose, sometimes a bit annoying (ahem... types we're looking @you), and sometimes it's seemingly impossible to keep CSS class strings DRY... at least when it comes to JS DOM generation/manipulation.

Enter the extremely radical, Super JSonic.

> **Q: WTF is so "super" about this questionable idea?**
> 
> **A:** Glad you asked. It's not really super. But it is radical. But "Radical JSonic" doesn't harken the aged mind back to the (possibly) greatest Easy-E side project ever... [J.J. Fad](https://en.wikipedia.org/wiki/J._J._Fad). Anyway, much like the lyrics of [Supersonic](https://en.wikipedia.org/wiki/Supersonic_(J._J._Fad_album)), if you don't like this code, it'll go big in your behind. Don't say you weren't warned.


<br>



## Installation

One cannot simply install Super JSonic. At least not yet, because it's still being developed and packaged for the wild - and the dope ass beatbox beats in the twisted imaginations of web developers around the globe.


<br>




## Generating Elements

JavaScript ESM (ES Modules) are also pretty radical and rather super. Some people say that's because of Node.js. But really, it's because writing DRY JavaScript is truly possible right in the browsers... now that we have these module things.

So let's take a look at a little bit of the Super JSonic ESM flow.

First off, let's assume we have a `#target` element in a HTML document's `<body>` tag like so:
```html
<div id="target"></div>
```

Next up, let's bring some ESM action to this party with:
```html
<script type="module">
            
    // import module
    import { Dom_generator } from './superjsonic/Dom_generator.js';

</script>
```

The `Dom_generator` is pretty much the DJ of this party. So let's instantiate an instance of the Super JSonic `Dom_generator` class with the `new` keyword:
```javascript
const JSONIC = new Dom_generator();
```

Next up, we need to request some "bizness" (it's an industry term) from our DJ. We can do this with Super JSonic by starting with... drumroll... JS objects wrapped in a JS array (so you can start with sibling parent elements just like this example):
```javascript
const bizness = [
    { tag: 'h1', text: 'My Dope Song Request' },
    { tag: 'p', text: 'My song request is naturally the late 80s smash hit "Supersonic" by J.J. Fad.' }
];
```

With our `bizness` schema above, we can have our Super JSonic DJ, give us exactly what we want by using something like:
```javascript
const bizness_markup = JSONIC.generate_elements(bizness);
```

And of course, we can slap that markup into our DOM tree, with a little:
```javascript
document.getElementById('target').appendChild(bizness_markup);
```

And lastly, in the document (and assuming you used the code snippets above), you should see the following markup in your `#target` element:
```html
<h1>My Dope Song Request</h1>
<p>Check out my dope song request, Super JSonic DJ. My song request is naturally the late 80s smash hit "Supersonic" by J.J. Fad.</p>
```

Welcome to the party!




<br>




## Generating an Element

You can also generate a single element with Super JSonic, but the syntax is a little different to keep the key strokes required for the functionality to a minimum.

So assuming we're still using our `const JSONIC = new Dom_generator();` in the above example, we can generate a single headline element and add it to our document like this:

```javascript
// Generate the markup
const headline = JSONIC.generate_element('h1', "J.J. Fad's Supersonic");

// Add the generated markup to the document
document.getElementById('target').appendChild(headline);
```

And if we wanted to specify some attributes for our element, we can simply use something like:

```javascript
const headline = JSONIC.generate_element('h1', "J.J. Fad's Supersonic", {
  class: 'text-3xl'
});
```

Or we could even slide in an icon (in this example a FontAwesome icon) to compliment our headline's string with something like:

```javascript
// Generate the markup
const icon = JSONIC.generate_element('i', false, { class: 'fas fa-volume-up mr-2' });
const headline = JSONIC.generate_element('h1', [icon, "J.J. Fad's Supersonic"], {
  class: 'text-3xl'
});
```

Conversely, instead of passing an array of an element node and a headline string, we can set the text property to `false` and pass our icon element and headline string using the final child nodes parameter (which expects an array of text strings and/or element nodes) for your element like so:

```javascript
// Generate the markup
const icon = JSONIC.generate_element('i', false, { class: 'fas fa-volume-up mr-2' });
const headline = JSONIC.generate_element('h1', false, { class: 'text-3xl' }, [icon, "J.J. Fad's Supersonic"]);
```




<br>




## A Navbar Example

Here's an example of a navbar using an array of navigation link objects for data, and a couple of `.generate_elements()` methods along with a `for` loop. 


```javascript
// set the iteratable data
const LINKS = [
    { text: 'Home', href: '/' },
    { text: 'About', href: 'about' },
    { text: 'Blog', href: 'blog' },
    { text: 'Contact', href: 'contact' }
];

// create the parent navbar element with grid classes
const navbar = JSONIC.generate_element('div', false, { class: 'grid grid-cols-1 sm:grid-cols-4 gap-6 p-6' });

// loop through the iterable data
for ( var i = 0; i < LINKS.length; i++ ) {

    // generate and append an anchor elements to the navbar
    navbar.appendChild( JSONIC.generate_element('a', LINKS[i].text, {
        class: 'bg-green-500 hover:bg-green-600 text-center',
        href: LINKS[i].href
    }));

}

// Add the generated markup to the document
document.getElementById('target').appendChild(navbar);
```

