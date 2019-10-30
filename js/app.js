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
  let hornClone = $('#photo-template').clone();
 
  //2. give it content
  hornClone.find('h2').text(this.title);
  hornClone.find('img').attr('src', this.image_url);
  hornClone.find('p').text(this.description);
  hornClone.removeClass('clone');
  hornClone.attr('class', this.keyword);

  //3. append to DOM
  hornClone.appendTo('main');

};


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
  
  // Add if statement in case keyword is already in keywords array
  if (!keywords.includes(this.keyword)){
    $hornClone.appendTo('#animal-select');
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

$(() => Horn.readJson());

