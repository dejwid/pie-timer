module.exports = class{
  constructor(outer){
    this.loader = outer.querySelector('.loader');
    this.border = outer.querySelector('.border');
    this.alfa = 0;
  }
  draw(alfa=this.alfa){
    this.alfa = alfa % 360;
    var r = ( this.alfa * Math.PI / 180 );
    var x = Math.sin( r ) * 125;
    var y = Math.cos( r ) * - 125
    var mid = ( this.alfa > 180 ) ? 1 : 0
    var anim = 'M 0 0 v -125 A 125 125 1 '+mid+' 1 '+x+ ' '+y+' z';
    this.loader.attr( 'd', anim );
    this.border.attr( 'd', anim );
  }
  getAlafa(){
    return this.alfa;
  }
}
