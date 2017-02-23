'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function _class(outer) {
    _classCallCheck(this, _class);

    this.loader = outer.querySelector('.loader');
    this.border = outer.querySelector('.border');
    this.alfa = 0;
  }

  _createClass(_class, [{
    key: 'draw',
    value: function draw() {
      var alfa = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.alfa;

      this.alfa = alfa % 360;
      var r = this.alfa * Math.PI / 180;
      var x = Math.sin(r) * 125;
      var y = Math.cos(r) * -125;
      var mid = this.alfa > 180 ? 1 : 0;
      var anim = 'M 0 0 v -125 A 125 125 1 ' + mid + ' 1 ' + x + ' ' + y + ' z';
      this.loader.setAttribute('d', anim);
      this.border.setAttribute('d', anim);
    }
  }, {
    key: 'getAlafa',
    value: function getAlafa() {
      return this.alfa;
    }
  }]);

  return _class;
}();