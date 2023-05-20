function onLoad() {
  var who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  var action = ['ate', 'peed', 'crushed', 'broke'];
  var what = ['my homework', 'the keys', 'the car'];
  var when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

  var randomWho = who[Math.floor(Math.random() * who.length)];
  var randomAction = action[Math.floor(Math.random() * action.length)];
  var randomWhat = what[Math.floor(Math.random() * what.length)];
  var randomWhen = when[Math.floor(Math.random() * when.length)];

  var excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";
  document.getElementById("excuse").innerHTML = excuse;
}

// Generamos una excusa automáticamente al cargar la página
window.addEventListener("load", onLoad);

// Generamos una excusa automáticamente al cargar la página
window.addEventListener("load", onLoad);

// Generamos una excusa automáticamente al hacer clic en cualquier botón
document.addEventListener("click", onLoad);

// Generamos una excusa automáticamente al pulsar cualquier tecla
document.addEventListener("keydown", onLoad);

