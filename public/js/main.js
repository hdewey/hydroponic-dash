const url = "https://awareness-prepaid-festival-camcorders.trycloudflare.com"

const turnOn = () => {
  fetch(url + '/admin/lights/on');
};

const turnOff = () => {
  fetch(url + '/admin/lights/off');
};
