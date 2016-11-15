'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
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
  var mapArray = ['#spot11', '#spot12', '#spot13', '#spot21', '#spot22', '#spot23', '#spot31', '#spot32', '#spot33'],
      circle = void 0,
      cross = void 0,
      lastWinner = [],
      choicePlay = [],
      lastChoice = [],
      botPlayChoice = [],
      pawnChoice = '',
      randChoice = void 0,
      botChoice = void 0,
      turns = 0,
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
      spot9 = document.querySelector('#spot33');

  var _playSound = function _playSound(sound) {
    new Audio(sound).play();
  };

  //executed in a main function
  //the player choose either the cross or the circle
  //the choise is in var pawnChoice 
  //piece === .choice span
  //choose wich pawn the player want
  var _pawn = function _pawn() {

    for (var j = 0, l = piece.length; j < l; j++) {

      // fixe le bug et utise les class pour ajouter le choix de l'utilisateur
      piece[j].addEventListener('click', function (e) {
        if (pawnChoice === '') {
          document.querySelector('.reset').classList.toggle('reset-hide');
        }
        if (this.textContent === 'circle') {
          pawnChoice = 'circle';
          //return the id of the previous element
          var prevElement = this.previousSibling;
          prevElement.classList.remove('choose-button');
          this.classList.add('choose-button'); //animation
          //show the reset button
        } else if (this.textContent === 'cross') {
          pawnChoice = 'cross';
          var nextElement = this.nextSibling;
          nextElement.classList.remove('choose-button');
          this.classList.add('choose-button'); //animation
          //show the reset button
        } else if (pawnChoice === '' && pawnChoice === undefined) {
          alert('err program, reload the page');
        } else if (pawnChoice !== '') {}
        //document.querySelector('.reset').classList.toggle('hide')

        //_starter( pawnChoice  )
        e.preventDefault();
        return pawnChoice;
      }); //end click
    }
  };

  var win = function win(pawn, stop) {
    //recursive true
    if (spot1.classList.contains(pawn) && spot2.classList.contains(pawn) && spot3.classList.contains(pawn) || spot4.classList.contains(pawn) && spot5.classList.contains(pawn) && spot6.classList.contains(pawn) || spot7.classList.contains(pawn) && spot8.classList.contains(pawn) && spot9.classList.contains(pawn) || spot1.classList.contains(pawn) && spot4.classList.contains(pawn) && spot7.classList.contains(pawn) || spot2.classList.contains(pawn) && spot5.classList.contains(pawn) && spot8.classList.contains(pawn) || spot3.classList.contains(pawn) && spot6.classList.contains(pawn) && spot9.classList.contains(pawn) || spot1.classList.contains(pawn) && spot5.classList.contains(pawn) && spot9.classList.contains(pawn) || spot3.classList.contains(pawn) && spot5.classList.contains(pawn) && spot7.classList.contains(pawn)) {
      lastWinner.push(pawn);
      addDisableAll();
      botChoice = 0;
      turns = 0;

      if (stop === false) {
        //count the total match win
        var addPoint = document.querySelector('.point__circle span').innerHTML;
        addPoint++;
        document.querySelector('.point__circle span').innerHTML = addPoint;
        // bot win
        _playSound(audios.lost);
      } else {
        //count the total match win
        var _addPoint = document.querySelector('.point__cross span').innerHTML;
        _addPoint++;
        document.querySelector('.point__cross span').innerHTML = _addPoint;
        // player win
        _playSound(audios.win);
      }
      _reset();
    } else {
      if (stop === true) {
        botPlay(pawn); // fun recursive
      }
    }
  };

  var _possiblitiesCornerBot = function _possiblitiesCornerBot() {};

  //carres = document.querySelectorAll('.map__carre span'), 
  var botPlay = function botPlay(pawnChoice, pair) {
    //botChoice == choix joueur 
    //donc on choisi l'autre pour le bot
    //botChoice = (pawnChoice === 'cross')?'circle':'cross'
    var botChoices = document.querySelectorAll('.choice span');
    for (var i = 0, l = botChoices.length; i < l; i++) {
      var current = botChoices[i];
      if (!current.classList.contains('choose-button')) {
        if (current.classList.contains('choice__cross')) {
          botChoice = 'cross';
        } else {
          botChoice = 'circle';
        }
      }
    }

    randChoice = parseInt(Math.random() * 8, 10); //random choice for the bot
    //
    //mapArray[] the 9 values, each value are delete when  the player
    //play, here we are choose if a value are in the tab and available
    //for the bot then add this value in botPlayChoice 

    var _loop = function _loop(_i, _l) {
      var current = mapArray[_i],
          lessDieseCurrent = '',
          rc = document.querySelector(mapArray[randChoice]);
      if (mapArray[randChoice] !== undefined && !rc.classList.contains('disable')) {
        var _ret2 = function () {
          var _id = '#' + rc.getAttribute('id');
          //choose the center to don't lost
          var spot11 = document.querySelector('#spot11');
          var spot12 = document.querySelector('#spot12');
          var spot13 = document.querySelector('#spot13');
          var spot21 = document.querySelector('#spot21');
          var spot22 = document.querySelector('#spot22');
          var spot23 = document.querySelector('#spot23');
          var spot31 = document.querySelector('#spot31');
          var spot32 = document.querySelector('#spot32');
          var spot33 = document.querySelector('#spot33');
          if (turns === 1) {
            if (!spot22.classList.contains('disable')) {
              botPlayChoice.push('#spot22');
              setTimeout(function () {
                spot22.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else {
              botPlayChoice.push('#' + rc.getAttribute('id'));
              setTimeout(function () {
                rc.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            }
          } else if ((mapArray.indexOf('#spot11') === -1 && mapArray.indexOf('#spot33') === -1 || mapArray.indexOf('#spot13') === -1 && mapArray.indexOf('#spot31') === -1) && botPlayChoice.indexOf('#spot22') === -1 && !spot22.classList.contains('disable')) {
            botPlayChoice.push('#spot22');
            setTimeout(function () {
              spot22.classList.add('disable', botChoice);
              win(botChoice, false);
            }, 200);
            return {
              v: 'break'
            };
          } else if ( // premier ligne
          mapArray.indexOf('#spot11') === -1 && mapArray.indexOf('#spot12') === -1 || mapArray.indexOf('#spot13') === -1 && mapArray.indexOf('#spot11') === -1 || mapArray.indexOf('#spot12') === -1 && mapArray.indexOf('#spot13') === -1) {
            if (!spot11.classList.contains('disable')) {
              botPlayChoice.push('#spot11');
              setTimeout(function () {
                spot11.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else if (!spot13.classList.contains('disable')) {
              botPlayChoice.push('#spot13');
              setTimeout(function () {
                spot13.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else if (!spot12.classList.contains('disable')) {
              botPlayChoice.push('#spot12');
              setTimeout(function () {
                spot12.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else {

              setTimeout(function () {
                rc.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              botPlayChoice.push(_id);
              return {
                v: 'break'
              };
            }
          } else if ( // troisieme ligne
          mapArray.indexOf('#spot31') === -1 && mapArray.indexOf('#spot32') === -1 || mapArray.indexOf('#spot33') === -1 && mapArray.indexOf('#spot31') === -1 || mapArray.indexOf('#spot32') === -1 && mapArray.indexOf('#spot33') === -1) {
            if (!spot31.classList.contains('disable')) {
              botPlayChoice.push('#spot31');
              setTimeout(function () {
                spot31.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else if (!spot33.classList.contains('disable')) {
              botPlayChoice.push('#spot33');
              setTimeout(function () {
                spot33.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else if (!spot32.classList.contains('disable')) {
              botPlayChoice.push('#spot32');
              setTimeout(function () {
                spot32.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else {

              setTimeout(function () {
                rc.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              botPlayChoice.push(_id);
              return {
                v: 'break'
              };
            }
          } else if ( // 1 column
          mapArray.indexOf('#spot11') === -1 && mapArray.indexOf('#spot21') === -1 || mapArray.indexOf('#spot31') === -1 && mapArray.indexOf('#spot21') === -1 || mapArray.indexOf('#spot11') === -1 && mapArray.indexOf('#spot31') === -1) {
            if (!spot11.classList.contains('disable')) {
              botPlayChoice.push('#spot11');
              setTimeout(function () {
                spot11.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else if (!spot31.classList.contains('disable')) {
              botPlayChoice.push('#spot31');
              setTimeout(function () {
                spot31.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else if (!spot21.classList.contains('disable')) {
              botPlayChoice.push('#spot21');
              setTimeout(function () {
                spot21.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else {
              setTimeout(function () {
                rc.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              botPlayChoice.push(_id);
              return {
                v: 'break'
              };
            }
          } else if ( // 3 column
          mapArray.indexOf('#spot13') === -1 && mapArray.indexOf('#spot23') === -1 || mapArray.indexOf('#spot13') === -1 && mapArray.indexOf('#spot33') === -1 || mapArray.indexOf('#spot23') === -1 && mapArray.indexOf('#spot33') === -1) {
            if (!spot23.classList.contains('disable')) {
              botPlayChoice.push('#spot23');
              setTimeout(function () {
                spot23.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else if (!spot33.classList.contains('disable')) {
              botPlayChoice.push('#spot33');
              setTimeout(function () {
                spot33.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else if (!spot13.classList.contains('disable')) {
              botPlayChoice.push('#spot13');
              setTimeout(function () {
                spot13.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              return {
                v: 'break'
              };
            } else {
              setTimeout(function () {
                rc.classList.add('disable', botChoice);
                win(botChoice, false);
              }, 200);
              botPlayChoice.push(_id);
              return {
                v: 'break'
              };
            }
          } else {
            setTimeout(function () {
              rc.classList.add('disable', botChoice);
              win(botChoice, false);
            }, 200);
            botPlayChoice.push(_id);
            return {
              v: 'break'
            };
          }
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      } else if (turns === 9) {
        if (mapArray[randChoice] !== undefined && !rc.classList.contains('disable')) {
          rc.classList.add('disable', botChoice);
          lastWinner.push('draw');
          _playSound(audios.tied);
          win(botChoice, false);
          return {
            v: _reset()
          };
        }
      } else {
        botChoice = botChoice === 'cross' ? 'circle' : 'cross';
        botPlay(botChoice); // fun recursive
      }
    };

    _loop2: for (var _i = 0, _l = mapArray.length; _i < _l; _i++) {
      var _ret = _loop(_i, _l);

      switch (_ret) {
        case 'break':
          break _loop2;

        default:
          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    }
  };

  var addDisableAll = function addDisableAll() {
    var boxes = document.querySelectorAll('.map__carre span');
    boxes.forEach(function (box, i) {
      box.classList.add('disable');
    });
  };

  var _reset = function _reset() {
    var resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click', function (e) {
      for (var i = 0, l = carres.length; i < l; i++) {
        carres[i].classList.remove('circle', 'cross', 'disable');
      }
      //piece // .choice span
      for (var _i2 = 0, _l2 = piece.length; _i2 < _l2; _i2++) {
        var current = piece[_i2],
            prev = piece[_i2 - 1];
        piece[_i2].classList.remove('choose-button');
      }
      //hide reset button
      resetBtn.classList.add('reset-hide');
      pawnChoice = '';
      botChoice = '';
      turns = 0;
      mapArray = ['#spot11', '#spot12', '#spot13', '#spot21', '#spot22', '#spot23', '#spot31', '#spot32', '#spot33'];
      botPlayChoice = [];
      e.preventDefault();
    });
    return true;
  };

  var main = function main() {
    _pawn();
    _reset();

    var _loop3 = function _loop3(i) {
      // map .map__row #spot+n
      var current = carres[i],
          prev = piece[i - 1];

      current.addEventListener('click', function (e) {

        if (pawnChoice === '') {
          alert('you need choose the pawn');
          return false;
        }
        _playSound(audios.soft);
        if (turns === 9) {
          this.classList.add('disable', pawnChoice);
          win(pawnChoice, false);
          alert('playerer draw pawnChoice' + pawnChoice);
          lastWinner.push('draw');
          //_playSound (audios.tied)
          return _reset();
        } else if (this.classList.contains('disable')) {} else if (turns % 2 === 0) {
          //circle start
          //this class is now taken, we add .disable
          this.classList.add('disable', pawnChoice);

          //save the case choice
          choicePlay.push('#' + this.getAttribute('id'));
          lastChoice.push(pawnChoice);

          //remove the item played in the mapArray
          var valCurrent = '#' + current.id;
          if (mapArray.indexOf(valCurrent) > -1) {
            delete mapArray[mapArray.indexOf(valCurrent)];
          } else {}

          turns++;
          win(pawnChoice, true);
        }
        turns++;
        e.preventDefault();
      }); //end click carres
    };

    for (var i = 0; i < carres.length; i++) {
      _loop3(i);
    } //end of loop carres

  }; //end main function 

  //return an object
  return {
    main: main
  };
}();
TicTacToe.main();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJBcnJheSIsInByb3RvdHlwZSIsImxhc3QiLCJsZW5ndGgiLCJUaWNUYWNUb2UiLCJhdWRpb3MiLCJzb2Z0IiwidGllZCIsIndpbiIsImxvc3QiLCJtYXBBcnJheSIsImNpcmNsZSIsImNyb3NzIiwibGFzdFdpbm5lciIsImNob2ljZVBsYXkiLCJsYXN0Q2hvaWNlIiwiYm90UGxheUNob2ljZSIsInBhd25DaG9pY2UiLCJyYW5kQ2hvaWNlIiwiYm90Q2hvaWNlIiwidHVybnMiLCJjYXJyZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwaWVjZSIsInNwb3QxIiwicXVlcnlTZWxlY3RvciIsInNwb3QyIiwic3BvdDMiLCJzcG90NCIsInNwb3Q1Iiwic3BvdDYiLCJzcG90NyIsInNwb3Q4Iiwic3BvdDkiLCJfcGxheVNvdW5kIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJfcGF3biIsImoiLCJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0ZXh0Q29udGVudCIsInByZXZFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nIiwicmVtb3ZlIiwiYWRkIiwibmV4dEVsZW1lbnQiLCJuZXh0U2libGluZyIsInVuZGVmaW5lZCIsImFsZXJ0IiwicHJldmVudERlZmF1bHQiLCJwYXduIiwic3RvcCIsImNvbnRhaW5zIiwicHVzaCIsImFkZERpc2FibGVBbGwiLCJhZGRQb2ludCIsImlubmVySFRNTCIsIl9yZXNldCIsImJvdFBsYXkiLCJfcG9zc2libGl0aWVzQ29ybmVyQm90IiwicGFpciIsImJvdENob2ljZXMiLCJpIiwiY3VycmVudCIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsImxlc3NEaWVzZUN1cnJlbnQiLCJyYyIsIl9pZCIsImdldEF0dHJpYnV0ZSIsInNwb3QxMSIsInNwb3QxMiIsInNwb3QxMyIsInNwb3QyMSIsInNwb3QyMiIsInNwb3QyMyIsInNwb3QzMSIsInNwb3QzMiIsInNwb3QzMyIsInNldFRpbWVvdXQiLCJpbmRleE9mIiwiYm94ZXMiLCJmb3JFYWNoIiwiYm94IiwicmVzZXRCdG4iLCJwcmV2IiwibWFpbiIsInZhbEN1cnJlbnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSxJQUFJLENBQUNBLE1BQU1DLFNBQU4sQ0FBZ0JDLElBQXJCLEVBQTBCO0FBQ3hCRixRQUFNQyxTQUFOLENBQWdCQyxJQUFoQixHQUF1QixZQUFVO0FBQy9CLFdBQU8sS0FBSyxLQUFLQyxNQUFMLEdBQWMsQ0FBbkIsQ0FBUDtBQUNELEdBRkQ7QUFHRDs7QUFFRDtBQUNBLElBQUlDLFlBQWEsWUFBTTs7QUFFckIsTUFBTUMsU0FBUztBQUNiQyxVQUFNLGtDQURPO0FBRWJDLFVBQU0sa0NBRk87QUFHYkMsU0FBTSxpQ0FITztBQUliQyxVQUFNO0FBSk8sR0FBZjtBQU1BLE1BQ0FDLFdBQVcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxFQUE2QyxTQUE3QyxFQUF3RCxTQUF4RCxFQUFtRSxTQUFuRSxFQUE4RSxTQUE5RSxFQUF5RixTQUF6RixDQURYO0FBQUEsTUFFRUMsZUFGRjtBQUFBLE1BRVNDLGNBRlQ7QUFBQSxNQUVlQyxhQUFXLEVBRjFCO0FBQUEsTUFFNkJDLGFBQVcsRUFGeEM7QUFBQSxNQUUyQ0MsYUFBVyxFQUZ0RDtBQUFBLE1BRXlEQyxnQkFBYyxFQUZ2RTtBQUFBLE1BR0VDLGFBQVcsRUFIYjtBQUFBLE1BR2dCQyxtQkFIaEI7QUFBQSxNQUcyQkMsa0JBSDNCO0FBQUEsTUFHcUNDLFFBQU0sQ0FIM0M7QUFBQSxNQUlFQyxTQUFTQyxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FKWDtBQUFBLE1BS0VDLFFBQVFGLFNBQVNDLGdCQUFULENBQTBCLGNBQTFCLENBTFY7QUFBQSxNQU1FRSxRQUFRSCxTQUFTSSxhQUFULENBQXVCLFNBQXZCLENBTlY7QUFBQSxNQU9FQyxRQUFRTCxTQUFTSSxhQUFULENBQXVC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RCxDQXZiZSxFQUFoQjtBQXdiQXpGLFVBQVV5RixJQUFWIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL3Byb3RvdHlwZSBsYXN0XG5pZiAoIUFycmF5LnByb3RvdHlwZS5sYXN0KXtcbiAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG4gIH07XG59O1xuXG4vL2JlZ2luIG1vZHVsZVxubGV0IFRpY1RhY1RvZSA9ICgoKSA9PiB7XG5cbiAgY29uc3QgYXVkaW9zID0ge1xuICAgIHNvZnQ6ICdodHRwOi8vYXJ0b3QubmV0L3NvdW5kcy9zb2Z0Lm1wMycsXG4gICAgdGllZDogJ2h0dHA6Ly9hcnRvdC5uZXQvc291bmRzL3RpZWQubXAzJyxcbiAgICB3aW4gOiAnaHR0cDovL2FydG90Lm5ldC9zb3VuZHMvd2luLm1wMycsXG4gICAgbG9zdDogJ2h0dHA6Ly9hcnRvdC5uZXQvc291bmRzL1N0b3JtX2V4Y2xhbWF0aW9uLm1wMydcbiAgfVxuICBsZXQgXG4gIG1hcEFycmF5ID0gWycjc3BvdDExJywgJyNzcG90MTInLCAnI3Nwb3QxMycsICcjc3BvdDIxJywgJyNzcG90MjInLCAnI3Nwb3QyMycsICcjc3BvdDMxJywgJyNzcG90MzInLCAnI3Nwb3QzMyddLFxuICAgIGNpcmNsZSxjcm9zcyxsYXN0V2lubmVyPVtdLGNob2ljZVBsYXk9W10sbGFzdENob2ljZT1bXSxib3RQbGF5Q2hvaWNlPVtdLFxuICAgIHBhd25DaG9pY2U9JycscmFuZENob2ljZSxib3RDaG9pY2UsdHVybnM9MCxcbiAgICBjYXJyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFwX19jYXJyZSBzcGFuJyksIFxuICAgIHBpZWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNob2ljZSBzcGFuJyksXG4gICAgc3BvdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDExJyksXG4gICAgc3BvdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDEyJyksXG4gICAgc3BvdDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDEzJyksXG4gICAgc3BvdDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIxJyksXG4gICAgc3BvdDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIyJyksXG4gICAgc3BvdDYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIzJyksXG4gICAgc3BvdDcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMxJyksXG4gICAgc3BvdDggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMyJyksXG4gICAgc3BvdDkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMzJylcblxuXG4gIGxldCBfcGxheVNvdW5kID0gKHNvdW5kKSA9PiB7XG4gICAgbmV3IEF1ZGlvKHNvdW5kKS5wbGF5KClcbiAgfVxuXG4gIC8vZXhlY3V0ZWQgaW4gYSBtYWluIGZ1bmN0aW9uXG4gIC8vdGhlIHBsYXllciBjaG9vc2UgZWl0aGVyIHRoZSBjcm9zcyBvciB0aGUgY2lyY2xlXG4gIC8vdGhlIGNob2lzZSBpcyBpbiB2YXIgcGF3bkNob2ljZSBcbiAgLy9waWVjZSA9PT0gLmNob2ljZSBzcGFuXG4gIC8vY2hvb3NlIHdpY2ggcGF3biB0aGUgcGxheWVyIHdhbnRcbiAgbGV0IF9wYXduID0gKCkgPT4ge1xuXG4gICAgZm9yIChsZXQgaiA9IDAsIGwgPSBwaWVjZS5sZW5ndGg7IGogPCBsOyBqKyspIHtcblxuXG4gICAgICAvLyBmaXhlIGxlIGJ1ZyBldCB1dGlzZSBsZXMgY2xhc3MgcG91ciBham91dGVyIGxlIGNob2l4IGRlIGwndXRpbGlzYXRldXJcbiAgICAgIHBpZWNlW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAocGF3bkNob2ljZSA9PT0gJycpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5jbGFzc0xpc3QudG9nZ2xlKCdyZXNldC1oaWRlJylcbiAgICAgICAgfSBcbiAgICAgICAgaWYodGhpcy50ZXh0Q29udGVudCA9PT0gJ2NpcmNsZScpe1xuICAgICAgICAgIHBhd25DaG9pY2UgPSAnY2lyY2xlJyBcbiAgICAgICAgICAvL3JldHVybiB0aGUgaWQgb2YgdGhlIHByZXZpb3VzIGVsZW1lbnRcbiAgICAgICAgICBsZXQgcHJldkVsZW1lbnQgPSB0aGlzLnByZXZpb3VzU2libGluZ1xuICAgICAgICAgIHByZXZFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob29zZS1idXR0b24nKVxuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2hvb3NlLWJ1dHRvbicpIC8vYW5pbWF0aW9uXG4gICAgICAgICAgLy9zaG93IHRoZSByZXNldCBidXR0b25cbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGV4dENvbnRlbnQgPT09ICdjcm9zcycpe1xuICAgICAgICAgIHBhd25DaG9pY2UgPSAnY3Jvc3MnIFxuICAgICAgICAgIGxldCBuZXh0RWxlbWVudCA9IHRoaXMubmV4dFNpYmxpbmdcbiAgICAgICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9vc2UtYnV0dG9uJylcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Nob29zZS1idXR0b24nKSAvL2FuaW1hdGlvblxuICAgICAgICAgIC8vc2hvdyB0aGUgcmVzZXQgYnV0dG9uXG4gICAgICAgIH0gZWxzZSBpZihwYXduQ2hvaWNlID09PSAnJyAmJiBwYXduQ2hvaWNlID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgIGFsZXJ0KCdlcnIgcHJvZ3JhbSwgcmVsb2FkIHRoZSBwYWdlJylcbiAgICAgICAgfSBlbHNlIGlmKHBhd25DaG9pY2UgIT09ICcnKXsgXG4gICAgICAgICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJylcbiAgICAgICAgfSAgXG4gICAgICAgIC8vX3N0YXJ0ZXIoIHBhd25DaG9pY2UgIClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gcGF3bkNob2ljZVxuICAgICAgfSkgLy9lbmQgY2xpY2tcbiAgICB9XG4gIH1cblxuICBsZXQgd2luID0gKHBhd24sIHN0b3ApID0+IHsgLy9yZWN1cnNpdmUgdHJ1ZVxuICAgIGlmKFxuICAgICAgc3BvdDEuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pICYmIHNwb3QyLmNsYXNzTGlzdC5jb250YWlucyhwYXduKSAmJiAgc3BvdDMuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pXG4gICAgICB8fCBzcG90NC5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgc3BvdDUuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pICYmICBzcG90Ni5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgXG4gICAgICB8fCBzcG90Ny5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgc3BvdDguY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pICYmICBzcG90OS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgXG4gICAgICB8fCBzcG90MS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgc3BvdDQuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pICYmICBzcG90Ny5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgXG4gICAgICB8fCBzcG90Mi5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgc3BvdDUuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pICYmICBzcG90OC5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgXG4gICAgICB8fCBzcG90My5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgc3BvdDYuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pICYmICBzcG90OS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgXG4gICAgICB8fCBzcG90MS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgc3BvdDUuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pICYmICBzcG90OS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgXG4gICAgICB8fCBzcG90My5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgc3BvdDUuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pICYmICBzcG90Ny5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgXG4gICAgKSB7XG4gICAgICBsYXN0V2lubmVyLnB1c2gocGF3bilcbiAgICAgIGFkZERpc2FibGVBbGwgKClcbiAgICAgIGJvdENob2ljZSA9IDBcbiAgICAgIHR1cm5zID0gMFxuXG4gICAgICBpZiAoc3RvcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy9jb3VudCB0aGUgdG90YWwgbWF0Y2ggd2luXG4gICAgICAgIGxldCBhZGRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2ludF9fY2lyY2xlIHNwYW4nKS5pbm5lckhUTUwgXG4gICAgICAgIGFkZFBvaW50KytcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50X19jaXJjbGUgc3BhbicpLmlubmVySFRNTCA9IGFkZFBvaW50XG4gICAgICAgIC8vIGJvdCB3aW5cbiAgICAgICAgX3BsYXlTb3VuZCAoYXVkaW9zLmxvc3QpXG4gICAgICB9IGVsc2V7XG4gICAgICAgIC8vY291bnQgdGhlIHRvdGFsIG1hdGNoIHdpblxuICAgICAgICBsZXQgYWRkUG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRfX2Nyb3NzIHNwYW4nKS5pbm5lckhUTUwgXG4gICAgICAgIGFkZFBvaW50KytcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50X19jcm9zcyBzcGFuJykuaW5uZXJIVE1MID0gYWRkUG9pbnRcbiAgICAgICAgLy8gcGxheWVyIHdpblxuICAgICAgICBfcGxheVNvdW5kIChhdWRpb3Mud2luKVxuICAgICAgfVxuICAgICAgX3Jlc2V0KClcbiAgICB9IGVsc2V7XG4gICAgICBpZiAoc3RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICBib3RQbGF5KHBhd24pIC8vIGZ1biByZWN1cnNpdmVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZXQgX3Bvc3NpYmxpdGllc0Nvcm5lckJvdCA9ICgpID0+IHtcblxuICB9XG5cbiAgLy9jYXJyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFwX19jYXJyZSBzcGFuJyksIFxuICBsZXQgYm90UGxheSA9IChwYXduQ2hvaWNlICwgcGFpcikgPT4ge1xuICAgIC8vYm90Q2hvaWNlID09IGNob2l4IGpvdWV1ciBcbiAgICAvL2RvbmMgb24gY2hvaXNpIGwnYXV0cmUgcG91ciBsZSBib3RcbiAgICAvL2JvdENob2ljZSA9IChwYXduQ2hvaWNlID09PSAnY3Jvc3MnKT8nY2lyY2xlJzonY3Jvc3MnXG4gICAgbGV0IGJvdENob2ljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlIHNwYW4nKVxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gYm90Q2hvaWNlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50ID0gYm90Q2hvaWNlc1tpXVxuICAgICAgaWYgKCFjdXJyZW50LmNsYXNzTGlzdC5jb250YWlucyggJ2Nob29zZS1idXR0b24nICkpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2hvaWNlX19jcm9zcycgKSkge1xuICAgICAgICAgIGJvdENob2ljZSA9ICdjcm9zcydcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgIGJvdENob2ljZSA9ICdjaXJjbGUnXG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmFuZENob2ljZSA9IHBhcnNlSW50KCBNYXRoLnJhbmRvbSgpKjggLCAxMCkvL3JhbmRvbSBjaG9pY2UgZm9yIHRoZSBib3RcbiAgICAvL1xuICAgIC8vbWFwQXJyYXlbXSB0aGUgOSB2YWx1ZXMsIGVhY2ggdmFsdWUgYXJlIGRlbGV0ZSB3aGVuICB0aGUgcGxheWVyXG4gICAgLy9wbGF5LCBoZXJlIHdlIGFyZSBjaG9vc2UgaWYgYSB2YWx1ZSBhcmUgaW4gdGhlIHRhYiBhbmQgYXZhaWxhYmxlXG4gICAgLy9mb3IgdGhlIGJvdCB0aGVuIGFkZCB0aGlzIHZhbHVlIGluIGJvdFBsYXlDaG9pY2UgXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBtYXBBcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50ID0gbWFwQXJyYXlbaV0sIGxlc3NEaWVzZUN1cnJlbnQ9JycsXG4gICAgICAgIHJjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtYXBBcnJheVtyYW5kQ2hvaWNlXSApIFxuICAgICAgaWYgKG1hcEFycmF5W3JhbmRDaG9pY2VdICE9PSB1bmRlZmluZWQgJiYgIXJjLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZScpKSB7XG4gICAgICAgIGxldCBfaWQgPSAnIycrIHJjLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgICAvL2Nob29zZSB0aGUgY2VudGVyIHRvIGRvbid0IGxvc3RcbiAgICAgICAgbGV0IHNwb3QxMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcG90MTEnKVxuICAgICAgICBsZXQgc3BvdDEyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QxMicpXG4gICAgICAgIGxldCBzcG90MTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDEzJylcbiAgICAgICAgbGV0IHNwb3QyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcG90MjEnKVxuICAgICAgICBsZXQgc3BvdDIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QyMicpXG4gICAgICAgIGxldCBzcG90MjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIzJylcbiAgICAgICAgbGV0IHNwb3QzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcG90MzEnKVxuICAgICAgICBsZXQgc3BvdDMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nwb3QzMicpXG4gICAgICAgIGxldCBzcG90MzMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMzJylcbiAgICAgICAgaWYgKHR1cm5zID09PSAxKSB7XG4gICAgICAgICAgaWYgKCFzcG90MjIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgIGJvdFBsYXlDaG9pY2UucHVzaCgnI3Nwb3QyMicpIFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNwb3QyMi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgYm90Q2hvaWNlIClcbiAgICAgICAgICAgICAgd2luKGJvdENob2ljZSwgZmFsc2UpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib3RQbGF5Q2hvaWNlLnB1c2goJyMnK3JjLmdldEF0dHJpYnV0ZSgnaWQnKSkgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmMuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsIGJvdENob2ljZSApXG4gICAgICAgICAgICAgIHdpbihib3RDaG9pY2UsIGZhbHNlKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgKCBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDExJykgPT09IC0xICYmIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MzMnKSA9PT0gLTEgfHwgXG4gICAgICAgICAgICBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDEzJykgPT09IC0xICYmIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MzEnKSA9PT0gLTEgXG4gICAgICAgICAgKSAmJiBcbiAgICAgICAgICBib3RQbGF5Q2hvaWNlLmluZGV4T2YoJyNzcG90MjInKSA9PT0gLTEgJiYgIXNwb3QyMi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUnKVxuICAgICAgICApIHtcbiAgICAgICAgICBib3RQbGF5Q2hvaWNlLnB1c2goJyNzcG90MjInKSBcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNwb3QyMi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgYm90Q2hvaWNlIClcbiAgICAgICAgICAgIHdpbihib3RDaG9pY2UsIGZhbHNlKVxuICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9IGVsc2UgaWYgKCAvLyBwcmVtaWVyIGxpZ25lXG4gICAgICAgICAgbWFwQXJyYXkuaW5kZXhPZignI3Nwb3QxMScpID09PSAtMSAmJlxuICAgICAgICAgIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MTInKSA9PT0gLTEgfHxcbiAgICAgICAgICBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDEzJykgPT09IC0xICYmXG4gICAgICAgICAgbWFwQXJyYXkuaW5kZXhPZignI3Nwb3QxMScpID09PSAtMSB8fFxuICAgICAgICAgIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MTInKSA9PT0gLTEgJiZcbiAgICAgICAgICBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDEzJykgPT09IC0xIFxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIXNwb3QxMS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgYm90UGxheUNob2ljZS5wdXNoKCcjc3BvdDExJykgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3BvdDExLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBib3RDaG9pY2UgKVxuICAgICAgICAgICAgICB3aW4oYm90Q2hvaWNlLCBmYWxzZSlcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIGlmKCFzcG90MTMuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpe1xuICAgICAgICAgICAgYm90UGxheUNob2ljZS5wdXNoKCcjc3BvdDEzJykgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3BvdDEzLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBib3RDaG9pY2UgKVxuICAgICAgICAgICAgICB3aW4oYm90Q2hvaWNlLCBmYWxzZSlcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIGlmKCFzcG90MTIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpe1xuICAgICAgICAgICAgYm90UGxheUNob2ljZS5wdXNoKCcjc3BvdDEyJykgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3BvdDEyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBib3RDaG9pY2UgKVxuICAgICAgICAgICAgICB3aW4oYm90Q2hvaWNlLCBmYWxzZSlcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNle1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmMuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsIGJvdENob2ljZSApXG4gICAgICAgICAgICAgIHdpbihib3RDaG9pY2UsIGZhbHNlKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgYm90UGxheUNob2ljZS5wdXNoKF9pZCkgXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gXG5cblxuICAgICAgICB9IGVsc2UgaWYgKCAvLyB0cm9pc2llbWUgbGlnbmVcbiAgICAgICAgICBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDMxJykgPT09IC0xICYmXG4gICAgICAgICAgbWFwQXJyYXkuaW5kZXhPZignI3Nwb3QzMicpID09PSAtMSB8fFxuICAgICAgICAgIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MzMnKSA9PT0gLTEgJiZcbiAgICAgICAgICBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDMxJykgPT09IC0xIHx8XG4gICAgICAgICAgbWFwQXJyYXkuaW5kZXhPZignI3Nwb3QzMicpID09PSAtMSAmJlxuICAgICAgICAgIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MzMnKSA9PT0gLTEgXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICghc3BvdDMxLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICBib3RQbGF5Q2hvaWNlLnB1c2goJyNzcG90MzEnKSBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzcG90MzEuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsIGJvdENob2ljZSApXG4gICAgICAgICAgICAgIHdpbihib3RDaG9pY2UsIGZhbHNlKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9IGVsc2UgaWYoIXNwb3QzMy5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUnKSl7XG4gICAgICAgICAgICBib3RQbGF5Q2hvaWNlLnB1c2goJyNzcG90MzMnKSBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzcG90MzMuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsIGJvdENob2ljZSApXG4gICAgICAgICAgICAgIHdpbihib3RDaG9pY2UsIGZhbHNlKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9IGVsc2UgaWYoIXNwb3QzMi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUnKSl7XG4gICAgICAgICAgICBib3RQbGF5Q2hvaWNlLnB1c2goJyNzcG90MzInKSBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzcG90MzIuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsIGJvdENob2ljZSApXG4gICAgICAgICAgICAgIHdpbihib3RDaG9pY2UsIGZhbHNlKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9IGVsc2V7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByYy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgYm90Q2hvaWNlIClcbiAgICAgICAgICAgICAgd2luKGJvdENob2ljZSwgZmFsc2UpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBib3RQbGF5Q2hvaWNlLnB1c2goX2lkKSBcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBcblxuICAgICAgICB9IGVsc2UgaWYgKCAvLyAxIGNvbHVtblxuICAgICAgICAgIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MTEnKSA9PT0gLTEgJiZcbiAgICAgICAgICBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDIxJykgPT09IC0xIHx8XG4gICAgICAgICAgbWFwQXJyYXkuaW5kZXhPZignI3Nwb3QzMScpID09PSAtMSAmJlxuICAgICAgICAgIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MjEnKSA9PT0gLTEgfHxcbiAgICAgICAgICBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDExJykgPT09IC0xICYmXG4gICAgICAgICAgbWFwQXJyYXkuaW5kZXhPZignI3Nwb3QzMScpID09PSAtMSBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKCFzcG90MTEuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgIGJvdFBsYXlDaG9pY2UucHVzaCgnI3Nwb3QxMScpIFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNwb3QxMS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgYm90Q2hvaWNlIClcbiAgICAgICAgICAgICAgd2luKGJvdENob2ljZSwgZmFsc2UpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gZWxzZSBpZighc3BvdDMxLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZScpKXtcbiAgICAgICAgICAgIGJvdFBsYXlDaG9pY2UucHVzaCgnI3Nwb3QzMScpIFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNwb3QzMS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgYm90Q2hvaWNlIClcbiAgICAgICAgICAgICAgd2luKGJvdENob2ljZSwgZmFsc2UpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gZWxzZSBpZighc3BvdDIxLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZScpKXtcbiAgICAgICAgICAgIGJvdFBsYXlDaG9pY2UucHVzaCgnI3Nwb3QyMScpIFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNwb3QyMS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgYm90Q2hvaWNlIClcbiAgICAgICAgICAgICAgd2luKGJvdENob2ljZSwgZmFsc2UpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByYy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgYm90Q2hvaWNlIClcbiAgICAgICAgICAgICAgd2luKGJvdENob2ljZSwgZmFsc2UpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBib3RQbGF5Q2hvaWNlLnB1c2goX2lkKSBcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICB9IFxuXG4gICAgICAgIH0gZWxzZSBpZiAoIC8vIDMgY29sdW1uXG4gICAgICAgICAgbWFwQXJyYXkuaW5kZXhPZignI3Nwb3QxMycpID09PSAtMSAmJlxuICAgICAgICAgIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MjMnKSA9PT0gLTEgfHxcbiAgICAgICAgICBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDEzJykgPT09IC0xICYmXG4gICAgICAgICAgbWFwQXJyYXkuaW5kZXhPZignI3Nwb3QzMycpID09PSAtMSB8fFxuICAgICAgICAgIG1hcEFycmF5LmluZGV4T2YoJyNzcG90MjMnKSA9PT0gLTEgJiZcbiAgICAgICAgICBtYXBBcnJheS5pbmRleE9mKCcjc3BvdDMzJykgPT09IC0xIFxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoIXNwb3QyMy5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgYm90UGxheUNob2ljZS5wdXNoKCcjc3BvdDIzJykgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3BvdDIzLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBib3RDaG9pY2UgKVxuICAgICAgICAgICAgICB3aW4oYm90Q2hvaWNlLCBmYWxzZSlcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIGlmKCFzcG90MzMuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpe1xuICAgICAgICAgICAgYm90UGxheUNob2ljZS5wdXNoKCcjc3BvdDMzJykgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3BvdDMzLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBib3RDaG9pY2UgKVxuICAgICAgICAgICAgICB3aW4oYm90Q2hvaWNlLCBmYWxzZSlcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIGlmKCFzcG90MTMuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpe1xuICAgICAgICAgICAgYm90UGxheUNob2ljZS5wdXNoKCcjc3BvdDEzJykgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3BvdDEzLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBib3RDaG9pY2UgKVxuICAgICAgICAgICAgICB3aW4oYm90Q2hvaWNlLCBmYWxzZSlcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJjLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBib3RDaG9pY2UgKVxuICAgICAgICAgICAgICB3aW4oYm90Q2hvaWNlLCBmYWxzZSlcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIGJvdFBsYXlDaG9pY2UucHVzaChfaWQpIFxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9IFxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByYy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgYm90Q2hvaWNlIClcbiAgICAgICAgICAgIHdpbihib3RDaG9pY2UsIGZhbHNlKVxuICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICBib3RQbGF5Q2hvaWNlLnB1c2goX2lkKSBcbiAgICAgICAgICBicmVha1xuICAgICAgICB9IFxuICAgICAgfWVsc2UgaWYodHVybnMgPT09IDkpe1xuICAgICAgICBpZiAobWFwQXJyYXlbcmFuZENob2ljZV0gIT09IHVuZGVmaW5lZCAmJiAhcmMuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICByYy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgYm90Q2hvaWNlKVxuICAgICAgICAgIGxhc3RXaW5uZXIucHVzaCgnZHJhdycpXG4gICAgICAgICAgX3BsYXlTb3VuZCAoYXVkaW9zLnRpZWQpXG4gICAgICAgICAgd2luKGJvdENob2ljZSwgZmFsc2UpXG4gICAgICAgICAgcmV0dXJuIF9yZXNldCgpXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIHtcbiAgICAgICAgYm90Q2hvaWNlID0gKGJvdENob2ljZSA9PT0gJ2Nyb3NzJyk/J2NpcmNsZSc6J2Nyb3NzJ1xuICAgICAgICBib3RQbGF5KGJvdENob2ljZSApIC8vIGZ1biByZWN1cnNpdmVcbiAgICAgIH0gXG4gICAgfVxuICB9XG5cbiAgbGV0IGFkZERpc2FibGVBbGwgPSAoKSA9PiB7XG4gICAgdmFyIGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hcF9fY2FycmUgc3BhbicpXG4gICAgYm94ZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICBib3guY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpXG4gICAgfSlcbiAgfVxuXG4gIGxldCBfcmVzZXQgPSAoKSA9PiB7XG4gICAgbGV0IHJlc2V0QnRuID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpXG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGNhcnJlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY2FycmVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NpcmNsZScsICdjcm9zcycsICdkaXNhYmxlJylcbiAgICAgIH1cbiAgICAgIC8vcGllY2UgLy8gLmNob2ljZSBzcGFuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHBpZWNlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudCA9IHBpZWNlW2ldLCBwcmV2ID0gcGllY2VbaS0xXTtcbiAgICAgICAgcGllY2VbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY2hvb3NlLWJ1dHRvbicpXG4gICAgICB9XG4gICAgICAvL2hpZGUgcmVzZXQgYnV0dG9uXG4gICAgICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXNldC1oaWRlJylcbiAgICAgIHBhd25DaG9pY2UgPScnXG4gICAgICBib3RDaG9pY2U9JydcbiAgICAgIHR1cm5zID0gMFxuICAgICAgbWFwQXJyYXkgPSBbJyNzcG90MTEnLCAnI3Nwb3QxMicsICcjc3BvdDEzJywgJyNzcG90MjEnLCAnI3Nwb3QyMicsICcjc3BvdDIzJywgJyNzcG90MzEnLCAnI3Nwb3QzMicsICcjc3BvdDMzJ11cbiAgICAgIGJvdFBsYXlDaG9pY2UgPVtdXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGxldCBtYWluID0gKCkgPT4ge1xuICAgIF9wYXduKClcbiAgICBfcmVzZXQoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FycmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBtYXAgLm1hcF9fcm93ICNzcG90K25cbiAgICAgIGxldCBjdXJyZW50ID0gY2FycmVzW2ldLCBwcmV2ID0gcGllY2VbaS0xXTtcblxuICAgICAgY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgXG4gICAgICAgIGlmIChwYXduQ2hvaWNlID09PSAnJykge1xuICAgICAgICAgIGFsZXJ0KCd5b3UgbmVlZCBjaG9vc2UgdGhlIHBhd24nKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIF9wbGF5U291bmQgKGF1ZGlvcy5zb2Z0KVxuICAgICAgICBpZih0dXJucyA9PT0gOSkge1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsIHBhd25DaG9pY2UpXG4gICAgICAgICAgd2luKHBhd25DaG9pY2UsIGZhbHNlKVxuICAgICAgICAgIGFsZXJ0KCdwbGF5ZXJlciBkcmF3IHBhd25DaG9pY2UnICsgcGF3bkNob2ljZSlcbiAgICAgICAgICBsYXN0V2lubmVyLnB1c2goJ2RyYXcnKVxuICAgICAgICAgIC8vX3BsYXlTb3VuZCAoYXVkaW9zLnRpZWQpXG4gICAgICAgICAgcmV0dXJuIF9yZXNldCgpXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZScpKXtcbiAgICAgICAgfSBlbHNlIGlmKHR1cm5zICUgMiA9PT0gMCApeyAvL2NpcmNsZSBzdGFydFxuICAgICAgICAgIC8vdGhpcyBjbGFzcyBpcyBub3cgdGFrZW4sIHdlIGFkZCAuZGlzYWJsZVxuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsIHBhd25DaG9pY2UpXG5cbiAgICAgICAgICAvL3NhdmUgdGhlIGNhc2UgY2hvaWNlXG4gICAgICAgICAgY2hvaWNlUGxheS5wdXNoKCcjJysgdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgIClcbiAgICAgICAgICBsYXN0Q2hvaWNlLnB1c2gocGF3bkNob2ljZSlcblxuICAgICAgICAgIC8vcmVtb3ZlIHRoZSBpdGVtIHBsYXllZCBpbiB0aGUgbWFwQXJyYXlcbiAgICAgICAgICBsZXQgdmFsQ3VycmVudCA9JyMnK2N1cnJlbnQuaWRcbiAgICAgICAgICBpZiAobWFwQXJyYXkuaW5kZXhPZih2YWxDdXJyZW50KSA+IC0xKSB7XG4gICAgICAgICAgICBkZWxldGUgbWFwQXJyYXlbbWFwQXJyYXkuaW5kZXhPZih2YWxDdXJyZW50KV1cbiAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIHR1cm5zKytcbiAgICAgICAgICB3aW4ocGF3bkNob2ljZSwgdHJ1ZSlcblxuICAgICAgICB9IFxuICAgICAgICB0dXJucysrXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pOyAvL2VuZCBjbGljayBjYXJyZXNcbiAgICB9Ly9lbmQgb2YgbG9vcCBjYXJyZXNcblxuICAgIFxuICB9IC8vZW5kIG1haW4gZnVuY3Rpb24gXG5cbiAgLy9yZXR1cm4gYW4gb2JqZWN0XG4gIHJldHVybiB7XG4gICAgbWFpbiA6IG1haW5cbiAgfTtcblxufSkoKTtcblRpY1RhY1RvZS5tYWluKClcbiJdfQ==
