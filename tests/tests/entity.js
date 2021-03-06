define([
  'legion', 
  'legion/entity'
], function(legion, Entity) {
  describe('Entity', function() {
    it('Create Entity', function() {
      var a = new Entity();
    });

    it('Create Entity with parameters', function() {
      var a = new Entity({a: 'a'});
      chai.assert.equal(a.a, 'a');
    });

    it('Add function as parameter', function() {
      var a = new Entity({
        a: function(){ return 'a'; }
      });

      chai.assert.equal(a.a(), 'a');
    });

    it('Don\'t override parent function by default', function() {
      var A = Entity.extend({
        a: function() { return 'a'; }
      });

      var a = new A({
        a: function(){ return 'b'; }
      });

      chai.assert.equal(a.a(), 'a');
    });

    it('Override function with mixin and safe==false', function() {
      var A = Entity.extend({
        a: function() { return 'a'; }
      });
      
      var a = new A().mixin({
        a: function(){ return 'b'; }
      }, false);

      chai.assert.equal(a.a(), 'b');
    });
  });
});
