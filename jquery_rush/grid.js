(function($) {
  $.fn.init2048 = function() {
    function Construction() {
      for (var rows = 0; rows < 4; rows++) {
        for (var columns = 0; columns < 4; columns++) {
          $('#grid-container').append(
            '<div class ="grid" id="' + rows + '-' + columns + '"></div>'
          );
        }
      }
      $('.grid').width(100);
      $('.grid').height(100);
    }

    function restartConstruction() {
      $('#restart').append('<div id="restartButton">Restart</div>');
    }

    var mergeControl;
    var moveControl;
    var score = 0;
    var GameOverlooserrrrControl = 0;

    function counter() {
      $('#score').append('<div id="compteurScore"></div>');
      $('#compteurScore').html('<p>Score</p><p>' + score + '</p>');
    }

    function YaUneTuile() {
      let x = Math.round(Math.random() * 3);
      let y = Math.round(Math.random() * 3);
      let empty = false;
      while (empty == false) {
        if ($('#' + x + '-' + y).text() == '') empty = true;
        else {
          x = Math.round(Math.random() * 3);
          y = Math.round(Math.random() * 3);
        }
      }
      $('#' + x + '-' + y)
        .html(Math.random() < 0.9 ? 2 : 4)
        .fadeIn();
    }

    function ToTheLeft() {
      moveControl = false;
      for (x = 0; x < 4; x++) {
        for (y = 0; y < 4; y++) {
          if ($('#' + x + '-' + y).text() != '') {
            let yTemp = y - 1;
            while (yTemp >= 0 && $('#' + x + '-' + yTemp).text() == '') {
              yTemp--;
            }
            yTemp++;
            if ($('#' + x + '-' + yTemp).text() == '') {
              let valueSource = $('#' + x + '-' + y).text();

              valueTarget = $('#' + x + '-' + yTemp).text(valueSource);
              $('#' + x + '-' + y).text('');
              moveControl = true;
            }
          }
        }
      }
    }

    function ToTheRight() {
      moveControl = false;
      for (x = 0; x < 4; x++) {
        for (y = 3; y >= 0; y--) {
          if ($('#' + x + '-' + y).text() != '') {
            let yTemp = y + 1;
            while (yTemp <= 3 && $('#' + x + '-' + yTemp).text() == '') {
              yTemp++;
            }
            yTemp--;
            if ($('#' + x + '-' + yTemp).text() == '') {
              let valueSource = $('#' + x + '-' + y).text();

              valueTarget = $('#' + x + '-' + yTemp).text(valueSource);
              $('#' + x + '-' + y).text('');
              moveControl = true;
            }
          }
        }
      }
    }

    function WhatsUp() {
      moveControl = false;
      for (y = 0; y < 4; y++) {
        for (x = 1; x < 4; x++) {
          if ($('#' + x + '-' + y).text() != '') {
            let xTemp = x - 1;
            while (xTemp >= 0 && $('#' + xTemp + '-' + y).text() == '') {
              xTemp--;
            }
            xTemp++;
            if ($('#' + xTemp + '-' + y).text() == '') {
              let valueSource = $('#' + x + '-' + y).text();

              valueTarget = $('#' + xTemp + '-' + y).text(valueSource);
              $('#' + x + '-' + y).text('');
              moveControl = true;
            }
          }
        }
      }
    }

    function WhatsDown() {
      moveControl = false;
      for (y = 0; y < 4; y++) {
        for (x = 3; x >= 0; x--) {
          if ($('#' + x + '-' + y).text() != '') {
            let xTemp = x + 1;
            while (xTemp <= 3 && $('#' + xTemp + '-' + y).text() == '') {
              xTemp++;
            }
            xTemp--;
            if ($('#' + xTemp + '-' + y).text() == '') {
              let valueSource = $('#' + x + '-' + y).text();

              valueTarget = $('#' + xTemp + '-' + y).text(valueSource);
              $('#' + x + '-' + y).text('');
              moveControl = true;
            }
          }
        }
      }
    }

    function mergeToTheUp() {
      mergeControl = false;
      for (y = 0; y <= 3; y++) {
        for (x = 0; x <= 3; x++) {
          let value1 = $('#' + x + '-' + y).text();
          if (value1 != '') {
            let xTemp = x + 1;
            var value2;
            while (
              (value2 = $('#' + xTemp + '-' + y).text()) == '' &&
              xTemp <= 3
            ) {
              xTemp++;
            }
            if (value1 && value1 == value2) {
              let newValue1 = value1 * 2;
              $('#' + x + '-' + y)
                .text(newValue1)
                .fadeIn();
              $('#' + xTemp + '-' + y)
                .text('')
                .fadeIn();
              score += newValue1;
              mergeControl = true;
            }
          }
        }
      }
    }

    function mergeToTheDown() {
      mergeControl = false;
      for (y = 0; y <= 3; y++) {
        for (x = 3; x >= 0; x--) {
          let value1 = $('#' + x + '-' + y).text();
          if (value1 != '') {
            let xTemp = x - 1;
            var value2;
            while (
              (value2 = $('#' + xTemp + '-' + y).text()) == '' &&
              xTemp >= 0
            ) {
              xTemp--;
            }
            if (value1 && value1 == value2) {
              let newValue1 = value1 * 2;
              $('#' + x + '-' + y)
                .text(newValue1)
                .fadeIn();
              $('#' + xTemp + '-' + y)
                .text('')
                .fadeIn();
              score += newValue1;
              mergeControl = true;
            }
          }
        }
      }
    }

    function mergeToTheRight() {
      mergeControl = false;
      for (x = 0; x <= 3; x++) {
        for (y = 3; y >= 0; y--) {
          let value1 = $('#' + x + '-' + y).text();
          if (value1 != '') {
            let yTemp = y - 1;
            var value2;
            while (
              (value2 = $('#' + x + '-' + yTemp).text()) == '' &&
              yTemp >= 0
            ) {
              yTemp--;
            }
            if (value1 && value1 == value2) {
              let newValue1 = value1 * 2;
              $('#' + x + '-' + y)
                .text(newValue1)
                .fadeIn();
              $('#' + x + '-' + yTemp)
                .text('')
                .fadeIn();
              score += newValue1;
              mergeControl = true;
            }
          }
        }
      }
    }

    function mergeToTheLeft() {
      mergeControl = false;
      for (x = 0; x <= 3; x++) {
        for (y = 0; y <= 3; y++) {
          let value1 = $('#' + x + '-' + y).text();
          if (value1 != '') {
            let yTemp = y + 1;
            var value2;
            while (
              (value2 = $('#' + x + '-' + yTemp).text()) == '' &&
              yTemp <= 3
            ) {
              yTemp++;
            }
            if (value1 && value1 == value2) {
              let newValue1 = value1 * 2;
              $('#' + x + '-' + y)
                .text(newValue1)
                .fadeIn();
              $('#' + x + '-' + yTemp)
                .text('')
                .fadeIn();
              score += newValue1;
              mergeControl = true;
            }
          }
        }
      }
    }

    function GameOverlooserrrr() {
      for (x = 0; x <= 3; x++) {
        for (y = 0; y <= 3; y++) {
          let xNegatif = x - 1;
          let xPositif = x + 1;
          let yNegatif = y - 1;
          let yPositif = y + 1;
          let curentCell = $('#' + x + '-' + y).text();
          let cellTop = $('#' + xNegatif + '-' + y).text();
          let cellRight = $('#' + x + '-' + yPositif).text();
          let cellDown = $('#' + xPositif + '-' + y).text();
          let cellLeft = $('#' + x + '-' + yNegatif).text();

          if (curentCell) {
            if (xNegatif < 0) {
              cellTop = $('#' + xNegatif + '-' + y).text(42);
            }
            if (xPositif > 3) {
              cellDown = $('#' + xPositif + '-' + y).text(42);
            }
            if (yNegatif < 0) {
              cellLeft = $('#' + x + '-' + yNegatif).text(42);
            }
            if (yPositif > 3) {
              cellRight = $('#' + x + '-' + yPositif).text(42);
            }

            if (
              cellTop == '' ||
              cellRight == '' ||
              cellDown == '' ||
              cellLeft == '' ||
              curentCell == cellTop ||
              curentCell == cellRight ||
              curentCell == cellLeft ||
              curentCell == cellDown
            ) {
              return false;
            }
          }
        }
      }
      if (GameOverlooserrrrControl == 0) {
        GameOverlooserrrrControl++;
        $('#end').append('<div id="endGame"></div>');
        $('#endGame').text('Game Over');
      }
    }

    function color() {
      for (x = 0; x < 4; x++) {
        for (y = 0; y < 4; y++) {
          let number = $('#' + x + '-' + y).text();
          if (number == '') {
            $('#' + x + '-' + y).css('background-color', '#d1cecd');
          } else if (number == 2) {
            $('#' + x + '-' + y).css({
              'background-color': '#594b25',
              color: '#d1cecd'
            });
          } else if (number == 4) {
            $('#' + x + '-' + y).css({
              'background-color': '#8c4646',
              color: '#d1cecd'
            });
          } else if (number == 8) {
            $('#' + x + '-' + y).css('background-color', '#bf4747');
            $('#' + x + '-' + y).css('color', '#d1cecd');
          } else if (number == 16) {
            $('#' + x + '-' + y).css('background-color', '#e39440');
            $('#' + x + '-' + y).css('color', '#594b25');
          } else if (number == 32) {
            $('#' + x + '-' + y).css('background-color', '#dee340');
            $('#' + x + '-' + y).css('color', '#594b25');
          } else if (number == 64) {
            $('#' + x + '-' + y).css('background-color', '#6be340');
            $('#' + x + '-' + y).css('color', '#594b25');
          } else if (number == 128) {
            $('#' + x + '-' + y).css('background-color', '#40e3a2');
            $('#' + x + '-' + y).css('color', '#594b25');
          } else if (number == 256) {
            $('#' + x + '-' + y).css('background-color', '#40c0e3');
            $('#' + x + '-' + y).css('color', '#594b25');
          } else if (number == 512) {
            $('#' + x + '-' + y).css('background-color', '#4058e3');
            $('#' + x + '-' + y).css('color', '#594b25');
          } else if (number == 1024) {
            $('#' + x + '-' + y).css('background-color', '#8740e3');
            $('#' + x + '-' + y).css('color', '#594b25');
          } else if (number == 2048) {
            $('#' + x + '-' + y).css('background-color', '#de40e3');
            $('#' + x + '-' + y).css('color', '#594b25');
          } else if (number > 2048) {
            $('#' + x + '-' + y).css('background-color', '#f2ff00');
            $('#' + x + '-' + y).css('color', '#ff0011');
          }
        }
      }
    }

    document.addEventListener('keydown', logKey);

    function logKey(key) {
      let keyPress = key.keyCode;
      if (keyPress === 37) {
        for (x = 0; x < 4; x++) {
          for (y = 0; y < 4; y++) {
            mergeToTheLeft();
            counter();
            ToTheLeft();
            if (mergeControl == true || moveControl == true) {
              YaUneTuile();
            }
            GameOverlooserrrr();
            color();
          }
        }
      } else if (keyPress === 39) {
        for (x = 0; x < 4; x++) {
          for (y = 0; y < 4; y++) {
            mergeToTheRight();
            counter();
            ToTheRight();
            if (mergeControl == true || moveControl == true) {
              YaUneTuile();
            }
            GameOverlooserrrr();
            color();
          }
        }
      } else if (keyPress === 38) {
        for (x = 0; x < 4; x++) {
          for (y = 0; y < 4; y++) {
            mergeToTheUp();
            counter();
            WhatsUp();
            if (mergeControl == true || moveControl == true) {
              YaUneTuile();
            }
            GameOverlooserrrr();
            color();
          }
        }
      } else if (keyPress === 40) {
        for (x = 0; x < 4; x++) {
          for (y = 0; y < 4; y++) {
            mergeToTheDown();
            counter();
            WhatsDown();
            if (mergeControl == true || moveControl == true) {
              YaUneTuile();
            }
            GameOverlooserrrr();
            color();
          }
        }
      }
    }

    $('#restart').on('click', restart);

    function restart() {
      location.reload(true);
    }

    Construction();
    restartConstruction();
    counter();
    YaUneTuile();
    YaUneTuile();
    color();
  };
})(jQuery);
