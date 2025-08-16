/***************************************************************************
 * 
 **************************************************************************/
const year = document.querySelector("#year");
const author = document.querySelector("#author");
const lastModifiedElement = document.querySelector("#lastModified");
const today = new Date();

let lastModifiedDate = new Date(document.lastModified);

year.innerHTML = ` <span class="highlight"> ${today.getFullYear()},</span>`;

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

const routes = [
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    {
        id: "",
        name: "",
        averageRating: 0,
        difficulty: 5.0,
        type: "",
    },
    
]