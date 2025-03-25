/// <reference path="../../udbscript.d.ts" />

`#version 4`;

`#name Stepwise Tag Incrementing`;

`#description Increments the tag every x steps.`;

`#scriptoptions

start_tag
{
	description = "Starting Tag";
	default = 1;
	type = 0; // Integer
}

step_value
{
	description = "Step Value";
	default = 1;
	type = 0; // Integer
}

add_tags
{
	description = "Additive Tagging (UDMF only)";
	default = "false";
	type = 3; // Boolean
}

`;

/* STEP INCREMENT
* @param {int} x - input number
* @returns {int} The value of the input number at the current step
*/
function stepIncrement(x){
    return Math.floor((x - 1) / UDB.ScriptOptions.step_value + 1)
}

// Set up variables
let lines = UDB.Map.getSelectedOrHighlightedLinedefs();
let startingValue = UDB.ScriptOptions.start_tag * UDB.ScriptOptions.step_value;
let addTags = UDB.ScriptOptions.add_tags;

// Check if theres lines actually selected
if(lines.length == 0)
    UDB.die('You have to select at least one linedef!');

// Check if starting tag is greater than zero
if(startingValue <= 0)
    UDB.die("Tag can't be 0 or less!");

// Check if the format supports multiple line tags
if(!(UDB.Map.isUDMF) && addTags)
    UDB.die('Format does not support multiple tags! (turn off additive tagging)');

// Clear tags from the linedefs
if(!addTags){
    lines.forEach(e => {
        e.getTags().forEach(x => {
            e.removeTag(x);
        })
    });
}

// Add tags baby
for(let i = 0; i < lines.length; i++){
    lines[i].addTag(stepIncrement(i + startingValue + 1));
}
