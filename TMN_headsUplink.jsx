﻿//TMN_headsUplink.jsx// this script links all selected heads to the body control null heads Slider Control//select from top to bottom beginnin with head_RheadsUplink();function headsUplink(){app.beginUndoGroup("Rig Puppet");var curComp = app.project.activeItem;	if (!curComp || !(curComp instanceof CompItem))	{		alert("Please select a Composition.");		return;	}	var theSelHeads = curComp.selectedLayers;	for(var i =0; i <theSelHeads.length; i++ ){				var theExprString= "//transform.opacity\n" +		"var val = thisComp.layer(\"" +		curComp.layer(2).name +		"\").effect(\"heads\")(\"ADBE Slider Control-0001\");\n" +		"if(val == " +i+ "){\n" + 		"value = 100;\n"+		"}else {\n"+		"value = 0;\n"+		"}\n";		var layer = theSelHeads[i];		layer.opacity.expression = theExprString;				}			$.writeln("Done");	app.endUndoGroup();	}/*****EXPRESSION should look like this	* transform.opacity	* var val = thisComp.layer("BamBam_smll_control").effect("heads")("Schieberegler");	* if(val == 1){	* value = 100;	* }else {	* value = 0;	* }	*	*	*	*/