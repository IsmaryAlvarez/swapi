// elementos que usaremos
const form = $('#Luke_Skywalker');
const responseContainer = document.getElementById('response-container');

//a nuestro form le damos el evento submit
form.click(function(e){
    e.preventDefault();
  getNews();
}); 

//en la funcion getNews haremos nuestras peticiones
function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://swapi.co/api/people/`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function handleError() {
  console.log('Se ha presentado un error');
}

function addNews() {
  const data = JSON.parse(this.responseText);
  let li = document.createElement('div');
  li.className = 'articleClass';
console.log(data);

      let output = `
    <div class="row text-center">
    <div class="col-xs-6 col-md-6 col-lg-6">
    <img src="img/Luke Skywalker.png" class="thumbnail imgModal">
    </div>
    <div class="col-xs-12 col-md-12 col-lg-12">
    <h2>${data.results[0].name}</h2>
    <ul class="list-group">
    <li class="list-group-item"><strong>Gender:</strong> ${data.results[0].gender}</li>
    <li class="list-group-item"><strong>Films appearances:</strong> ${data.results[0].films.length}</li>
    <li class="list-group-item"><strong>Birth year:</strong> ${data.results[0].birth_year}</li>
    </ul>
    </div>
    </div>
    `;
    $('.modal-content').append(output);

};







/*
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

*/