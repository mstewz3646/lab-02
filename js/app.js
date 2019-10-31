'use strict';

// --------Global Variables-----------------
let keywords = [];

function Horn(horn){
  this.image_url = horn.image_url;
  this.title = horn.title;
  this.description = horn.description;
  this.keyword = horn.keyword;
  this.horns = horn.horns;
}

Horn.allHorns = [];

Horn.prototype.render = function(){ 
  //do something
  //1. create element
  let template = $('#photo-template').clone();
 
  let templeRender = Handlebars.compile(template);
  return templeRender(this);
};
 //3. append to DOM
 hornClone.appendTo('main');

Horn.prototype.filter = function(){
  //do something
  //1. create element
  let hornClone = $('option').clone();
 let $hornClone = $(hornClone[0]);
  //2. give it content
  // <option value="narwhal">Narwal</option>
  $hornClone.attr('value', this.keyword);
  $hornClone.text(this.keyword);

  //3. append to DOM  
    $hornClone.appendTo('#animal-select');
};

// Unique keywords for filter function
Horn.prototype.dropdown = function(){
   // Add if statement in case keyword is already in keywords array
   if (!keywords.includes(this.keyword)){
    keywords.push(this.keyword);
  }
};

Horn.readJson = () => {
  $.get('./data/page-1.json')
  .then(page => {
    page.forEach(item => {
      Horn.allHorns.push(new Horn(item));
    });
  })
  .then(Horn.loadHorns);
};

Horn.loadHorns = () => {
  Horn.allHorns.forEach(horn => {
    horn.render();
    horn.filter();
  });
};

//event handler for filter
$('select[id="animal-select"]').on('change', function() {
  let $selection = $(this).val();
  $('section').hide();
  $(`section[class="${$selection}"]`).show();
  if($selection === 'default'){
    $('section').show();
  }
});

// DOM-ready function
// $(document).ready(function() {
//   $('.tab-content').hide();
// });

$(() => Horn.readJson());

