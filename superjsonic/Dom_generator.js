import { Type_checker } from './Type_checker.js';

export class Dom_generator {
    
    constructor (opts = false) {

        // https://developer.mozilla.org/en-US/docs/Glossary/Empty_element
        // http://w3c.github.io/html-reference/syntax.html#syntax-elements
        this.voids = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

        this.is_void = function (val) {
            return (this.voids.indexOf(val) !== -1) ? true : false;
        };

    };
    
    on_dom_ready (callback) {
        document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
    }

    apply_attributes (node, obj) {
        if (Object.keys(obj).length > 0) {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] !== null && obj[key] !== false) {
                        node.setAttribute(key, obj[key]);
                    }
                }
            }
        }
    }

    insert_text (node, str) {
        if (typeof str === 'string' && str.length > 0) {
            let txt = document.createTextNode(str);
            node.appendChild(txt);
        } else if (Array.isArray(str) && str.length > 0) {
            for (var i = 0; i < str.length; i++) {
                if (str[i] instanceof Element || str[i] instanceof HTMLDocument) {
                    node.appendChild(str[i]);
                } else if (typeof str[i] === 'string' || str[i] instanceof String) {
                    let txt = document.createTextNode(str[i]);
                    node.appendChild(txt);
                }
            }
        }
    }

    append_child (node, child) {
        node.appendChild(child);
    }

    append_children (node, array) {
        let type_checker = new Type_checker();
        if (type_checker.is_array(array)) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].tag) {
                    let child = document.createElement(array[i].tag);
                    if (array[i].attributes) {
                        this.apply_attributes(child, array[i].attributes);
                    }
                    if (array[i].text) {
                        this.insert_text(child, array[i].text); 
                    }
                    if (array[i].children) {
                        this.append_children(child, array[i].children);
                    }
                    node.appendChild(child);
                } else if (type_checker.is_element_node(array[i])) {
                    node.appendChild(array[i]);
                }
            }
        }
    }

    manipulate (parent, type, el, subType = false, refNode = false) {
        let type_checker = new Type_checker();
        let t = type.toLowerCase();
        if (t === 'appendchild' || t === 'append') {
            parent.appendChild(el);
        } else if (t === 'insert') {
            if (subType === 'after') {
                parent.insertBefore(el, refNode.nextSibling);
            } else if (subType === 'before' || subType !== false) {
                parent.insertBefore(el, refNode);
            }
        } else if (t === 'insertafter' || t === 'after') {
            parent.insertBefore(el, subType.nextSibling);
        } else if (t === 'insertbefore' || t === 'before') {
            parent.insertBefore(el, subType);
        } else if (t === 'replacechild' || t === 'replace') {
            if (subType === 'with' || type_checker.is_string(subType)) {
                let ref = refNode ? refNode : undefined;
                if (ref) {
                    parent.replaceChild(ref, el);
                }
            } else if (type_checker.is_element_node(subType)) {
                parent.replaceChild(subType, el);
            }
        } else if (t === 'removechild' || t === 'remove') {
            parent.removeChild(el);
        } else if (t === 'prepend' || t === 'firstchild') {
            let firstChild = parent.firstChild;
            parent.insertBefore(el, firstChild);
        }
    }

    generate_element (elemType, elemText = false, attributes = false, nestedElem = false) {
        
        let type_checker = new Type_checker();

        // initialize the returned element as a var
        let el;

        // check for a passed element tag
        if (elemType) {
            // create the element
            el = document.createElement(elemType);
        }
        
        // check for passed elemText
        if (elemText) {
            // check if value is a string and has length
            if (type_checker.is_string(elemText) && elemText.length > 0) {
                // if it's a string then create a text node and append it to the returned element
                el.appendChild(document.createTextNode(elemText));
            } 
            // if the value is an array
            else if (type_checker.is_array(elemText) && elemText.length > 0) {
                // loop through the array
                for (var i = 0; i < elemText.length; i++) {
                    // if it's a string then create a text node and append it to the returned element
                    if (type_checker.is_string(elemText[i])) {
                        el.appendChild(document.createTextNode(elemText[i]));
                    }
                    // if it's an element node then append it to the returned element
                    else if (type_checker.is_element_node(elemText[i])) {
                        el.appendChild(elemText[i]);
                    }
                }
            }
        }
    
        // check for passed object of html attribute key/value pairs
        if (attributes) {
            // check that the argument is an object and is not null
            if (type_checker.is_object(attributes)) {
                // loop through the object
                for (var attr in attributes) {
                    if (attributes.hasOwnProperty(attr)) {
                        // set the attribute and value
                        el.setAttribute(attr, attributes[attr]);
                    }
                }
            }
        }
        
        // check for passed element array
        if (nestedElem) {
            // check if the passed argument is an array
            if (type_checker.is_array(nestedElem)) {
                // loop through the array
                for (var i = 0; i < nestedElem.length; i++) {
                    // if it's a string then create a text node and append it to the returned element
                    if (type_checker.is_string(nestedElem[i])) {
                        el.appendChild(document.createTextNode(nestedElem[i]));
                    }
                    // check the array item is an element node
                    if (type_checker.is_element_node(nestedElem[i])) {       
                        // and attach each element
                        el.appendChild(nestedElem[i]);
                    }
                }
            } else {
                // if it's a string then create a text node and append it to the returned element
                if (type_checker.is_string(nestedElem)) {
                    el.appendChild(document.createTextNode(nestedElem));
                }
                // check that the passed item is an element node
                if (type_checker.is_element_node(nestedElem)) {           
                    // if so, then just attach the passed element
                    el.appendChild(nestedElem);
                }
            }
        }
    
        // return the element
        return el;
    
    }

    generate_elements (outline = false) {
        
        let settings;
        if (outline) {
            settings = outline;
        } else {
            console.error('Super JSonic Error: The generate_elements() function requires a passed Array ([...]) of JavaScript objects (colloquially known as a "Cell Outline" in Molecular Components) that follow the tag/attribute/text/children key and values schema.');
            return;
        }
    
        let type_checker = new Type_checker();
    
        // initialize the output variable as a fragment
        let output = document.createDocumentFragment();
    
        for (var i = 0; i < settings.length; i++) {
            
            if (type_checker.is_object(settings[i])) {
                
                if (settings[i].tag) {
                    
                    let parent = document.createElement(settings[i].tag);
    
                    if (settings[i].attributes) {
                        this.apply_attributes(parent, settings[i].attributes);
                    }
    
                    if (settings[i].text) {
                        this.insert_text(parent, settings[i].text);
                    }
    
                    if (settings[i].children) {
                        this.append_children(parent, settings[i].children);
                    }
    
                    output.appendChild(parent);
    
                } else {
    
                    console.error("Super JSonic Error: The array of objects passed (at index " + i + ") into the generate_elements() function did not have a 'tag' property. This property's String value is REQUIRED to properly generate your markup!");
    
                }
    
            } else {
    
                console.error("Super JSonic Error: The generate_elements() method requires that you pass an array of objects to properly generate your markup!");
    
            }
    
        }
    
        return output;
    
    }

    generate_element_string (elemType, elemText = false, attributes = false, nestedElem = false) {
        
        let type_checker = new Type_checker();

        // initialize the string variables
        let isVoid = this.is_void(elemType);
        let opening = '<';
        let inside = '';
        let closing = '';

        // check for a passed element tag
        if (elemType) {
            // 
            opening += elemType;
        }
    
        // check for passed object of html attribute key/value pairs
        if (attributes) {
            // check that the argument is an object and is not null
            if (type_checker.is_object(attributes)) {
                // loop through the object
                for (var attr in attributes) {
                    if (attributes.hasOwnProperty(attr)) {
                        // 
                        //el.setAttribute(attr, attributes[attr]);
                        opening += ' ' + attr + '="' + attributes[attr] + '"';
                    }
                }
            }
        }

        // 
        if (isVoid) {
            // 
            opening += '/>';
        } else {
            // 
            opening += '>';
        }
        
        // check for passed elemText
        if (!isVoid) {
            if (elemText) {
                // check if value is a string and has length
                if (type_checker.is_string(elemText) && elemText.length > 0) {
                    // 
                    inside += elemText;
                    // if it's a string then create a text node and append it to the returned element
                    //el.appendChild(document.createTextNode(elemText));
                } 
                // if the value is an array
                else if (type_checker.is_array(elemText) && elemText.length > 0) {
                    // loop through the array
                    for (var i = 0; i < elemText.length; i++) {
                        // if it's a string then create a text node and append it to the returned element
                        if (type_checker.is_string(elemText[i])) {
                            // 
                            inside += elemText;
                            //el.appendChild(document.createTextNode(elemText[i]));
                        }
                        // if it's an element node then append it to the returned element
                        else if (type_checker.is_element_node(elemText[i])) {
                            // 
                            let temp = document.createElement('div');
                            temp.appendChild(elemText[i]);
                            inside += temp.innerHTML;
                            //el.appendChild(elemText[i]);
                        }
                    }
                }
            }
        }
        
        // check for passed element array
        if (!isVoid) {
            if (nestedElem) {
                // check if the passed argument is an array
                if (type_checker.is_array(nestedElem)) {
                    // loop through the array
                    for (var i = 0; i < nestedElem.length; i++) {
                        // if it's a string then create a text node and append it to the returned element
                        if (type_checker.is_string(nestedElem[i])) {
                            // 
                            inside += elemText;
                            //el.appendChild(document.createTextNode(nestedElem[i]));
                        }
                        // check the array item is an element node
                        if (type_checker.is_element_node(nestedElem[i])) {       
                            // 
                            let temp = document.createElement('div');
                            temp.appendChild(nestedElem[i]);
                            inside += temp.innerHTML;
                            // and attach each element
                            //el.appendChild(nestedElem[i]);
                        }
                    }
                } else {
                    // if it's a string then create a text node and append it to the returned element
                    if (type_checker.is_string(nestedElem)) {
                        // 
                        inside += elemText;
                        //el.appendChild(document.createTextNode(nestedElem));
                    }
                    // check that the passed item is an element node
                    if (type_checker.is_element_node(nestedElem)) {           
                        // 
                        let temp = document.createElement('div');
                        temp.appendChild(nestedElem);
                        inside += temp.innerHTML;
                        // if so, then just attach the passed element
                        //el.appendChild(nestedElem);
                    }
                }
            }
        }

        if (!isVoid) {
            // 
            closing += '</' + elemType + '>';
        }
    
        // return the concatinated element string
        return opening + inside + closing;
    
    }

    convert_to_json (name, obj) {
        const component = {};
        component[name] = obj;
        return JSON.stringify( component );
    }

    generate_elements_from_json (jsonCompo) {
        const obj = JSON.parse(jsonCompo);
        return this.generate_elements( obj[ Object.keys(obj)[0] ] );
    }

}