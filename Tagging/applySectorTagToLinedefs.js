/// <reference path="../../udbscript.d.ts" />

`#version 4`;

`#name Sector Tag to Linedef Tags`;

`#description Replaces the tag of each selected sector's linedefs with the sector's tag. Does not support multiple tags.`;

// Get the selected sectors
let sectors = UDB.Map.getSelectedSectors();

if(sectors.length == 0)
    UDB.die('You have to select at least one sector!');

sectors.forEach(
    sec => { 
        let sdef = sec.getSidedefs();
        let t = sec.getTags();
        sdef.forEach(
            side => {
                let ldef = side.line;

                // Remove the first tag
                let victim = ldef.getTags();
                ldef.removeTag(victim[0]);

                // Add new tag
                ldef.addTag(t[0]);
            }
        )
    });