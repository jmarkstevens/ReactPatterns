/* jshint node: true */
/* global describe, beforeEach, afterEach, it, jasmine, expect */
"use strict";

jasmine.clock().uninstall();

describe("Manually ticking the Jasmine Clock with setTimeout", function() {
  var timerCallback;

  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("causes a timeout to be called synchronously", function() {
    setTimeout(function() {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);

    expect(timerCallback).toHaveBeenCalled();
  });
});

describe("Manually ticking the Jasmine Clock with setInterval", function() {
  var timerCallback;

  beforeEach(function() {
    timerCallback = jasmine.createSpy("timerCallback");
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("causes an interval to be called synchronously", function() {
    setInterval(function() {
      timerCallback();
    }, 100);

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(2);
    jasmine.clock().uninstall();
  });
});

describe("Asynchronous specs", function() {
  var value;

  beforeEach(function(done) {
    setTimeout(function() {
      value = 0;
      done();
    }, 1);
  });

  it("should support async execution of test preparation and expectations", function(done) {
    value++;
    expect(value).toBeGreaterThan(0);
    done();
  });

  describe("long asynchronous specs", function() {
    var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    it("takes a long time", function(done) {
      setTimeout(function() {
        done();
      }, 9000);
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
  });
});
