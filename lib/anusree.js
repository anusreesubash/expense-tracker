console.log("This is anusress library");
function ColorBox(options) {
  console.log(options);
  if(options.class){
    $('.' + options.class).css('background-color', options.color);
  }
  if(options.id){
    $('#' + options.id).css('background-color', options.color);
  }
}


function ErrorNotification (){
  let error = $('<div>');
  
  error.css({
    width: '100%',
    position: 'absolute',
    'text-align': 'center',
    top: 0,
    background: '#da7b7b',
    padding: '20px',
    color: 'white',
    display: 'none'
  });

  this.notify = function(options){
    let msg = options.message;
      error.text(msg);
      $('body').append(error);
      error.slideDown();

      setTimeout(function() {
        error.slideUp();
      }, 2000);

    // error.remove();
  }
}