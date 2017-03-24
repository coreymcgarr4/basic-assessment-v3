describe('hi', function(){
      it('should exist', function() {
        expect(hi).toEqual(jasmine.any(String));
      })
      it('should equal seeya', function() {
        expect(hi).toEqual('seeya');
      })
    })

describe('iLoveCode', function() {
      it('should exist', function() {
        expect(iLoveCode).toEqual(jasmine.any(String))
      })
      it('should say \'I love code\'', function() {
        expect(iLoveCode).toEqual('I love code')
      })
    })

describe('Archibald', function() {
      it('should exist', function() {
        expect(Archibald).toEqual(jasmine.any(Object));
      })
      it('should have the right properties', function() {
        expect(Archibald.height).toEqual('4ft');
        expect(Archibald.age).toEqual(18);
        expect(Archibald.shirt).toEqual(jasmine.any(Object));
        expect(Archibald.shirt.color).toEqual('olive');
        expect(Archibald.shirt.size).toEqual('L');
        expect(Archibald.likes).toEqual(jasmine.any(Array));
        expect(Archibald.likes).toContain('Gorgeous Plastic Bacon', 'Handmade Fresh Pants', 'Licensed Steel Sausages');
      })
    })

describe('myShirt', function() {
  it('should exist', function() {
    expect(myShirt).toEqual(jasmine.any(Object))
    expect(myOtherShirt).toEqual(jasmine.any(Object));
  })

  it('should have the right values', function() {
    expect(myShirt.type).toEqual('mediocre');
    expect(myShirt.color).toEqual('grey');

    expect(myOtherShirt.type).toEqual('wool');
    expect(myOtherShirt.color).toEqual('gold');
  })
})

describe('zoo', function() {
  it('should exist', function(){
    expect(zoo).toEqual(jasmine.any(Object));
  })
  it('should have capybaras property', function () {
			expect(zoo.hasOwnProperty('capybaras')).toEqual(true);
	})
	it('should have marmosets property', function () {
		expect(zoo.hasOwnProperty('marmosets')).toEqual(true);
	})

	it('should have ferrets property', function () {
		expect(zoo.hasOwnProperty('ferrets')).toEqual(true);
	})

	it('should count the animals correctly', function () {
		expect(zoo.capybaras).toEqual(26)
		expect(zoo.marmosets).toEqual(91)
		expect(zoo.ferrets).toEqual(60);
	})
})

describe('otherist', function() {
  it('should exist', function() {
    expect(otherist).toEqual(jasmine.any(Object));
  })
  it('should have 5 properties', function() {
    var count = 0;
    for (var prop in otherist) count++;

    expect(count).toEqual(5);
  })
  it('should change properties that start with \'h\'', function() {
    for (var prop in otherist) {
      if (prop.match(/^h/)) {
        expect(otherist[prop]).toEqual('h')
      }
    }
  })
})

describe('rainbowColors', function() {
  it('should exist', function() {
    expect(rainbowColors).toEqual(jasmine.any(Array));
  })
  it('should have the right values', function() {
    expect(rainbowColors.sort()).toEqual(['red','orange','yellow','green','blue','indigo','violet',].sort());
  })
})

	describe('heroes', function () {
		it('should add \'Caretaker\' to the end', function () {
			expect(heroes[heroes.length - 1]).toEqual('Caretaker');
		})
		it('should remove \'Crimson Avenger\' and store him in a variable', function () {
			expect(firstHero).toEqual('Crimson Avenger');
		})
		it('should add \'Kid\' to the start of the array', function () {
			expect(heroes[0]).toEqual('Kid');
		})

		it('should copy Merry from the array and store him in a variable', function () {
			expect(thirdHero).toEqual('Merry');
			expect(heroes.indexOf('Merry') > 0).toEqual(true);
		})
	})

