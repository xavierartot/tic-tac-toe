'use strict';

//prototype last
if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };
};

//begin module
var TicTacToe = function () {

  var audios = {
    soft: 'http://artot.net/sounds/soft.mp3',
    tied: 'http://artot.net/sounds/tied.mp3',
    win: 'http://artot.net/sounds/win.mp3',
    lost: 'http://artot.net/sounds/Storm_exclamation.mp3'
  };
  function _playSound(sound) {
    new Audio(sound).play();
  }
  var scoreList = [],
      player = [],
      counter = 0,
      contain = void 0,
      circle = void 0,
      cross = void 0,
      play = void 0,
      win = void 0,
      lost = void 0,
      tied = void 0,
      lastWinner = [],
      choice = void 0,
      choicePlay = [],
      lastChoice = [],
      pawnChoice = '',
      //pion du joueur
  botArray = [],
      randChoice = void 0,
      carres = document.querySelectorAll('.map__carre span'),
      piece = document.querySelectorAll('.choice span'),
      animPlayMachine = void 0,
      turns = 0,
      reset = document.querySelector('.reset'),
      spot1 = document.querySelector('#spot11'),
      spot2 = document.querySelector('#spot12'),
      spot3 = document.querySelector('#spot13'),
      spot4 = document.querySelector('#spot21'),
      spot5 = document.querySelector('#spot22'),
      spot6 = document.querySelector('#spot23'),
      spot7 = document.querySelector('#spot31'),
      spot8 = document.querySelector('#spot32'),
      spot9 = document.querySelector('#spot33');

  //executed in a main function
  //the player choose either the cross or the circle
  //the choise is in var pawnChoice 
  //piece === .choice span
  //choose wich pawn the player want
  var _pawn = function _pawn() {
    for (var j = 0, l = piece.length; j < l; j++) {

      piece[j].addEventListener('click', function (e) {
        if (this.textContent === 'circle') {
          pawnChoice = 'circle';
          //return the id of the previous element
          var prevElement = this.previousSibling;
          prevElement.classList.remove('choose-button');
          this.classList.add('choose-button'); //animation
        } else if (this.textContent === 'cross') {
          pawnChoice = 'cross';
          var nextElement = this.nextSibling;
          nextElement.classList.remove('choose-button');
          this.classList.add('choose-button'); //animation
        } else if (pawnChoice === '') {
          alert('err program, reload the page');
        }
        console.log(pawnChoice);
        //_starter( pawnChoice  )
        e.preventDefault();
        return pawnChoice;
      }); //end click
    }
  };

  var _starter = function _starter(p) {
    console.log(lastWinner.length);
    console.log(pawnChoice);
    if (lastWinner[lastWinner.length - 1] === p) {
      pawnChoice = 'circle';
    } else if (lastWinner[lastWinner.length - 1] === p) {
      pawnChoice = 'cross';
    } else {
      pawnChoice = p;
    }
    return pawnChoice;
  };

  //carres = document.querySelectorAll('.map__carre span'), 
  var botPlay = function botPlay(pawnChoice, pair) {
    //botChoice == choix joueur 
    //donc on choisi l'autre pour le bot
    var botChoice = pawnChoice === 'cross' ? 'circle' : 'cross';
    console.log(lastChoice); // ['circle','cross','circle'...]
    console.log(choicePlay); // ['spot22','spot12','spot31'...]
    //on  construit un tableau a partir des 2 tableaux
    for (var i = 0, l = lastChoice.length; i < l; i++) {
      var current = lastChoice[i],
          prev = lastChoice[i - 1];
      if (current === botChoice) {
        botArray.push('#' + choicePlay[i]);
      } else {
        //botChoice is empty
        console.log('botChoice is empty');
      }
    }
    console.log(botArray);

    randChoice = parseInt(Math.random() * 8, 10);

    if (choicePlay.length > 0) {
      //console.log('pawn botPlay ' +botChoice   );
      for (var _i = 0, _l = choicePlay.length; _i < _l; _i++) {
        var _current = choicePlay[_i],
            _prev = choicePlay[_i - 1],
            identifiant = void 0;
        identifiant = '#' + _current;
        //console.log(typeof identifiant);
        //console.log(identifiant);
        //console.log( document.querySelector(identifiant) );
        //row
        //document.querySelector('#spot13').classList.add(botChoice )
        if (identifiant !== '#spot11' || identifiant !== '#spot12' || identifiant !== '#spot13') {} else if (identifiant === 'spot13') {}
        if (identifiant === 'spot12') {}
        if (identifiant === 'spot13') {}
        //cidentifiant === 'spot'
        if (identifiant === 'spot21') {}
        if (identifiant === 'spot22') {}
        if (identifiant === 'spot23') {}
        //didentifiant === 'spot'
        if (identifiant === 'spot31') {}
        if (identifiant === 'spot32') {}
      }
      //this class is now taken, we add .disable
    }
  };

  var addDisableAll = function addDisableAll() {
    var boxes = document.querySelectorAll('.map__carre span');
    boxes.forEach(function (box, i) {
      box.classList.add('disable');
    });
  };

  var main = function main() {
    _pawn();
    for (var i = 0; i < carres.length; i++) {
      var current = carres[i],
          prev = piece[i - 1];
      //events on the case
      current.addEventListener('click', function (e) {
        if (pawnChoice === '') {
          alert('you need choose the pawn');
          return false;
        }
        console.log('pawn ' + pawnChoice);
        if (turns === 8) {
          console.log('draw'); // tie game
          this.classList.add('disable', 'cross');
          turns = 0;
        } else if (this.classList.contains('disable')) {
          console.log('this spot is already filled');
        } else if (turns % 2 === 0) {
          //circle start
          turns++;
          console.log(pawnChoice);
          //this class is now taken, we add .disable
          this.classList.add('disable', pawnChoice);
          //save the case choice
          choicePlay.push(this.getAttribute('id'));
          lastChoice.push(pawnChoice);
          if (spot1.classList.contains(pawnChoice) && spot2.classList.contains(pawnChoice) && spot3.classList.contains(pawnChoice) || spot4.classList.contains(pawnChoice) && spot5.classList.contains(pawnChoice) && spot6.classList.contains(pawnChoice) || spot7.classList.contains(pawnChoice) && spot8.classList.contains(pawnChoice) && spot9.classList.contains(pawnChoice) || spot1.classList.contains(pawnChoice) && spot4.classList.contains(pawnChoice) && spot7.classList.contains(pawnChoice) || spot2.classList.contains(pawnChoice) && spot5.classList.contains(pawnChoice) && spot8.classList.contains(pawnChoice) || spot3.classList.contains(pawnChoice) && spot6.classList.contains(pawnChoice) && spot9.classList.contains(pawnChoice) || spot1.classList.contains(pawnChoice) && spot5.classList.contains(pawnChoice) && spot9.classList.contains(pawnChoice) || spot3.classList.contains(pawnChoice) && spot5.classList.contains(pawnChoice) && spot7.classList.contains(pawnChoice)) {
            console.log(pawnChoice);
            lastWinner.push(pawnChoice);
            addDisableAll();
            //reset()      
          } else {
            botPlay('circle');
          }
        } else if (turns % 2 !== 0) {
          var impairPawnChoice = pawnChoice === 'cross' ? 'circle' : 'cross';
          turns++;
          console.log('x');
          //this class is now taken, we add .disable
          this.classList.add('disable', impairPawnChoice);
          choicePlay.push(this.getAttribute('id'));
          lastChoice.push(impairPawnChoice);
          if (spot1.classList.contains(impairPawnChoice) && spot2.classList.contains(impairPawnChoice) && spot3.classList.contains(impairPawnChoice) || spot4.classList.contains(impairPawnChoice) && spot5.classList.contains(impairPawnChoice) && spot6.classList.contains(impairPawnChoice) || spot7.classList.contains(impairPawnChoice) && spot8.classList.contains(impairPawnChoice) && spot9.classList.contains(impairPawnChoice) || spot1.classList.contains(impairPawnChoice) && spot4.classList.contains(impairPawnChoice) && spot7.classList.contains(impairPawnChoice) || spot2.classList.contains(impairPawnChoice) && spot5.classList.contains(impairPawnChoice) && spot8.classList.contains(impairPawnChoice) || spot3.classList.contains(impairPawnChoice) && spot6.classList.contains(impairPawnChoice) && spot9.classList.contains(impairPawnChoice) || spot1.classList.contains(impairPawnChoice) && spot5.classList.contains(impairPawnChoice) && spot9.classList.contains(impairPawnChoice) || spot3.classList.contains(impairPawnChoice) && spot5.classList.contains(impairPawnChoice) && spot7.classList.contains(impairPawnChoice)) {
            console.log('winner is ' + impairPawnChoice);
            lastWinner.push(impairPawnChoice);
            addDisableAll();
          } else {
            botPlay(impairPawnChoice);
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
    } //end of loop
  }; //end function 

  var _playMachine = function _playMachine() {
    var playerLast = parseInt(player.last());
    //console.log(counter );
    //the person start the game
    if (player.length === 1) {
      console.log("I play");
    } else if (player.length > 1) {
      console.log(Math.floor(Math.random() * 3 + 1) + Math.floor(Math.random() * 3 + 1));
    }
    console.log('ddddddd');
  };

  var _privateMethod = function _privateMethod() {
    //console.log(data);
  };

  var _reset = function _reset() {
    for (var i = 0, l = carres.length; i < l; i++) {
      var current = carres[i],
          prev = carres[i - 1];
      if (current.classList.contains('circle') && current.classList.contains('cross') && current.classList.contains('disable')) {
        current.classList.remove('circle', 'cross', 'disable');
      }
    }
  };

  //return an object
  return {
    main: main,
    reset: reset
  };
}();
TicTacToe.main();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJBcnJheSIsInByb3RvdHlwZSIsImxhc3QiLCJsZW5ndGgiLCJUaWNUYWNUb2UiLCJhdWRpb3MiLCJzb2Z0IiwidGllZCIsIndpbiIsImxvc3QiLCJfcGxheVNvdW5kIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJzY29yZUxpc3QiLCJwbGF5ZXIiLCJjb3VudGVyIiwiY29udGFpbiIsImNpcmNsZSIsImNyb3NzIiwibGFzdFdpbm5lciIsImNob2ljZSIsImNob2ljZVBsYXkiLCJsYXN0Q2hvaWNlIiwicGF3bkNob2ljZSIsImJvdEFycmF5IiwicmFuZENob2ljZSIsImNhcnJlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBpZWNlIiwiYW5pbVBsYXlNYWNoaW5lIiwidHVybnMiLCJyZXNldCIsInF1ZXJ5U2VsZWN0b3IiLCJzcG90MSIsInNwb3QyIiwic3BvdDMiLCJzcG90NCIsInNwb3Q1Iiwic3BvdDYiLCJzcG90NyIsInNwb3Q4Iiwic3BvdDkiLCJfcGF3biIsImoiLCJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0ZXh0Q29udGVudCIsInByZXZFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwibmV4dEVsZW1lbnQiLCJuZXh0U2libGluZyIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiX3N0YXJ0ZXIiLCJwIiwiYm90UGxheSIsInBhaXIiLCJib3RDaG9pY2UiLCJpIiwiY3VycmVudCIsInByZXYiLCJwdXNoIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiaWRlbnRpZmlhbnQiLCJhZGREaXNhYmxlQWxsIiwiYm94ZXMiLCJmb3JFYWNoIiwiYm94IiwibWFpbiIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIiwiaW1wYWlyUGF3bkNob2ljZSIsIl9wbGF5TWFjaGluZSIsInBsYXllckxhc3QiLCJmbG9vciIsIl9wcml2YXRlTWV0aG9kIiwiX3Jlc2V0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSSxDQUFDQSxNQUFNQyxTQUFOLENBQWdCQyxJQUFyQixFQUEwQjtBQUN0QkYsUUFBTUMsU0FBTixDQUFnQkMsSUFBaEIsR0FBdUIsWUFBVTtBQUM3QixXQUFPLEtBQUssS0FBS0MsTUFBTCxHQUFjLENBQW5CLENBQVA7QUFDSCxHQUZEO0FBR0g7O0FBRUQ7QUFDQSxJQUFJQyxZQUFhLFlBQU07O0FBRXJCLE1BQU1DLFNBQVM7QUFDYkMsVUFBTSxrQ0FETztBQUViQyxVQUFNLGtDQUZPO0FBR2JDLFNBQU0saUNBSE87QUFJYkMsVUFBTTtBQUpPLEdBQWY7QUFNQSxXQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixRQUFJQyxLQUFKLENBQVVELEtBQVYsRUFBaUJFLElBQWpCO0FBQ0Q7QUFDRCxNQUNBQyxZQUFZLEVBRFo7QUFBQSxNQUNlQyxTQUFTLEVBRHhCO0FBQUEsTUFDNEJDLFVBQVEsQ0FEcEM7QUFBQSxNQUN1Q0MsZ0JBRHZDO0FBQUEsTUFDZ0RDLGVBRGhEO0FBQUEsTUFDdURDLGNBRHZEO0FBQUEsTUFFRU4sYUFGRjtBQUFBLE1BRU9MLFlBRlA7QUFBQSxNQUVXQyxhQUZYO0FBQUEsTUFFaUJGLGFBRmpCO0FBQUEsTUFFc0JhLGFBQVcsRUFGakM7QUFBQSxNQUVxQ0MsZUFGckM7QUFBQSxNQUU2Q0MsYUFBVyxFQUZ4RDtBQUFBLE1BRTJEQyxhQUFXLEVBRnRFO0FBQUEsTUFHRUMsYUFBVyxFQUhiO0FBQUEsTUFHaUI7QUFDZkMsYUFBVSxFQUpaO0FBQUEsTUFJZ0JDLG1CQUpoQjtBQUFBLE1BS0VDLFNBQVNDLFNBQVNDLGdCQUFULENBQTBCLGtCQUExQixDQUxYO0FBQUEsTUFNRUMsUUFBUUYsU0FBU0MsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FOVjtBQUFBLE1BT0VFLHdCQVBGO0FBQUEsTUFPa0JDLFFBQU0sQ0FQeEI7QUFBQSxNQVFFQyxRQUFRTCxTQUFTTSxhQUFULENBQXVCLFFBQXZCLENBUlY7QUFBQSxNQVNFQyxRQUFRUCxTQUFTTSxhQUFULENBQXVCLFNBQXZCLENBVFY7QUFBQSxNQVVFRSxRQUFRUixTQUFTTSxhQUFULENBQXVCLFNBQXZCLENBVlY7QUFBQSxNQVdFRyxRQUFRVCxTQUFTTSxhQUFULENBQXVCLFNBQXZCLENBWFY7QUFBQSxNQVlFSSxRQUFRVixTQUFTTSxhQUFULENBQXVCLFNBQXZCLENBWlY7QUFBQSxNQWFFSyxRQUFRWCxTQUFTTSxhQUFULENBQXVCLFNBQXZCLENBYlY7QUFBQSxNQWNFTSxRQUFRWixTQUFTTSxhQUFULENBQXVCLFNBQXZCLENBZFY7QUFBQSxNQWVFTyxRQUFRYixTQUFTTSxhQUFULENBQXVCLFNBQXZCLENBZlY7QUFBQSxNQWdCRVEsUUFBUWQsU0FBU00sYUFBVCxDQUF1QixTQUF2QixDQWhCVjtBQUFBLE1BaUJFUyxRQUFRZixTQUFTTSxhQUFULENBQXVCLFNBQXZCLENBakJWOztBQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSVUsUUFBUSxTQUFSQSxLQUFRLEdBQU07QUFDaEIsU0FBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsSUFBSWhCLE1BQU0zQixNQUExQixFQUFrQzBDLElBQUlDLENBQXRDLEVBQXlDRCxHQUF6QyxFQUE4Qzs7QUFFNUNmLFlBQU1lLENBQU4sRUFBU0UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzdDLFlBQUcsS0FBS0MsV0FBTCxLQUFxQixRQUF4QixFQUFpQztBQUMvQnpCLHVCQUFhLFFBQWI7QUFDQTtBQUNBLGNBQUkwQixjQUFjLEtBQUtDLGVBQXZCO0FBQ0FELHNCQUFZRSxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixlQUE3QjtBQUNBLGVBQUtELFNBQUwsQ0FBZUUsR0FBZixDQUFtQixlQUFuQixFQUwrQixDQUtLO0FBQ3JDLFNBTkQsTUFNTyxJQUFHLEtBQUtMLFdBQUwsS0FBcUIsT0FBeEIsRUFBZ0M7QUFDckN6Qix1QkFBYSxPQUFiO0FBQ0EsY0FBSStCLGNBQWMsS0FBS0MsV0FBdkI7QUFDQUQsc0JBQVlILFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLGVBQTdCO0FBQ0EsZUFBS0QsU0FBTCxDQUFlRSxHQUFmLENBQW1CLGVBQW5CLEVBSnFDLENBSUQ7QUFDckMsU0FMTSxNQUtBLElBQUc5QixlQUFlLEVBQWxCLEVBQXFCO0FBQzFCaUMsZ0JBQU0sOEJBQU47QUFDRDtBQUNEQyxnQkFBUUMsR0FBUixDQUFZbkMsVUFBWjtBQUNBO0FBQ0F3QixVQUFFWSxjQUFGO0FBQ0EsZUFBT3BDLFVBQVA7QUFDRCxPQW5CRCxFQUY0QyxDQXFCekM7QUFDSjtBQUNGLEdBeEJEOztBQTJCQSxNQUFJcUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUNwQkosWUFBUUMsR0FBUixDQUFZdkMsV0FBV2pCLE1BQXZCO0FBQ0F1RCxZQUFRQyxHQUFSLENBQVluQyxVQUFaO0FBQ0EsUUFBSUosV0FBV0EsV0FBV2pCLE1BQVgsR0FBa0IsQ0FBN0IsTUFBb0MyRCxDQUF4QyxFQUEyQztBQUN6Q3RDLG1CQUFlLFFBQWY7QUFDRCxLQUZELE1BRU8sSUFBSUosV0FBV0EsV0FBV2pCLE1BQVgsR0FBa0IsQ0FBN0IsTUFBb0MyRCxDQUF4QyxFQUEyQztBQUNoRHRDLG1CQUFlLE9BQWY7QUFDRCxLQUZNLE1BRUQ7QUFDSkEsbUJBQWNzQyxDQUFkO0FBQ0Q7QUFDRCxXQUFPdEMsVUFBUDtBQUNELEdBWEQ7O0FBYUE7QUFDQSxNQUFJdUMsVUFBVSxTQUFWQSxPQUFVLENBQUN2QyxVQUFELEVBQWN3QyxJQUFkLEVBQXVCO0FBQ2pDO0FBQ0Y7QUFDQSxRQUFJQyxZQUFhekMsZUFBZSxPQUFoQixHQUF5QixRQUF6QixHQUFrQyxPQUFsRDtBQUNBa0MsWUFBUUMsR0FBUixDQUFZcEMsVUFBWixFQUptQyxDQUlSO0FBQzNCbUMsWUFBUUMsR0FBUixDQUFZckMsVUFBWixFQUxtQyxDQUtSO0FBQzNCO0FBQ0EsU0FBSyxJQUFJNEMsSUFBSSxDQUFSLEVBQVdwQixJQUFJdkIsV0FBV3BCLE1BQS9CLEVBQXVDK0QsSUFBSXBCLENBQTNDLEVBQThDb0IsR0FBOUMsRUFBbUQ7QUFDakQsVUFBSUMsVUFBVTVDLFdBQVcyQyxDQUFYLENBQWQ7QUFBQSxVQUE2QkUsT0FBTzdDLFdBQVcyQyxJQUFFLENBQWIsQ0FBcEM7QUFDQSxVQUFJQyxZQUFZRixTQUFoQixFQUE0QjtBQUMxQnhDLGlCQUFTNEMsSUFBVCxDQUFjLE1BQUkvQyxXQUFXNEMsQ0FBWCxDQUFsQjtBQUVELE9BSEQsTUFHTTtBQUNKO0FBQ0FSLGdCQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDRDtBQUVGO0FBQ0RELFlBQVFDLEdBQVIsQ0FBWWxDLFFBQVo7O0FBRUFDLGlCQUFhNEMsU0FBVUMsS0FBS0MsTUFBTCxLQUFjLENBQXhCLEVBQTRCLEVBQTVCLENBQWI7O0FBRUEsUUFBSWxELFdBQVduQixNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3pCO0FBQ0EsV0FBSyxJQUFJK0QsS0FBSSxDQUFSLEVBQVdwQixLQUFJeEIsV0FBV25CLE1BQS9CLEVBQXVDK0QsS0FBSXBCLEVBQTNDLEVBQThDb0IsSUFBOUMsRUFBbUQ7QUFDakQsWUFBSUMsV0FBVTdDLFdBQVc0QyxFQUFYLENBQWQ7QUFBQSxZQUE2QkUsUUFBTzlDLFdBQVc0QyxLQUFFLENBQWIsQ0FBcEM7QUFBQSxZQUFxRE8sb0JBQXJEO0FBQ0FBLHNCQUFjLE1BQUlOLFFBQWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRztBQUNILFlBQUdNLGdCQUFnQixTQUFoQixJQUNFQSxnQkFBZ0IsU0FEbEIsSUFFRUEsZ0JBQWdCLFNBRnJCLEVBRStCLENBQzlCLENBSEQsTUFHTSxJQUFHQSxnQkFBZ0IsUUFBbkIsRUFBNEIsQ0FFakM7QUFDRCxZQUFHQSxnQkFBZ0IsUUFBbkIsRUFBNkIsQ0FDNUI7QUFDRCxZQUFHQSxnQkFBZ0IsUUFBbkIsRUFBNkIsQ0FDNUI7QUFDRDtBQUNBLFlBQUdBLGdCQUFnQixRQUFuQixFQUE2QixDQUM1QjtBQUNELFlBQUdBLGdCQUFnQixRQUFuQixFQUE2QixDQUM1QjtBQUNELFlBQUdBLGdCQUFnQixRQUFuQixFQUE2QixDQUM1QjtBQUNEO0FBQ0EsWUFBR0EsZ0JBQWdCLFFBQW5CLEVBQTZCLENBQzVCO0FBQ0QsWUFBR0EsZ0JBQWdCLFFBQW5CLEVBQTZCLENBQzVCO0FBQ0Y7QUFDRDtBQUNEO0FBQ0YsR0F6REQ7O0FBMkRBLE1BQUlDLGdCQUFnQixTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QixRQUFJQyxRQUFRL0MsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQVo7QUFDQThDLFVBQU1DLE9BQU4sQ0FBYyxVQUFDQyxHQUFELEVBQU1YLENBQU4sRUFBWTtBQUN4QlcsVUFBSXpCLFNBQUosQ0FBY0UsR0FBZCxDQUFrQixTQUFsQjtBQUNELEtBRkQ7QUFHRCxHQUxEOztBQU9BLE1BQUl3QixPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNmbEM7QUFDQSxTQUFLLElBQUlzQixJQUFJLENBQWIsRUFBZ0JBLElBQUl2QyxPQUFPeEIsTUFBM0IsRUFBbUMrRCxHQUFuQyxFQUF3QztBQUN0QyxVQUFJQyxVQUFVeEMsT0FBT3VDLENBQVAsQ0FBZDtBQUFBLFVBQXlCRSxPQUFPdEMsTUFBTW9DLElBQUUsQ0FBUixDQUFoQztBQUNBO0FBQ0FDLGNBQVFwQixnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFTQyxDQUFULEVBQVk7QUFDNUMsWUFBSXhCLGVBQWUsRUFBbkIsRUFBdUI7QUFDckJpQyxnQkFBTSwwQkFBTjtBQUNBLGlCQUFPLEtBQVA7QUFDRDtBQUNEQyxnQkFBUUMsR0FBUixDQUFZLFVBQVNuQyxVQUFyQjtBQUNBLFlBQUdRLFVBQVUsQ0FBYixFQUFnQjtBQUNkMEIsa0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBRGMsQ0FDTztBQUNyQixlQUFLUCxTQUFMLENBQWVFLEdBQWYsQ0FBbUIsU0FBbkIsRUFBOEIsT0FBOUI7QUFDQXRCLGtCQUFRLENBQVI7QUFDRCxTQUpELE1BSU8sSUFBRyxLQUFLb0IsU0FBTCxDQUFlMkIsUUFBZixDQUF3QixTQUF4QixDQUFILEVBQXNDO0FBQzNDckIsa0JBQVFDLEdBQVIsQ0FBWSw2QkFBWjtBQUNELFNBRk0sTUFFQSxJQUFHM0IsUUFBUSxDQUFSLEtBQWMsQ0FBakIsRUFBb0I7QUFBRTtBQUMzQkE7QUFDQTBCLGtCQUFRQyxHQUFSLENBQVluQyxVQUFaO0FBQ0E7QUFDQSxlQUFLNEIsU0FBTCxDQUFlRSxHQUFmLENBQW1CLFNBQW5CLEVBQThCOUIsVUFBOUI7QUFDQTtBQUNBRixxQkFBVytDLElBQVgsQ0FBaUIsS0FBS1csWUFBTCxDQUFrQixJQUFsQixDQUFqQjtBQUNBekQscUJBQVc4QyxJQUFYLENBQWdCN0MsVUFBaEI7QUFDQSxjQUNLVyxNQUFNaUIsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsS0FBd0NZLE1BQU1nQixTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJ2RCxVQUF6QixDQUF4QyxJQUFpRmEsTUFBTWUsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsQ0FBakYsSUFDQWMsTUFBTWMsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsS0FBd0NlLE1BQU1hLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QnZELFVBQXpCLENBQXhDLElBQWlGZ0IsTUFBTVksU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsQ0FEakYsSUFFQWlCLE1BQU1XLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QnZELFVBQXpCLEtBQXdDa0IsTUFBTVUsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsQ0FBeEMsSUFBaUZtQixNQUFNUyxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJ2RCxVQUF6QixDQUZqRixJQUdBVyxNQUFNaUIsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsS0FBd0NjLE1BQU1jLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QnZELFVBQXpCLENBQXhDLElBQWlGaUIsTUFBTVcsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsQ0FIakYsSUFJQVksTUFBTWdCLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QnZELFVBQXpCLEtBQXdDZSxNQUFNYSxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJ2RCxVQUF6QixDQUF4QyxJQUFpRmtCLE1BQU1VLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QnZELFVBQXpCLENBSmpGLElBS0FhLE1BQU1lLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QnZELFVBQXpCLEtBQXdDZ0IsTUFBTVksU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsQ0FBeEMsSUFBaUZtQixNQUFNUyxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJ2RCxVQUF6QixDQUxqRixJQU1BVyxNQUFNaUIsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsS0FBd0NlLE1BQU1hLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QnZELFVBQXpCLENBQXhDLElBQWlGbUIsTUFBTVMsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsQ0FOakYsSUFPQWEsTUFBTWUsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsS0FBd0NlLE1BQU1hLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QnZELFVBQXpCLENBQXhDLElBQWlGaUIsTUFBTVcsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCdkQsVUFBekIsQ0FSdEYsRUFTRTtBQUNBa0Msb0JBQVFDLEdBQVIsQ0FBWW5DLFVBQVo7QUFDQUosdUJBQVdpRCxJQUFYLENBQWdCN0MsVUFBaEI7QUFDQWtEO0FBQ0E7QUFDRCxXQWRELE1BY007QUFDSlgsb0JBQVEsUUFBUjtBQUNEO0FBRUYsU0ExQk0sTUEwQkEsSUFBRy9CLFFBQVEsQ0FBUixLQUFjLENBQWpCLEVBQW1CO0FBQ3hCLGNBQUlpRCxtQkFBb0J6RCxlQUFlLE9BQWhCLEdBQTJCLFFBQTNCLEdBQXVDLE9BQTlEO0FBQ0FRO0FBQ0EwQixrQkFBUUMsR0FBUixDQUFZLEdBQVo7QUFDQTtBQUNBLGVBQUtQLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixTQUFuQixFQUE4QjJCLGdCQUE5QjtBQUNBM0QscUJBQVcrQyxJQUFYLENBQWlCLEtBQUtXLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBakI7QUFDQXpELHFCQUFXOEMsSUFBWCxDQUFnQlksZ0JBQWhCO0FBQ0EsY0FDSzlDLE1BQU1pQixTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJFLGdCQUF6QixLQUE4QzdDLE1BQU1nQixTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJFLGdCQUF6QixDQUE5QyxJQUE2RjVDLE1BQU1lLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QkUsZ0JBQXpCLENBQTdGLElBQ0EzQyxNQUFNYyxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJFLGdCQUF6QixLQUE4QzFDLE1BQU1hLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QkUsZ0JBQXpCLENBQTlDLElBQTZGekMsTUFBTVksU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCRSxnQkFBekIsQ0FEN0YsSUFFQXhDLE1BQU1XLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QkUsZ0JBQXpCLEtBQThDdkMsTUFBTVUsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCRSxnQkFBekIsQ0FBOUMsSUFBNkZ0QyxNQUFNUyxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJFLGdCQUF6QixDQUY3RixJQUdBOUMsTUFBTWlCLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QkUsZ0JBQXpCLEtBQThDM0MsTUFBTWMsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCRSxnQkFBekIsQ0FBOUMsSUFBNkZ4QyxNQUFNVyxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJFLGdCQUF6QixDQUg3RixJQUlBN0MsTUFBTWdCLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QkUsZ0JBQXpCLEtBQThDMUMsTUFBTWEsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCRSxnQkFBekIsQ0FBOUMsSUFBNkZ2QyxNQUFNVSxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJFLGdCQUF6QixDQUo3RixJQUtBNUMsTUFBTWUsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCRSxnQkFBekIsS0FBOEN6QyxNQUFNWSxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJFLGdCQUF6QixDQUE5QyxJQUE2RnRDLE1BQU1TLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QkUsZ0JBQXpCLENBTDdGLElBTUE5QyxNQUFNaUIsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCRSxnQkFBekIsS0FBOEMxQyxNQUFNYSxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJFLGdCQUF6QixDQUE5QyxJQUE2RnRDLE1BQU1TLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QkUsZ0JBQXpCLENBTjdGLElBT0E1QyxNQUFNZSxTQUFOLENBQWdCMkIsUUFBaEIsQ0FBeUJFLGdCQUF6QixLQUE4QzFDLE1BQU1hLFNBQU4sQ0FBZ0IyQixRQUFoQixDQUF5QkUsZ0JBQXpCLENBQTlDLElBQTZGeEMsTUFBTVcsU0FBTixDQUFnQjJCLFFBQWhCLENBQXlCRSxnQkFBekIsQ0FSbEcsRUFTRTtBQUNBdkIsb0JBQVFDLEdBQVIsQ0FBWSxlQUFlc0IsZ0JBQTNCO0FBQ0E3RCx1QkFBV2lELElBQVgsQ0FBZ0JZLGdCQUFoQjtBQUNBUDtBQUNELFdBYkQsTUFhTTtBQUNKWCxvQkFBUWtCLGdCQUFSO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBakMsVUFBRVksY0FBRjtBQUNELE9BckZELEVBSHNDLENBd0ZsQztBQUNMLEtBM0ZjLENBMkZkO0FBRUYsR0E3RkQsQ0FoSnFCLENBNk9uQjs7QUFFRixNQUFJc0IsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBSUMsYUFBYWIsU0FBU3ZELE9BQU9iLElBQVAsRUFBVCxDQUFqQjtBQUNBO0FBQ0E7QUFDQSxRQUFHYSxPQUFPWixNQUFQLEtBQWtCLENBQXJCLEVBQXVCO0FBQ3JCdUQsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRCxLQUZELE1BRU8sSUFBRzVDLE9BQU9aLE1BQVAsR0FBZ0IsQ0FBbkIsRUFBcUI7QUFDMUJ1RCxjQUFRQyxHQUFSLENBQVlZLEtBQUthLEtBQUwsQ0FBV2IsS0FBS0MsTUFBTCxLQUFjLENBQWQsR0FBaUIsQ0FBNUIsSUFDVkQsS0FBS2EsS0FBTCxDQUFXYixLQUFLQyxNQUFMLEtBQWMsQ0FBZCxHQUFpQixDQUE1QixDQURGO0FBRUQ7QUFDRGQsWUFBUUMsR0FBUixDQUFZLFNBQVo7QUFDRCxHQVhEOztBQWNBLE1BQUkwQixpQkFBa0IsU0FBbEJBLGNBQWtCLEdBQU07QUFDMUI7QUFDRCxHQUZEOztBQUlBLE1BQUlDLFNBQVMsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLFNBQUssSUFBSXBCLElBQUksQ0FBUixFQUFXcEIsSUFBSW5CLE9BQU94QixNQUEzQixFQUFtQytELElBQUlwQixDQUF2QyxFQUEwQ29CLEdBQTFDLEVBQStDO0FBQzdDLFVBQUlDLFVBQVV4QyxPQUFPdUMsQ0FBUCxDQUFkO0FBQUEsVUFBeUJFLE9BQU96QyxPQUFPdUMsSUFBRSxDQUFULENBQWhDO0FBQ0EsVUFBS0MsUUFBUWYsU0FBUixDQUFrQjJCLFFBQWxCLENBQTJCLFFBQTNCLEtBQ0haLFFBQVFmLFNBQVIsQ0FBa0IyQixRQUFsQixDQUEyQixPQUEzQixDQURHLElBRUhaLFFBQVFmLFNBQVIsQ0FBa0IyQixRQUFsQixDQUEyQixTQUEzQixDQUZGLEVBRTBDO0FBQ3RDWixnQkFBUWYsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekIsRUFBbUMsT0FBbkMsRUFBNEMsU0FBNUM7QUFDRDtBQUNKO0FBQ0YsR0FURDs7QUFXQTtBQUNBLFNBQU87QUFDTHlCLFVBQU9BLElBREY7QUFFTDdDLFdBQU9BO0FBRkYsR0FBUDtBQUtELENBbFJlLEVBQWhCO0FBbVJBN0IsVUFBVTBFLElBQVYiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9wcm90b3R5cGUgbGFzdFxuaWYgKCFBcnJheS5wcm90b3R5cGUubGFzdCl7XG4gICAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgIH07XG59O1xuXG4vL2JlZ2luIG1vZHVsZVxubGV0IFRpY1RhY1RvZSA9ICgoKSA9PiB7XG5cbiAgY29uc3QgYXVkaW9zID0ge1xuICAgIHNvZnQ6ICdodHRwOi8vYXJ0b3QubmV0L3NvdW5kcy9zb2Z0Lm1wMycsXG4gICAgdGllZDogJ2h0dHA6Ly9hcnRvdC5uZXQvc291bmRzL3RpZWQubXAzJyxcbiAgICB3aW4gOiAnaHR0cDovL2FydG90Lm5ldC9zb3VuZHMvd2luLm1wMycsXG4gICAgbG9zdDogJ2h0dHA6Ly9hcnRvdC5uZXQvc291bmRzL1N0b3JtX2V4Y2xhbWF0aW9uLm1wMydcbiAgfVxuICBmdW5jdGlvbiBfcGxheVNvdW5kKHNvdW5kKSB7XG4gICAgbmV3IEF1ZGlvKHNvdW5kKS5wbGF5KClcbiAgfVxuICBsZXQgXG4gIHNjb3JlTGlzdCA9IFtdLHBsYXllciA9IFtdLCBjb3VudGVyPTAsIGNvbnRhaW4sIGNpcmNsZSxjcm9zcywgXG4gICAgcGxheSx3aW4sbG9zdCwgdGllZCxsYXN0V2lubmVyPVtdLCBjaG9pY2UsIGNob2ljZVBsYXk9W10sbGFzdENob2ljZT1bXSxcbiAgICBwYXduQ2hvaWNlPScnICwvL3Bpb24gZHUgam91ZXVyXG4gICAgYm90QXJyYXkgPVtdLCByYW5kQ2hvaWNlLFxuICAgIGNhcnJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXBfX2NhcnJlIHNwYW4nKSwgXG4gICAgcGllY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlIHNwYW4nKSxcbiAgICBhbmltUGxheU1hY2hpbmUsdHVybnM9MCxcbiAgICByZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpLFxuICAgIHNwb3QxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QxMScpLFxuICAgIHNwb3QyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QxMicpLFxuICAgIHNwb3QzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QxMycpLFxuICAgIHNwb3Q0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QyMScpLFxuICAgIHNwb3Q1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QyMicpLFxuICAgIHNwb3Q2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QyMycpLFxuICAgIHNwb3Q3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QzMScpLFxuICAgIHNwb3Q4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QzMicpLFxuICAgIHNwb3Q5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QzMycpXG5cblxuXG4gIC8vZXhlY3V0ZWQgaW4gYSBtYWluIGZ1bmN0aW9uXG4gIC8vdGhlIHBsYXllciBjaG9vc2UgZWl0aGVyIHRoZSBjcm9zcyBvciB0aGUgY2lyY2xlXG4gIC8vdGhlIGNob2lzZSBpcyBpbiB2YXIgcGF3bkNob2ljZSBcbiAgLy9waWVjZSA9PT0gLmNob2ljZSBzcGFuXG4gIC8vY2hvb3NlIHdpY2ggcGF3biB0aGUgcGxheWVyIHdhbnRcbiAgbGV0IF9wYXduID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGogPSAwLCBsID0gcGllY2UubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG5cbiAgICAgIHBpZWNlW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZih0aGlzLnRleHRDb250ZW50ID09PSAnY2lyY2xlJyl7XG4gICAgICAgICAgcGF3bkNob2ljZSA9ICdjaXJjbGUnIFxuICAgICAgICAgIC8vcmV0dXJuIHRoZSBpZCBvZiB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgICAgICAgIGxldCBwcmV2RWxlbWVudCA9IHRoaXMucHJldmlvdXNTaWJsaW5nXG4gICAgICAgICAgcHJldkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvb3NlLWJ1dHRvbicpXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdjaG9vc2UtYnV0dG9uJykgLy9hbmltYXRpb25cbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGV4dENvbnRlbnQgPT09ICdjcm9zcycpe1xuICAgICAgICAgIHBhd25DaG9pY2UgPSAnY3Jvc3MnIFxuICAgICAgICAgIGxldCBuZXh0RWxlbWVudCA9IHRoaXMubmV4dFNpYmxpbmdcbiAgICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9vc2UtYnV0dG9uJylcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Nob29zZS1idXR0b24nKSAvL2FuaW1hdGlvblxuICAgICAgICB9IGVsc2UgaWYocGF3bkNob2ljZSA9PT0gJycpe1xuICAgICAgICAgIGFsZXJ0KCdlcnIgcHJvZ3JhbSwgcmVsb2FkIHRoZSBwYWdlJylcbiAgICAgICAgfSBcbiAgICAgICAgY29uc29sZS5sb2cocGF3bkNob2ljZSApO1xuICAgICAgICAvL19zdGFydGVyKCBwYXduQ2hvaWNlICApXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHBhd25DaG9pY2VcbiAgICAgIH0pIC8vZW5kIGNsaWNrXG4gICAgfVxuICB9XG5cblxuICBsZXQgX3N0YXJ0ZXIgPSAocCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGxhc3RXaW5uZXIubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhwYXduQ2hvaWNlICk7XG4gICAgaWYgKGxhc3RXaW5uZXJbbGFzdFdpbm5lci5sZW5ndGgtMV0gPT09IHApIHtcbiAgICAgIHBhd25DaG9pY2UgICA9ICdjaXJjbGUnXG4gICAgfSBlbHNlIGlmIChsYXN0V2lubmVyW2xhc3RXaW5uZXIubGVuZ3RoLTFdID09PSBwKSB7XG4gICAgICBwYXduQ2hvaWNlICAgPSAnY3Jvc3MnXG4gICAgfSBlbHNle1xuICAgICAgcGF3bkNob2ljZSAgPSBwICAgXG4gICAgfSBcbiAgICByZXR1cm4gcGF3bkNob2ljZSBcbiAgfVxuXG4gIC8vY2FycmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hcF9fY2FycmUgc3BhbicpLCBcbiAgbGV0IGJvdFBsYXkgPSAocGF3bkNob2ljZSAsIHBhaXIpID0+IHtcbiAgICAgIC8vYm90Q2hvaWNlID09IGNob2l4IGpvdWV1ciBcbiAgICAvL2RvbmMgb24gY2hvaXNpIGwnYXV0cmUgcG91ciBsZSBib3RcbiAgICBsZXQgYm90Q2hvaWNlID0gKHBhd25DaG9pY2UgPT09ICdjcm9zcycpPydjaXJjbGUnOidjcm9zcydcbiAgICBjb25zb2xlLmxvZyhsYXN0Q2hvaWNlICk7ICAvLyBbJ2NpcmNsZScsJ2Nyb3NzJywnY2lyY2xlJy4uLl1cbiAgICBjb25zb2xlLmxvZyhjaG9pY2VQbGF5ICApOyAvLyBbJ3Nwb3QyMicsJ3Nwb3QxMicsJ3Nwb3QzMScuLi5dXG4gICAgLy9vbiAgY29uc3RydWl0IHVuIHRhYmxlYXUgYSBwYXJ0aXIgZGVzIDIgdGFibGVhdXhcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGxhc3RDaG9pY2UubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGxhc3RDaG9pY2VbaV0sIHByZXYgPSBsYXN0Q2hvaWNlW2ktMV07XG4gICAgICBpZiAoY3VycmVudCA9PT0gYm90Q2hvaWNlICkge1xuICAgICAgICBib3RBcnJheS5wdXNoKCcjJytjaG9pY2VQbGF5W2ldIClcbiAgICAgICAgXG4gICAgICB9IGVsc2V7XG4gICAgICAgIC8vYm90Q2hvaWNlIGlzIGVtcHR5XG4gICAgICAgIGNvbnNvbGUubG9nKCdib3RDaG9pY2UgaXMgZW1wdHknKTtcbiAgICAgIH0gXG4gICAgICBcbiAgICB9XG4gICAgY29uc29sZS5sb2coYm90QXJyYXkgKTtcbiAgICBcbiAgICByYW5kQ2hvaWNlID0gcGFyc2VJbnQoIE1hdGgucmFuZG9tKCkqOCAsIDEwKVxuXG4gICAgaWYgKGNob2ljZVBsYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy9jb25zb2xlLmxvZygncGF3biBib3RQbGF5ICcgK2JvdENob2ljZSAgICk7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNob2ljZVBsYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gY2hvaWNlUGxheVtpXSwgcHJldiA9IGNob2ljZVBsYXlbaS0xXSwgaWRlbnRpZmlhbnRcbiAgICAgICAgaWRlbnRpZmlhbnQgPSAnIycrY3VycmVudCBcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlb2YgaWRlbnRpZmlhbnQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGlkZW50aWZpYW50KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyggZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZGVudGlmaWFudCkgKTtcbiAgICAgICAgLy9yb3dcbiAgICAgICAgICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDEzJykuY2xhc3NMaXN0LmFkZChib3RDaG9pY2UgKVxuICAgICAgICBpZihpZGVudGlmaWFudCAhPT0gJyNzcG90MTEnIFxuICAgICAgICAgIHx8IGlkZW50aWZpYW50ICE9PSAnI3Nwb3QxMicgXG4gICAgICAgICAgfHwgaWRlbnRpZmlhbnQgIT09ICcjc3BvdDEzJyl7XG4gICAgICAgIH1lbHNlIGlmKGlkZW50aWZpYW50ID09PSAnc3BvdDEzJyl7IFxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZihpZGVudGlmaWFudCA9PT0gJ3Nwb3QxMicgKXtcbiAgICAgICAgfVxuICAgICAgICBpZihpZGVudGlmaWFudCA9PT0gJ3Nwb3QxMycgKXtcbiAgICAgICAgfVxuICAgICAgICAvL2NpZGVudGlmaWFudCA9PT0gJ3Nwb3QnXG4gICAgICAgIGlmKGlkZW50aWZpYW50ID09PSAnc3BvdDIxJyApe1xuICAgICAgICB9XG4gICAgICAgIGlmKGlkZW50aWZpYW50ID09PSAnc3BvdDIyJyApe1xuICAgICAgICB9XG4gICAgICAgIGlmKGlkZW50aWZpYW50ID09PSAnc3BvdDIzJyApe1xuICAgICAgICB9XG4gICAgICAgIC8vZGlkZW50aWZpYW50ID09PSAnc3BvdCdcbiAgICAgICAgaWYoaWRlbnRpZmlhbnQgPT09ICdzcG90MzEnICl7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRlbnRpZmlhbnQgPT09ICdzcG90MzInICl7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vdGhpcyBjbGFzcyBpcyBub3cgdGFrZW4sIHdlIGFkZCAuZGlzYWJsZVxuICAgIH1cbiAgfVxuXG4gIGxldCBhZGREaXNhYmxlQWxsID0gKCkgPT4ge1xuICAgIHZhciBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXBfX2NhcnJlIHNwYW4nKVxuICAgIGJveGVzLmZvckVhY2goKGJveCwgaSkgPT4ge1xuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKVxuICAgIH0pXG4gIH1cblxuICBsZXQgbWFpbiA9ICgpID0+IHtcbiAgICBfcGF3bigpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50ID0gY2FycmVzW2ldLCBwcmV2ID0gcGllY2VbaS0xXTtcbiAgICAgIC8vZXZlbnRzIG9uIHRoZSBjYXNlXG4gICAgICBjdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAocGF3bkNob2ljZSA9PT0gJycpIHtcbiAgICAgICAgICBhbGVydCgneW91IG5lZWQgY2hvb3NlIHRoZSBwYXduJylcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygncGF3biAnKyBwYXduQ2hvaWNlKTtcbiAgICAgICAgaWYodHVybnMgPT09IDgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnZHJhdycpOyAvLyB0aWUgZ2FtZVxuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsICdjcm9zcycpXG4gICAgICAgICAgdHVybnMgPSAwXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZScpKXtcbiAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBzcG90IGlzIGFscmVhZHkgZmlsbGVkJyk7XG4gICAgICAgIH0gZWxzZSBpZih0dXJucyAlIDIgPT09IDAgKXsgLy9jaXJjbGUgc3RhcnRcbiAgICAgICAgICB0dXJucysrXG4gICAgICAgICAgY29uc29sZS5sb2cocGF3bkNob2ljZSk7XG4gICAgICAgICAgLy90aGlzIGNsYXNzIGlzIG5vdyB0YWtlbiwgd2UgYWRkIC5kaXNhYmxlXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgcGF3bkNob2ljZSlcbiAgICAgICAgICAvL3NhdmUgdGhlIGNhc2UgY2hvaWNlXG4gICAgICAgICAgY2hvaWNlUGxheS5wdXNoKCB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSAgKVxuICAgICAgICAgIGxhc3RDaG9pY2UucHVzaChwYXduQ2hvaWNlKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIHNwb3QxLmNsYXNzTGlzdC5jb250YWlucyhwYXduQ2hvaWNlKSAmJiBzcG90Mi5jbGFzc0xpc3QuY29udGFpbnMocGF3bkNob2ljZSkgJiYgIHNwb3QzLmNsYXNzTGlzdC5jb250YWlucyhwYXduQ2hvaWNlKVxuICAgICAgICAgICAgfHwgc3BvdDQuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucyhwYXduQ2hvaWNlKSAmJiAgc3BvdDYuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDcuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpICYmIHNwb3Q4LmNsYXNzTGlzdC5jb250YWlucyhwYXduQ2hvaWNlKSAmJiAgc3BvdDkuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDEuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpICYmIHNwb3Q0LmNsYXNzTGlzdC5jb250YWlucyhwYXduQ2hvaWNlKSAmJiAgc3BvdDcuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDIuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucyhwYXduQ2hvaWNlKSAmJiAgc3BvdDguY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDMuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpICYmIHNwb3Q2LmNsYXNzTGlzdC5jb250YWlucyhwYXduQ2hvaWNlKSAmJiAgc3BvdDkuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDEuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucyhwYXduQ2hvaWNlKSAmJiAgc3BvdDkuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDMuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucyhwYXduQ2hvaWNlKSAmJiAgc3BvdDcuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd25DaG9pY2UpIFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGF3bkNob2ljZSk7XG4gICAgICAgICAgICBsYXN0V2lubmVyLnB1c2gocGF3bkNob2ljZSlcbiAgICAgICAgICAgIGFkZERpc2FibGVBbGwgKClcbiAgICAgICAgICAgIC8vcmVzZXQoKSAgICAgIFxuICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGJvdFBsYXkoJ2NpcmNsZScpXG4gICAgICAgICAgfSBcblxuICAgICAgICB9IGVsc2UgaWYodHVybnMgJSAyICE9PSAwKXsgXG4gICAgICAgICAgbGV0IGltcGFpclBhd25DaG9pY2UgPSAocGF3bkNob2ljZSA9PT0gJ2Nyb3NzJyk/ICAnY2lyY2xlJyA6ICAnY3Jvc3MnXG4gICAgICAgICAgdHVybnMrK1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd4Jyk7XG4gICAgICAgICAgLy90aGlzIGNsYXNzIGlzIG5vdyB0YWtlbiwgd2UgYWRkIC5kaXNhYmxlXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgaW1wYWlyUGF3bkNob2ljZSApXG4gICAgICAgICAgY2hvaWNlUGxheS5wdXNoKCB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSAgKVxuICAgICAgICAgIGxhc3RDaG9pY2UucHVzaChpbXBhaXJQYXduQ2hvaWNlKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIHNwb3QxLmNsYXNzTGlzdC5jb250YWlucyhpbXBhaXJQYXduQ2hvaWNlKSAmJiBzcG90Mi5jbGFzc0xpc3QuY29udGFpbnMoaW1wYWlyUGF3bkNob2ljZSkgJiYgIHNwb3QzLmNsYXNzTGlzdC5jb250YWlucyhpbXBhaXJQYXduQ2hvaWNlKVxuICAgICAgICAgICAgfHwgc3BvdDQuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucyhpbXBhaXJQYXduQ2hvaWNlKSAmJiAgc3BvdDYuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDcuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpICYmIHNwb3Q4LmNsYXNzTGlzdC5jb250YWlucyhpbXBhaXJQYXduQ2hvaWNlKSAmJiAgc3BvdDkuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDEuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpICYmIHNwb3Q0LmNsYXNzTGlzdC5jb250YWlucyhpbXBhaXJQYXduQ2hvaWNlKSAmJiAgc3BvdDcuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDIuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucyhpbXBhaXJQYXduQ2hvaWNlKSAmJiAgc3BvdDguY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDMuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpICYmIHNwb3Q2LmNsYXNzTGlzdC5jb250YWlucyhpbXBhaXJQYXduQ2hvaWNlKSAmJiAgc3BvdDkuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDEuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucyhpbXBhaXJQYXduQ2hvaWNlKSAmJiAgc3BvdDkuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpIFxuICAgICAgICAgICAgfHwgc3BvdDMuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucyhpbXBhaXJQYXduQ2hvaWNlKSAmJiAgc3BvdDcuY2xhc3NMaXN0LmNvbnRhaW5zKGltcGFpclBhd25DaG9pY2UpIFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dpbm5lciBpcyAnICsgaW1wYWlyUGF3bkNob2ljZSk7XG4gICAgICAgICAgICBsYXN0V2lubmVyLnB1c2goaW1wYWlyUGF3bkNob2ljZSlcbiAgICAgICAgICAgIGFkZERpc2FibGVBbGwgKClcbiAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBib3RQbGF5KGltcGFpclBhd25DaG9pY2UpXG4gICAgICAgICAgfSBcbiAgICAgICAgfSBcblxuICAgICAgICAvLy8vaWYgdGhlIHBsYXllciBkb24ndCBoYXZlIHB3YW4gc3RvcCB0aGUgZ2FtZVxuICAgICAgICAvL2lmIChwYXduQ2hvaWNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnY2hvb3NlIGEgcHdhbicpXG4gICAgICAgIC8vcmV0dXJuIGZhbHNlXG4gICAgICAgIC8vfVxuXG4gICAgICAgIC8vY29uc29sZS5sb2coX3Bhd24oKSApXG4gICAgICAgIC8vLy9pZiAoIWNvbnRhaW4gKSB7XG4gICAgICAgIC8vLy9jb25zb2xlLmxvZygnY29udGFpbicpO1xuICAgICAgICAvL2lmIChjb3VudGVyID49IDAgJiYgY291bnRlciA8PSA4KSB7XG4gICAgICAgIC8vcGxheWVyLnB1c2goY2FycmVzW2ldLmNsYXNzTGlzdC5pdGVtKDApIClcbiAgICAgICAgLy9fcGxheVNvdW5kKGF1ZGlvcy5zb2Z0KVxuICAgICAgICAvL2NvdW50ZXIrK1xuICAgICAgICAvL30gZWxzZSBpZihjb3VudGVyID09PSA5KXtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndGllZCcpO1xuICAgICAgICAvL2NsZWFyVGltZW91dChhbmltUGxheU1hY2hpbmUpXG4gICAgICAgIC8vfVxuICAgICAgICAvL2FuaW1QbGF5TWFjaGluZSA9IHNldFRpbWVvdXQoX3BsYXlNYWNoaW5lLCAxMDAwKTsvLzFzXG4gICAgICAgIC8vLy99XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7IC8vZW5kIGNsaWNrXG4gICAgfS8vZW5kIG9mIGxvb3BcblxuICB9IC8vZW5kIGZ1bmN0aW9uIFxuXG4gIGxldCBfcGxheU1hY2hpbmUgPSAoKSA9PiB7XG4gICAgbGV0IHBsYXllckxhc3QgPSBwYXJzZUludChwbGF5ZXIubGFzdCgpKVxuICAgIC8vY29uc29sZS5sb2coY291bnRlciApO1xuICAgIC8vdGhlIHBlcnNvbiBzdGFydCB0aGUgZ2FtZVxuICAgIGlmKHBsYXllci5sZW5ndGggPT09IDEpe1xuICAgICAgY29uc29sZS5sb2coXCJJIHBsYXlcIik7XG4gICAgfSBlbHNlIGlmKHBsYXllci5sZW5ndGggPiAxKXtcbiAgICAgIGNvbnNvbGUubG9nKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozICsxICkgKyBcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMgKzEgKSApXG4gICAgfSBcbiAgICBjb25zb2xlLmxvZygnZGRkZGRkZCcpO1xuICB9XG5cblxuICBsZXQgX3ByaXZhdGVNZXRob2QgID0gKCkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gIH07XG5cbiAgbGV0IF9yZXNldCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNhcnJlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50ID0gY2FycmVzW2ldLCBwcmV2ID0gY2FycmVzW2ktMV07XG4gICAgICBpZiAoIGN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaXJjbGUnKSAmJiBcbiAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nyb3NzJykgJiZcbiAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUnKSApIHtcbiAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NpcmNsZScsICdjcm9zcycsICdkaXNhYmxlJylcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vcmV0dXJuIGFuIG9iamVjdFxuICByZXR1cm4ge1xuICAgIG1haW4gOiBtYWluLFxuICAgIHJlc2V0OiByZXNldFxuICB9O1xuXG59KSgpO1xuVGljVGFjVG9lLm1haW4oKVxuIl19
