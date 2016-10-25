'use strict';

//https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern
var TicTacToe = function () {
  var data = { name: 'Xavier' },
      self = undefined,
      arr = [0, 0],
      //column and row
  scoreList = [];

  var _privateMethod = function _privateMethod() {
    console.log(data);
  };

  var minimax = function minimax(game) {
    if (game === 'over') {
      scores = []; // an array of scores
      moves = []; // an array of moves
      return game.over;
    }
  };

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


  var game = function game() {
    console.log(1);
  };

  // @player is the turn taking player
  var score = function score() {
    if (game(win, player)) {
      return 10; // I win, l'opponent lost
    } else if (game(win, opponent)) {
      return -10; // I lost, l'opponent wih
    } else {
        return 0; // tied game
      }
  };

  //return an object
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };
}();
TicTacToe.someMethod();
TicTacToe.anotherMethod();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJUaWNUYWNUb2UiLCJkYXRhIiwibmFtZSIsInNlbGYiLCJhcnIiLCJzY29yZUxpc3QiLCJfcHJpdmF0ZU1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJtaW5pbWF4IiwiZ2FtZSIsInNjb3JlcyIsIm1vdmVzIiwib3ZlciIsInNjb3JlIiwid2luIiwicGxheWVyIiwib3Bwb25lbnQiLCJzb21lTWV0aG9kIiwiYW5vdGhlck1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQUlBLFlBQWEsWUFBTTtBQUNyQixNQUFJQyxPQUFPLEVBQUVDLE1BQU8sUUFBVCxFQUFYO0FBQUEsTUFBK0JDLGdCQUEvQjtBQUFBLE1BQ0VDLE1BQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixDQURSO0FBQUEsTUFDZTtBQUNiQyxjQUFZLEVBRmQ7O0FBSUEsTUFBSUMsaUJBQWtCLFNBQWxCQSxjQUFrQixHQUFNO0FBQzFCQyxZQUFRQyxHQUFSLENBQVlQLElBQVo7QUFDRCxHQUZEOztBQUtBLE1BQUlRLFVBQVcsU0FBWEEsT0FBVyxDQUFDQyxJQUFELEVBQVU7QUFDdkIsUUFBSUEsU0FBUyxNQUFiLEVBQXFCO0FBQ25CQyxlQUFTLEVBQVQsQ0FEbUIsQ0FDUDtBQUNaQyxjQUFRLEVBQVIsQ0FGbUIsQ0FFUDtBQUNaLGFBQU9GLEtBQUtHLElBQVo7QUFDRDtBQUNGLEdBTkQ7O0FBUUU7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNKOztBQUVBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNKO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSjtBQUNKO0FBQ0U7OztBQUlBLE1BQUlILE9BQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ2ZILFlBQVFDLEdBQVIsQ0FBWSxDQUFaO0FBQ0QsR0FGRDs7QUFJQTtBQUNBLE1BQUlNLFFBQVEsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCLFFBQUtKLEtBQUtLLEdBQUwsRUFBU0MsTUFBVCxDQUFMLEVBQXdCO0FBQ3RCLGFBQU8sRUFBUCxDQURzQixDQUNaO0FBQ1gsS0FGRCxNQUVNLElBQUlOLEtBQUtLLEdBQUwsRUFBU0UsUUFBVCxDQUFKLEVBQXdCO0FBQzVCLGFBQU8sQ0FBQyxFQUFSLENBRDRCLENBQ2pCO0FBQ1osS0FGSyxNQUVEO0FBQ0gsZUFBTyxDQUFQLENBREcsQ0FDTTtBQUNWO0FBQ0YsR0FSRDs7QUFVQTtBQUNBLFNBQU87QUFDTEMsZ0JBQVlBLFVBRFA7QUFFTEMsbUJBQWdCQTtBQUZYLEdBQVA7QUFLRCxDQS9EZSxFQUFoQjtBQWdFQW5CLFVBQVVrQixVQUFWO0FBQ0FsQixVQUFVbUIsYUFBViIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2h0dHBzOi8vdG9kZG1vdHRvLmNvbS9tYXN0ZXJpbmctdGhlLW1vZHVsZS1wYXR0ZXJuLyNyZXZlYWxpbmctbW9kdWxlLXBhdHRlcm5cbmxldCBUaWNUYWNUb2UgPSAoKCkgPT4ge1xuICBsZXQgZGF0YSA9IHsgbmFtZSA6ICdYYXZpZXInfSwgc2VsZiA9IHRoaXMsXG4gICAgYXJyID0gWzAsIDBdLC8vY29sdW1uIGFuZCByb3dcbiAgICBzY29yZUxpc3QgPSBbXSBcblxuICBsZXQgX3ByaXZhdGVNZXRob2QgID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9O1xuXG5cbiAgbGV0IG1pbmltYXggID0gKGdhbWUpID0+IHtcbiAgICBpZiAoZ2FtZSA9PT0gJ292ZXInKSB7XG4gICAgICBzY29yZXMgPSBbXSAvLyBhbiBhcnJheSBvZiBzY29yZXNcbiAgICAgIG1vdmVzID0gW10gIC8vIGFuIGFycmF5IG9mIG1vdmVzXG4gICAgICByZXR1cm4gZ2FtZS5vdmVyXG4gICAgfVxuICB9XG5cbiAgICAvLy8vIyBQb3B1bGF0ZSB0aGUgc2NvcmVzIGFycmF5LCByZWN1cnNpbmcgYXMgbmVlZGVkXG4gICAgLy9nYW1lLmdldF9hdmFpbGFibGVfbW92ZXMuZWFjaCBkbyB8bW92ZXxcbiAgICAgICAgLy9wb3NzaWJsZV9nYW1lID0gZ2FtZS5nZXRfbmV3X3N0YXRlKG1vdmUpXG4gICAgICAgIC8vc2NvcmVzLnB1c2ggbWluaW1heChwb3NzaWJsZV9nYW1lKVxuICAgICAgICAvL21vdmVzLnB1c2ggbW92ZVxuICAgIC8vZW5kXG5cbiAgICAvLyMgRG8gdGhlIG1pbiBvciB0aGUgbWF4IGNhbGN1bGF0aW9uXG4gICAgLy9pZiBnYW1lLmFjdGl2ZV90dXJuID09IEBwbGF5ZXJcbiAgICAgICAgLy8jIFRoaXMgaXMgdGhlIG1heCBjYWxjdWxhdGlvblxuICAgICAgICAvL21heF9zY29yZV9pbmRleCA9IHNjb3Jlcy5lYWNoX3dpdGhfaW5kZXgubWF4WzFdXG4gICAgICAgIC8vQGNob2ljZSA9IG1vdmVzW21heF9zY29yZV9pbmRleF1cbiAgICAgICAgLy9yZXR1cm4gc2NvcmVzW21heF9zY29yZV9pbmRleF1cbiAgICAvL2Vsc2VcbiAgICAgICAgLy8jIFRoaXMgaXMgdGhlIG1pbiBjYWxjdWxhdGlvblxuICAgICAgICAvL21pbl9zY29yZV9pbmRleCA9IHNjb3Jlcy5lYWNoX3dpdGhfaW5kZXgubWluWzFdXG4gICAgICAgIC8vQGNob2ljZSA9IG1vdmVzW21pbl9zY29yZV9pbmRleF1cbiAgICAgICAgLy9yZXR1cm4gc2NvcmVzW21pbl9zY29yZV9pbmRleF1cbiAgICAvL2VuZFxuLy9lbmRcbiAgLy99O1xuXG5cblxuICBsZXQgZ2FtZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygxKTtcbiAgfVxuXG4gIC8vIEBwbGF5ZXIgaXMgdGhlIHR1cm4gdGFraW5nIHBsYXllclxuICBsZXQgc2NvcmUgPSAoKSA9PiB7XG4gICAgaWYgKCBnYW1lKHdpbixwbGF5ZXIpICkge1xuICAgICAgcmV0dXJuIDEwIC8vIEkgd2luLCBsJ29wcG9uZW50IGxvc3RcbiAgICB9ZWxzZSBpZiAoZ2FtZSh3aW4sb3Bwb25lbnQpICl7XG4gICAgICByZXR1cm4gLTEwIC8vIEkgbG9zdCwgbCdvcHBvbmVudCB3aWhcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiAwIC8vIHRpZWQgZ2FtZVxuICAgIH1cbiAgfVxuXG4gIC8vcmV0dXJuIGFuIG9iamVjdFxuICByZXR1cm4ge1xuICAgIHNvbWVNZXRob2Q6IHNvbWVNZXRob2QsXG4gICAgYW5vdGhlck1ldGhvZCA6IGFub3RoZXJNZXRob2RcbiAgfTtcblxufSkoKTtcblRpY1RhY1RvZS5zb21lTWV0aG9kKClcblRpY1RhY1RvZS5hbm90aGVyTWV0aG9kICgpXG4iXX0=
