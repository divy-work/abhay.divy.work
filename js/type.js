window.addEventListener('load',function () {
//  $('.box').fadeOut('slow');
//$('body').fadeIn('slow');
  console.log('Loaded');
  var app = document.getElementById('type-in');

  var typewriter = new Typewriter(app, {
      loop: true
  });

  typewriter.typeString('Web <strong>developer</strong> & Software <strong>enthusiast</strong>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('A <strong>15 year old</strong> student!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Founder of <a href="https://spruce.divy.work">Spruce</a> & <a href="https://intellect.divy.work">Intellect</a>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<strong>Guitarist</strong> & <strong>Gamer</strong>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Living in <strong>India</strong>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Yayy!')
      .start();
  });
