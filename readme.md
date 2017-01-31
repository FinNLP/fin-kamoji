# Fin-Kamoji
Kamoji lexer and lexicon support for **Fin** natural language processor.

This extension adds support for over 1400 Kamoji, including simple ones like `ಠ_ಠ` and complex ones like: 

```
(ﾉ-.-)ﾉ….((((((((((((●~*(>_<)
(￣▽￣)/♫•*¨*•.¸¸♪
(>^_^)><(^o^<)
(;-_-)――――――C<―_-)
```

## Installation

```
npm i --save fin-kamoji
```

## Usage

```javascript
const fin = require('finnlp');
fin.extend(require('fin-kamoji'));

// now when you instantiate a new input, Kamoji will be supported.

```