describe('addItem', function () {
		it('should exist', function () {
			expect(addItem).toBeDefined();
		})
		it('should add an item', function () {
			expect(addItem(["lug", "ecclesiology", "apter"], "undeftly")).toEqual(["lug", "ecclesiology", "apter", "undeftly"]);
			expect(addItem(["lug", "lug", "lug"], "undeftly")).toEqual(["lug", "lug", "lug", "undeftly"]);
			expect(addItem(["lug", "ecclesiology", "apter"], "colliform")).toEqual(["lug", "ecclesiology", "apter", "colliform"]);
		})
	})


    describe('septuple the fun', function() {
      it('should exist', function() {
        expect(septupleTheFun).toBeDefined();
      })
      it('should septuple strings', function() {
        expect(septupleTheFun('A')).toEqual('AAAAAAA');
        expect(septupleTheFun('septuple')).toEqual('septupleseptupleseptupleseptupleseptupleseptupleseptuple')
        expect(septupleTheFun('SuchFun')).toEqual('SuchFunSuchFunSuchFunSuchFunSuchFunSuchFunSuchFun');

      })
      it('should septuple numbers', function() {
        expect(septupleTheFun(2)).toEqual(14);
        expect(septupleTheFun(4)).toEqual(28);
        expect(septupleTheFun(3.5)).toEqual(24.5);
      })
      it('should septuple numbers pretending to be strings', function() {
        expect(septupleTheFun("1")).toEqual(7);
        expect(septupleTheFun("2.5")).toEqual(17.5);
        expect(septupleTheFun("4")).toEqual(28);
      });
    });


    describe('spiderTest', function () {
  		it('should exist', function () {
  			expect(spiderTest).toBeDefined();
  		});

  		it('accurately rates Andrew Garfield\'s spiderman', function () {
  			var actor = { name: 'Andrew Garfield' };
  			spiderTest(actor);

  			expect(actor.spiderRating).toEqual(10);
  		});

  		it('undervalues Tobey Maguire', function () {
  			var actor = { name: 'Tobey Maguire' };
  			spiderTest(actor);

  			expect(actor.spiderRating).toEqual(0);
  		});

  		it('recognizes Jeremy is not spiderman', function () {
  			var actor = { name: 'Jeremy' };
  			spiderTest(actor);

  			expect(actor.spiderRating.toLowerCase()).toEqual('not a spiderman');
  		});
  	});



	describe('whatIsItOutside', function () {
		it('should exist', function () {
			expect(whatIsItOutside).toBeDefined();
		});

		it('should warn me I will be sweaty', function () {
			var res = whatIsItOutside(86, 46);

			expect(res).toEqual("I'm all sweat");
		});

		it('should say something silly about icicles', function () {
			var res = whatIsItOutside(10, 0, 90);

			expect(res).toEqual("I have icicles");
		});

		it('should inform me I am in the desert', function () {
			var res = whatIsItOutside(86, 44, 19);

			expect(res).toEqual("I'm literally in the desert");
		});

		it('should make me hesitate about life choices - hot', function () {
      expect(whatIsItOutside(91, 20, 45)).toEqual("Hmm, probably not");
		});

		it('should make me hesitate about life choices - humid', function () {
      expect(whatIsItOutside(80, 56, 45)).toEqual("Hmm, probably not");
		});

		it('should make me hesitate about life choices - cloudy', function () {
      expect(whatIsItOutside(80, 20, 66)).toEqual("Hmm, probably not");
		});

		it('should encourage me to go whatIsItOutside', function () {
			expect(whatIsItOutside(79, 20, 45)).toEqual("I love outside");
		});
	});


    describe('callerBack', function () {
		it('should exist', function () {
			expect(callerBack).toBeDefined();
		});
		it('should call me back', function () {
			var called = false;
			function callback(ret) {
				called = true;
			}

			callerBack(callback, "Hey!");

			expect(called).toBeTruthy();
		});
		it('should call me back with the right message', function () {
			var calledMsg = "";
			function callback(ret) {
				calledMsg = ret;
			}

      callerBack(callback, "Hey!");
			expect(calledMsg).toBe('Hey! back');
		});
	});


        describe('clockIn', function () {
      it('should exist', function () {
        expect(clockIn).toBeDefined();
      });
      it('should make chat message object', function () {
        expect(clockIn("Elon Musk", "CEO").name).toEqual("Elon Musk");
        expect(clockIn("Elon Musk", "CEO").department).toEqual("CEO");
        expect(clockIn("Elon Musk", "CEO").timestamp).toEqual(new Date());
      });
    });
    

