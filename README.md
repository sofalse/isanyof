# isAnyOf

Simple module that checks if variable is equal to one of the given parameters. Works with bools, strings and numbers.

**Installation:**
```
npm install isanyof
```

**Usage:**
```javascript
require('isanyof');

var bool = true;
var number = 3;
var string = "string";

bool.isanyof(true, true, false, true); // <- returns "true"
bool.isanyof(false, false); // <- returns "false"
number.isanyof(true, false, 5); // <- returns "false"
number.isanyof(true, false, 5, 3); // <- returns "true"
string.isanyof(false, false, "2", ""); // <- returns "false"
string.isanyof("string", "string", 123); // <- returns "true"

// .isanyof(args...) has also a shorthand .iao(args...)

number.iao(2,3,5, "pi") // <- returns "true"

```