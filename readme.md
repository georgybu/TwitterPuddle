Twitter Puddle implementation in functional style with regexp with zero-dependencies
UI implementation - angular 1.5

Run
===
```node puddle```

Output
======

```
000000110
000000111
01WWWW111
01WWW1111
01WW11111
11W111111
111111111

00000011WW10000000
000000111W10000000
01WWWW111W1WWWW110
01WWW1111W1WWW1111
01WW11111W1WW11111
11W11111111W111111
111111111111111111

01W1W1W1W1
01W1W1W1W1
01W1W1W1W1
01W111W1W1
01W111W111
111111W111
1111111111
```

test cases:
[2, 5, 1, 2, 3, 4, 7, 7, 6],
[2, 5, 1, 2, 3, 4, 7, 7, 6, 2, 7, 1, 2, 3, 4, 5, 5, 4],
[2, 7, 2, 7, 4, 7, 1, 7, 3, 7],
[2, 5, 1, 3, 1, 2, 1, 7, 7, 6, 5, 9, 0, 1, 0, 0, 20, 18, 5, 20, 0, 1, 0, 1],
[2, 3, 6, 2, 3, 1, 7, 3, 2, 2]
// TODO: check [3,2,8,1,4,6]
// TODO: [0,4,1,3,3,6,2,5]