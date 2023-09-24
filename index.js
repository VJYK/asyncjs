const hello = () => {
  document.querySelector('h1').innerHTML = 'Best JS Series';
};

const changeMe = setTimeout(hello, 2000);

const stop = function () {
  document
    .querySelector('#stop')
    .addEventListener('click', clearTimeout(changeMe));

  console.log('Stopped');
};
