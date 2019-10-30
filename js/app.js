'use strict';

function Horn(keyword){
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
  let $hornClone = $(hornClone[0].content);
  
  //2. give it content
  $hornClone.find('h2').text(this.title);
  $hornClone.find('img').attr('src', this.image_url);
  $hornClone.find('p').text(this.description);
  $hornClone.removeClass('clone');
  $hornClone.attr('class', this.keyword);

  //3. append to DOM
  $hornClone.appendTo('main');

};


