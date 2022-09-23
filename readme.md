# alfred-chrono [![Node.js CI](https://github.com/Grynn/alfred-chrono/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Grynn/alfred-chrono/actions/workflows/node.js.yml)

> Alfred Workflow to parse human dates into multiple formats including Roam Research, JSON, Unix Timestamp

## Install

```shell
$ npm install --global alfred-chrono
```

*Requires [Node.js](https://nodejs.org) 14+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

## Usage

In Alfred, type `fd`, followed by a date string that can be parsed by chrono-node.  

Examples:

* Today, Tomorrow, Yesterday, Last Friday, etc
* 17 August 2013 - 19 August 2013
* This Friday from 13:00 - 16.00
* 5 days ago
* 2 weeks from now
* Sat Aug 17 2013 18:40:39 GMT+0900 (JST)
* 2014-11-30T08:15:30-05:30

## License

MIT © [Vishal Doshi](https://vishaldoshi.me)
