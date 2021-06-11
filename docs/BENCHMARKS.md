<p align="center">
  <img width="250" height="124" src="https://user-images.githubusercontent.com/33532265/121102624-0ec55000-c7cc-11eb-8350-a0d59a2c0b46.png">
</p>



# The Benchmarks Class

The `Benchmarks` class was pretty much born to facilitate... and eventually settle those heated developer arguments between team `createElement()` and team `innerHTML`. With this class, a dev can quickly set up some custom DOM generation functions that can be looped and inserted into the document with timing data baked-in. Then the generated and inserted markup is removed, and the test results are displayed in the browser's console.

Additionally, the `Benchmarks` class provides a method to generate a DOM rendered markup "card" to display test results and times on an HTML page. This allows a developer to either see the data out of the console and/or present it to other project stakeholders. Or even do a screengrab to rub it in another dev's face... whatever gets the job done!

<br>



# Table of Contents

* [Benchmarking Examples](#benchmarking-examples)
  * [Append Child Tests](#append-child-tests)
  * [InnerHTML Tests](#innerhtml-tests)
* [end()](#end)
* [now()](#now)
* [render_results_card()](#render_results_card)
* [run_append_child_test()](#run_append_child_test)
* [run_inner_html_test()](#run_inner_html_test)
* [start()](#start)

<br>



## Benchmarking Examples

There are generally two ways to use the Benchmarking class. One is using the `run_append_child_test()` method to test JavaScript `appendChild()` DOM creation/insertions. The other `run_inner_html_test()` method conversely allows testing an `innerHTML` concatination/insertion.


### Append Child Tests


Assuming we have a `#benchmarking-workspace` element and a `#benchmarking-results` element in a HTML document's `<body>` tag like so:

```html
<div id="benchmarking-workspace"></div>
<div id="benchmarking-results"></div>
```

We can then go ahead and add our module JavaScript tag, import the necessary classes, instantiate them, create a function to test, and finally test the function as well as render out some markup when all is done to compliment the test results that are logged in the console!

```html
<script type="module">
            
    // import modules
    import { Benchmarks } from './superjsonic/Benchmarks.js';
    import { Dom_generator } from './superjsonic/Dom_generator.js';
  
    // instantiate classes
    const DOM = new Dom_generator();
    const BENCHMARK = new Benchmarks();
  
    // create a function to test
    function h1() {
        return DOM.generate_element('h1', "J.J. Fad's Supersonic", { class: 'text-3xl' });
    };

    BENCHMARK.run_append_child_test (
        {
            slug : 'h1',
            name : 'h1() Test',
            target : 'benchmarking-workspace',
            loops : BENCHMARK.loops,
            description : 'Run (' + Number(BENCHMARK.loops).toLocaleString() + ') DOM.generate_element() calls each producing a <h1> element with text and a class attribute string. Next, each element is inserted into a document fragment, which then gets inserted into the DOM before the test time is stopped. All generated elements are removed manually after the test has run.'
        },
        h1
    );

    BENCHMARK.render_results_card('h1Test', 'benchmarking-results');

</script>
```


### InnerHTML Tests

_Coming Soon!_


<br>



## end()

_Coming Soon!_


<br>



## now()

_Coming Soon!_


<br>



## render_results_card()

_Coming Soon!_


<br>



## run_append_child_test()

_Coming Soon!_


<br>



## run_inner_html_test()

_Coming Soon!_


<br>



## start()

_Coming Soon!_


<br>

---


[BACK](../README.md)
