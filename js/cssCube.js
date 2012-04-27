var Cube = function() {
  this.opened = true;
};

Cube.prototype.render = function(elementId) {

  var thisCube = this;

  var toggle = function() {
    thisCube.toggle();
  }

  this.cube = $('<div></div>');
  this.cube.addClass('cube');

  this.leftFace = $('<div></div>');
  this.leftFace.addClass('face');
  this.leftFace.addClass('leftFace');
  this.leftFace.click(toggle);

  this.bottomFace = $('<div></div>');
  this.bottomFace.addClass('face');
  this.bottomFace.addClass('bottomFace');
  this.bottomFace.click(toggle);

  this.backFace = $('<div></div>');
  this.backFace.addClass('face');
  this.backFace.addClass('backFace');
  this.backFace.click(toggle);

  this.frontFace = $('<div></div>');
  this.frontFace.addClass('face');
  this.frontFace.addClass('frontFace');
  this.frontFace.click(toggle);

  this.rightFace = $('<div></div>');
  this.rightFace.addClass('face');
  this.rightFace.addClass('rightFace');
  this.rightFace.click(toggle);

  this.topFace = $('<div></div>');
  this.topFace.addClass('face');
  this.topFace.addClass('topFace');
  this.topFace.click(toggle);

  this.cube.append(this.leftFace);
  this.cube.append(this.bottomFace);
  this.cube.append(this.backFace);
  this.cube.append(this.frontFace);
  this.cube.append(this.rightFace);
  this.cube.append(this.topFace);
  $('#' + elementId).append(this.cube);

  $(document).keydown(function(evt) {
    switch (evt.keyCode) {
      case 37: // left
        thisCube.showBackFace();
        break;
      
      case 38: // up
        thisCube.showFrontFace();
        break;
      
      case 39: // right
        thisCube.showFrontFace();
        break;
      
      case 40: // down
        thisCube.showBackFace();
        break;
      
      default:
        break;
    };
  }).bind('mousedown touchstart', function(evt) {
    console.log("TOUCH START");
    //delete mouse.last;
    
    //evt.originalEvent.touches ? evt = evt.originalEvent.touches[0] : null;
    //mouse.start.x = evt.pageX;
    //mouse.start.y = evt.pageY;
    //$(document).bind('mousemove touchmove', function(event) {
        // Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
    //    if (!touch || !(event.originalEvent && event.originalEvent.touches.length > 1)) {
    //        event.preventDefault();
            // Get touch co-ords
    //        event.originalEvent.touches ? event = event.originalEvent.touches[0] : null;
    //        $sphere.trigger('move-viewport', {x: event.pageX,y: event.pageY});
    //    }
    //});
    
    //$(document).bind('mouseup touchend', function() {
    //    $(document).unbind('mousemove touchmove');
    //});
  });

};

Cube.prototype.showBackFace = function() {
  this.cube.addClass('showBackFace');
}

Cube.prototype.showFrontFace = function() {
  this.cube.removeClass('showBackFace');
}

Cube.prototype.toggle = function() {
  if (this.opened) {
    this.opened = false;
    this.close();
  } else {
    this.opened = true;
    this.open();
  }

};

Cube.prototype.close = function() {
  var thisCube = this; 
  this.leftFace.addClass('leftFaceClosed');
  this.frontFace.addClass('frontFaceClosed');
  this.backFace.addClass('backFaceClosed');
  this.rightFace.addClass('rightFaceClosed');
  this.topFace.addClass('topFaceClosed');
  setTimeout(function(){
    thisCube.topFace.addClass('topFaceClosed2');
  },210);
};

Cube.prototype.open = function() {
  var thisCube = this; 
  this.leftFace.removeClass('leftFaceClosed');
  this.frontFace.removeClass('frontFaceClosed');
  this.backFace.removeClass('backFaceClosed');
  this.rightFace.removeClass('rightFaceClosed');
  thisCube.topFace.removeClass('topFaceClosed2');
  this.topFace.removeClass('topFaceClosed');
  //setTimeout(function(){
  //  thisCube.top.removeClass('topFolded2');
  //},210);
};