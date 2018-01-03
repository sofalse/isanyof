# isAnyOf

Simple module that checks if variable is one of the given parameters. Works with bools, strings, numbers, symbols and objects.

**Installation:**
```
npm install isanyof
```

**Usage:**
```javascript
var bool = true;
var number = 3;
var string = "string";

bool.isanyof(true, true, false, true) // <- returns "true"
bool.isanyof(false, false) // <- returns "false"
number.isanyof(true, false, 5) // <- returns "false"
number.isanyof(true, false, 5, 3) // <- returns "true"
string.isanyof(false, false, "2", "") // <- returns "false"
string.isanyof("string", "string", 123) // <- returns "true"

```