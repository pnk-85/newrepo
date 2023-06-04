// console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.forms);
console.log(document.links);

console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);

header.style.borderBottom='solid 3px #000';

// getElementby class name//

var items = document.getElementsByClassName('list-group-item'); 
console.log('items');
console.log('items[1]');
items[1].textContent = 'hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';
items[3].style.backgroundColor = 'green';
items[3].style.fontWeight = 'bold';
items[0].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
