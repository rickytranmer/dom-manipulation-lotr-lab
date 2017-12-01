console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

var totalClicks = 0;


// Part 1


function makeMiddleEarth() {
  console.log("--makeMiddleEarth--");
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section');
  middleEarth.setAttribute('id', 'middle-earth');

  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  for (var i=0; i<lands.length; i++) {
    var newLand = document.createElement('article');
    var heading = document.createElement('h1');
    heading.innerHTML = lands[i];
    newLand.appendChild(heading);
    middleEarth.appendChild(newLand);
  }
  console.log("Middle Earth loaded.");
  console.log(middleEarth);

  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  console.log("--makeHobbits--");
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var listHobbits = document.createElement('ul');
  listHobbits.setAttribute('id', 'list-hobbits')
  var shire = document.querySelector('article');

  for (var i=0; i<hobbits.length; i++) {
    var newHobbit = document.createElement('li');
    // give each hobbit a class of hobbit
    newHobbit.setAttribute('class', 'hobbit');
    if (hobbits[i]==="Frodo Baggins") {
      newHobbit.setAttribute('id', 'frodo');
    } else if (hobbits[i]==="Samwise \'Sam\' Gamgee") {
      newHobbit.setAttribute('id', 'sam');
    }
    newHobbit.innerHTML = hobbits[i];
    listHobbits.appendChild(newHobbit);
  }

  shire.appendChild(listHobbits);
  console.log("The Shire loaded.");
  console.log(shire);
}

makeHobbits();


// Part 3

var keepItSecretKeepItSafe = function() {
  console.log("--keepItSecretKeepItSafe--");

  // create a div with an id of 'the-ring'
  var newRing = document.createElement('div');
  newRing.setAttribute('id', 'the-ring');

  // give the div a class of 'magic-imbued-jewelry'
  newRing.setAttribute('class', 'magic-imbued-jewelry')

  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  newRing.addEventListener('click', function() {
    nazgulScreech();
    totalClicks++;
    if (totalClicks >= 3) {
      body.style.visibility = "hidden";
      var newBody = document.createElement('body');
      document.querySelector('html').appendChild(newBody);
      var failure = document.createElement('h2');
      failure.innerHTML = "The Ring has been returned to Sauron and the world is over.";
      newBody.appendChild(failure);
      console.log(newBody);
      console.log(failure);
    }
  });

  // add the ring as a child of Frodo
  var frodo = document.getElementById('frodo');
  frodo.appendChild(newRing);

  console.log("The Ring loaded.");
  console.log(frodo);
  console.log(newRing);
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  console.log("--makeBuddies--");

  // create an aside tag
  newAside = document.createElement('aside');
  console.log(newAside);

  // attach an unordered list of the 'buddies' in the aside
  var listBuddies = document.createElement('ul');
  for (i=0; i<buddies.length; i++) {
    var newBuddy = document.createElement('li');
    if (buddies[i]==="Strider") {
      newBuddy.setAttribute('id', 'strider');
    } else if (buddies[i]==="Gandalf the Grey") {
      newBuddy.setAttribute('id', 'gandalf');
    } else if (buddies[i]==="Boromir") {
      newBuddy.setAttribute('id', 'boromir');
    }
    newBuddy.innerHTML = buddies[i];
    listBuddies.appendChild(newBuddy);
  }
  newAside.appendChild(listBuddies);

  // insert your aside as a child element of rivendell
  var rivendell = document.querySelectorAll('article')[1];
  rivendell.appendChild(newAside);
}

makeBuddies();

// Part 5


