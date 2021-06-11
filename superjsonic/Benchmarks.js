export class Benchmarks {
    
    constructor (loops = '10000') {
        
        // set the default loop count for benchmark testing
        this.loops = Number(loops.toString().replace(/[ ,.]/g, ''));

        // set the default benchmark object to use as a container for testing data
        this.benchmarks = {};

    }

    start (key, obj) {

        this.benchmarks[key] = obj;

    }

    end (key, val) {

        this.benchmarks[key].finish = val;
        this.benchmarks[key].duration = this.benchmarks[key].finish - this.benchmarks[key].start;
        console.table(this.benchmarks[key]);

    }

    now () {

        return performance.now();

    }

    render_results_card (benchmarkKey, elementId) {

        //document.getElementById(elementId).innerHTML = JSON.stringify(this.benchmarks, null, 4);
        let fragment = document.createDocumentFragment();

        let card = document.createElement('div');
            card.setAttribute('style', 'text-align: center; padding: 2rem 4rem; background-color: DarkSlateGrey; color: White; margin: 4rem;');

        let duration = this.benchmarks[benchmarkKey].duration;

        let data = document.createElement('h1');
            data.setAttribute('style', 'color: Lime; font-size: 3rem;');
            data.appendChild(document.createTextNode(Number(duration).toLocaleString() + ' ms'));

        let headline = document.createElement('p');
            headline.setAttribute('style', 'color: GhostWhite; font-size: 1.5rem; margin-bottom: 2rem;');
            headline.appendChild(document.createTextNode(this.benchmarks[benchmarkKey].name));

        let description = document.createElement('p');
            description.setAttribute('style', 'color: Gainsboro; font-size: 0.75rem;');
            description.appendChild(document.createTextNode(this.benchmarks[benchmarkKey].description));

        card.appendChild(data);
        card.appendChild(headline);
        card.appendChild(description);

        fragment.appendChild(card);

        document.getElementById(elementId).appendChild(fragment);

    }

    run_append_child_test (options, callback) {
        
        this.start(options.slug, {
            name : options.name,
            description : options.description,
            loops : (options.loops) ? Number(options.loops).toLocaleString() : Number(this.loops).toLocaleString(),
            start : this.now()
        });
        
        const fragment = document.createDocumentFragment();

        const loopCount = (options.loops) ? Number(options.loops) : Number(this.loops);

        for (var i = 0; i < loopCount; i++) {
            let nodes = callback();
            fragment.appendChild(nodes);
        }

        document.getElementById(options.target).appendChild(fragment);

        this.end(options.slug, this.now());

        document.getElementById(options.target).innerHTML = '';

    }

    run_inner_html_test (options, callback) {
        
        this.start(options.slug, {
            name : options.name,
            description : options.description,
            loops : (options.loops) ? Number(options.loops).toLocaleString() : Number(this.loops).toLocaleString(),
            start : this.now()
        });
        
        const strings = [];

        const loopCount = (options.loops) ? Number(options.loops) : Number(this.loops);

        for (var i = 0; i < loopCount; i++) {
            let str = callback();
            strings.push(str);
        }

        document.getElementById(options.target).innerHTML = strings.join('');

        this.end(options.slug, this.now());

        document.getElementById(options.target).innerHTML = '';

    }
    
}