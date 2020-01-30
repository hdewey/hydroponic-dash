const url = "https://awareness-prepaid-festival-camcorders.trycloudflare.com"

const turnOn = () => {
  fetch(url + '/lights/on')
};

const turnOff = () => {
  fetch(url + '/lights/off')
};
