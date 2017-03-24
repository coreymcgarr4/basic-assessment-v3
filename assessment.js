// Create a var called hi that says seeya.

var hi = 'seeya';

// Use iLove to create a new var called iLoveCode that says "I love code"
            var iLove = 'I love'
            var iLoveCode = iLove + ' code';

// Make an object called Archibald// Archibald has height 4ft (string)
// Archibald has age 18 (number)
// Archibald has shirt with color olive and size L (object)
// Archibald likes Gorgeous Plastic Bacon, Handmade Fresh Pants and Licensed Steel Sausages (array of strings)
// Archibald is happy(boolean)

var Archibald = {
  height: '4ft',
  age: 18,
  shirt: {
    color: 'olive',
    size: 'L'
  },
  likes: ['Gorgeous Plastic Bacon', 'Handmade Fresh Pants', 'Licensed Steel Sausages'],
  happy: true
}

// Change myShirt type to mediocre and color to grey using dot notation.
  var myShirt = {
    type: 'cotton',
		color: 'white',

  };

  myShirt.type = 'mediocre';
  myShirt.color = 'grey';

// Change myOtherShirt type to wool and color to gold using square bracket notation
  var myOtherShirt = {
  	type: 'fresh',
		color: 'white',

  };

  myOtherShirt['type'] = 'wool',
  myOtherShirt['color'] = 'gold';

// Create an object that tracks a count of animals in a zoo. Call it 'zoo'
    // The key should be the animal name(string) and the value should be how many there are.
    // Our zoo has 26 capybaras, 91 marmosets and 60 ferrets

    var zoo = {
      capybaras: 26,
      marmosets: 91,
      ferrets: 60
    }

// Loop through this object and change all properties that start with the letter h to have a value of 'h'

    var otherist = {
      "hours": "mogilalia",
      "heterokaryotic": "spanipelagic",
      "hygrogram": "quadrae",
      "unextendible": "jueces",
      "decurvation": "oxychloric"
    }

    function changeH(){
      for (var key in otherist){
        if (key[0] === 'h'){
          otherist[key] = 'h';
        }
      }
    } changeH(otherist);


// Create an array of strings containing colors of the rainbow (roygbiv) called rainbowColors.
// There are 7.
var rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//  Using this array do the following
var heroes = ['Crimson Avenger', 'Merry', 'Kendra'];
// add 'Caretaker' to the end
heroes.push('Caretaker');
// remove 'Crimson Avenger' and store him in a var called firstHero
var firstHero = heroes.shift();
// add 'Kid' to the start of the array
heroes.unshift('Kid');
// remove 'Kendra' from the array and store him in a var called secondHero
var secondHero = heroes.splice(2, 1)[0];
// leave 'Merry' in the array but put a copy of him on a var called thirdHero
var thirdHero = heroes.slice(1, 2)[0];
// Write a function called addItem, that takes in an array, and an item, and adds the item to
// the array.
function addItem(array, item){
  array.push(item);
  return array;
}

// Write function called septupleTheFun that takes 1 parameter: A number or a string. It septuples (x7) numbers, and repeats strings. Example: 4 -> 28, 'Awesome' -> AwesomeAwesomeAwesomeAwesomeAwesomeAwesomeAwesome'
function septupleTheFun(param){
  if (parseInt(param) === param || !isNaN(param)){
    parseInt(param);
    return param*7;
  } else if (typeof param === 'string'){
    return param + param + param + param + param + param + param;
  }
}


// #14 Create a function called spiderTest that takes in an object that is an actor, it looks to see if the actor's name is Andrew Garfield and changes the actor object to have a property called spiderRating with a value of 10.  If their name is Tobey Maguire set spiderRating to 0.  otherwise set spiderRating to 'not a spiderman'.

function spiderTest(actor){
	if (actor['name'] === "Andrew Garfield"){
		actor.spiderRating = 10;
	} else if (actor['name'] === "Tobey Maguire"){
		actor.spiderRating = 0;
	} else {
		actor.spiderRating = 'not a spiderman';
	}
}


// #15 Create a function called whatIsItOutside that takes in a temperature (number), a humidity(number), and a cloudiness(number), in that order. Using the following to return the correct values
/*
    temperature over 85 and humidity over 45 - return "I'm all sweat"
    temperature under 40 and cloudiness over 60 - return "I have icicles"
    temperature over 85 and humidity under 45 and cloudiness under 20 - return "I'm literally in the desert"
    temperature over 90 or humidity over 55 or cloudiness over 65 - return "Hmm, probably not"
    Otherwise - return "I love outside"
*/
function whatIsItOutside(temp, humidity, cloudiness){
  if (temp > 85 && humidity > 45){
    return "I'm all sweat";
  } else if (temp < 40 && cloudiness > 60){
    return "I have icicles";
  } else if ( temp > 85 && humidity < 45 && cloudiness < 20){
    return "I'm literally in the desert";
  } else if (temp > 90 || humidity > 55 || cloudiness > 65){
    return "Hmm, probably not";
  } else {
    return "I love outside";
  }
}


    // #16 Create a function called callerBack that takes in a function (holla) and a string parameter(back) and invokes it(holla) with the string(back) + ' back'.
// IE - If I call you with 'Give it' you should invoke holla with 'Give it back'

function callerBack(holla, back){
	holla(back + ' back');
}

    // Write a function called clockIn that takes in an employee and department name
    // and returns an object with a name, department, and timestamp which is
    // the current time as a Date object

    function clockIn(name, department){

	return {
		name: name,
		department: department,
		timestamp: new Date()
	}
};
