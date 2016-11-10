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
        //console.log('hide');
        //document.querySelector('.reset').classList.toggle('hide')

        //console.log(pawnChoice );
        //_starter( pawnChoice  )
        e.preventDefault();
        return pawnChoice;
      }); //end click
    }
  };

  var win = function win(pawn, stop) {
    if (spot1.classList.contains(pawn) && spot2.classList.contains(pawn) && spot3.classList.contains(pawn) || spot4.classList.contains(pawn) && spot5.classList.contains(pawn) && spot6.classList.contains(pawn) || spot7.classList.contains(pawn) && spot8.classList.contains(pawn) && spot9.classList.contains(pawn) || spot1.classList.contains(pawn) && spot4.classList.contains(pawn) && spot7.classList.contains(pawn) || spot2.classList.contains(pawn) && spot5.classList.contains(pawn) && spot8.classList.contains(pawn) || spot3.classList.contains(pawn) && spot6.classList.contains(pawn) && spot9.classList.contains(pawn) || spot1.classList.contains(pawn) && spot5.classList.contains(pawn) && spot9.classList.contains(pawn) || spot3.classList.contains(pawn) && spot5.classList.contains(pawn) && spot7.classList.contains(pawn)) {
      lastWinner.push(pawn);
      addDisableAll();
      botChoice = 0;
      turns = 0;

      if (stop === false) {
        var addPoint = document.querySelector('.point__circle').innerHTML;
        addPoint++;
        document.querySelector('.point__circle').innerHTML = addPoint;
        //console.log(addPoint);
        // bot win
        _playSound(audios.lost);
      } else {
        var _addPoint = document.querySelector('.point__cross').innerHTML;
        _addPoint++;
        document.querySelector('.point__cross').innerHTML = _addPoint;
        //console.log(addPoint)
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
    //mapArray[] the 9 values, each value are delete by the player
    //the left of the values are check by here or empty
    //

    var _loop = function _loop(_i, _l) {
      var current = mapArray[_i],
          lessDieseCurrent = '',
          rc = document.querySelector(mapArray[randChoice]);
      if (mapArray[randChoice] !== undefined && !rc.classList.contains('disable')) {
        setTimeout(function () {
          rc.classList.add('disable', botChoice);
          win(botChoice, false);
        }, 200);
        return 'break';
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
        console.log('recursive : ' + botChoice);
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
      //console.log(lastChoice=[] );  // ['circle','cross','circle'...]
      //console.log(choicePlay=[]  ); // ['spot22','spot12','spot31'...]
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

        turns++;

        if (pawnChoice === '') {
          alert('you need choose the pawn');
          return false;
        }
        _playSound(audios.soft);
        //console.log('player : ' +turns );
        //console.log('player pawnChoice : ' +pawnChoice );
        if (turns === 9) {
          //console.log(turns)
          this.classList.add('disable', pawnChoice);
          //console.log('draw player : ' +pawnChoice );
          win(pawnChoice, false);
          alert('playerer draw pawnChoice' + pawnChoice);
          lastWinner.push('draw');
          //_playSound (audios.tied)
          return _reset();
        } else if (this.classList.contains('disable')) {
          console.log('player: this spot is already filled');
        } else if (turns % 2 === 0) {
          //circle start
          //console.log('player pair turns' + turns)
          //console.log('player pair pawnChoice' + pawnChoice)
          //this class is now taken, we add .disable
          this.classList.add('disable', pawnChoice);

          //save the case choice
          choicePlay.push('#' + this.getAttribute('id'));
          lastChoice.push(pawnChoice);

          //remove the item played in the mapArray
          var valCurrent = '#' + current.id;
          if (mapArray.indexOf(valCurrent) > -1) {
            delete mapArray[mapArray.indexOf(valCurrent)];
          }
          turns++;
          //console.log('player pair turns :' + turns)
          //console.log('player pair pawnChoice :' + pawnChoice)
          win(pawnChoice, true);
        } else if (turns % 2 !== 0) {
          var impairPawnChoice = pawnChoice === 'cross' ? 'circle' : 'cross';
          //this class is now taken, we add .disable
          this.classList.add('disable', impairPawnChoice);
          choicePlay.push('#' + this.getAttribute('id'));
          lastChoice.push(impairPawnChoice);

          //remove the item played in the mapArray
          var _valCurrent = '#' + current.id;
          if (mapArray.indexOf(_valCurrent) > -1) {
            //console.log(mapArray.indexOf(valCurrent) );
            delete mapArray[mapArray.indexOf(_valCurrent)];
          }
          //console.log('player impair turns' + turns)
          //console.log('player impair pawnChoice' + pawnChoice)
          win(impairPawnChoice, true);
        }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJBcnJheSIsInByb3RvdHlwZSIsImxhc3QiLCJsZW5ndGgiLCJUaWNUYWNUb2UiLCJhdWRpb3MiLCJzb2Z0IiwidGllZCIsIndpbiIsImxvc3QiLCJtYXBBcnJheSIsImNpcmNsZSIsImNyb3NzIiwibGFzdFdpbm5lciIsImNob2ljZVBsYXkiLCJsYXN0Q2hvaWNlIiwicGF3bkNob2ljZSIsInJhbmRDaG9pY2UiLCJib3RDaG9pY2UiLCJ0dXJucyIsImNhcnJlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBpZWNlIiwic3BvdDEiLCJxdWVyeVNlbGVjdG9yIiwic3BvdDIiLCJzcG90MyIsInNwb3Q0Iiwic3BvdDUiLCJzcG90NiIsInNwb3Q3Iiwic3BvdDgiLCJzcG90OSIsIl9wbGF5U291bmQiLCJzb3VuZCIsIkF1ZGlvIiwicGxheSIsIl9wYXduIiwiaiIsImwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRleHRDb250ZW50IiwicHJldkVsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmciLCJyZW1vdmUiLCJhZGQiLCJuZXh0RWxlbWVudCIsIm5leHRTaWJsaW5nIiwidW5kZWZpbmVkIiwiYWxlcnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhd24iLCJzdG9wIiwiY29udGFpbnMiLCJwdXNoIiwiYWRkRGlzYWJsZUFsbCIsImFkZFBvaW50IiwiaW5uZXJIVE1MIiwiX3Jlc2V0IiwiYm90UGxheSIsInBhaXIiLCJib3RDaG9pY2VzIiwiaSIsImN1cnJlbnQiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJsZXNzRGllc2VDdXJyZW50IiwicmMiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImJveGVzIiwiZm9yRWFjaCIsImJveCIsInJlc2V0QnRuIiwicHJldiIsIm1haW4iLCJnZXRBdHRyaWJ1dGUiLCJ2YWxDdXJyZW50IiwiaWQiLCJpbmRleE9mIiwiaW1w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OztBQUdmLFNBQUssSUFBSVksSUFBSSxDQUFiLEVBQWdCQSxJQUFJOUMsT0FBT2pCLE1BQTNCLEVBQW1DK0QsR0FBbkMsRUFBd0M7QUFBQSxhQUEvQkEsQ0FBK0I7QUFpRXZDLEtBcEVjLENBb0VkO0FBRUYsR0F0RUQsQ0E3THFCLENBbVFuQjs7QUFFRjtBQUNBLFNBQU87QUFDTGUsVUFBT0E7QUFERixHQUFQO0FBSUQsQ0ExUWUsRUFBaEI7QUEyUUE3RSxVQUFVNkUsSUFBViIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9wcm90b3R5cGUgbGFzdFxuaWYgKCFBcnJheS5wcm90b3R5cGUubGFzdCl7XG4gICAgQXJyYXkucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgIH07XG59O1xuXG4vL2JlZ2luIG1vZHVsZVxubGV0IFRpY1RhY1RvZSA9ICgoKSA9PiB7XG5cbiAgY29uc3QgYXVkaW9zID0ge1xuICAgIHNvZnQ6ICdodHRwOi8vYXJ0b3QubmV0L3NvdW5kcy9zb2Z0Lm1wMycsXG4gICAgdGllZDogJ2h0dHA6Ly9hcnRvdC5uZXQvc291bmRzL3RpZWQubXAzJyxcbiAgICB3aW4gOiAnaHR0cDovL2FydG90Lm5ldC9zb3VuZHMvd2luLm1wMycsXG4gICAgbG9zdDogJ2h0dHA6Ly9hcnRvdC5uZXQvc291bmRzL1N0b3JtX2V4Y2xhbWF0aW9uLm1wMydcbiAgfVxuICBsZXQgXG4gICAgbWFwQXJyYXkgPSBbJyNzcG90MTEnLCAnI3Nwb3QxMicsICcjc3BvdDEzJywgJyNzcG90MjEnLCAnI3Nwb3QyMicsICcjc3BvdDIzJywgJyNzcG90MzEnLCAnI3Nwb3QzMicsICcjc3BvdDMzJ10sXG4gICAgY2lyY2xlLGNyb3NzLGxhc3RXaW5uZXI9W10sY2hvaWNlUGxheT1bXSxsYXN0Q2hvaWNlPVtdLFxuICAgIHBhd25DaG9pY2U9JycscmFuZENob2ljZSxib3RDaG9pY2UsdHVybnM9MCxcbiAgICBjYXJyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFwX19jYXJyZSBzcGFuJyksIFxuICAgIHBpZWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNob2ljZSBzcGFuJyksXG4gICAgc3BvdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDExJyksXG4gICAgc3BvdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDEyJyksXG4gICAgc3BvdDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDEzJyksXG4gICAgc3BvdDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIxJyksXG4gICAgc3BvdDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIyJyksXG4gICAgc3BvdDYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIzJyksXG4gICAgc3BvdDcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMxJyksXG4gICAgc3BvdDggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMyJyksXG4gICAgc3BvdDkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMzJylcblxuICBcbiAgbGV0IF9wbGF5U291bmQgPSAoc291bmQpID0+IHtcbiAgICBuZXcgQXVkaW8oc291bmQpLnBsYXkoKVxuICB9XG5cbiAgLy9leGVjdXRlZCBpbiBhIG1haW4gZnVuY3Rpb25cbiAgLy90aGUgcGxheWVyIGNob29zZSBlaXRoZXIgdGhlIGNyb3NzIG9yIHRoZSBjaXJjbGVcbiAgLy90aGUgY2hvaXNlIGlzIGluIHZhciBwYXduQ2hvaWNlIFxuICAvL3BpZWNlID09PSAuY2hvaWNlIHNwYW5cbiAgLy9jaG9vc2Ugd2ljaCBwYXduIHRoZSBwbGF5ZXIgd2FudFxuICBsZXQgX3Bhd24gPSAoKSA9PiB7XG5cbiAgICBmb3IgKGxldCBqID0gMCwgbCA9IHBpZWNlLmxlbmd0aDsgaiA8IGw7IGorKykge1xuXG5cbiAgICAgIC8vIGZpeGUgbGUgYnVnIGV0IHV0aXNlIGxlcyBjbGFzcyBwb3VyIGFqb3V0ZXIgbGUgY2hvaXggZGUgbCd1dGlsaXNhdGV1clxuICAgICAgcGllY2Vbal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChwYXduQ2hvaWNlID09PSAnJykge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Jlc2V0LWhpZGUnKVxuICAgICAgICB9IFxuICAgICAgICBpZih0aGlzLnRleHRDb250ZW50ID09PSAnY2lyY2xlJyl7XG4gICAgICAgICAgcGF3bkNob2ljZSA9ICdjaXJjbGUnIFxuICAgICAgICAgIC8vcmV0dXJuIHRoZSBpZCBvZiB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgICAgICAgIGxldCBwcmV2RWxlbWVudCA9IHRoaXMucHJldmlvdXNTaWJsaW5nXG4gICAgICAgICAgcHJldkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hvb3NlLWJ1dHRvbicpXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdjaG9vc2UtYnV0dG9uJykgLy9hbmltYXRpb25cbiAgICAgICAgICAvL3Nob3cgdGhlIHJlc2V0IGJ1dHRvblxuICAgICAgICB9IGVsc2UgaWYodGhpcy50ZXh0Q29udGVudCA9PT0gJ2Nyb3NzJyl7XG4gICAgICAgICAgcGF3bkNob2ljZSA9ICdjcm9zcycgXG4gICAgICAgICAgbGV0IG5leHRFbGVtZW50ID0gdGhpcy5uZXh0U2libGluZ1xuICAgICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob29zZS1idXR0b24nKVxuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2hvb3NlLWJ1dHRvbicpIC8vYW5pbWF0aW9uXG4gICAgICAgICAgLy9zaG93IHRoZSByZXNldCBidXR0b25cbiAgICAgICAgfSBlbHNlIGlmKHBhd25DaG9pY2UgPT09ICcnICYmIHBhd25DaG9pY2UgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgYWxlcnQoJ2VyciBwcm9ncmFtLCByZWxvYWQgdGhlIHBhZ2UnKVxuICAgICAgICB9IGVsc2UgaWYocGF3bkNob2ljZSAhPT0gJycpeyBcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoaWRlJyk7XG4gICAgICAgICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJylcbiAgICAgICAgfSAgXG4gICAgICAgIC8vY29uc29sZS5sb2cocGF3bkNob2ljZSApO1xuICAgICAgICAvL19zdGFydGVyKCBwYXduQ2hvaWNlICApXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHBhd25DaG9pY2VcbiAgICAgIH0pIC8vZW5kIGNsaWNrXG4gICAgfVxuICB9XG5cbiAgbGV0IHdpbiA9IChwYXduLCBzdG9wKSA9PiB7XG4gICAgaWYoXG4gICAgICAgICBzcG90MS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgc3BvdDIuY2xhc3NMaXN0LmNvbnRhaW5zKHBhd24pICYmICBzcG90My5jbGFzc0xpc3QuY29udGFpbnMocGF3bilcbiAgICAgIHx8IHNwb3Q0LmNsYXNzTGlzdC5jb250YWlucyhwYXduKSAmJiBzcG90NS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgIHNwb3Q2LmNsYXNzTGlzdC5jb250YWlucyhwYXduKSBcbiAgICAgIHx8IHNwb3Q3LmNsYXNzTGlzdC5jb250YWlucyhwYXduKSAmJiBzcG90OC5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgIHNwb3Q5LmNsYXNzTGlzdC5jb250YWlucyhwYXduKSBcbiAgICAgIHx8IHNwb3QxLmNsYXNzTGlzdC5jb250YWlucyhwYXduKSAmJiBzcG90NC5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgIHNwb3Q3LmNsYXNzTGlzdC5jb250YWlucyhwYXduKSBcbiAgICAgIHx8IHNwb3QyLmNsYXNzTGlzdC5jb250YWlucyhwYXduKSAmJiBzcG90NS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgIHNwb3Q4LmNsYXNzTGlzdC5jb250YWlucyhwYXduKSBcbiAgICAgIHx8IHNwb3QzLmNsYXNzTGlzdC5jb250YWlucyhwYXduKSAmJiBzcG90Ni5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgIHNwb3Q5LmNsYXNzTGlzdC5jb250YWlucyhwYXduKSBcbiAgICAgIHx8IHNwb3QxLmNsYXNzTGlzdC5jb250YWlucyhwYXduKSAmJiBzcG90NS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgIHNwb3Q5LmNsYXNzTGlzdC5jb250YWlucyhwYXduKSBcbiAgICAgIHx8IHNwb3QzLmNsYXNzTGlzdC5jb250YWlucyhwYXduKSAmJiBzcG90NS5jbGFzc0xpc3QuY29udGFpbnMocGF3bikgJiYgIHNwb3Q3LmNsYXNzTGlzdC5jb250YWlucyhwYXduKSBcbiAgICApIHtcbiAgICAgIGxhc3RXaW5uZXIucHVzaChwYXduKVxuICAgICAgYWRkRGlzYWJsZUFsbCAoKVxuICAgICAgYm90Q2hvaWNlID0gMFxuICAgICAgdHVybnMgPSAwXG4gICAgICBcbiAgICAgIGlmIChzdG9wID09PSBmYWxzZSkge1xuICAgICAgICBsZXQgYWRkUG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRfX2NpcmNsZScpLmlubmVySFRNTCBcbiAgICAgICAgYWRkUG9pbnQrK1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRfX2NpcmNsZScpLmlubmVySFRNTCA9IGFkZFBvaW50XG4gICAgICAgIC8vY29uc29sZS5sb2coYWRkUG9pbnQpO1xuICAgICAgICAvLyBib3Qgd2luXG4gICAgICAgIF9wbGF5U291bmQgKGF1ZGlvcy5sb3N0KVxuICAgICAgfSBlbHNle1xuICAgICAgICBsZXQgYWRkUG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRfX2Nyb3NzJykuaW5uZXJIVE1MXG4gICAgICAgIGFkZFBvaW50KytcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50X19jcm9zcycpLmlubmVySFRNTCA9IGFkZFBvaW50XG4gICAgICAgIC8vY29uc29sZS5sb2coYWRkUG9pbnQpXG4gICAgICAgIC8vIHBsYXllciB3aW5cbiAgICAgICAgX3BsYXlTb3VuZCAoYXVkaW9zLndpbilcbiAgICAgIH1cbiAgICAgIF9yZXNldCgpXG4gICAgfSBlbHNle1xuICAgICAgaWYgKHN0b3AgPT09IHRydWUpIHtcbiAgICAgICAgYm90UGxheShwYXduKSAvLyBmdW4gcmVjdXJzaXZlXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvL2NhcnJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXBfX2NhcnJlIHNwYW4nKSwgXG4gIGxldCBib3RQbGF5ID0gKHBhd25DaG9pY2UgLCBwYWlyKSA9PiB7XG4gICAgLy9ib3RDaG9pY2UgPT0gY2hvaXggam91ZXVyIFxuICAgIC8vZG9uYyBvbiBjaG9pc2kgbCdhdXRyZSBwb3VyIGxlIGJvdFxuICAgIC8vYm90Q2hvaWNlID0gKHBhd25DaG9pY2UgPT09ICdjcm9zcycpPydjaXJjbGUnOidjcm9zcydcbiAgICBsZXQgYm90Q2hvaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2Ugc3BhbicpXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBib3RDaG9pY2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbGV0IGN1cnJlbnQgPSBib3RDaG9pY2VzW2ldXG4gICAgICBpZiAoIWN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2hvb3NlLWJ1dHRvbicgKSkge1xuICAgICAgICBpZiAoY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoICdjaG9pY2VfX2Nyb3NzJyApKSB7XG4gICAgICAgICAgYm90Q2hvaWNlID0gJ2Nyb3NzJ1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgYm90Q2hvaWNlID0gJ2NpcmNsZSdcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kQ2hvaWNlID0gcGFyc2VJbnQoIE1hdGgucmFuZG9tKCkqOCAsIDEwKS8vcmFuZG9tIGNob2ljZSBmb3IgdGhlIGJvdFxuICAgIC8vXG4gICAgLy9tYXBBcnJheVtdIHRoZSA5IHZhbHVlcywgZWFjaCB2YWx1ZSBhcmUgZGVsZXRlIGJ5IHRoZSBwbGF5ZXJcbiAgICAvL3RoZSBsZWZ0IG9mIHRoZSB2YWx1ZXMgYXJlIGNoZWNrIGJ5IGhlcmUgb3IgZW1wdHlcbiAgICAvL1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbWFwQXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudCA9IG1hcEFycmF5W2ldLCBsZXNzRGllc2VDdXJyZW50PScnLFxuICAgICAgcmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1hcEFycmF5W3JhbmRDaG9pY2VdICkgXG4gICAgICBpZiAobWFwQXJyYXlbcmFuZENob2ljZV0gIT09IHVuZGVmaW5lZCAmJiAhcmMuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmMuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsIGJvdENob2ljZSApXG4gICAgICAgICAgd2luKGJvdENob2ljZSwgZmFsc2UpXG4gICAgICAgIH0sIDIwMCk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9ZWxzZSBpZih0dXJucyA9PT0gOSl7XG4gICAgICAgIGlmIChtYXBBcnJheVtyYW5kQ2hvaWNlXSAhPT0gdW5kZWZpbmVkICYmICFyYy5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgIHJjLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBib3RDaG9pY2UpXG4gICAgICAgICAgbGFzdFdpbm5lci5wdXNoKCdkcmF3JylcbiAgICAgICAgICBfcGxheVNvdW5kIChhdWRpb3MudGllZClcbiAgICAgICAgICB3aW4oYm90Q2hvaWNlLCBmYWxzZSlcbiAgICAgICAgICByZXR1cm4gX3Jlc2V0KClcbiAgICAgICAgfVxuICAgICAgfWVsc2Uge1xuICAgICAgICBib3RDaG9pY2UgPSAoYm90Q2hvaWNlID09PSAnY3Jvc3MnKT8nY2lyY2xlJzonY3Jvc3MnXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWN1cnNpdmUgOiAnICsgYm90Q2hvaWNlKTtcbiAgICAgICAgYm90UGxheShib3RDaG9pY2UgKSAvLyBmdW4gcmVjdXJzaXZlXG4gICAgICB9IFxuICAgIH1cbiAgfVxuXG4gIGxldCBhZGREaXNhYmxlQWxsID0gKCkgPT4ge1xuICAgIHZhciBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXBfX2NhcnJlIHNwYW4nKVxuICAgIGJveGVzLmZvckVhY2goKGJveCwgaSkgPT4ge1xuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKVxuICAgIH0pXG4gIH1cblxuICBsZXQgX3Jlc2V0ID0gKCkgPT4ge1xuICAgIGxldCByZXNldEJ0biA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKVxuICAgIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjYXJyZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNhcnJlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdjaXJjbGUnLCAnY3Jvc3MnLCAnZGlzYWJsZScpXG4gICAgICB9XG4gICAgICAvL3BpZWNlIC8vIC5jaG9pY2Ugc3BhblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwaWVjZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBwaWVjZVtpXSwgcHJldiA9IHBpZWNlW2ktMV07XG4gICAgICAgIHBpZWNlW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2Nob29zZS1idXR0b24nKVxuICAgICAgfVxuICAgICAgLy9oaWRlIHJlc2V0IGJ1dHRvblxuICAgICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZCgncmVzZXQtaGlkZScpXG4gICAgICBwYXduQ2hvaWNlID0nJ1xuICAgICAgYm90Q2hvaWNlPScnXG4gICAgICB0dXJucyA9IDBcbiAgICAgIG1hcEFycmF5ID0gWycjc3BvdDExJywgJyNzcG90MTInLCAnI3Nwb3QxMycsICcjc3BvdDIxJywgJyNzcG90MjInLCAnI3Nwb3QyMycsICcjc3BvdDMxJywgJyNzcG90MzInLCAnI3Nwb3QzMyddXG4gICAgICAvL2NvbnNvbGUubG9nKGxhc3RDaG9pY2U9W10gKTsgIC8vIFsnY2lyY2xlJywnY3Jvc3MnLCdjaXJjbGUnLi4uXVxuICAgICAgLy9jb25zb2xlLmxvZyhjaG9pY2VQbGF5PVtdICApOyAvLyBbJ3Nwb3QyMicsJ3Nwb3QxMicsJ3Nwb3QzMScuLi5dXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGxldCBtYWluID0gKCkgPT4ge1xuICAgIF9wYXduKClcbiAgICBfcmVzZXQoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FycmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBtYXAgLm1hcF9fcm93ICNzcG90K25cbiAgICAgIGxldCBjdXJyZW50ID0gY2FycmVzW2ldLCBwcmV2ID0gcGllY2VbaS0xXTtcbiAgICAgIFxuICAgICAgY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgdHVybnMrK1xuXG4gICAgICAgIGlmIChwYXduQ2hvaWNlID09PSAnJykge1xuICAgICAgICAgIGFsZXJ0KCd5b3UgbmVlZCBjaG9vc2UgdGhlIHBhd24nKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIF9wbGF5U291bmQgKGF1ZGlvcy5zb2Z0KVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdwbGF5ZXIgOiAnICt0dXJucyApO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdwbGF5ZXIgcGF3bkNob2ljZSA6ICcgK3Bhd25DaG9pY2UgKTtcbiAgICAgICAgaWYodHVybnMgPT09IDkpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHR1cm5zKVxuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsIHBhd25DaG9pY2UpXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnZHJhdyBwbGF5ZXIgOiAnICtwYXduQ2hvaWNlICk7XG4gICAgICAgICAgd2luKHBhd25DaG9pY2UsIGZhbHNlKVxuICAgICAgICAgIGFsZXJ0KCdwbGF5ZXJlciBkcmF3IHBhd25DaG9pY2UnICsgcGF3bkNob2ljZSlcbiAgICAgICAgICBsYXN0V2lubmVyLnB1c2goJ2RyYXcnKVxuICAgICAgICAgIC8vX3BsYXlTb3VuZCAoYXVkaW9zLnRpZWQpXG4gICAgICAgICAgcmV0dXJuIF9yZXNldCgpXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZScpKXtcbiAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyOiB0aGlzIHNwb3QgaXMgYWxyZWFkeSBmaWxsZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmKHR1cm5zICUgMiA9PT0gMCApeyAvL2NpcmNsZSBzdGFydFxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BsYXllciBwYWlyIHR1cm5zJyArIHR1cm5zKVxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BsYXllciBwYWlyIHBhd25DaG9pY2UnICsgcGF3bkNob2ljZSlcbiAgICAgICAgICAvL3RoaXMgY2xhc3MgaXMgbm93IHRha2VuLCB3ZSBhZGQgLmRpc2FibGVcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBwYXduQ2hvaWNlKVxuXG4gICAgICAgICAgLy9zYXZlIHRoZSBjYXNlIGNob2ljZVxuICAgICAgICAgIGNob2ljZVBsYXkucHVzaCgnIycrIHRoaXMuZ2V0QXR0cmlidXRlKCdpZCcpICApXG4gICAgICAgICAgbGFzdENob2ljZS5wdXNoKHBhd25DaG9pY2UpXG5cbiAgICAgICAgICAvL3JlbW92ZSB0aGUgaXRlbSBwbGF5ZWQgaW4gdGhlIG1hcEFycmF5XG4gICAgICAgICAgbGV0IHZhbEN1cnJlbnQgPScjJytjdXJyZW50LmlkXG4gICAgICAgICAgaWYgKG1hcEFycmF5LmluZGV4T2YodmFsQ3VycmVudCkgPiAtMSkge1xuICAgICAgICAgICAgZGVsZXRlIG1hcEFycmF5W21hcEFycmF5LmluZGV4T2YodmFsQ3VycmVudCldXG4gICAgICAgICAgfVxuICAgICAgICAgIHR1cm5zKytcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwbGF5ZXIgcGFpciB0dXJucyA6JyArIHR1cm5zKVxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BsYXllciBwYWlyIHBhd25DaG9pY2UgOicgKyBwYXduQ2hvaWNlKVxuICAgICAgICAgIHdpbihwYXduQ2hvaWNlLCB0cnVlKVxuXG4gICAgICAgIH0gZWxzZSBpZih0dXJucyAlIDIgIT09IDApeyBcbiAgICAgICAgICBsZXQgaW1wYWlyUGF3bkNob2ljZSA9IChwYXduQ2hvaWNlID09PSAnY3Jvc3MnKT8gICdjaXJjbGUnIDogICdjcm9zcydcbiAgICAgICAgICAvL3RoaXMgY2xhc3MgaXMgbm93IHRha2VuLCB3ZSBhZGQgLmRpc2FibGVcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnLCBpbXBhaXJQYXduQ2hvaWNlIClcbiAgICAgICAgICBjaG9pY2VQbGF5LnB1c2goJyMnKyB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSAgKVxuICAgICAgICAgIGxhc3RDaG9pY2UucHVzaChpbXBhaXJQYXduQ2hvaWNlKVxuXG4gICAgICAgICAgLy9yZW1vdmUgdGhlIGl0ZW0gcGxheWVkIGluIHRoZSBtYXBBcnJheVxuICAgICAgICAgIGxldCB2YWxDdXJyZW50ID0nIycrY3VycmVudC5pZFxuICAgICAgICAgIGlmIChtYXBBcnJheS5pbmRleE9mKHZhbEN1cnJlbnQpID4gLTEpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWFwQXJyYXkuaW5kZXhPZih2YWxDdXJyZW50KSApO1xuICAgICAgICAgICAgZGVsZXRlIG1hcEFycmF5W21hcEFycmF5LmluZGV4T2YodmFsQ3VycmVudCldXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BsYXllciBpbXBhaXIgdHVybnMnICsgdHVybnMpXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygncGxheWVyIGltcGFpciBwYXduQ2hvaWNlJyArIHBhd25DaG9pY2UpXG4gICAgICAgICAgd2luKGltcGFpclBhd25DaG9pY2UsIHRydWUpXG4gICAgICAgIH0gXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pOyAvL2VuZCBjbGljayBjYXJyZXNcbiAgICB9Ly9lbmQgb2YgbG9vcCBjYXJyZXNcblxuICB9IC8vZW5kIG1haW4gZnVuY3Rpb24gXG5cbiAgLy9yZXR1cm4gYW4gb2JqZWN0XG4gIHJldHVybiB7XG4gICAgbWFpbiA6IG1haW5cbiAgfTtcblxufSkoKTtcblRpY1RhY1RvZS5tYWluKClcbiJdfQ==
