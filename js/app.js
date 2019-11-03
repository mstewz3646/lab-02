'use strict';

// --------Global Variables-----------------
let keywords = [];
let content = {allHorns: []};

function Horn(horn){
  this.image_url = horn.image_url;
  this.title = horn.title;
  this.description = horn.description;
  this.keyword = horn.keyword;
  this.horns = horn.horns;
}

Horn.allHorns = [];

Horn.prototype.render = function(){ 
  //1. create element
  let template = $('#photo-template').clone();
   //2. give it content
  let templeRender = Handlebars.compile(template);
  return templeRender(this);
};

// Handlebars
$(function () {
  // Grab the template script
  var theTemplateScript = $("#photo-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);
  // Define our data object  title, image_url, description from Json files page 1 and 2
  var context= {
    allHorns: [
      {"image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
      "title": "Rhino Family",
      "description": "Mother (or father) rhino with two babies",
      "keyword": "rhino",
      "horns": 2
    },
    { "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
      "title": "Unicorn Head",
      "description": "Someone wearing a creepy unicorn head mask",
      "keyword": "unicorn", 
      "horns": 1
    }
    ]
  }
  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});


Horn.prototype.filter = function(){
  //1. create element
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
    horn.keywords();
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
//  $(document).ready(function() {
//   $('section').hide();
// });

$(() => Horn.readJson());

