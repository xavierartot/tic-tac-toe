//
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
  let 
    mapArray = ['#spot11', '#spot12', '#spot13', '#spot21', '#spot22', '#spot23', '#spot31', '#spot32', '#spot33'],
    circle,cross,lastWinner=[],choicePlay=[],lastChoice=[],
    pawnChoice='',randChoice,botChoice,turns=0,
    carres = document.querySelectorAll('.map__carre span'), 
    piece = document.querySelectorAll('.choice span'),
    spot1 = document.querySelector('#spot11'),
    spot2 = document.querySelector('#spot12'),
    spot3 = document.querySelector('#spot13'),
    spot4 = document.querySelector('#spot21'),
    spot5 = document.querySelector('#spot22'),
    spot6 = document.querySelector('#spot23'),
    spot7 = document.querySelector('#spot31'),
    spot8 = document.querySelector('#spot32'),
    spot9 = document.querySelector('#spot33')

  
  let _playSound = (sound) => {
    new Audio(sound).play()
  }

  //executed in a main function
  //the player choose either the cross or the circle
  //the choise is in var pawnChoice 
  //piece === .choice span
  //choose wich pawn the player want
  let _pawn = () => {

    for (let j = 0, l = piece.length; j < l; j++) {


      // fixe le bug et utise les class pour ajouter le choix de l'utilisateur
      piece[j].addEventListener('click', function(e) {
        if (pawnChoice === '') {
          document.querySelector('.reset').classList.toggle('reset-hide')
        } 
        if(this.textContent === 'circle'){
          pawnChoice = 'circle' 
          //return the id of the previous element
          let prevElement = this.previousSibling
          prevElement.classList.remove('choose-button')
          this.classList.add('choose-button') //animation
          //show the reset button
        } else if(this.textContent === 'cross'){
          pawnChoice = 'cross' 
          let nextElement = this.nextSibling
          nextElement.classList.remove('choose-button')
          this.classList.add('choose-button') //animation
          //show the reset button
        } else if(pawnChoice === '' && pawnChoice === undefined){
          alert('err program, reload the page')
        } else if(pawnChoice !== ''){ 
          //console.log('hide');
          //document.querySelector('.reset').classList.toggle('hide')
        }  
        //console.log(pawnChoice );
        //_starter( pawnChoice  )
        e.preventDefault();
        return pawnChoice
      }) //end click
    }
  }

  let win = (pawn, stop) => {
    if(
         spot1.classList.contains(pawn) && spot2.classList.contains(pawn) &&  spot3.classList.contains(pawn)
      || spot4.classList.contains(pawn) && spot5.classList.contains(pawn) &&  spot6.classList.contains(pawn) 
      || spot7.classList.contains(pawn) && spot8.classList.contains(pawn) &&  spot9.classList.contains(pawn) 
      || spot1.classList.contains(pawn) && spot4.classList.contains(pawn) &&  spot7.classList.contains(pawn) 
      || spot2.classList.contains(pawn) && spot5.classList.contains(pawn) &&  spot8.classList.contains(pawn) 
      || spot3.classList.contains(pawn) && spot6.classList.contains(pawn) &&  spot9.classList.contains(pawn) 
      || spot1.classList.contains(pawn) && spot5.classList.contains(pawn) &&  spot9.classList.contains(pawn) 
      || spot3.classList.contains(pawn) && spot5.classList.contains(pawn) &&  spot7.classList.contains(pawn) 
    ) {
      lastWinner.push(pawn)
      addDisableAll ()
      botChoice = 0
      turns = 0
      
      if (stop === false) {
        let addPoint = document.querySelector('.point__circle').innerHTML 
        addPoint++
        document.querySelector('.point__circle').innerHTML = addPoint
        //console.log(addPoint);
        // bot win
        _playSound (audios.lost)
      } else{
        let addPoint = document.querySelector('.point__cross').innerHTML
        addPoint++
        document.querySelector('.point__cross').innerHTML = addPoint
        //console.log(addPoint)
        // player win
        _playSound (audios.win)
      }
      _reset()
    } else{
      if (stop === true) {
        botPlay(pawn) // fun recursive
      }
    }
  }


  //carres = document.querySelectorAll('.map__carre span'), 
  let botPlay = (pawnChoice , pair) => {
    //botChoice == choix joueur 
    //donc on choisi l'autre pour le bot
    //botChoice = (pawnChoice === 'cross')?'circle':'cross'
    let botChoices = document.querySelectorAll('.choice span')
    for (let i = 0, l = botChoices.length; i < l; i++) {
      let current = botChoices[i]
      if (!current.classList.contains( 'choose-button' )) {
        if (current.classList.contains( 'choice__cross' )) {
          botChoice = 'cross'
        } else{
          botChoice = 'circle'
        } 
      }
    }

    randChoice = parseInt( Math.random()*8 , 10)//random choice for the bot
    //
    //mapArray[] the 9 values, each value are delete by the player
    //the left of the values are check by here or empty
    //
    for (let i = 0, l = mapArray.length; i < l; i++) {
      let current = mapArray[i], lessDieseCurrent='',
      rc = document.querySelector(mapArray[randChoice] ) 
      if (mapArray[randChoice] !== undefined && !rc.classList.contains('disable')) {
        setTimeout(function () {
          rc.classList.add('disable', botChoice )
          win(botChoice, false)
        }, 200);
        break
      }else if(turns === 9){
        if (mapArray[randChoice] !== undefined && !rc.classList.contains('disable')) {
          rc.classList.add('disable', botChoice)
          lastWinner.push('draw')
          _playSound (audios.tied)
          win(botChoice, false)
          return _reset()
        }
      }else {
        botChoice = (botChoice === 'cross')?'circle':'cross'
        console.log('recursive : ' + botChoice);
        botPlay(botChoice ) // fun recursive
      } 
    }
  }

  let addDisableAll = () => {
    var boxes = document.querySelectorAll('.map__carre span')
    boxes.forEach((box, i) => {
      box.classList.add('disable')
    })
  }

  let _reset = () => {
    let resetBtn =  document.querySelector('.reset')
    resetBtn.addEventListener('click', function(e) {
      for (let i = 0, l = carres.length; i < l; i++) {
        carres[i].classList.remove('circle', 'cross', 'disable')
      }
      //piece // .choice span
      for (let i = 0, l = piece.length; i < l; i++) {
        let current = piece[i], prev = piece[i-1];
        piece[i].classList.remove('choose-button')
      }
      //hide reset button
      resetBtn.classList.add('reset-hide')
      pawnChoice =''
      botChoice=''
      turns = 0
      mapArray = ['#spot11', '#spot12', '#spot13', '#spot21', '#spot22', '#spot23', '#spot31', '#spot32', '#spot33']
      //console.log(lastChoice=[] );  // ['circle','cross','circle'...]
      //console.log(choicePlay=[]  ); // ['spot22','spot12','spot31'...]
      e.preventDefault();
    });
    return true
  }

  let main = () => {
    _pawn()
    _reset()
    for (let i = 0; i < carres.length; i++) {
      // map .map__row #spot+n
      let current = carres[i], prev = piece[i-1];
      
      current.addEventListener('click', function(e) {

      turns++

        if (pawnChoice === '') {
          alert('you need choose the pawn')
          return false
        }
        _playSound (audios.soft)
        //console.log('player : ' +turns );
        //console.log('player pawnChoice : ' +pawnChoice );
        if(turns === 9) {
          //console.log(turns)
          this.classList.add('disable', pawnChoice)
          //console.log('draw player : ' +pawnChoice );
          win(pawnChoice, false)
          alert('playerer draw pawnChoice' + pawnChoice)
          lastWinner.push('draw')
          //_playSound (audios.tied)
          return _reset()
        } else if(this.classList.contains('disable')){
          console.log('player: this spot is already filled');
        } else if(turns % 2 === 0 ){ //circle start
          //console.log('player pair turns' + turns)
          //console.log('player pair pawnChoice' + pawnChoice)
          //this class is now taken, we add .disable
          this.classList.add('disable', pawnChoice)

          //save the case choice
          choicePlay.push('#'+ this.getAttribute('id')  )
          lastChoice.push(pawnChoice)

          //remove the item played in the mapArray
          let valCurrent ='#'+current.id
          if (mapArray.indexOf(valCurrent) > -1) {
            delete mapArray[mapArray.indexOf(valCurrent)]
          }
          turns++
          //console.log('player pair turns :' + turns)
          //console.log('player pair pawnChoice :' + pawnChoice)
          win(pawnChoice, true)

        } else if(turns % 2 !== 0){ 
          let impairPawnChoice = (pawnChoice === 'cross')?  'circle' :  'cross'
          //this class is now taken, we add .disable
          this.classList.add('disable', impairPawnChoice )
          choicePlay.push('#'+ this.getAttribute('id')  )
          lastChoice.push(impairPawnChoice)

          //remove the item played in the mapArray
          let valCurrent ='#'+current.id
          if (mapArray.indexOf(valCurrent) > -1) {
            //console.log(mapArray.indexOf(valCurrent) );
            delete mapArray[mapArray.indexOf(valCurrent)]
          }
          //console.log('player impair turns' + turns)
          //console.log('player impair pawnChoice' + pawnChoice)
          win(impairPawnChoice, true)
        } 
        e.preventDefault();
      }); //end click carres
    }//end of loop carres

  } //end main function 

  //return an object
  return {
    main : main
  };

})();
TicTacToe.main()
