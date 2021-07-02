<p align="center">
  <img width="250" height="124" src="https://user-images.githubusercontent.com/33532265/121102624-0ec55000-c7cc-11eb-8350-a0d59a2c0b46.png">
</p>



# The Dom Generator Class

The `Dom_generator` class is the main course in the Super JSonic menu of classes. This class is used to generate single elements all the way to complex component markup from JavaScript objects, JSON representations of markup, markup represnetations of JSON, and more. It's a full course meal in and of itself!

<br>



# Table of Contents

* [add_to_dom()](#add_to_dom)
* [append_child()](#append_child)
* [append_children_array()](#append_children_array)
* [apply_attributes()](#apply_attributes)
* [generate_element()](#generate_element)
* [generate_elements()](#generate_elements)
* [insert_text()](#insert_text)
* [on_dom_ready()](#on_dom_ready)

<br>



## add_to_dom()

The `add_to_dom()` method details... _Coming Soon!_



<br>



## append_child()

The [`append_child()`](https://github.com/oberocks/superjsonic/blob/1c368a57b9ff2382ae8e9b9a33bb0390db8ab268/superjsonic/Dom_generator.js#L49) is an alias of the JavaScript [appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) method, which appends the `child` DOM [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) element (the 2nd argument) to the parent DOM [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) `node` (the 1st argument).

```javascript
.append_child(node, child)
```

| Parameters | Argument Type | Required | Description |
| ---------- | ------------- | -------- | ----------- |
| `node`     | DOM Node      | Yes      | The DOM [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) to receive the `child` Node. |
| `child`    | Node          | Yes      | The child DOM [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) appended to the parent `node` Node. |

A trivial example:

```javascript
const div = document.createElement('div');
const comment = document.createComment(' Congrats! This div is a parent, with a span child element. ');
const span = document.createElement('span');

Dom_generator.append_child(div, comment);
Dom_generator.append_child(div, span);
```

The trivial code above (after being generated) would then resolve in the DOM to somehting like this:

```html
<div>
    <!-- Congrats! This div is a parent, with a span child element. -->
    <span></span>
</div>
```



<br>



## append_children_array()

The `append_children_array()` method details... _Coming Soon!_



<br>



## apply_attributes()

The `apply_attributes()` method mutates the passed in [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) node, and assigns [Element Attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) to the Element where each object property key/value pair is transformed into an attribute name/value pair of the Element node.

> This is generally used as a utility function for the [generate_element()](#generate_element) and [generate_elements()](#generate_elements) methods.

| Parameters | Argument Type | Required | Description |
| ---------- | ------------- | -------- | ----------- |
| `node`     | Element Node  | Yes      | The [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) node to receive the attributes defined in the `obj` argument. |
| `obj`      | JS Object     | Yes      | The JavaScript object that defines the attributes added to the `node` argument, where each key of this object is set as an Element attribute name and each value is set as an Element attribute value. |

A trivial example:

```javascript
const div = document.createElement('div');

const attributes = {
    class: 'text-center',
    "data-example-attr": 'some value'
};

Dom_generator.apply_attributes(div, attributes);
```

The trivial code above (after being generated) would then resolve in the DOM to somehting like this:

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



## on_dom_ready()

The `on_dom_ready()` method details... _Coming Soon!_



<br>

---


[BACK](../README.md)
