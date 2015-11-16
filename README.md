# ReactPatterns

A collection of simple react projects providing reusable components, startup and test examples. Its my react playground.
Except for the React.14.Webpack projects, I use gulp, browserify and babelify for the build tool chain. With React.12 I used React.createClass.
In React.13 I started using extends React.Component.
Now with React.14 I am using babel stage 0 with arrow functions and let instead of var.

There are not any React-Router examples yet because I have been building applications instead of static websites so far.

**React.12**
*	Basic
*	ReFlux WebSocket

**React.13**
*	Basic
*	Basic Gulp Webpack
*	ReFlux WebSocket

**React.14**
*	BasicStarter
*	D3
*	Drag and Drop
*	ReFlux Electron
*	ReFlux Pages
*	ReFlux SuperAgent ajax
*	ReFlux WebSocket
*	ThirdParty
	*	GoogleMaps
	*	Radium
*	Window Events
*	Window Object

**React.14.Common**
*	Buttons
*	DropDown
*	Form Inputs
*	List
*	ProgressBar
*	Range slider
*	Tooltip
*	TreeView

**React.14.Webpack
*	BasicStarter
*	ReFlux Electron
*	ReFlux SuperAgent ajax
*	ReFlux WebSocket

# The basics

From the ReactPatterns folder you can run wcd on Windows to change to one of the project folders.

Open two terminals at the desired project root. I use iTerm on Mac, ConEmu on Windows 10. First time do "npm install". In one terminal "gulp". In the other terminal "npm start". In your browser localhost:3500. All projects use the same port. If you want to do it with one terminal session you can run "gulp nw" for no watch.


A demo of the Drag and Drop pattern is at http://example.calitek.com/.
