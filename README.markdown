**These scripts are usefull to rig and link sequenced layers**  
===  
using expressions for timeremapping and transformation.  
it uses a coustum effect. You need to add them to your After Effects.  
This is tested in AE CS4 only on one computer. Its all a bit experimental.  
fabiantheblind Dec 5- 2010   
WARNING this works on other machines (tested on Windows) but there are some localization issues  
to use this in english change in script TMN_applyExpressions.jsx "Schieberegler"to "Slider"  
  
- add costum effect (coustumEffectLayout_XX.xml) to PresetEffects.xml at the end before the </Effects> element closes  
This code will give you the path to the enclosing folder of the AE application  
- Windows: `var appFolderPath = String(Folder.appPackage); // Program Files\Adobe\Adobe After Effects CS4\Support Files\PresetEffects.xml`  
- Mac: `var appFolderPath = Folder.appPackage.parent.toString(); // /Applications/Adobe After Effects CS4/Adobe After Effects CS4.app(Show Package Content)/Contents/Resources/PresetEffects.xml`  
- start After Effects CS4  
- make new project  
- import puppet to rig  
- crop all comps using region of interest  
- Sequence all footage items in each comp !! heads comp must be sequenced to (using TMNSequenz.jsx)  
- set anchor point for all comps!! not footage items  
- use script **TMN_buildHeadController.jsx** in puppet comp  
- in the puppet comp parent the arms and the heads comps to the body  
- use script: **TMN_applyExpressions.jsx** with the layers in your puppetcomp (delete the whole text from the second prompt watch out there is a second line of code)  
- use script  **TMN_applyExpressions.jsx** with the layers eyes and mouth  of all head_XX comps  
- **important** the headcontrol has to be the first layer the the bodymovement control the second then:  
  
**the order in the puppet is as follows**  
1  headControl\_(puppets.name)  
2  control\_(puppets.name)  
3  arm_right  
4  arm_left  
5  _heads (see update below)_  
6  leg\_right  
7  leg\_left  
8  body  

- now duplicate the body 4 times and place it in the layerorder befor each arm and each leg. the new order is then:  
  
1  headControl\_(puppets.name)  
2  control\_(puppets.name)  
3  body
4  arm_right  
5  body
6  arm_left  
7  _heads (see update below)_  
8  body
9  leg\_right  
10  body
11  leg\_left  
12  body

- select the 4 new body comps and run script. this will build a TrackMatte. **WARNING** _make shure that the original body is layer number 12_  

**TMN_buildAphaConroller.jsx**  

- move the newly build layer alphaControl\_(puppets.name) to the third position  

in the heads comp it is:  
1  **head\_L**  
2  **head\_HL**  
3  **head\_F**  
4  **head\_HR**  
5  **head\_R**  
  
!!!! UPDATE !!!!  
==  
The head will be decomposed and so the rigPuppet will be changed.  
--
Move all head layers to main puppet comp  select them and use script:  
  
**TMN_headsUplink.jsx**  
  
-SAVE THE PROJECT!
--
- import it into another project  
Now you have a ready set up puppet. The next script makes the uplink to the comp where your animation happens  
You can now build as many puppets as you want. But you cant duplicate them in the master comp. You have to really duplicate it in the project window  
  
  
- use script TMN_rigPuppet.jsx with the puppet selected. this applys the coustum effect  
if all names are as written up there all the propertys schould be linked  

Try the **tmnRigPuppet.ffx** preset to see the custom effect or to maunually uplink something
  
  
  
  
  
links :  
[aenhancers Create a custom Control effect pt 1](http://www.aenhancers.com/viewtopic.php?f=8&t=515&p=1790&hilit=presets+xml#p1790)  
[aenhancers Create a custom Control effectpt 2](http://aenhancers.com/viewtopic.php?f=8&t=515&sid=0dcf87660e04926515e599d234a70d25&start=15)  
[videocopilot Jorrit Schulte's Custom Effects](http://www.videocopilot.net/forum/viewtopic.php?f=33&t=26942)  
[ae cs3 scritping guide](http://www.adobe.us/content/dam/Adobe/en/devnet/aftereffects/pdfs/aftereffectscs3_scripting_guide.pdf)  
