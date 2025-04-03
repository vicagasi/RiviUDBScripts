/// <reference path="../../../udbscript.d.ts" />

`#version 4`;

`#name Sector Tag to Linedef Tags`;

`#description Replaces the tags of each selected sector's linedefs with the sector's tags.`;


// Get the selected sectors
let sectors = UDB.Map.getSelectedSectors();

// Check if any sectors are selected
if(sectors.length == 0)
    UDB.die('You have to select at least one sector!');

sectors.forEach(
    sec => { 
        let sdef = sec.getSidedefs();
        let tags = sec.getTags();
        sdef.forEach(
            side => {
                let linedef = side.line;

                // Clear lines
                linedef.getTags().forEach(x => {
                    linedef.removeTag(x);
                });

                // Add new tags
                for(let i = 0; i < tags.length; i++){
                    linedef.addTag(tags[i]);
                }
            }
        )
    });