// elementos que usaremos
const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

//a nuestro form le damos el evento submit
form.addEventListener('submit', function (e){
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
})

//en la funcion getNews haremos nuestras peticiones
function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://swapi.co/api/${searchedForText}/`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}

function addNews() {
  const data = JSON.parse(this.responseText);
  let li = document.createElement('li');
  li.className = 'articleClass';
  console.log(data);
  var supera= [];
for (var i=0; i < data.results.length; i++){
  supera.push(data.results[i].name);
}

    console.log(supera);
  li.innerText = supera;

  responseContainer.appendChild(li);


}