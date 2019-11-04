'use strict';

// --------Global Variables-----------------
// let keywords = [];

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

// Handlebars
// Horn.prototype.filter = function(){
//   //1. create element
//  let $hornClone = $(hornClone[0]);
//   //2. give it content
//   // <option value="narwhal">Narwal</option>
//   $hornClone.attr('value', this.keyword);
//   $hornClone.text(this.keyword);
//   //3. append to DOM  
//     $hornClone.appendTo('#animal-select');
// };

// // Unique keywords for filter function
// Horn.prototype.dropdown = function(){
//    // Add if statement in case keyword is already in keywords array
//    if (!keywords.includes(this.keyword)){
//     keywords.push(this.keyword);
// }
// };


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

Horn.readJson = () => {
  Horn.allHorns = [];
  $.get('../data/page-1.json', 'json')
    .then(page => {
      page.forEach(item => {
        Horn.allHorns.push(new Horn(item));
      }); 
  })
  .then(Horn.loadHorns);
};

Horn.loadHorns = () => {
 $('main').empty();
  Horn.allHorns.forEach(horn => {
    $('#newmain').append(horn.render());
    // console.log('render');
    // horn.keywords();
    // horn.filter();
  });
  
};

// //event handler for filter
// $('select[id="animal-select"]').on('change', function() {
//   let $selection = $(this).val();
//   $('section').hide();
//   $(`section[class="${$selection}"]`).show();
//   if($selection === 'default'){
//     $('section').show();
//   }
// });

//DOM-ready function
//  $(document).ready(function() {
//   $('section').show();
// });

$(() => Horn.readJson());

