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

      var current = piece[j],
          prev = piece[j - 1];

      current.addEventListener('click', function (e) {
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
          console.log('o');
          //this class is now taken, we add .disable
          this.classList.add('disable', 'circle');
          //save the case choice
          choicePlay.push(this.getAttribute('id'));
          lastChoice.push('circle');
          if (spot1.classList.contains('circle') && spot2.classList.contains('circle') && spot3.classList.contains('circle') || spot4.classList.contains('circle') && spot5.classList.contains('circle') && spot6.classList.contains('circle') || spot7.classList.contains('circle') && spot8.classList.contains('circle') && spot9.classList.contains('circle') || spot1.classList.contains('circle') && spot4.classList.contains('circle') && spot7.classList.contains('circle') || spot2.classList.contains('circle') && spot5.classList.contains('circle') && spot8.classList.contains('circle') || spot3.classList.contains('circle') && spot6.classList.contains('circle') && spot9.classList.contains('circle') || spot1.classList.contains('circle') && spot5.classList.contains('circle') && spot9.classList.contains('circle') || spot3.classList.contains('circle') && spot5.classList.contains('circle') && spot7.classList.contains('circle')) {
            console.log('winner is O');
            lastWinner.push('circle');
            addDisableAll();
            //reset()      
          } else {
            botPlay('circle');
          }
        } else if (turns % 2 !== 0) {
          //cross
          turns++;
          console.log('x');
          //this class is now taken, we add .disable
          this.classList.add('disable', 'cross');
          choicePlay.push(this.getAttribute('id'));
          lastChoice.push('cross');
          if (spot1.classList.contains('cross') && spot2.classList.contains('cross') && spot3.classList.contains('cross') || spot4.classList.contains('cross') && spot5.classList.contains('cross') && spot6.classList.contains('cross') || spot7.classList.contains('cross') && spot8.classList.contains('cross') && spot9.classList.contains('cross') || spot1.classList.contains('cross') && spot4.classList.contains('cross') && spot7.classList.contains('cross') || spot2.classList.contains('cross') && spot5.classList.contains('cross') && spot8.classList.contains('cross') || spot3.classList.contains('cross') && spot6.classList.contains('cross') && spot9.classList.contains('cross') || spot1.classList.contains('cross') && spot5.classList.contains('cross') && spot9.classList.contains('cross') || spot3.classList.contains('cross') && spot5.classList.contains('cross') && spot7.classList.contains('cross')) {
            console.log('winner is 0');
            lastWinner.push('circle');
            addDisableAll();
          } else {
            botPlay('cross');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJBcnJheSIsInByb3RvdHlwZSIsImxhc3QiLCJsZW5ndGgiLCJUaWNUYWNUb2UiLCJhdWRpb3MiLCJzb2Z0IiwidGllZCIsIndpbiIsImxvc3QiLCJfcGxheVNvdW5kIiwic291bmQiLCJBdWRpbyIsInBsYXkiLCJzY29yZUxpc3QiLCJwbGF5ZXIiLCJjb3VudGVyIiwiY29udGFpbiIsImNpcmNsZSIsImNyb3NzIiwibGFzdFdpbm5lciIsImNob2ljZSIsImNob2ljZVBsYXkiLCJsYXN0Q2hvaWNlIiwicGF3bkNob2ljZSIsImJvdEFycmF5IiwicmFuZENob2ljZSIsImNhcnJlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInBpZWNlIiwiYW5pbVBsYXlNYWNoaW5lIiwidHVybnMiLCJyZXNldCIsInF1ZXJ5U2VsZWN0b3IiLCJzcG90MSIsInNwb3QyIiwic3BvdDMiLCJzcG90NCIsInNwb3Q1Iiwic3BvdDYiLCJzcG90NyIsInNwb3Q4Iiwic3BvdDkiLCJfcGF3biIsImoiLCJsIiwiY3VycmVudCIsInByZXYiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRleHRDb250ZW50IiwicHJldkVsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJuZXh0RWxlbWVudCIsIm5leHRTaWJsaW5nIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJfc3RhcnRlciIsInAiLCJib3RQbGF5IiwicGFpciIsImJvdENob2ljZSIsImkiLCJwdXNoIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiaWRlbnRpZmlhbnQiLCJhZGREaXNhYmxlQWxsIiwiYm94ZXMiLCJmb3JFYWNoIiwiYm94IiwibWFpbiIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIiwiX3BsYXlNYWNoaW5lIiwicGxheWVyTGFzdCIsImZsb29yIiwiX3ByaXZhdGVNZXRob2QiLCJf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LEtBQWMsQ0FBZCxHQUFpQixDQUE1QixJQUNWRCxLQUFLWSxLQUFMLENBQVdaLEtBQUtDLE1BQUwsS0FBYyxDQUFkLEdBQWlCLENBQTVCLENBREY7QUFFRDtBQUNEWixZQUFRQyxHQUFSLENBQVksU0FBWjtBQUNELEdBWEQ7O0FBY0EsTUFBSXVCLGlCQUFrQixTQUFsQkEsY0FBa0IsR0FBTTtBQUMxQjtBQUNELEdBRkQ7O0FBSUEsTUFBSUMsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDakIsU0FBSyxJQUFJakIsSUFBSSxDQUFSLEVBQVd0QixJQUFJbkIsT0FBT3hCLE1BQTNCLEVBQW1DaUUsSUFBSXRCLENBQXZDLEVBQTBDc0IsR0FBMUMsRUFBK0M7QUFDN0MsVUFBSXJCLFVBQVVwQixPQUFPeUMsQ0FBUCxDQUFkO0FBQUEsVUFBeUJwQixPQUFPckIsT0FBT3lDLElBQUUsQ0FBVCxDQUFoQztBQUNBLFVBQUtyQixRQUFRTyxTQUFSLENBQWtCeUIsUUFBbEIsQ0FBMkIsUUFBM0IsS0FDSGhDLFFBQVFPLFNBQVIsQ0FBa0J5QixRQUFsQixDQUEyQixPQUEzQixDQURHLElBRUhoQyxRQUFRTyxTQUFSLENBQWtCeUIsUUFBbEIsQ0FBMkIsU0FBM0IsQ0FGRixFQUUwQztBQUN0Q2hDLGdCQUFRTyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixRQUF6QixFQUFtQyxPQUFuQyxFQUE0QyxTQUE1QztBQUNEO0FBQ0o7QUFDRixHQVREOztBQVdBO0FBQ0EsU0FBTztBQUNMdUIsVUFBT0EsSUFERjtBQUVMN0MsV0FBT0E7QUFGRixHQUFQO0FBS0QsQ0FuUmUsRUFBaEI7QUFvUkE3QixVQUFVMEUsSUFBViIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3Byb3RvdHlwZSBsYXN0XG5pZiAoIUFycmF5LnByb3RvdHlwZS5sYXN0KXtcbiAgICBBcnJheS5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XG4gICAgfTtcbn07XG5cbi8vYmVnaW4gbW9kdWxlXG5sZXQgVGljVGFjVG9lID0gKCgpID0+IHtcblxuICBjb25zdCBhdWRpb3MgPSB7XG4gICAgc29mdDogJ2h0dHA6Ly9hcnRvdC5uZXQvc291bmRzL3NvZnQubXAzJyxcbiAgICB0aWVkOiAnaHR0cDovL2FydG90Lm5ldC9zb3VuZHMvdGllZC5tcDMnLFxuICAgIHdpbiA6ICdodHRwOi8vYXJ0b3QubmV0L3NvdW5kcy93aW4ubXAzJyxcbiAgICBsb3N0OiAnaHR0cDovL2FydG90Lm5ldC9zb3VuZHMvU3Rvcm1fZXhjbGFtYXRpb24ubXAzJ1xuICB9XG4gIGZ1bmN0aW9uIF9wbGF5U291bmQoc291bmQpIHtcbiAgICBuZXcgQXVkaW8oc291bmQpLnBsYXkoKVxuICB9XG4gIGxldCBcbiAgc2NvcmVMaXN0ID0gW10scGxheWVyID0gW10sIGNvdW50ZXI9MCwgY29udGFpbiwgY2lyY2xlLGNyb3NzLCBcbiAgICBwbGF5LHdpbixsb3N0LCB0aWVkLGxhc3RXaW5uZXI9W10sIGNob2ljZSwgY2hvaWNlUGxheT1bXSxsYXN0Q2hvaWNlPVtdLFxuICAgIHBhd25DaG9pY2U9JycgLC8vcGlvbiBkdSBqb3VldXJcbiAgICBib3RBcnJheSA9W10sIHJhbmRDaG9pY2UsXG4gICAgY2FycmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hcF9fY2FycmUgc3BhbicpLCBcbiAgICBwaWVjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2Ugc3BhbicpLFxuICAgIGFuaW1QbGF5TWFjaGluZSx0dXJucz0wLFxuICAgIHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0JyksXG4gICAgc3BvdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDExJyksXG4gICAgc3BvdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDEyJyksXG4gICAgc3BvdDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDEzJyksXG4gICAgc3BvdDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIxJyksXG4gICAgc3BvdDUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIyJyksXG4gICAgc3BvdDYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDIzJyksXG4gICAgc3BvdDcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMxJyksXG4gICAgc3BvdDggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMyJyksXG4gICAgc3BvdDkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BvdDMzJylcblxuXG5cbiAgLy9leGVjdXRlZCBpbiBhIG1haW4gZnVuY3Rpb25cbiAgLy90aGUgcGxheWVyIGNob29zZSBlaXRoZXIgdGhlIGNyb3NzIG9yIHRoZSBjaXJjbGVcbiAgLy90aGUgY2hvaXNlIGlzIGluIHZhciBwYXduQ2hvaWNlIFxuICAvL3BpZWNlID09PSAuY2hvaWNlIHNwYW5cbiAgLy9jaG9vc2Ugd2ljaCBwYXduIHRoZSBwbGF5ZXIgd2FudFxuICBsZXQgX3Bhd24gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaiA9IDAsIGwgPSBwaWVjZS5sZW5ndGg7IGogPCBsOyBqKyspIHtcblxuICAgICAgbGV0IGN1cnJlbnQgPSBwaWVjZVtqXSwgcHJldiA9IHBpZWNlW2otMV07XG5cbiAgICAgIGN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmKHRoaXMudGV4dENvbnRlbnQgPT09ICdjaXJjbGUnKXtcbiAgICAgICAgICBwYXduQ2hvaWNlID0gJ2NpcmNsZScgXG4gICAgICAgICAgLy9yZXR1cm4gdGhlIGlkIG9mIHRoZSBwcmV2aW91cyBlbGVtZW50XG4gICAgICAgICAgbGV0IHByZXZFbGVtZW50ID0gdGhpcy5wcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICBwcmV2RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaG9vc2UtYnV0dG9uJylcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Nob29zZS1idXR0b24nKSAvL2FuaW1hdGlvblxuICAgICAgICB9IGVsc2UgaWYodGhpcy50ZXh0Q29udGVudCA9PT0gJ2Nyb3NzJyl7XG4gICAgICAgICAgcGF3bkNob2ljZSA9ICdjcm9zcycgXG4gICAgICAgICAgbGV0IG5leHRFbGVtZW50ID0gdGhpcy5uZXh0U2libGluZ1xuICAgICAgICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Nob29zZS1idXR0b24nKVxuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2hvb3NlLWJ1dHRvbicpIC8vYW5pbWF0aW9uXG4gICAgICAgIH0gZWxzZSBpZihwYXduQ2hvaWNlID09PSAnJyl7XG4gICAgICAgICAgYWxlcnQoJ2VyciBwcm9ncmFtLCByZWxvYWQgdGhlIHBhZ2UnKVxuICAgICAgICB9IFxuICAgICAgICBjb25zb2xlLmxvZyhwYXduQ2hvaWNlICk7XG4gICAgICAgIC8vX3N0YXJ0ZXIoIHBhd25DaG9pY2UgIClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gcGF3bkNob2ljZVxuICAgICAgfSkgLy9lbmQgY2xpY2tcbiAgICB9XG4gIH1cblxuXG4gIGxldCBfc3RhcnRlciA9IChwKSA9PiB7XG4gICAgY29uc29sZS5sb2cobGFzdFdpbm5lci5sZW5ndGgpO1xuICAgIGNvbnNvbGUubG9nKHBhd25DaG9pY2UgKTtcbiAgICBpZiAobGFzdFdpbm5lcltsYXN0V2lubmVyLmxlbmd0aC0xXSA9PT0gcCkge1xuICAgICAgcGF3bkNob2ljZSAgID0gJ2NpcmNsZSdcbiAgICB9IGVsc2UgaWYgKGxhc3RXaW5uZXJbbGFzdFdpbm5lci5sZW5ndGgtMV0gPT09IHApIHtcbiAgICAgIHBhd25DaG9pY2UgICA9ICdjcm9zcydcbiAgICB9IGVsc2V7XG4gICAgICBwYXduQ2hvaWNlICA9IHAgICBcbiAgICB9IFxuICAgIHJldHVybiBwYXduQ2hvaWNlIFxuICB9XG5cbiAgLy9jYXJyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFwX19jYXJyZSBzcGFuJyksIFxuICBsZXQgYm90UGxheSA9IChwYXduQ2hvaWNlICwgcGFpcikgPT4ge1xuICAgICAgLy9ib3RDaG9pY2UgPT0gY2hvaXggam91ZXVyIFxuICAgIC8vZG9uYyBvbiBjaG9pc2kgbCdhdXRyZSBwb3VyIGxlIGJvdFxuICAgIGxldCBib3RDaG9pY2UgPSAocGF3bkNob2ljZSA9PT0gJ2Nyb3NzJyk/J2NpcmNsZSc6J2Nyb3NzJ1xuICAgIGNvbnNvbGUubG9nKGxhc3RDaG9pY2UgKTsgIC8vIFsnY2lyY2xlJywnY3Jvc3MnLCdjaXJjbGUnLi4uXVxuICAgIGNvbnNvbGUubG9nKGNob2ljZVBsYXkgICk7IC8vIFsnc3BvdDIyJywnc3BvdDEyJywnc3BvdDMxJy4uLl1cbiAgICAvL29uICBjb25zdHJ1aXQgdW4gdGFibGVhdSBhIHBhcnRpciBkZXMgMiB0YWJsZWF1eFxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGFzdENob2ljZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCBjdXJyZW50ID0gbGFzdENob2ljZVtpXSwgcHJldiA9IGxhc3RDaG9pY2VbaS0xXTtcbiAgICAgIGlmIChjdXJyZW50ID09PSBib3RDaG9pY2UgKSB7XG4gICAgICAgIGJvdEFycmF5LnB1c2goJyMnK2Nob2ljZVBsYXlbaV0gKVxuICAgICAgICBcbiAgICAgIH0gZWxzZXtcbiAgICAgICAgLy9ib3RDaG9pY2UgaXMgZW1wdHlcbiAgICAgICAgY29uc29sZS5sb2coJ2JvdENob2ljZSBpcyBlbXB0eScpO1xuICAgICAgfSBcbiAgICAgIFxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhib3RBcnJheSApO1xuICAgIFxuICAgIHJhbmRDaG9pY2UgPSBwYXJzZUludCggTWF0aC5yYW5kb20oKSo4ICwgMTApXG5cbiAgICBpZiAoY2hvaWNlUGxheS5sZW5ndGggPiAwKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCdwYXduIGJvdFBsYXkgJyArYm90Q2hvaWNlICAgKTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY2hvaWNlUGxheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBjaG9pY2VQbGF5W2ldLCBwcmV2ID0gY2hvaWNlUGxheVtpLTFdLCBpZGVudGlmaWFudFxuICAgICAgICBpZGVudGlmaWFudCA9ICcjJytjdXJyZW50IFxuICAgICAgICAvL2NvbnNvbGUubG9nKHR5cGVvZiBpZGVudGlmaWFudCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coaWRlbnRpZmlhbnQpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkZW50aWZpYW50KSApO1xuICAgICAgICAvL3Jvd1xuICAgICAgICAgICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcG90MTMnKS5jbGFzc0xpc3QuYWRkKGJvdENob2ljZSApXG4gICAgICAgIGlmKGlkZW50aWZpYW50ICE9PSAnI3Nwb3QxMScgXG4gICAgICAgICAgfHwgaWRlbnRpZmlhbnQgIT09ICcjc3BvdDEyJyBcbiAgICAgICAgICB8fCBpZGVudGlmaWFudCAhPT0gJyNzcG90MTMnKXtcbiAgICAgICAgfWVsc2UgaWYoaWRlbnRpZmlhbnQgPT09ICdzcG90MTMnKXsgXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKGlkZW50aWZpYW50ID09PSAnc3BvdDEyJyApe1xuICAgICAgICB9XG4gICAgICAgIGlmKGlkZW50aWZpYW50ID09PSAnc3BvdDEzJyApe1xuICAgICAgICB9XG4gICAgICAgIC8vY2lkZW50aWZpYW50ID09PSAnc3BvdCdcbiAgICAgICAgaWYoaWRlbnRpZmlhbnQgPT09ICdzcG90MjEnICl7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRlbnRpZmlhbnQgPT09ICdzcG90MjInICl7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWRlbnRpZmlhbnQgPT09ICdzcG90MjMnICl7XG4gICAgICAgIH1cbiAgICAgICAgLy9kaWRlbnRpZmlhbnQgPT09ICdzcG90J1xuICAgICAgICBpZihpZGVudGlmaWFudCA9PT0gJ3Nwb3QzMScgKXtcbiAgICAgICAgfVxuICAgICAgICBpZihpZGVudGlmaWFudCA9PT0gJ3Nwb3QzMicgKXtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy90aGlzIGNsYXNzIGlzIG5vdyB0YWtlbiwgd2UgYWRkIC5kaXNhYmxlXG4gICAgfVxuICB9XG5cbiAgbGV0IGFkZERpc2FibGVBbGwgPSAoKSA9PiB7XG4gICAgdmFyIGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1hcF9fY2FycmUgc3BhbicpXG4gICAgYm94ZXMuZm9yRWFjaCgoYm94LCBpKSA9PiB7XG4gICAgICBib3guY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpXG4gICAgfSlcbiAgfVxuXG4gIGxldCBtYWluID0gKCkgPT4ge1xuICAgIF9wYXduKClcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGN1cnJlbnQgPSBjYXJyZXNbaV0sIHByZXYgPSBwaWVjZVtpLTFdO1xuICAgICAgLy9ldmVudHMgb24gdGhlIGNhc2VcbiAgICAgIGN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChwYXduQ2hvaWNlID09PSAnJykge1xuICAgICAgICAgIGFsZXJ0KCd5b3UgbmVlZCBjaG9vc2UgdGhlIHBhd24nKVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXduICcrIHBhd25DaG9pY2UpO1xuICAgICAgICBpZih0dXJucyA9PT0gOCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdkcmF3Jyk7IC8vIHRpZSBnYW1lXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgJ2Nyb3NzJylcbiAgICAgICAgICB0dXJucyA9IDBcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIHNwb3QgaXMgYWxyZWFkeSBmaWxsZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmKHR1cm5zICUgMiA9PT0gMCl7IC8vY2lyY2xlIHN0YXJ0XG4gICAgICAgICAgdHVybnMrK1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdvJyk7XG4gICAgICAgICAgLy90aGlzIGNsYXNzIGlzIG5vdyB0YWtlbiwgd2UgYWRkIC5kaXNhYmxlXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJywgJ2NpcmNsZScpXG4gICAgICAgICAgLy9zYXZlIHRoZSBjYXNlIGNob2ljZVxuICAgICAgICAgIGNob2ljZVBsYXkucHVzaCggdGhpcy5nZXRBdHRyaWJ1dGUoJ2lkJykgIClcbiAgICAgICAgICBsYXN0Q2hvaWNlLnB1c2goJ2NpcmNsZScpXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgc3BvdDEuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaXJjbGUnKSAmJiBzcG90Mi5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpICYmICBzcG90My5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpXG4gICAgICAgICAgICB8fCBzcG90NC5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgJiYgIHNwb3Q2LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgXG4gICAgICAgICAgICB8fCBzcG90Ny5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpICYmIHNwb3Q4LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgJiYgIHNwb3Q5LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgXG4gICAgICAgICAgICB8fCBzcG90MS5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpICYmIHNwb3Q0LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgJiYgIHNwb3Q3LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgXG4gICAgICAgICAgICB8fCBzcG90Mi5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgJiYgIHNwb3Q4LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgXG4gICAgICAgICAgICB8fCBzcG90My5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpICYmIHNwb3Q2LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgJiYgIHNwb3Q5LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgXG4gICAgICAgICAgICB8fCBzcG90MS5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgJiYgIHNwb3Q5LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgXG4gICAgICAgICAgICB8fCBzcG90My5jbGFzc0xpc3QuY29udGFpbnMoJ2NpcmNsZScpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgJiYgIHNwb3Q3LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2lubmVyIGlzIE8nKTtcbiAgICAgICAgICAgIGxhc3RXaW5uZXIucHVzaCgnY2lyY2xlJylcbiAgICAgICAgICAgIGFkZERpc2FibGVBbGwgKClcbiAgICAgICAgICAgIC8vcmVzZXQoKSAgICAgIFxuICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIGJvdFBsYXkoJ2NpcmNsZScpXG4gICAgICAgICAgfSBcblxuICAgICAgICB9IGVsc2UgaWYodHVybnMgJSAyICE9PSAwKXsgLy9jcm9zc1xuICAgICAgICAgIHR1cm5zKytcbiAgICAgICAgICBjb25zb2xlLmxvZygneCcpO1xuICAgICAgICAgIC8vdGhpcyBjbGFzcyBpcyBub3cgdGFrZW4sIHdlIGFkZCAuZGlzYWJsZVxuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScsICdjcm9zcycpXG4gICAgICAgICAgY2hvaWNlUGxheS5wdXNoKCB0aGlzLmdldEF0dHJpYnV0ZSgnaWQnKSAgKVxuICAgICAgICAgIGxhc3RDaG9pY2UucHVzaCgnY3Jvc3MnKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNwb3QxLmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSAmJiBzcG90Mi5jbGFzc0xpc3QuY29udGFpbnMoJ2Nyb3NzJykgJiYgIHNwb3QzLmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKVxuICAgICAgICAgICAgfHwgc3BvdDQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSAmJiAgc3BvdDYuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpIFxuICAgICAgICAgICAgfHwgc3BvdDcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpICYmIHNwb3Q4LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSAmJiAgc3BvdDkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpIFxuICAgICAgICAgICAgfHwgc3BvdDEuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpICYmIHNwb3Q0LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSAmJiAgc3BvdDcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpIFxuICAgICAgICAgICAgfHwgc3BvdDIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSAmJiAgc3BvdDguY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpIFxuICAgICAgICAgICAgfHwgc3BvdDMuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpICYmIHNwb3Q2LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSAmJiAgc3BvdDkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpIFxuICAgICAgICAgICAgfHwgc3BvdDEuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSAmJiAgc3BvdDkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpIFxuICAgICAgICAgICAgfHwgc3BvdDMuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpICYmIHNwb3Q1LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MnKSAmJiAgc3BvdDcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpIFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dpbm5lciBpcyAwJyk7XG4gICAgICAgICAgICBsYXN0V2lubmVyLnB1c2goJ2NpcmNsZScpXG4gICAgICAgICAgICBhZGREaXNhYmxlQWxsICgpXG4gICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYm90UGxheSgnY3Jvc3MnKVxuICAgICAgICAgIH0gXG4gICAgICAgIH0gXG5cbiAgICAgICAgLy8vL2lmIHRoZSBwbGF5ZXIgZG9uJ3QgaGF2ZSBwd2FuIHN0b3AgdGhlIGdhbWVcbiAgICAgICAgLy9pZiAocGF3bkNob2ljZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2Nob29zZSBhIHB3YW4nKVxuICAgICAgICAvL3JldHVybiBmYWxzZVxuICAgICAgICAvL31cblxuICAgICAgICAvL2NvbnNvbGUubG9nKF9wYXduKCkgKVxuICAgICAgICAvLy8vaWYgKCFjb250YWluICkge1xuICAgICAgICAvLy8vY29uc29sZS5sb2coJ2NvbnRhaW4nKTtcbiAgICAgICAgLy9pZiAoY291bnRlciA+PSAwICYmIGNvdW50ZXIgPD0gOCkge1xuICAgICAgICAvL3BsYXllci5wdXNoKGNhcnJlc1tpXS5jbGFzc0xpc3QuaXRlbSgwKSApXG4gICAgICAgIC8vX3BsYXlTb3VuZChhdWRpb3Muc29mdClcbiAgICAgICAgLy9jb3VudGVyKytcbiAgICAgICAgLy99IGVsc2UgaWYoY291bnRlciA9PT0gOSl7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RpZWQnKTtcbiAgICAgICAgLy9jbGVhclRpbWVvdXQoYW5pbVBsYXlNYWNoaW5lKVxuICAgICAgICAvL31cbiAgICAgICAgLy9hbmltUGxheU1hY2hpbmUgPSBzZXRUaW1lb3V0KF9wbGF5TWFjaGluZSwgMTAwMCk7Ly8xc1xuICAgICAgICAvLy8vfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pOyAvL2VuZCBjbGlja1xuICAgIH0vL2VuZCBvZiBsb29wXG5cbiAgfSAvL2VuZCBmdW5jdGlvbiBcblxuICBsZXQgX3BsYXlNYWNoaW5lID0gKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJMYXN0ID0gcGFyc2VJbnQocGxheWVyLmxhc3QoKSlcbiAgICAvL2NvbnNvbGUubG9nKGNvdW50ZXIgKTtcbiAgICAvL3RoZSBwZXJzb24gc3RhcnQgdGhlIGdhbWVcbiAgICBpZihwbGF5ZXIubGVuZ3RoID09PSAxKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiSSBwbGF5XCIpO1xuICAgIH0gZWxzZSBpZihwbGF5ZXIubGVuZ3RoID4gMSl7XG4gICAgICBjb25zb2xlLmxvZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMyArMSApICsgXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozICsxICkgKVxuICAgIH0gXG4gICAgY29uc29sZS5sb2coJ2RkZGRkZGQnKTtcbiAgfVxuXG5cbiAgbGV0IF9wcml2YXRlTWV0aG9kICA9ICgpID0+IHtcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuXG4gIGxldCBfcmVzZXQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjYXJyZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGNhcnJlc1tpXSwgcHJldiA9IGNhcnJlc1tpLTFdO1xuICAgICAgaWYgKCBjdXJyZW50LmNsYXNzTGlzdC5jb250YWlucygnY2lyY2xlJykgJiYgXG4gICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjcm9zcycpICYmXG4gICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlJykgKSB7XG4gICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaXJjbGUnLCAnY3Jvc3MnLCAnZGlzYWJsZScpXG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL3JldHVybiBhbiBvYmplY3RcbiAgcmV0dXJuIHtcbiAgICBtYWluIDogbWFpbixcbiAgICByZXNldDogcmVzZXRcbiAgfTtcblxufSkoKTtcblRpY1RhY1RvZS5tYWluKClcbiJdfQ==
