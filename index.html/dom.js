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

// var items = document.getElementsByClassName('list-group-item'); 
// console.log('items');
// console.log('items[1]');
// items[1].textContent = 'hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items[3].style.backgroundColor = 'green';
// items[3].style.fontWeight = 'bold';
// items[0].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';

// for (var i=0; i<items.length; i++){
//     items[i].style.backgroundColor='grey';
// }

// getElementby tagName

// var items = document.getElementsByClassName('li'); 
// console.log('li');
// console.log('li[1]');
// li[1].textContent = 'hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// li[3].style.backgroundColor = 'green';
// li[3].style.fontWeight = 'bold';
// li[0].style.fontWeight = 'bold';
// li[2].style.fontWeight = 'bold';

// for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'grey';
// }

// querySelrctor

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

 var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='green';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'red';

// querySelectorAll

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}
for(var i=0; i<even.length; i++){
    even[i].style.backgroundColor='orange';
}