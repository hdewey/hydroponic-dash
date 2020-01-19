const url = "https://decade-lie-check-respectively.trycloudflare.com"

fetch(url + '/lights/on');

const turnOn = () => {
  fetch(url + '/lights/on')
};

const turnOff = () => {
  fetch(url + '/lights/off')
};
