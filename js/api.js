const API_ROOT = 'https://testimonialapi.toolcarton.com/api';
let testimonialContainer = document.querySelector('#testimoniales');
let HTML = '';
const getTestimonials = async () => {
    try {
        const response = await fetch(API_ROOT);
        const json = await response.json();
        json.map(item => {
            HTML += 
            `<article class='article__container'>
                <img src=${item.avatar} alt='user' />
                <span class='article__username'>${item.name}</span>
                <span class='article__message'>${item.message}</span>
            </article>`
        })
        console.log(HTML)
        testimonialContainer.innerHTML += HTML;
    } catch (error) {
        console.log(error);
    }
}

getTestimonials();