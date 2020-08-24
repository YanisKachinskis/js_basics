//es5
'use strict';

function Post (author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;

}

Post.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPost (author, text, date, hightlighted = false) {
    Post.call(this, author, text, date);
    this.hightlighted = hightlighted;
}


AttachedPost.prototype = Object.create (Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.hightlighted = true;
}

let post1 = new Post("John", 'Hello', '20.11.1985');
console.log(post1.author);
console.log(post1.text);
console.log(post1.date);
post1.edit("Privet");
console.log(post1.text);

let attpost1 = new AttachedPost("Max", "World", "13.01.1999");
console.log(attpost1.author);
console.log(attpost1.text);
console.log(attpost1.date);
console.log(attpost1.hightlighted);
attpost1.edit("Mir");
console.log(attpost1.text);
attpost1.makeTextHighlighted();
console.log(attpost1.hightlighted);
