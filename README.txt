**These scripts are usefull to rig and link sequenced layers** using expressions for timeremapping and transformation.
it uses a coustum effect. You need to add them to your After Effects.
This is tested in AE CS4 only on one computer. Its all a bit experimental.
fabiantheblind Dec 5- 2010 
WARNING this works on other machines (tested on Windows) but there are some localization issues
to use this in english change in script TMN_applyExpressions.jsx "Schieberegler"to "Slider"

add costum effect (coustumEffectLayout_XX.xml) to PresetEffects.xml at the end before the </Effects> element closes
This code will give you the path to the enclosing folder of the AE application
Windows: var appFolderPath = String(Folder.appPackage); // Program Files\Adobe\Adobe After Effects CS4\Support Files\PresetEffects.xml
Mac: var appFolderPath = Folder.appPackage.parent.toString(); // /Applications/Adobe After Effects CS4/Adobe After Effects CS4.app(Show Package Content)/Contents/Resources/PresetEffects.xml
start After Effects CS4
make new project
import puppet to rig
crop all comps using region of interest
Sequence all footage items in each comp !! heads comp must be sequenced to (using TMNSequenz.jsx)
set anchor point for all comps!! not footage items
use script TMN_buildHeadController.jsx in puppet comp
in the puppet comp parent the arms and the heads comps to the body
use script TMN_applyExpressions.jsx with the layers in your puppetcomp (delete the whole text from the second prompt watch out there is a second line of code)
use script  TMN_applyExpressions.jsx with the layers eyes and mouth  of all head_XX comps
important the headcontrol has to be the firat layer the the bodymovement control the second then:
**the order in the puppet is as follows**
headControl_(puppets.name)
control_(puppets.name)
alphaControl_(puppets.name)
arm_right
arm_left
heads
leg_right
leg_left
body

now duplicate the body 4 times and place it in the layerorder befor each arm and each leg
select the 4 new body comps and run script // this will build a TrackMatte
TMN_buildAphaConroller.jsx


in the heads comp it is:
**head_L**
**head_HL**
**head_F**
**head_HR**
**head_R**

SAVE THE project import it into another project
Now you have a ready set up puppet. The next script makes the uplink to the comp where your animation happens
You con now build as many puppets as you want. But you cant duplicate them in the master comp. You have to realy duplicate it in the project window


use script TMN_rigPuppet.jsx with the puppet selected. this applys the coustum effect
if all names are as written up there all the propertys schould belinked





links :
[http://www.aenhancers.com/viewtopic.php?f=8&t=515&p=1790&hilit=presets+xml#p1790]
[http://www.videocopilot.net/forum/viewtopic.php?f=33&t=26942]
[http://aenhancers.com/viewtopic.php?f=8&t=515&sid=0dcf87660e04926515e599d234a70d25&start=15]
[http://www.adobe.us/content/dam/Adobe/en/devnet/aftereffects/pdfs/aftereffectscs3_scripting_guide.pdf]
