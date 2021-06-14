import { Type_checker } from './Type_checker.js';

export class Placeholders {
    
    constructor (opts = false) {
        
        this.type = new Type_checker();
        
        // define default class settings/options
        this.defaults = {
            headlines : [
                'Lorem Ipsum Dolor Sit',
                'Quisque Feugiat Hendrerit',
                'Mauris Ut Nulla Id Libero',
                'Sed Bibendum Nisi A Est Semper'
            ],
            paragraphs : [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis bibendum augue, in facilisis lorem euismod fermentum. Maecenas non auctor magna, et tempor purus. Morbi et ex iaculis nunc tincidunt semper a eget dui. Nulla ac turpis id arcu cursus condimentum eget vel ante. Quisque vel malesuada sapien. Etiam non urna vitae urna iaculis rutrum non non sem.',
                'Quisque feugiat hendrerit ornare. Ut in magna mi. Donec pellentesque viverra lorem, id vestibulum nibh. Pellentesque egestas sit amet ante sed malesuada. Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis. Sed maximus tellus eu justo ornare, varius ullamcorper nibh scelerisque. Nulla facilisi. Quisque sed eros ex. In fringilla justo odio.',
                'Mauris ut nulla id libero viverra lobortis. Phasellus ut elit eu diam feugiat scelerisque. Vivamus semper nibh id turpis pharetra bibendum. In eget felis risus. Nullam at tincidunt tellus, non fermentum enim. Mauris varius suscipit lectus ac feugiat. Pellentesque pulvinar semper tempor. Vivamus ac ipsum bibendum, malesuada magna id, viverra erat. Ut aliquet neque nec hendrerit tristique.',
                'Sed bibendum nisi a est semper consequat. Aliquam mi neque, blandit lobortis justo sit amet, commodo consectetur sem. Donec sagittis erat quis venenatis dignissim. Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst. Vestibulum euismod purus et tellus congue accumsan. Sed ligula libero, finibus non neque sed, semper consectetur est. Ut tincidunt, sapien aliquam varius fermentum, diam sem consequat risus, eget molestie erat ante quis erat.'
            ],
            quotes : [
                'Nulla ac turpis id arcu cursus condimentum eget vel ante.',
                'Suspendisse commodo facilisis nulla, a malesuada ante accumsan convallis.',
                'In eget felis risus. Nullam at tincidunt tellus, non fermentum enim.',
                'Duis ac iaculis leo, viverra fringilla lacus. In hac habitasse platea dictumst.'
            ],
            titles : [
                'Lorem Ipsum',
                'Suspendisse',
                'Nulla Ac Magna',
                'Aliquam Vulputate'
            ],
            links : [
                'Unesco Unus',
                'Unesco Duo',
                'Unesco Tres',
                'Unesco Quattuor',
                'Unesco Quinque'
            ]
        };

        // merge any passed options settings into the default settings to get a final settings object
        if (opts.headlines && this.type.is_array(opts.headlines)) {
            this.defaults.headlines = opts.headlines;
        }

        if (opts.paragraphs && this.type.is_array(opts.paragraphs)) {
            this.defaults.paragraphs = opts.paragraphs;
        }

        if (opts.quotes && this.type.is_array(opts.quotes)) {
            this.defaults.quotes = opts.quotes;
        }

        if (opts.titles && this.type.is_array(opts.titles)) {
            this.defaults.titles = opts.titles;
        }

        if (opts.links && this.type.is_array(opts.links)) {
            this.defaults.links = opts.links;
        }
        
    }

    get_random_index (arrayLength) {
    
        return Math.floor(Math.random() * Math.floor(arrayLength));
    
    }

    headline (index = false) {
        
        // get a random index and return placeholder text string
        let i = index ? Number(index) : this.get_random_index(this.defaults.headlines.length);
        return this.defaults.headlines[i];

    }

    paragraph (index = false) {

        // get a random index and return placeholder text string
        let i = index ? Number(index) : this.get_random_index(this.defaults.paragraphs.length);
        return this.defaults.paragraphs[i];

    }

    quote (index = false) {

        // get a random index and return placeholder text string
        let i = index ? Number(index) : this.get_random_index(this.defaults.quotes.length);
        return this.defaults.quotes[i];

    }

    title (index = false) {

        // get a random index and return placeholder text string
        let i = index ? Number(index) : this.get_random_index(this.defaults.titles.length);
        return this.defaults.titles[i];

    }

    link (index = false) {

        // get a random index and return placeholder text string
        let i = index ? Number(index) : this.get_random_index(this.defaults.links.length);
        return this.defaults.links[i];

    }

    generate (type, index = false) {
        
        let text = '';
        
        if (type === 'headline' || type === 'headlines') {
            
            text = index ? this.headline(index) : this.headline();

        } else if (type === 'paragraph' || type === 'paragraphs') {
            
            text = index ? this.paragraph(index) : this.paragraph();

        } else if (type === 'quote' || type === 'quotes') {
            
            text = index ? this.quote(index) : this.quote();

        } else if (type === 'title' || type === 'titles') {
            
            text = index ? this.title(index) : this.title();

        } else if (type === 'link' || type === 'links') {
            
            text = index ? this.link(index) : this.link();
            
        }

        return text;
    }
}