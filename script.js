window.onload = () => start();

//Globals
const url = 'https://rickandmortyapi.com/api/location';

let nextPage;


//Get DOM Elements
const section = document.querySelector('section');
const footer = document.querySelector('footer');

const start = () => {
  dataLoad(url)
};

//Get data from api
const dataLoad = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        show(data)
    } catch(error) {
        errorHandler(error)
    }     
   
};



//Show data
const show = (data) => {
  console.log(data)
    nextPage = data.info.next

    data.results.map(name => {
        let li = document.createElement('li')
        section.appendChild(li)
        li.innerHTML = name.name
    })

}

const infinite = () => {
  if (nextPage) {
    urlLoad = nextPage
    dataLoad(urlLoad);
  }
};

//Handle errors
const errorHandler = (error) => {
  console.log(error);
};


// //Very neat code to handle infinite scrolling
document.addEventListener('DOMContentLoaded', () => {
    console.log('here')
  let options = {
    root: null,
    rootMargins: '0px',
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(infinite, options);
  observer.observe(footer);
});
