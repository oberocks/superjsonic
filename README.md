
<p align="center">
  <img width="250" height="124" src="https://user-images.githubusercontent.com/33532265/121102624-0ec55000-c7cc-11eb-8350-a0d59a2c0b46.png">
</p>


# Super JSONic

A set of powerful and tiny JavaScript ES Module (ESM) tooling classes to help developers turn declaritive JSON, atomic CSS classes, and copy/media into HTML DOM Elements.

---

# Table of Contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Getting Started](#getting-started)

---




## Introduction

Sometimes you just need to author some markup with JavaScript. Other times, you need to do this a LOT. It's times like those... that eventually lead to Super JSONic. Mostly because JSON is awesome. But also, because JavaScript is really rather verbose, sometimes seriously annoying (ahem... types we're looking @you), and sometimes it's seemingly impossible to keep CSS class strings DRY... at least when it comes to JS DOM generation/manipulation.

Enter the extremely radical, Super JSONic.

> **Q: WTF is so "super" about this questionable idea?**
> 
> **A:** Glad you asked. It's not really super. But it is radical. But "Radical JSONic" doesn't harken the aged mind back to the (possibly) greatest Easy-E side project ever... [J.J. Fad](https://en.wikipedia.org/wiki/J._J._Fad). Anyway, much like the lyrics of [Supersonic](https://en.wikipedia.org/wiki/Supersonic_(J._J._Fad_album)), if you don't like this code, it'll go big in your behind. Don't say you weren't warned.

---




## Installation

One cannot simply install Super JSONic. At least not yet, because it's still being developed and packaged for the wild - and the dope ass beatbox beats in the twisted imaginations of web developers around the globe.

---




## Getting Started

JavaScript ESM (ES Modules) are also pretty radical and rather super. Some people say that's because of Node.js. But really, it's because writing DRY JavaScript is truly possible right in the browsers... now that we have these module things.

So let's take a look at a little bit of the Super JSONic ESM flow.

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

The `Dom_generator` is pretty much the DJ of this party. So let's instantiate an instance of the Super JSONic `Dom_generator` class with the `new` keyword:
```javascript
const DOM = new Dom_generator();
```

Next up, we need to request some "bizness" (it's an industry term) from our DJ. We can do this with Super JSONic by starting with... drumroll... JSON objects wrapped in a JavaScript array (so you can start with sibling parent elements just like this example):
```javascript
const bizness = [
    {
         tag: 'h1',
         text: 'My Dope Song Request'
    },
    {
         tag: 'p',
         text: 'Check out my dope song request, Super JSONic DJ. My song request is naturally the late 80s smash hit "Supersonic" by J.J. Fad.'
    }
];
```

With our `bizness` schema above, we can have our Super JSONic DJ, give us exactly what we want by using something like:
```javascript
const bizness_markup = DOM.generate_elements(bizness);
```

And of course, we can slap that markup into our DOM tree, with a little:
```javascript
document.getElementById('target').appendChild(bizness_markup);
```

And lastly, in the document (and assuming you used the code snippets above), you should see the following markup in your `#target` element:
```html
<h1>My Dope Song Request</h1>
<p>Check out my dope song request, Super JSONic DJ. My song request is naturally the late 80s smash hit "Supersonic" by J.J. Fad.</p>
```

Welcome to the party!



---