function beautifulStranger() {
  console.log("--beautifulStranger--");

  // change the 'Strider' textnode to 'Aragorn'
  document.getElementById('strider').innerHTML = "Aragorn";
  console.log("Strider -> Aragorn");
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  console.log("--leaveTheShire--");

  // assemble the hobbits and move them to Rivendell
  var daHobbits = document.getElementById('list-hobbits')
  document.querySelector('article').removeChild(daHobbits);
  console.log("Hobbits removed.");
  var rivendell = document.querySelectorAll('article')[1];
  console.log(rivendell);
  console.log(daHobbits)
  rivendell.appendChild(daHobbits);
  console.log("Hobbits added.");
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  console.log("--forgeTheFellowShip--");
  var rivendell = document.querySelectorAll('article')[1];
  var rivBuddies = document.querySelector('ul');
  var rivHobbits = document.getElementById('list-hobbits');
  var listBuddies = rivBuddies.querySelectorAll('li');
  var listHobbits = rivHobbits.querySelectorAll('li');

  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  theFellowship.appendChild(document.createElement('ul'));
  rivendell.appendChild(theFellowship);

  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  //hobbits
  for (i=0; i<hobbits.length; i++) {
    rivHobbits.removeChild(listHobbits[i]);
    theFellowship.firstChild.appendChild(listHobbits[i]);
    alert(listHobbits[i].innerText + " has joined your party!");
  }
  //buddies
  for (i=0; i<buddies.length; i++) {
    rivBuddies.removeChild(listBuddies[i]);
    theFellowship.firstChild.appendChild(listBuddies[i]);
    alert(listBuddies[i].innerText + " has joined your party!");
  }

  console.log(theFellowship);
  console.log(theFellowship.firstChild);
}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  console.log("--theBalrog--");
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = document.getElementById('gandalf');
  gandalf.innerText = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.display = "inline-block";
  gandalf.style.background = "white";
  gandalf.style.border = "5px solid grey";
}

theBalrog();

// Part 9

function hornOfGondor() {
  console.log("--hornOfGondor--");
  var boromir = document.getElementById('boromir');
  var theFellowship = document.getElementById('the-fellowship');

  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  alert("The horn of gondor has been blown - Boromir's been killed by the Uruk-hai!");

  // put a linethrough on boromir's name
  boromir.innerHTML = boromir.innerHTML.strike();

  // Remove Boromir from the Fellowship
  theFellowship.firstChild.removeChild(boromir);
}

hornOfGondor();

// Part 10

function itsDangerousToGoAlone(){
  console.log("--itsDangerousToGoAlone--");
  var frodo = document.getElementById('frodo');
  var sam = document.getElementById('sam');
  var theFellowship = document.getElementById('the-fellowship');
  var mordor = document.querySelectorAll('article')[2];
  mordor.appendChild(document.createElement('ul'));
  console.log(frodo);
  console.log(sam);
  console.log(theFellowship);
  console.log(mordor);

  // take Frodo and Sam out of the fellowship and move them to Mordor
  theFellowship.firstChild.removeChild(frodo);
  theFellowship.firstChild.removeChild(sam);
  mordor.lastChild.appendChild(frodo);
  mordor.lastChild.appendChild(sam);

  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();

// Part 11

function weWantsIt() {
  console.log("--weWantsIt--");
  var theRing = document.getElementById('the-ring');
  var frodo = document.getElementById('frodo');
  var mordor = document.querySelectorAll('article')[2];
  var mountDoom = document.getElementById('mount-doom');

  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  mordor.appendChild(gollum);
  console.log(gollum);
  console.log(frodo);

  // Remove the ring from Frodo and give it to Gollum
  frodo.removeChild(theRing);
  gollum.appendChild(theRing);

  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum);
}

weWantsIt();

// Part 12

function thereAndBackAgain() {
  console.log("--thereAndBackAgain--");
  var theRing = document.getElementById('the-ring');
  var gollum = document.getElementById('gollum');
  var listHobbits = document.querySelectorAll('.hobbit');
  var shire = document.querySelector('article');
  var mordor = document.querySelectorAll('article')[2];
  var middleEarth = document.getElementById('middle-earth');

  console.log(listHobbits);

  // remove Gollum and the Ring from the document
  gollum.parentNode.removeChild(gollum);
  theRing.parentNode.removeChild(theRing);

  // remove all the baddies from the document
  middleEarth.removeChild(mordor);

  // Move all the hobbits back to the shire
  shire.appendChild(document.createElement('ul'));
  for (i=0; i<listHobbits.length; i++) {
    shire.lastChild.appendChild(listHobbits[i]);
  }
}

//thereAndBackAgain();

// Bonus 1
