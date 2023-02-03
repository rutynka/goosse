Golang net/http SSE server for HTML gaming
========================

![Alt text](diagram-aws3d.png "a title")

## Installing

Check out the repository from GitHub

git clone https://github.com/rutynka/goosse

## Running

To run the server, do 

	go run ./server.go

## Docker

Or with docker

	docker-compose up

## Run

 http-server static
iframe_demo.html


## Features
* Correct broker go/routine pattern
* Distinct users with key+salt 

## Thanks

This code is based off of a few sources, mostly

* [kljensen](https://github.com/kljensen/golang-html5-sse-example)
* [Leroy Campbell's SSE example in Go](https://gist.github.com/artisonian/3836281); and,
* the [HTML5Rocks SSE tutorial](http://www.html5rocks.com/en/tutorials/eventsource/basics/).

 
## License (the Unlicense)

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>


