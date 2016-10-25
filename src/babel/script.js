//https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern
let Module = ( () => {
  let data = { name : 'Xavier'}

  let privateMethod  = () => {
    // private
  };

  let someMethod = () => {
    // public
    console.log(this.data)
  };

  let anotherMethod  = () => {
    // public
  };
  
  //return an object
  return {
    someMethod        : someMethod,
    anotherMethod         : anotherMethod ,
    data      : data.name
  };

})();
//Module.someMethod()
//Module.anotherMethod ()
//https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern
let TicTacToe = (() => {
  let data = { name : 'Xavier'}, self = this,
    arr = [0, 0],//column and row
    scoreList = [] 

  let _privateMethod  = () => {
    console.log(data);
  };


  let minimax  = (game) => {
    if (game === 'over') {
      scores = [] // an array of scores
      moves = []  // an array of moves
      return game.over
    }
  }

    ////# Populate the scores array, recursing as needed
    //game.get_available_moves.each do |move|
        //possible_game = game.get_new_state(move)
        //scores.push minimax(possible_game)
        //moves.push move
    //end

    //# Do the min or the max calculation
    //if game.active_turn == @player
        //# This is the max calculation
        //max_score_index = scores.each_with_index.max[1]
        //@choice = moves[max_score_index]
        //return scores[max_score_index]
    //else
        //# This is the min calculation
        //min_score_index = scores.each_with_index.min[1]
        //@choice = moves[min_score_index]
        //return scores[min_score_index]
    //end
//end
  //};



  let game = () => {
    console.log(1);
  }

  // @player is the turn taking player
  let score = () => {
    if ( game(win,player) ) {
      return 10 // I win, l'opponent lost
    }else if (game(win,opponent) ){
      return -10 // I lost, l'opponent wih
    }else{
      return 0 // tied game
    }
  }

  //return an object
  return {
    someMethod: someMethod,
    anotherMethod : anotherMethod
  };

})();
TicTacToe.someMethod()
TicTacToe.anotherMethod ()
