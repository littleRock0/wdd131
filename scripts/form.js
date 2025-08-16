/***************************************************************************
 * 
 **************************************************************************/
const year = document.querySelector("#year");
const author = document.querySelector("#author");
const lastModifiedElement = document.querySelector("#lastModified");
const today = new Date();

let lastModifiedDate = new Date(document.lastModified);

year.innerHTML = ` <span class="highlight"> ${today.getFullYear()}</span>`;

const authorMeta = document.querySelector('meta[name="author"]');

if (authorMeta) {
    author.innerHTML = authorMeta.content;
}

lastModifiedElement.innerHTML = `Last updated: ` +
    `${lastModifiedDate.toLocaleString()}`;

const mainNav = document.querySelector('.navigation')
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const sel = document.getElementById('product-name');
console.log('select element:', sel);
if (sel) {
  console.log('current option count:', sel.options.length);
  Array.from(sel.options).forEach((o,i)=> console.log(i, o.value, o.text));
} else {
  console.warn('select #product-name not found in the DOM');
}

const selectEl = document.getElementById('product-name');

products.forEach(product => {
    // const option = document.createElement('option');
    // option.value = ;
    // option.innerHTML = ;
    selectEl.innerHTML += `
        <option value="${product.id}">${product.name}</option>
    `;
    // selectEl.appendChild(option);
});