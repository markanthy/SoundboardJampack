const sounds = ['schord1', 'schord2', 'schord3', 'schord4', 'd3bass', 'd4bass', 'bellbong', 'pingsfx'];

const keySoundMap = {
  'q': 'schord1',
  'w': 'schord2',
  'e': 'schord3',
  'r': 'schord4',
  't': 'd3bass',
  'y': 'd4bass',
  'u': 'bellbong',
  'i': 'pingsfx',
};

const backgrounds = {
  'schord1-btn': 'url("img/schord1.png")',
  'schord2-btn': 'url("img/schord2.png")',
  'schord3-btn': 'url("img/schord3.png")',
  'schord4-btn': 'url("img/schord4.png")',
  'd3bass-btn': 'url("img/d3bass.png")',
  'd4bass-btn': 'url("img/d4bass.png")',
  'bellbong-btn': 'url("img/bellbong.png")',
  'pingsfx-btn': 'url("img/pingsfx.png")',
};

sounds.forEach(sound => {
  const btn = document.createElement('button');

  // Add a class to the button based on the sound name
  btn.classList.add('btn', sound + '-btn');

  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();

    document.getElementById(sound).play();

      // Set the title of the page to the button text
      const title = document.getElementById('title')
      title.innerText = event.target.innerText + '!'

      // Change the background image based on the class of the button that was clicked
      const background = backgrounds[`${sound}-btn`];
      document.body.style.backgroundImage = background;

  });

  document.getElementById('buttons').appendChild(btn);
});


document.addEventListener('keydown', (event) => {
  const sound = keySoundMap[event.key];
  if (sound) {
    stopSongs();
    document.getElementById(sound).play();
    const title = document.getElementById('title');
    title.innerText = sound + '!';

    // Change the background image based on which button is pressed
    const button = document.querySelector(`.${sound}-btn`);
    const backgroundImage = backgrounds[button.classList[1]];
    document.body.style.backgroundImage = backgroundImage;

    // Add the key-pressed class to the button associated with the pressed key
    button.classList.add('key-pressed');
  }
});

document.addEventListener('keyup', (event) => {
  const sound = keySoundMap[event.key];
  if (sound) {
    // Remove the key-pressed class from the button associated with the released key
    const button = document.querySelector(`.${sound}-btn`);
    button.classList.remove('key-pressed');
  }
});

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
