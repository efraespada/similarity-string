
# similarity-string 

[![Dependency Status][david-badge]][david]
[![Build Status][travis-badge]][travis]

similarity-string compares strings focusing on common char sequences:
```
xummy - dummy: 60.00% [░░░░░░░░░░░░░░░          ] 

dxmmy - dummy: 30.00% [░░░░░░░░                 ] 

duxmy - dummy: 20.00% [░░░░░                    ] 

dumxy - dummy: 30.00% [░░░░░░░░                 ] 

dummx - dummy: 60.00% [░░░░░░░░░░░░░░░          ] 

xumming - dumming: 71.43% [░░░░░░░░░░░░░░░░░░       ] 

dxmming - dumming: 47.62% [░░░░░░░░░░░░             ] 

duxming - dumming: 33.33% [░░░░░░░░                 ] 

dumxing - dumming: 28.57% [░░░░░░░                  ] 

dummxng - dumming: 33.33% [░░░░░░░░                 ] 

dummixg - dumming: 47.62% [░░░░░░░░░░░░             ] 

dumminx - dumming: 71.43% [░░░░░░░░░░░░░░░░░░       ] 
```
#### Levenshtein comparision
```
xummy - dummy: 80.00% [░░░░░░░░░░░░░░░░░░░░     ] 

dxmmy - dummy: 80.00% [░░░░░░░░░░░░░░░░░░░░     ] 

duxmy - dummy: 80.00% [░░░░░░░░░░░░░░░░░░░░     ] 

dumxy - dummy: 80.00% [░░░░░░░░░░░░░░░░░░░░     ] 

dummx - dummy: 80.00% [░░░░░░░░░░░░░░░░░░░░     ] 

xumming - dumming: 85.71% [░░░░░░░░░░░░░░░░░░░░░    ] 

dxmming - dumming: 85.71% [░░░░░░░░░░░░░░░░░░░░░    ] 

duxming - dumming: 85.71% [░░░░░░░░░░░░░░░░░░░░░    ] 

dumxing - dumming: 85.71% [░░░░░░░░░░░░░░░░░░░░░    ] 

dummxng - dumming: 85.71% [░░░░░░░░░░░░░░░░░░░░░    ] 

dummixg - dumming: 85.71% [░░░░░░░░░░░░░░░░░░░░░    ] 

dumminx - dumming: 85.71% [░░░░░░░░░░░░░░░░░░░░░    ] 
``` 

[david]: https://david-dm.org/efraespada/similarity-string
[david-badge]: https://david-dm.org/efraespada/similarity-string
[travis]: https://travis-ci.org/efraespada/similarity-string
[travis-badge]: ttps://travis-ci.org/efraespada/similarity-string.svg?branch=master
[LICENSE]: https://github.com/yahoo/serialize-javascript/blob/master/LICENSE