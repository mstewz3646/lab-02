'use strict';

// --------Global Variables-----------------
// let keywords = [];
// let content = {allHorns: []};

function Horn(horn){
  this.image_url = horn.image_url;
  this.title = horn.title;
  this.description = horn.description;
  this.keyword = horn.keyword;
  this.horns = horn.horns;
}



Horn.prototype.render = function(){
  
  //1. create element
  let template = $('#photo-template').html();
  // console.log(template);
   //2. give it content
  let templateRender = Handlebars.compile(template);
  // console.log(templateRender);
  // console.log(this);
  return templateRender(this);
};

// Handlebars
// Horn.prototype.toHtml= (function () {
  // Grab the template script
  // var theTemplateScript = $("#content-placeholder").html();
  // Compile the template
  // var theTemplate = Handlebars.compile(theTemplateScript);
  // Define our data object  title, image_url, description from Json files page 1 and 2
  
//take dataset items
// page-1.forEach(Horn.allHorns => {
//   Horn.allHorns.push(new Horn(neighborhoodObject));
// });

// Horn.allHorns.forEach(newhornobject => {
//   $('#newmain').append(newhornobject.toHtml());
// });


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

