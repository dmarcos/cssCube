var Cube = function() {
  this.opened = true;
  this.xRotation = 0;
  this.yRotation = 0;
};

Cube.prototype.render = function(elementId) {

  var thisCube = this;

  var toggle = function() {
    thisCube.toggle();
  }

  // Building cube
  this.cube = $('<div></div>');
  this.cube.addClass('cube');

  this.leftFace = $('<div></div>');
  this.leftFace.addClass('face');
  this.leftFace.addClass('leftFace');

  this.bottomFace = $('<div></div>');
  this.bottomFace.addClass('face');
  this.bottomFace.addClass('bottomFace');

  this.backFace = $('<div></div>');
  this.backFace.addClass('face');
  this.backFace.addClass('backFace');

  this.frontFace = $('<div></div>');
  this.frontFace.addClass('face');
  this.frontFace.addClass('frontFace');

  this.rightFace = $('<div></div>');
  this.rightFace.addClass('face');
  this.rightFace.addClass('rightFace');

  this.topFace = $('<div></div>');
  this.topFace.addClass('face');
  this.topFace.addClass('topFace');

  this.cube.append(this.leftFace);
  this.cube.append(this.bottomFace);
  this.cube.append(this.backFace);
  this.cube.append(this.frontFace);
  this.cube.append(this.rightFace);
  this.cube.append(this.topFace);
  $('#' + elementId).append(this.cube);

  // Attaches events
  this.leftFace.click(toggle);
  this.bottomFace.click(toggle);
  this.backFace.click(toggle);
  this.frontFace.click(toggle);
  this.rightFace.click(toggle);
  this.topFace.click(toggle);

  $(document).keydown(function(evt) {
    switch (evt.keyCode) {
      case 37: // left
        thisCube.rotate(0, 90);
        break;
      
      case 38: // up
        thisCube.rotate(270, 0);
        break;
      
      case 39: // right
        thisCube.rotate(0, 270);
        break;
      
      case 40: // down
        thisCube.rotate(90, 0);
        break;
      
      default:
        break;
    };
  }).bind('mousedown touchstart', function(event) {
    var start;
    var scaleFactor = event.originalEvent.touches? 4 : 1;
    
    event = event.originalEvent.touches? event.originalEvent.touches[0] : event;
    start = {
      x : event.pageX,
      y : event.pageY
    };


    $(document).bind('mousemove touchmove', function(event) {
        // Only perform rotation if one touch or mouse (e.g. still scale with pinch and zoom)
        if (!event.originalEvent.touches || !(event.originalEvent && event.originalEvent.touches.length > 1)) {
            event.preventDefault();
            // Get touch co-ords
            event = event.originalEvent.touches? event.originalEvent.touches[0] : event;
            thisCube.xRotation += (event.pageX - start.x) / scaleFactor;
            thisCube.yRotation -= (event.pageY - start.y) / scaleFactor;
            thisCube.rotate(thisCube.yRotation , thisCube.xRotation);
            start = {
              x : event.pageX,
              y : event.pageY
            };
        }
    });
    
    $(document).bind('mouseup touchend', function() {
        $(document).unbind('mousemove touchmove');
    });
  });

};

Cube.prototype.rotate = function(x, y) {
  this.cube.css('transform', "rotateX(" + x + "deg) rotateY(" + y + "deg)");
  this.cube.css('-ms-transform', "rotateX(" + x + "deg) rotateY(" + y + "deg)");
  this.cube.css('-webkit-transform', "rotateX(" + x + "deg) rotateY(" + y + "deg)");
  this.cube.css('-moz-transform', "rotateX(" + x + "deg) rotateY(" + y + "deg)");
  this.cube.css('-o-transform', "rotateX(" + x + "deg) rotateY(" + y + "deg)");
};

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
};