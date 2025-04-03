/// <reference path="../../../udbscript.d.ts" />

`#version 4`;

`#name Draw Sky Transfers`;

`#description Draws control sectors for a sky transfer at the mouse cursor's position. Requires Boom actions. If sectors are selected when the script is run, it will only create sky transfers for the selected sky sectors. Otherwise, it affects every sky sector on the map.`;

`#scriptoptions

skytexture {
    description = "Sky texture";
    default = "SKY1";
    type = 6;
}

flipped
{
	description = "Flipped sky?";
	default = "False";
	type = 3; // Boolean
}
`;

// Get the mouse position in the map, snapped to the grid
let basepos = UDB.Map.snappedToGrid(UDB.Map.mousePosition);

// Size of control sector
let sectorLength = 32;

// Get all selected sectors
let sectors = UDB.Map.getSelectedSectors();

// If theres no sectors selected, get em all
if(sectors.length === 0){
	sectors = UDB.Map.getSectors();
}


// Create array for tags
let tags = [];

sectors.forEach(s => {
	if((s.ceilingTexture == "F_SKY1" || s.floorTexture == "F_SKY1") && !(tags.includes(s.tag)) ){
		tags.push(s.tag);
	}
});

if (tags.length === 0) UDB.die('No sectors with sky textures!');

// Create control sector for each sky transer
tags.forEach(t => {

	// Create a pen for drawing geometry
	var p = new Pen();

	// Draw the sector
	p.moveTo(basepos).drawVertex()
	.moveForward(sectorLength).drawVertex().turnRight()
	.moveForward(sectorLength).drawVertex().turnRight()
	.moveForward(sectorLength).drawVertex();

	if(!p.finishDrawing(true))
		throw "Something went wrong while drawing!";

	// Get the new sector and set heights
	let sector = UDB.Map.getMarkedSectors()[0];
	sector.floorHeight = 0;
	sector.ceilingHeight = 56;

	// Assign the action and tag to the line
	let actionLine = UDB.Map.getMarkedLinedefs()[0];
	if(UDB.ScriptOptions.flipped){
		actionLine.action = 272;
	} else {
		actionLine.action = 271;
	}
	actionLine.tag = t;

	// Assign texture to sidedef 
	let side = actionLine.front;
	side.upperTexture = UDB.ScriptOptions.skytexture;

	// Increment base position so things dont overlap
	basepos = basepos + sectorLength;
})

