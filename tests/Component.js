const Component = require('../src/index.js');

describe('Component', function() {

    beforeAll(function(done) {
      setTimeout(function() {
        done();
      }, 1000);
    })

    it('should watch for attribute change', function(done) {

      var aComponent = new Component({
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>')
      });
      $(document.body).append(aComponent);

      aComponent.onAttributeChange('name', function(newValue) {
        console.log('Name attr changed')
        console.log('The new value is', newValue);
        expect(newValue).toBe('sa');
        done()
      })
      aComponent.el.attr('name', 'sa')

    }, 1000)

		it('should watch for class change', function(done) {

				var aComponent = new Component({
					el: $('<p id="turtles" class="turtle">Teenage Mutant Ninja Turtles</p>')
				});
				$(document.body).append(aComponent);

				aComponent.onClassChange(function(newValue) {
					 console.log('Class changed')
					 console.log('The new value is', newValue);
					 expect(newValue).toBe('turtle mutant');
					 done()
				 })
				aComponent.el.addClass('mutant')

			}, 1000)

    it('should get/set state', function() {
      aComponent = new Component({
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>')
      });
      aComponent.state = "Turtles";
      expect(aComponent.state).toBe("Turtles")

		});

    it('should set state via the go function', function() {
      aComponent = new Component({
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>')
      });
      aComponent.go("Splinter");
      expect(aComponent.state).toBe("Splinter")

		});

    it('should set state via options', function() {
      aComponent = new Component({
        state: 'Shredder',
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>')
      });
      expect(aComponent.state).toBe("Shredder")

		});

    it('should set state with a preprocess function', function() {
      aComponent = new Component({
        state: 'April O`neal',
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>'),
        statePreprocess: function(s) {
          return s.split('`')[0];
        }
      });
      expect(aComponent.state).toBe("April O")

		});

    it('should call stateChange function when set state via options', function(done) {
      var didCallStateChangeFx = false;
      aComponent = new Component({
        state: 'Shredder',
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>'),
        stateChange : function(oldState, newState) {
    			didCallStateChangeFx = true
          expect(didCallStateChangeFx).toBe(true)
          done()
    		}
      });


		});

    it('should have a state property that is enumerable to be compatible with most extend functions in JavaScript', function() {
      aComponent = new Component({
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>')
      });
      var arrayProps = []
      for (var key in aComponent) {
        arrayProps.push(key)
      }
      expect(arrayProps.indexOf('state') > -1).toBe(true)

		});

    it('should allow destroy to be overridden', function(done) {
      var customDestroyFired = false;
      var aComponent = new Component({
        el: $('<p id="cars">Porche</p>'),
        destroy: function() {
          customDestroyFired = true;
          expect(customDestroyFired).toBe(true);
          done()
        }
      });
      aComponent.destroy()

		});

});
