/*
Exercise for Countdown C session 3. See git_exercise.txt for details
*/

const personOne = favoriteFoods => {
  /*insert functionality here*/  
  // for(let i =0; i<favoriteFoods.length; i++){
  //   console.log(favoriteFoods[i]);
  // }
  favoriteFoods.map(

  food=> {console.log(food);
  }    
  )

};

const personTwo = favoriteMovies => {
  /*insert functionality here*/
  for(let i =0; i<favoriteMovies.length; i++){
    console.log(favoriteMovies[i]);
  }
};

/*you can opt out of this third function if you only have two partners*/
const personThree = favoriteAnimals => {
  /*insert functionality here*/
  for(let i =0; i<favoriteAnimals.length; i++){
    console.log(favoriteAnimals[i]);
  }
};

/*
What does this variable syntax do?
*/
const favoriteFoods = ["Pasta","Pizza"],
  favoriteMovies = ["Up","Toy Story"],
  favoriteAnimals = ["Lion","Tiger","Panda"];

const iceBreaker = () => {
  /*
    Call each function here
    */
   personOne(favoriteFoods);
   personTwo(favoriteMovies);
   personThree(favoriteAnimals);
};

/*this calls iceBreaker, which will call all of your functions*/
iceBreaker();
