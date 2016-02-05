function Movie(title, year, duration) {
  var song = this;
  Media.call(song, title, duration);
  this.year = year;
}
Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
    
    var htmlString = '<li';
     if(this.isPlaying){
        htmlString += ' class = "current"';
       }
        htmlString += '>';
        htmlString += this.title;
        htmlString += ' - '
        htmlString += this.year;
        htmlString += '<span class="duration">'
        htmlString += this.duration;
        htmlString += '</span></li>';  
      return htmlString;
    
};