# Angular Electron Seed

This seed combines the technologies of Angular (4+) with [Electron](https://electron.atom.io/) to create a robust development stack for creating Desktop applications. Leveraging the stock AngularCLI build process, we are able to maintain webpack and stock tooling with minimal tweaking.

![Example](https://i.gyazo.com/67c230a5f92509f703eaf03a38590613.gif)

## Getting Started
|Command|Description|
|--|--|
|`npm i`| Install the required dependencies|
|`npm run start`|Builds the project and opens your app in Electron|
|`npm run start.watch`|Builds the project and watches for file changes with Angular CLI|
|`npm run watch`|Runs the custom tooling and syncs the live-sync with the AngularCLI watch task|
|`npm run bundle.mac`|Bundles your MacOS app into the bundles directory|
|`npm run bundle.windows`|Bundles your Windows app into the bundles directory|
|`npm run bundle.linux`|Bundles your Linux app into the bundles directory|

### Features
- IPC Protocol - Send messages between Electron and Angular (plays beep when clicking Getting Started)
- Exposed Electron API via `NgxElectronService`
- Bundle your app for Mac, Windows or Linux

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Built with Angular Electron Seed
- [Google Sidekick](https://github.com/sean-perkins/google-sidekick)

# Contributors 

[<img alt="Sean perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=3&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|
