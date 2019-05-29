# component
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/020010dc9b8f4cb3a8abf1b313c940a4)](https://app.codacy.com/app/justingeeslin/component?utm_source=github.com&utm_medium=referral&utm_content=justingeeslin/component&utm_campaign=Badge_Grade_Dashboard) [![Greenkeeper badge](https://badges.greenkeeper.io/justingeeslin/component.svg)](https://greenkeeper.io/)

A base component for UI components. 

#### Wish: Take some action when an attribute changes. 

✅ Like so:
```js 
var aComponent = new Component({
	el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>')
});

$(document.body).append(aComponent);

aComponent.onAttributeChange('name', function(newValue) {

        console.log('Name attr changed')
        console.log('The new value is', newValue);

});

aComponent.el.attr('name', 'sa');
```

#### Wish: Assign a state to a component. Take some action when the state changes.

✅ Like so:

```js 
var aComponent = new Component({
	state: 'Shredder',
	el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>'),
	stateChange : function(oldState, newState) {
		// Do something based on the previous or new state.
	}
});

```

