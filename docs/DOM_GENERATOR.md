<p align="center">
  <img width="250" height="124" src="https://user-images.githubusercontent.com/33532265/121102624-0ec55000-c7cc-11eb-8350-a0d59a2c0b46.png">
</p>



# The Dom Generator Class

The `Dom_generator` class is the main course in the Super JSonic menu of classes. This class is used to generate single elements all the way to complex component markup from JavaScript objects, JSON representations of markup, markup represnetations of JSON, and more. It's a full course meal in and of itself!

<br>



# Table of Contents

* [append_child()](#append_child)
* [append_children()](#append_children)
* [apply_attributes()](#apply_attributes)
* [generate_element()](#generate_element)
* [generate_elements()](#generate_elements)
* [insert_text()](#insert_text)
* [manipulate()](#manipulate)
* [on_dom_ready()](#on_dom_ready)

<br>



## append_child()

The [`append_child()`](https://github.com/oberocks/superjsonic/blob/1c368a57b9ff2382ae8e9b9a33bb0390db8ab268/superjsonic/Dom_generator.js#L49) method is an alias of the JavaScript [appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) method, which appends the `child` DOM [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) element (the 2nd argument) to the parent DOM [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) `node` (the 1st argument).

> This is generally used as a utility function for the [generate_element()](#generate_element) and [generate_elements()](#generate_elements) methods.

🔹 **SYNTAX:**

```javascript
.append_child(node, child)
```

🔹 **PARAMETERS:**

Arg | Parameters | Required | Argument Type | Description
--- | ---------- | -------- | ------------- | -----------
1   | `node`     | Yes      | DOM Node      | The DOM [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) to receive the `child` Node.
2   | `child`    | Yes      | Node          | The child DOM [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) appended to the parent `node` Node.

🔹 **EXAMPLE:**

```javascript
const div = document.createElement('div');
const comment = document.createComment(' Congrats! This div is a parent, with a span child element. ');
const span = document.createElement('span');

Dom_generator.append_child(div, comment);
Dom_generator.append_child(div, span);
```

🔹 **EXAMPLE OUTPUT:**

```html
<div>
    <!-- Congrats! This div is a parent, with a span child element. -->
    <span></span>
</div>
```



<br>



## append_children()

The `append_children()` method details... _Coming Soon!_



<br>



## apply_attributes()

The [`apply_attributes()`](https://github.com/oberocks/superjsonic/blob/1c368a57b9ff2382ae8e9b9a33bb0390db8ab268/superjsonic/Dom_generator.js#L21) method mutates the DOM [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) in the 1st argument, by assigning [Element Attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) to that Element from the 2nd argument's object. The object's property key/value pairs are added as an attribute name/value pair of the Element node.

> This is generally used as a utility function for the [generate_element()](#generate_element) and [generate_elements()](#generate_elements) methods.

🔹 **SYNTAX:**

```javascript
.apply_attributes(node, obj)
```

🔹 **PARAMETERS:**

Arg | Parameters | Required | Argument Type | Description
--- | ---------- | -------- | ------------- | -----------
1   | `node`     | Yes      | Element Node  | The [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) node to receive the attributes defined in the `obj` argument.
2   | `obj`      | Yes      | JS Object     | The JavaScript object that defines the attributes added to the `node` argument, where each key of this object is set as an Element attribute name and each value is set as an Element attribute value.

🔹 **EXAMPLE:**

```javascript
const div = document.createElement('div');

const attributes = {
    class: 'text-center',
    "data-example-attr": 'some value'
};

Dom_generator.apply_attributes(div, attributes);
```

🔹 **EXAMPLE OUTPUT:**

```html
<div class="text-center" data-example-attr="some value"></div>
```



<br>



## generate_element()

The `generate_element()` method details... _Coming Soon!_



<br>



## generate_elements()

The `generate_elements()` method details... _Coming Soon!_



<br>



## insert_text()

The `insert_text()` method details... _Coming Soon!_



<br>



## manipulate()

The [`manipulate()`](https://github.com/oberocks/superjsonic/blob/1c368a57b9ff2382ae8e9b9a33bb0390db8ab268/superjsonic/Dom_generator.js#L76) method is a convenience method that allows developers to write DOM manipulation code in a human readable way.

This method includes a flexible argument structure that provides access to standard JS DOM manipulation methods like: `.appendChild()`, `.insertBefore()`, `.replaceChild()` & `.removeChild()`. Additionally, there's a couple of jQuery inspired deritives of these standard JS methods, which are of the `.insertAfter()` & `.prepend()` varieties!

> NOTE: All strings passed into this method are **Case Insensitive**, thanks to JS's `.toLowerCase()` method!

🔹 **SYNTAX:**

```javascript
.manipulate(parent, 'append', element);
.manipulate(parent, 'insert', element, 'before', el);
.manipulate(parent, 'insert', element, 'after', el);
.manipulate(parent, 'replace', element, 'with', el);
.manipulate(parent, 'remove', element);
.manipulate(parent, 'prepend', element);
```

🔹 **PARAMETERS:**

Arg | Parameters                                               | Required | Argument Type              | Details/Notes
--- | -------------------------------------------------------- | -------- | -------------------------- | -------------
1   | `parent`                                                 | Yes      | `element node`             | This should be a valid JavaScript Element Node.
2   | `'append'` `'insert'` `'replace'` `'remove'` `'prepend'` | Yes      | `string`                   | Passed strings are **Case Insensitive**! Expects one of these specific strings: `'append'`, `'insert'`, `'replace'`, `'remove'`, or `'prepend'`.
3   | Child Element                                            | Yes      | `element node`             | This should be a valid JavaScript Element Node.
4   | Method Sub-Option or Child Element                       | No       | `string` or `element node` | This argument is REQUIRED when the 2nd argument is `'insert'` or `'replace'`! Depending on your choice for a 2nd parameter, this argument can be either a `string` or an `element node`. If you are using `'insert'` or `'replace'` for your 2nd argument, then the 4th argument should be either `'before'` or `'after'` (for `.insertBefore()` or `.insertAfter()` functionality). If the 2nd argument is `'replace'`, then the 4th argument can be any string (even an empty string) and it will work. That said, it's recommended to use the string `'with'` as a 4th argument for `'replace'`, because it's super easy to read afterwards. Don't forget, all passed strings are **Case Insensitive**!
5   | Reference Element                                        | No       | `element node`             | This should be a valid JavaScript Element Node. This argument is REQUIRED whenever using `'insert'` (both `'before'` & `'after'` variations) along with the `'replace'`/`'with'` option.

🔹 **EXAMPLE:**

```javascript
//
```

🔹 **EXAMPLE OUTPUT:**

```javascript
//
```

<!---

#### OBEBS4.dom() Semantic Examples (Recommended):
```javascript
// Create a parent DOM element to work with
let domSection = obebs4.element('section', false, { class : 'text-center pb-5' });

// Create the child elements to play with
let element_0 = obebs4.element('div', '.dom() Method Test Examples', { class : 'bg-light p-2 mb-5' });
let element_1 = obebs4.element('div', 'Element #1', { class : 'text-secondary' });
let element_2 = obebs4.element('div', 'Element #2', { class : 'text-primary' });
let element_3 = obebs4.element('div', 'Element #3', { class : 'text-warning' });
let element_4 = obebs4.element('div', 'Element #4', { class : 'text-danger' });
let element_5 = obebs4.element('div', 'Element #5', { class : 'text-info' });
let element_6 = obebs4.element('div', 'Element #6', { class : 'text-success' });
let element_7 = obebs4.element('div', 'Element #7', { class : 'text-dark' });
let element_8 = obebs4.element('div', 'Element #8', { class : 'text-light' });

// .dom() "semantic" examples
obebs4.dom(domSection, 'append', element_1);
obebs4.dom(domSection, 'append', element_3);
obebs4.dom(domSection, 'insert', element_2, 'before', element_3);
obebs4.dom(domSection, 'append', element_5);
obebs4.dom(domSection, 'insert', element_4, 'after', element_3);
obebs4.dom(domSection, 'append', element_6);
obebs4.dom(domSection, 'append', element_7);
obebs4.dom(domSection, 'replace', element_7, 'with', element_8);
obebs4.dom(domSection, 'remove', element_8);
obebs4.dom(domSection, 'prepend', element_0);

// append our working section to our example element
obebs4.dom(target, 'append', domSection);
```
```html
// The example above will generate and append this HTML to your target element:
<section class="bg-gradient-white text-center pb-5">
    <div class="bg-secondary text-white p-2 mb-5">.dom() Method Test Examples</div>
    <div class="text-secondary">Element #1</div>
    <div class="text-primary">Element #2</div>
    <div class="text-warning">Element #3</div>
    <div class="text-danger">Element #4</div>
    <div class="text-info">Element #5</div>
    <div class="text-success">Element #6</div>
</section>
```

#### OBEBS4.dom() Alternative Syntaxes:
```javascript
obebs4.dom(domSection, 'appendChild', element_1);
obebs4.dom(domSection, 'appendChild', element_3);
obebs4.dom(domSection, 'insertBefore', element_2, element_3);
// ALT VERSION: obebs4.dom(domSection, 'before', element_2, element_3);
obebs4.dom(domSection, 'appendChild', element_5);
obebs4.dom(domSection, 'insertAfter', element_4, element_3);
// ALT VERSION:  obebs4.dom(domSection, 'after', element_4, element_3);
obebs4.dom(domSection, 'appendChild', element_6);
obebs4.dom(domSection, 'appendChild', element_7);
obebs4.dom(domSection, 'replaceChild', element_7, element_8);
// ALT VERSION:  obebs4.dom(domSection, 'replace', element_7, element_8);
obebs4.dom(domSection, 'removeChild', element_8);
obebs4.dom(domSection, 'firstChild', element_0);
```

--->


<br>



## on_dom_ready()

The `on_dom_ready()` method details... _Coming Soon!_



<br>

---


[BACK](../README.md)
