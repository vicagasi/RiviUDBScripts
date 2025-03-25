/// <reference path="../../udbscript.d.ts" />

`#version 4`;

`#name Stepwise Tag Incrementing`;

`#description Increments the tag every x steps.`;

let lines = UDB.Map.getSelectedOrHighlightedLinedefs();

if(lines.length == 0)
    UDB.die('You have to select at least one linedef!');