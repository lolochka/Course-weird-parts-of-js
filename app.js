function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms){};
  console.log('finished function');
}

function clickHand() {
  console.log('CLICK');
}

document.addEventListener('click', clickHand);

waitThreeSeconds();
console.log('finished execution');