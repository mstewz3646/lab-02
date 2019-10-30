'use strict';

function Horn(horn){
  this.image_url = horn.image_url;
  this.title = horn.title;
  this.description = horn.description;
  this.keyword = horn.keyword;
  this.horns = horn.horns;
}

Horn.allHorns = [];

Horn.prototype.render = function(){
  console.log ('render');
  
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

Horn.readJson = () => {
  $.get('./data/page-1.json')
  .then(page => {
    page.forEach(item => {
      Horn.allHorns.push(new Horn(item));
      console.log (item);
    });
  })
  .then(Horn.loadHorns);
  console.log ('hello');
};

Horn.loadHorns = () => {
  console.log ('bye');
  Horn.allHorns.forEach(horn => {
    horn.render();
    console.log (horn);
  });
};


$(() => Horn.readJson());