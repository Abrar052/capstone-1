const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.desktop');
const modal = document.querySelector('.modal');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.desktop-nav').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

const data = [
  {
    image: 'images/kevinfogie.png',
    title: 'Kevin Fogie',
    tag: 'President of Marvel Studio',
    details: 'Kevin Fogie is the president and producer of the Marvel Universe, and he is the main person behind the success of Marvel.',

  },
  {
    image: 'images/joerusso.png',
    title: 'Joe Russo',
    tag: 'Director',
    details: 'Joe Russo is a director of the Marvel Universe, he has directed many marvels movies.',

  },
  {
    image: 'images/Robertdownyjr.png',
    title: 'Robert Downy Jr',
    tag: 'American Actor',
    details: 'Robert Downy Jr is an American Actor who played the one of the most famous characters "IRON MAN".',

  },
  {
    image: 'images/chrisevans.png',
    title: 'Chris Evans',
    tag: 'American Actor',
    details: 'Chris Evans is an American Actor who played the one of the most famous characters "CAPTAIN AMERICA".',

  },
  {
    image: 'images/markrafflo.png',
    title: 'Mark Rafflo',
    tag: 'American Actor',
    details: 'Mark Rafflo is an American Actor who played the one of the most famous characters "HULK".',

  },
  {
    image: 'images/chrishemsworth.png',
    title: 'Chris Hemsworth',
    tag: 'American Actor',
    details: 'Chris Hemsworth is an Australia Actor who played the one of the most famous characters "THOR".',
  },
];

modal.innerHTML = data
  .map((ele) => `<div class= "modal-content"> 
    <div class="modal-img">
        <img src=${ele.image} alt="Kevin Fogie">
            </div>
            <div class="modal-details">
                <h2 class="modal-heading">${ele.title}</h2>
                <h3 class="modal-tag">${ele.tag}</h3>
                <p class="tag-details">${ele.details}
                </p>
            </div>
   </div>`)
  .join('');
