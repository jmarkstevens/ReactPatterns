ECHO OFF
:MENU
CLS
ECHO.
ECHO  1 - React 1.4 Basic
ECHO  2 - React 1.4 Drag and Drop
ECHO  3 - React 1.4 ReFluxElectron
ECHO  4 - React 1.4 ReFluxPages
ECHO  5 - React 1.4 ReFluxWebSocket
ECHO  6 - React 1.4 GoogleMaps
ECHO  7 - React 1.4 Radium
ECHO  8 - React 1.4 WindowEvents
ECHO  9 - React 1.4 WindowObject
ECHO.
ECHO 10 - React 1.4 Common Buttons
ECHO 11 - React 1.4 Common DropDown
ECHO 12 - React 1.4 Common FormInputs
ECHO 13 - React 1.4 Common List
ECHO 14 - React 1.4 Common ProgressBar
ECHO 15 - React 1.4 Common RangeSlider
ECHO 16 - React 1.4 Common Slider
ECHO 17 - React 1.4 Common TreeView
ECHO.
ECHO 20 - React 1.2 Basic
ECHO 21 - React 1.2 ReFluxWebSocket
ECHO.
ECHO 22 - React 1.3 Basic
ECHO 23 - React 1.3 BasicWebpack
ECHO 24 - React 1.3 ReFluxWebSocket
ECHO 25 - React Common
ECHO.
ECHO 44 - EXIT
ECHO.
SET /P M=Type number then press ENTER:
IF %M%==1 GOTO Basic14
IF %M%==2 GOTO DragAndDrop
IF %M%==3 GOTO ReFluxElectron
IF %M%==4 GOTO ReFluxPages
IF %M%==5 GOTO ReFluxWebSocket14
IF %M%==6 GOTO GoogleMaps
IF %M%==7 GOTO Radium
IF %M%==8 GOTO WindowEvents
IF %M%==9 GOTO WindowObject
IF %M%==10 GOTO Buttons
IF %M%==11 GOTO DropDown
IF %M%==12 GOTO FormInputs
IF %M%==13 GOTO List
IF %M%==14 GOTO ProgressBar
IF %M%==15 GOTO RangeSlider
IF %M%==16 GOTO Tooltip
IF %M%==17 GOTO TreeView
IF %M%==20 GOTO Basic12
IF %M%==21 GOTO ReFluxWebSocket12
IF %M%==22 GOTO Basic13
IF %M%==23 GOTO ReFluxWebSocket13
IF %M%==24 GOTO BasicWebpack
IF %M%==25 GOTO Common
IF %M%==44 GOTO EOF
GOTO MENU
:Basic12
cd React.12/Basic
GOTO EOF
:Basic13
cd React.13/Basic
GOTO EOF
:Basic14
cd React.14/Basic
GOTO EOF
:BasicWebpack
cd React.13/BasicWebpack
GOTO EOF
:Common
cd Common
GOTO EOF
:DragAndDrop
cd React.14/DragAndDrop
GOTO EOF
:FluxReactWebsocket
cd React.13/FluxReactWebsocket
GOTO EOF
:ReFluxElectron
cd React.14/ReFluxElectron
GOTO EOF
:ReFluxPages
cd React.14/ReFluxPages
GOTO EOF
:ReFluxWebSocket12
cd React.12/ReFluxWebSocket
GOTO EOF
:ReFluxWebSocket13
cd React.13/ReFluxWebSocket
GOTO EOF
:GoogleMaps
cd React.14/ThirdParty/GoogleMaps
GOTO EOF
:Radium
cd React.14/ThirdParty/Radium
GOTO EOF
:WindowEvents
cd React.14/WindowEvents
GOTO EOF
:WindowObject
cd React.14/WindowObject
GOTO EOF
:Buttons
cd React.14.Common/Buttons
GOTO EOF
:DropDown
cd React.14.Common/DropDown
GOTO EOF
:FormInputs
cd React.14.Common/FormInputs
GOTO EOF
:List
cd React.14.Common/List
GOTO EOF
:ProgressBar
cd React.14.Common/ProgressBar
GOTO EOF
:Tooltip
cd React.14.Common/Tooltip
GOTO EOF
:RangeSlider
cd React.14.Common/RangeSlider
GOTO EOF
:TreeView
cd React.14.Common/TreeView
GOTO EOF
:EOF
