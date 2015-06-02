# grunt-angular-demo
A demo on how to use grunt with angular

## Overview

This project showcases a minimal grunt configuration which can be used with an AngularJS project. The configuration will allow for unit testing and generating code coverage report using Karma, and properly minify angular js files.

## Installing

> git clone
> npm install

## Running tests and generating code coverage

> npm run test

The JUnit report and coverage report will be under /build/test

## Minifying the source

> npm run build

The minified resources will be genereated under /build/dist/

## Running the app

Host the root of the project on a web server, and simply hit the host with your browser.

The app is a simple dummy login screen, which takes in a username and password and displays success message if credentials match, otherwise displays an error message.
