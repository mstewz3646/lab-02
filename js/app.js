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

Horn.prototype.render = function(){
  let template = $('#photo-template').html();
  let templateRender = Handlebars.compile(template);
  return templateRender(this);
};

// Unique keywords for filter function
Horn.prototype.createKeywordsArr = function(){
   if (!keywords.includes(this.keyword)){
    keywords.push(this.keyword);
    console.log(this.keyword);
}
};

//Put into readJsaon below line 101
 // if page1 (){
    //do something
    // empty container
    //render new content
  //} 
  // if page2()
   //do something
    // empty container
    //render new content

    //reformat below for new if statements

Horn.readJson = (pageNumber) => {
  Horn.allHorns = [];
  $.get(`../data/${pageNumber}.json`, 'json')
    .then(page => {
      page.forEach(item => {
        Horn.allHorns.push(new Horn(item));
      }); 
  })
  .then(Horn.loadHorns);
};

Horn.loadHorns = (pageNumber) => {
 $('main').empty();
  Horn.allHorns.forEach(horn => {
    $('#newmain').append(horn.render(pageNumber));
    });
};

// //event handler for filter
$('select[id="animal-select"]').on('change', function() {
  let $selection = $(this).val();
  $('div').hide();
  $(`div[class="${$selection}"]`).show();
  if($selection === 'default'){
    $('div').show();
  }
});

//DOM-ready function
 $(document).ready(function() {
  $('section').show();
});

$(() => Horn.readJson('../data/page-1'));
$(() => Horn.readJson('../data/page-2'));

