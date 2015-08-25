ECHO OFF
:MENU
CLS
ECHO.
ECHO  1 - React 1.3 Basic
ECHO  2 - React 1.3 BasicWebpack
ECHO  3 - React 1.3 Common
ECHO 23 - React 1.3 Drag and Drop
ECHO  4 - React 1.3 FluxReactWebsocket
ECHO  5 - React 1.3 ReFluxElectron
ECHO  6 - React 1.3 ReFluxPages
ECHO  7 - React 1.3 ReFluxWebSocket
ECHO 24 - React 1.3 Slider
ECHO  8 - React 1.3 GoogleMaps
ECHO  9 - React 1.3 Radium
ECHO 10 - React 1.3 ReactBlock
ECHO 11 - React 1.3 WindowEvents
ECHO 12 - React 1.3 WindowObject
ECHO.
ECHO 13 - React 1.3 Common Buttons
ECHO 14 - React 1.3 Common DropDown
ECHO 15 - React 1.3 Common FormInputs
ECHO 16 - React 1.3 Common List
ECHO 17 - React 1.3 Common ProgressBar
ECHO 18 - React 1.3 Common RangeAndTooltip
ECHO 19 - React 1.3 Common TreeView
ECHO.
ECHO 20 - React 1.2 Basic
ECHO 21 - React 1.2 ReFluxWebSocket
ECHO.
ECHO 22 - React 1.4 Basic
ECHO.
ECHO 33 - EXIT
ECHO.
SET /P M=Type number then press ENTER:
IF %M%==1 GOTO Basic13
IF %M%==2 GOTO BasicWebpack
IF %M%==3 GOTO Common
IF %M%==4 GOTO FluxReactWebsocket
IF %M%==5 GOTO ReFluxElectron
IF %M%==6 GOTO ReFluxPages
IF %M%==7 GOTO ReFluxWebSocket13
IF %M%==8 GOTO GoogleMaps
IF %M%==9 GOTO Radium
IF %M%==10 GOTO ReactBlock
IF %M%==11 GOTO WindowEvents
IF %M%==12 GOTO WindowObject
IF %M%==13 GOTO Buttons
IF %M%==14 GOTO DropDown
IF %M%==15 GOTO FormInputs
IF %M%==16 GOTO List
IF %M%==17 GOTO ProgressBar
IF %M%==18 GOTO RangeAndTooltip
IF %M%==19 GOTO TreeView
IF %M%==20 GOTO Basic12
IF %M%==21 GOTO ReFluxWebSocket12
IF %M%==22 GOTO Basic14
IF %M%==23 GOTO DragAndDrop
IF %M%==24 GOTO Slider
IF %M%==33 GOTO EOF
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
cd React.13/Common
GOTO EOF
:DragAndDrop
cd React.13/DragAndDrop
GOTO EOF
:FluxReactWebsocket
cd React.13/FluxReactWebsocket
GOTO EOF
:ReFluxElectron
cd React.13/ReFluxElectron
GOTO EOF
:ReFluxPages
cd React.13/ReFluxPages
GOTO EOF
:ReFluxWebSocket12
cd React.12/ReFluxWebSocket
GOTO EOF
:ReFluxWebSocket13
cd React.13/ReFluxWebSocket
GOTO EOF
:Slider
cd React.13/Slider
GOTO EOF
:GoogleMaps
cd React.13/ThirdParty/GoogleMaps
GOTO EOF
:Radium
cd React.13/ThirdParty/Radium
GOTO EOF
:ReactBlock
cd React.13/ThirdParty/ReactBlock
GOTO EOF
:WindowEvents
cd React.13/WindowEvents
GOTO EOF
:WindowObject
cd React.13/WindowObject
GOTO EOF
:Buttons
cd React.13.Common/Buttons
GOTO EOF
:DropDown
cd React.13.Common/DropDown
GOTO EOF
:FormInputs
cd React.13.Common/FormInputs
GOTO EOF
:List
cd React.13.Common/List
GOTO EOF
:ProgressBar
cd React.13.Common/ProgressBar
GOTO EOF
:RangeAndTooltip
cd React.13.Common/RangeAndTooltip
GOTO EOF
:TreeView
cd React.13.Common/TreeView
GOTO EOF
:EOF
