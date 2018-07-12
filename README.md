# NgBoilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Global Settings / Implementations

* CSS
  * Box Model: `box-sizing: border-box;`
  * Touch Scrolling: `-webkit-overflow-scrolling: touch;`

## Conventions

* All custom components shall include the `.ng-component` class
* Layouts include Content Slots, which include both app-controlled and cms-controlled varieties
  * e.g. `contentslot-app1`, `contentslot-cms1`, etc.

## General Notes
* IE 9, 10, 11 polyfills have been included [(source)](https://blog.angularindepth.com/angular-and-internet-explorer-5e59bb6fb4e9)
* Folder structure allows for "project" concept, including core shared library. [(source)](https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5)

## TODO
* Universal components
* Google Maps integration
* HTTP/API/Content ng-services
* Default Content
