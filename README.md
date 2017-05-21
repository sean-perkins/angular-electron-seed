# Angular Electron Seed

This seed combines the technologies of Angular (4+) with [Electron](https://electron.atom.io/) to create a robust development stack for creating Desktop applications. Leveraging the stock AngularCLI build process, we are able to maintain webpack and stock tooling with minimal tweaking.

![Example](https://i.gyazo.com/67c230a5f92509f703eaf03a38590613.gif)

## Getting Started
- `npm i`
- `npm run start.desktop` - triggers the AngularCLI to build the dist directory with the watch command for changes.
- `npm run watch` - runs custom script tooling to build electron and wire up basic live-reload functionality.

### Features
- IPC Protocol - Send messages between Electron and Angular (plays beep when clicking Getting Started)
- Exposed Electron API via `NgxElectronService`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

# Contributors 

[<img alt="Sean perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=3&s=117" width="117">](https://github.com/sean-perkins) |
:---: |:---: |
|[Sean Perkins](https://github.com/sean-perkins)|
