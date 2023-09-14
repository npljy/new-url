# cainiao-url

#### 在使用的页面直接引用

```js
npm i new-url --save

import URL from 'new-url'

const url = new URL('https://www.aaa.com:8989/bbb/ccc/ddd.html?e=1&f=2&g#h=3&i=4&j?k=5#l=6&e=4')

console.log(url)
```

```json
{
  "href": "https://www.aaa.com:8989/bbb/ccc/ddd.html?e=1&f=2&g#h=3&i=4&j?k=5#l=6&e=4",
  "origin": "https://www.aaa.com",
  "protocol": "https:",
  "host": "www.aaa.com",
  "port": "8989",
  "pathname": "/bbb/ccc/ddd.html",
  "search": "?e=1&f=2&g&k=5",
  "hash": "#h=3&i=4&j&l=6&e=4",
  "params": {
    "h": "3",
    "i": "4",
    "l": "6",
    "e": "1",
    "f": "2",
    "k": "5"
  }
}

```
