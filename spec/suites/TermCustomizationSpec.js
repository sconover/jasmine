describe("Jasmine Terms", function() {

  describe("core terms", function() {
    it("could be a different set of terms", function() {
      var target = {};
      jasmine.init(target, {terms:{
                              describe:"suite",
                              xdescribe:"xsuite",
                              it:"test",
                              xit:"xtest",
                              beforeEach:"setUp", 
                              afterEach:"tearDown", 
                              expect:"assert",
                              spyOn:"installLurker", 
                              runs:"goes", 
                              waits:"anticipates", 
                              waitsFor:"anticipating"
                           }});

      expect(target.describe).toBeUndefined();
      expect(target.xdescribe).toBeUndefined();
      expect(target.it).toBeUndefined();
      expect(target.xit).toBeUndefined();
      expect(target.beforeEach).toBeUndefined();
      expect(target.afterEach).toBeUndefined();
      expect(target.expect).toBeUndefined();
      expect(target.spyOn).toBeUndefined();
      expect(target.runs).toBeUndefined();
      expect(target.waits).toBeUndefined();
      expect(target.waitsFor).toBeUndefined();

      expect(target.suite.toString()).toEqual(describe.toString());
      expect(target.xsuite.toString()).toEqual(xdescribe.toString());
      expect(target.test.toString()).toEqual(it.toString());
      expect(target.xtest.toString()).toEqual(xit.toString());
      expect(target.setUp.toString()).toEqual(beforeEach.toString());
      expect(target.tearDown.toString()).toEqual(afterEach.toString());
      expect(target.assert.toString()).toEqual(expect.toString());
      expect(target.installLurker.toString()).toEqual(spyOn.toString());
      expect(target.goes.toString()).toEqual(runs.toString());
      expect(target.anticipates.toString()).toEqual(waits.toString());
      expect(target.anticipating.toString()).toEqual(waitsFor.toString());
    });
  });

});
