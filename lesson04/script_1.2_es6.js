//es6
'use strict';

class Post {
    constructor (author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit (text) {
        this.text = text;
        
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, hightlighted = false) {
        super(author, text, date);
        this.hightlighted = hightlighted;
    }

    makeTextHighlighted () {
        this.hightlighted = true;
    }
}

let post1 = new Post("Alex", 'Hello', '20.11.1985');
console.log(post1.author);
console.log(post1.text);
console.log(post1.date);
post1.edit("Privet");
console.log(post1.text);

let attpost1 = new AttachedPost("Ron", "World", "13.01.1999");
console.log(attpost1.author);
console.log(attpost1.text);
console.log(attpost1.date);
console.log(attpost1.hightlighted);
attpost1.edit("Mir");
console.log(attpost1.text);
attpost1.makeTextHighlighted();
console.log(attpost1.hightlighted);