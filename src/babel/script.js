//prototype last
if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};

//begin module
let TicTacToe = (() => {

  const audios = {
    soft: 'http://artot.net/sounds/soft.mp3',
    tied: 'http://artot.net/sounds/tied.mp3',
    win : 'http://artot.net/sounds/win.mp3',
    lost: 'http://artot.net/sounds/Storm_exclamation.mp3'
  }
  function _playSound(sound) {
    new Audio(sound).play()
  }
  let 
  scoreList = [],player = [], counter=0, contain, circle,cross, 
    play,win,lost, tied,lastWinner=[], choice, choicePlay=[],lastChoice=[],
    pawnChoice='' ,//pion du joueur
    botArray =[], randChoice,
    carres = document.querySelectorAll('.map__carre span'), 
    piece = document.querySelectorAll('.choice span'),
    animPlayMachine,turns=0,
    reset = document.querySelector('.reset'),
    spot1 = document.querySelector('#spot11'),
    spot2 = document.querySelector('#spot12'),
    spot3 = document.querySelector('#spot13'),
    spot4 = document.querySelector('#spot21'),
    spot5 = document.querySelector('#spot22'),
    spot6 = document.querySelector('#spot23'),
    spot7 = document.querySelector('#spot31'),
    spot8 = document.querySelector('#spot32'),
    spot9 = document.querySelector('#spot33')



  //executed in a main function
  //the player choose either the cross or the circle
  //the choise is in var pawnChoice 
  //piece === .choice span
  //choose wich pawn the player want
  let _pawn = () => {
    for (let j = 0, l = piece.length; j < l; j++) {

      let current = piece[j], prev = piece[j-1];

      current.addEventListener('click', function(e) {
        if(this.textContent === 'circle'){
          pawnChoice = 'circle' 
          //return the id of the previous element
          let prevElement = this.previousSibling
          prevElement.classList.remove('choose-button')
          this.classList.add('choose-button') //animation
        } else if(this.textContent === 'cross'){
          pawnChoice = 'cross' 
          let nextElement = this.nextSibling
          nextElement.classList.remove('choose-button')
          this.classList.add('choose-button') //animation
        } else if(pawnChoice === ''){
          alert('err program, reload the page')
        } 
        console.log(pawnChoice );
        //_starter( pawnChoice  )
        e.preventDefault();
        return pawnChoice
      }) //end click
    }
  }


  let _starter = (p) => {
    console.log(lastWinner.length);
    console.log(pawnChoice );
    if (lastWinner[lastWinner.length-1] === p) {
      pawnChoice   = 'circle'
    } else if (lastWinner[lastWinner.length-1] === p) {
      pawnChoice   = 'cross'
    } else{
      pawnChoice  = p   
    } 
    return pawnChoice 
  }

  //carres = document.querySelectorAll('.map__carre span'), 
  let botPlay = (pawnChoice , pair) => {
      //botChoice == choix joueur 
    //donc on choisi l'autre pour le bot
    let botChoice = (pawnChoice === 'cross')?'circle':'cross'
    console.log(lastChoice );  // ['circle','cross','circle'...]
    console.log(choicePlay  ); // ['spot22','spot12','spot31'...]
    //on  construit un tableau a partir des 2 tableaux
    for (let i = 0, l = lastChoice.length; i < l; i++) {
      let current = lastChoice[i], prev = lastChoice[i-1];
      if (current === botChoice ) {
        botArray.push('#'+choicePlay[i] )
        
      } else{
        //botChoice is empty
        console.log('botChoice is empty');
      } 
      
    }
    console.log(botArray );
    
    randChoice = parseInt( Math.random()*8 , 10)

    if (choicePlay.length > 0) {
      //console.log('pawn botPlay ' +botChoice   );
      for (let i = 0, l = choicePlay.length; i < l; i++) {
        let current = choicePlay[i], prev = choicePlay[i-1], identifiant
        identifiant = '#'+current 
        //console.log(typeof identifiant);
        //console.log(identifiant);
        //console.log( document.querySelector(identifiant) );
        //row
           //document.querySelector('#spot13').classList.add(botChoice )
        if(identifiant !== '#spot11' 
          || identifiant !== '#spot12' 
          || identifiant !== '#spot13'){
        }else if(identifiant === 'spot13'){ 
           
        }
        if(identifiant === 'spot12' ){
        }
        if(identifiant === 'spot13' ){
        }
        //cidentifiant === 'spot'
        if(identifiant === 'spot21' ){
        }
        if(identifiant === 'spot22' ){
        }
        if(identifiant === 'spot23' ){
        }
        //didentifiant === 'spot'
        if(identifiant === 'spot31' ){
        }
        if(identifiant === 'spot32' ){
        }
      }
      //this class is now taken, we add .disable
    }
  }

  let addDisableAll = () => {
    var boxes = document.querySelectorAll('.map__carre span')
    boxes.forEach((box, i) => {
      box.classList.add('disable')
    })
  }

  let main = () => {
    _pawn()
    for (let i = 0; i < carres.length; i++) {
      let current = carres[i], prev = piece[i-1];
      //events on the case
      current.addEventListener('click', function(e) {
        if (pawnChoice === '') {
          alert('you need choose the pawn')
          return false
        }
        console.log('pawn '+ pawnChoice);
        if(turns === 8) {
          console.log('draw'); // tie game
          this.classList.add('disable', 'cross')
          turns = 0
        } else if(this.classList.contains('disable')){
          console.log('this spot is already filled');
        } else if(turns % 2 === 0){ //circle start
          turns++
          console.log('o');
          //this class is now taken, we add .disable
          this.classList.add('disable', 'circle')
          //save the case choice
          choicePlay.push( this.getAttribute('id')  )
          lastChoice.push('circle')
          if (
               spot1.classList.contains('circle') && spot2.classList.contains('circle') &&  spot3.classList.contains('circle')
            || spot4.classList.contains('circle') && spot5.classList.contains('circle') &&  spot6.classList.contains('circle') 
            || spot7.classList.contains('circle') && spot8.classList.contains('circle') &&  spot9.classList.contains('circle') 
            || spot1.classList.contains('circle') && spot4.classList.contains('circle') &&  spot7.classList.contains('circle') 
            || spot2.classList.contains('circle') && spot5.classList.contains('circle') &&  spot8.classList.contains('circle') 
            || spot3.classList.contains('circle') && spot6.classList.contains('circle') &&  spot9.classList.contains('circle') 
            || spot1.classList.contains('circle') && spot5.classList.contains('circle') &&  spot9.classList.contains('circle') 
            || spot3.classList.contains('circle') && spot5.classList.contains('circle') &&  spot7.classList.contains('circle') 
          ) {
            console.log('winner is O');
            lastWinner.push('circle')
            addDisableAll ()
            //reset()      
          } else{
            botPlay('circle')
          } 

        } else if(turns % 2 !== 0){ //cross
          turns++
          console.log('x');
          //this class is now taken, we add .disable
          this.classList.add('disable', 'cross')
          choicePlay.push( this.getAttribute('id')  )
          lastChoice.push('cross')
          if (
            spot1.classList.contains('cross') && spot2.classList.contains('cross') &&  spot3.classList.contains('cross')
            || spot4.classList.contains('cross') && spot5.classList.contains('cross') &&  spot6.classList.contains('cross') 
            || spot7.classList.contains('cross') && spot8.classList.contains('cross') &&  spot9.classList.contains('cross') 
            || spot1.classList.contains('cross') && spot4.classList.contains('cross') &&  spot7.classList.contains('cross') 
            || spot2.classList.contains('cross') && spot5.classList.contains('cross') &&  spot8.classList.contains('cross') 
            || spot3.classList.contains('cross') && spot6.classList.contains('cross') &&  spot9.classList.contains('cross') 
            || spot1.classList.contains('cross') && spot5.classList.contains('cross') &&  spot9.classList.contains('cross') 
            || spot3.classList.contains('cross') && spot5.classList.contains('cross') &&  spot7.classList.contains('cross') 
          ) {
            console.log('winner is 0');
            lastWinner.push('circle')
            addDisableAll ()
          } else{
            botPlay('cross')
          } 
        } 

        ////if the player don't have pwan stop the game
        //if (pawnChoice === undefined) {
        //console.log('choose a pwan')
        //return false
        //}

        //console.log(_pawn() )
        ////if (!contain ) {
        ////console.log('contain');
        //if (counter >= 0 && counter <= 8) {
        //player.push(carres[i].classList.item(0) )
        //_playSound(audios.soft)
        //counter++
        //} else if(counter === 9){
        //console.log('tied');
        //clearTimeout(animPlayMachine)
        //}
        //animPlayMachine = setTimeout(_playMachine, 1000);//1s
        ////}

        e.preventDefault();
      }); //end click
    }//end of loop

  } //end function 

  let _playMachine = () => {
    let playerLast = parseInt(player.last())
    //console.log(counter );
    //the person start the game
    if(player.length === 1){
      console.log("I play");
    } else if(player.length > 1){
      console.log(Math.floor(Math.random()*3 +1 ) + 
        Math.floor(Math.random()*3 +1 ) )
    } 
    console.log('ddddddd');
  }


  let _privateMethod  = () => {
    //console.log(data);
  };

  let _reset = () => {
    for (let i = 0, l = carres.length; i < l; i++) {
      let current = carres[i], prev = carres[i-1];
      if ( current.classList.contains('circle') && 
        current.classList.contains('cross') &&
        current.classList.contains('disable') ) {
          current.classList.remove('circle', 'cross', 'disable')
        }
    }
  }

  //return an object
  return {
    main : main,
    reset: reset
  };

})();
TicTacToe.main()
