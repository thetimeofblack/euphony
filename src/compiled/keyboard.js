// Generated by CoffeeScript 1.3.1
(function() {
  var PianoKey, PianoKeyboard, PianoKeyboardDesign;

  PianoKeyboardDesign = (function() {
    var KeyType;

    PianoKeyboardDesign.name = 'PianoKeyboardDesign';

    PianoKeyboardDesign.KeyType = KeyType = {
      WhiteC: 0,
      WhiteD: 1,
      WhiteE: 2,
      WhiteF: 3,
      WhiteG: 4,
      WhiteA: 5,
      WhiteB: 6,
      Black: 7
    };

    PianoKeyboardDesign.prototype.whiteKeyStep = 0.236;

    PianoKeyboardDesign.prototype.whiteKeyWidth = 0.226;

    PianoKeyboardDesign.prototype.whiteKeyHeight = 0.22;

    PianoKeyboardDesign.prototype.whiteKeyLength = 1.50;

    PianoKeyboardDesign.prototype.blackKeyWidth = 0.10;

    PianoKeyboardDesign.prototype.blackKeyHeight = 0.34;

    PianoKeyboardDesign.prototype.blackKeySlopeLength = 0.08;

    PianoKeyboardDesign.prototype.blackKeyLength = 1.00;

    PianoKeyboardDesign.prototype.keySpaceSize = 0.01;

    PianoKeyboardDesign.prototype.keyRotateAxisXPos = 2.36;

    PianoKeyboardDesign.prototype.keyRotateAngle = 3.00;

    PianoKeyboardDesign.prototype.keyDownDuration = 40;

    PianoKeyboardDesign.prototype.keyUpDuration = 40;

    PianoKeyboardDesign.prototype.keyboardStepY = 0.34;

    PianoKeyboardDesign.prototype.keyboardStepZ = 1.50;

    PianoKeyboardDesign.prototype.noteDropPosZ4WhiteKey = 0.25;

    PianoKeyboardDesign.prototype.noteDropPosZ4BlackKey = 1.50;

    PianoKeyboardDesign.prototype.blackKeyShiftCDE = 0.0216;

    PianoKeyboardDesign.prototype.blackKeyShiftFGAB = 0.0340;

    PianoKeyboardDesign.prototype.keyInfo = [];

    function PianoKeyboardDesign() {
      var i, _i;
      for (i = _i = 0; _i < 128; i = ++_i) {
        this.keyInfo[i] = {};
      }
      this._initKeyType();
      this._initKeyPos();
    }

    PianoKeyboardDesign.prototype._initKeyType = function() {
      var Black, WhiteA, WhiteB, WhiteC, WhiteD, WhiteE, WhiteF, WhiteG, i, keyInfo, noteNo, _i;
      keyInfo = this.keyInfo;
      WhiteC = KeyType.WhiteC, WhiteD = KeyType.WhiteD, WhiteE = KeyType.WhiteE, WhiteF = KeyType.WhiteF, WhiteG = KeyType.WhiteG, WhiteA = KeyType.WhiteA, WhiteB = KeyType.WhiteB, Black = KeyType.Black;
      for (i = _i = 0; _i < 10; i = ++_i) {
        noteNo = i * 12;
        keyInfo[noteNo + 0].keyType = WhiteC;
        keyInfo[noteNo + 1].keyType = Black;
        keyInfo[noteNo + 2].keyType = WhiteD;
        keyInfo[noteNo + 3].keyType = Black;
        keyInfo[noteNo + 4].keyType = WhiteE;
        keyInfo[noteNo + 5].keyType = WhiteF;
        keyInfo[noteNo + 6].keyType = Black;
        keyInfo[noteNo + 7].keyType = WhiteG;
        keyInfo[noteNo + 8].keyType = Black;
        keyInfo[noteNo + 9].keyType = WhiteA;
        keyInfo[noteNo + 10].keyType = Black;
        keyInfo[noteNo + 11].keyType = WhiteB;
      }
      noteNo = 120;
      keyInfo[noteNo + 0].keyType = WhiteC;
      keyInfo[noteNo + 1].keyType = Black;
      keyInfo[noteNo + 2].keyType = WhiteD;
      keyInfo[noteNo + 3].keyType = Black;
      keyInfo[noteNo + 4].keyType = WhiteE;
      keyInfo[noteNo + 5].keyType = WhiteF;
      keyInfo[noteNo + 6].keyType = Black;
      return keyInfo[noteNo + 7].keyType = WhiteB;
    };

    PianoKeyboardDesign.prototype._initKeyPos = function() {
      var Black, WhiteA, WhiteB, WhiteC, WhiteD, WhiteE, WhiteF, WhiteG, blackKeyShiftCDE, blackKeyShiftFGAB, keyInfo, noteNo, posX, prevKeyType, shift, whiteKeyStep, _i, _j, _results;
      keyInfo = this.keyInfo, whiteKeyStep = this.whiteKeyStep, blackKeyShiftCDE = this.blackKeyShiftCDE, blackKeyShiftFGAB = this.blackKeyShiftFGAB;
      WhiteC = KeyType.WhiteC, WhiteD = KeyType.WhiteD, WhiteE = KeyType.WhiteE, WhiteF = KeyType.WhiteF, WhiteG = KeyType.WhiteG, WhiteA = KeyType.WhiteA, WhiteB = KeyType.WhiteB, Black = KeyType.Black;
      noteNo = 0;
      prevKeyType = WhiteB;
      posX = 0.0;
      shift = 0.0;
      keyInfo[noteNo].keyCenterPosX = posX;
      prevKeyType = keyInfo[noteNo].keyType;
      for (noteNo = _i = 1; _i < 128; noteNo = ++_i) {
        if (prevKeyType === Black) {
          if (keyInfo[noteNo].keyType === Black) {

          } else {
            posX += whiteKeyStep / 2.0;
          }
        } else {
          if (keyInfo[noteNo].keyType === Black) {
            posX += whiteKeyStep / 2.0;
          } else {
            posX += whiteKeyStep;
          }
        }
        keyInfo[noteNo].keyCenterPosX = posX;
        prevKeyType = keyInfo[noteNo].keyType;
      }
      prevKeyType = WhiteC;
      _results = [];
      for (noteNo = _j = 0; _j < 128; noteNo = ++_j) {
        if (keyInfo[noteNo].keyType === Black) {
          switch (prevKeyType) {
            case WhiteC:
              shift = -blackKeyShiftCDE;
              break;
            case WhiteD:
              shift = +blackKeyShiftCDE;
              break;
            case WhiteF:
              shift = -blackKeyShiftFGAB;
              break;
            case WhiteG:
              shift = 0.0;
              break;
            case WhiteA:
              shift = +blackKeyShiftFGAB;
              break;
            default:
              shift = 0.0;
          }
          if (noteNo === 126) {
            shift = 0.0;
          }
          keyInfo[noteNo].keyCenterPosX += shift;
        }
        _results.push(prevKeyType = keyInfo[noteNo].keyType);
      }
      return _results;
    };

    return PianoKeyboardDesign;

  })();

  this.PianoKeyboardDesign = PianoKeyboardDesign;

  PianoKey = (function() {

    PianoKey.name = 'PianoKey';

    function PianoKey(_arg) {
      var color, dip, geometry, height, length, material, position, width;
      width = _arg.width, length = _arg.length, height = _arg.height, color = _arg.color, position = _arg.position, dip = _arg.dip;
      geometry = new THREE.CubeGeometry(width, height, length);
      material = new THREE.MeshLambertMaterial({
        color: color
      });
      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh.position.copy(position);
      this.originalY = position.y;
      this.pressedY = position.y - this.pressedOffset;
    }

    PianoKey.prototype.press = function() {
      this.mesh.position.y = this.pressedY;
      return this.isPressed = true;
    };

    PianoKey.prototype.release = function() {
      return this.isPressed = false;
    };

    PianoKey.prototype.update = function() {
      var recoverSpeed;
      if (this.mesh.position.y < this.originalY && !this.isPressed) {
        recoverSpeed = 0.02;
        return this.mesh.position.y += Math.min(this.originalY - this.mesh.position.y, recoverSpeed);
      }
    };

    return PianoKey;

  })();

  this.PianoKey = PianoKey;

  PianoKeyboard = (function() {

    PianoKeyboard.name = 'PianoKeyboard';

    function PianoKeyboard() {}

    return PianoKeyboard;

  })();

}).call(this);
