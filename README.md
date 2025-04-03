# Rivi's UDBScripts

Mapping scripts for Ultimate Doom Builder

## Getting Started

### Dependencies

* A version of Ultimate Doom Builder with scripting support

### Installing

* Download files into ```Ultimate Doom Builder\UDBScript\Scripts```

### Executing program

* Open script window in UDB.
* Click on the script you want to use. Make sure to read the description.
![image](https://github.com/user-attachments/assets/8cf30f64-15fc-4c11-a976-e4a289222dcd)
* Scripts that rely on cursor position need hotkeys to work. Set the hotkey in preferences -> controls
![image](https://github.com/user-attachments/assets/c955e32c-5d0e-4153-a12c-4caf7c50e08d)


## Scripts

### Draw Sky Transfers
Draws control sectors for a sky transfer at the mouse cursor's position. Requires Boom actions. If sectors are selected when the script is run, it will only create sky transfers for the selected sky sectors. Otherwise, it affects every sky sector on the map.

### Sector Tags to Linedef Tags
Replaces the tags of each selected sector's linedefs with the sector's tags.

### Stepwise Incrementing Tagger (W.I.P.)
Increments each selected line every x steps, where x is the Step Value you set. Goes in ascending order of lindef numbers.
* Starting Tag - The number the incrementing starts at. Can't be zero or less.
* Step Value - How many 'steps' the program takes before incrementing the number
* Additive Tagging - Adds the tags to the lines instead of replacing then. UDMF only.

## Help

* Script not working? Be sure to check the error messages.
![advisory](https://github.com/user-attachments/assets/bd07b15b-cd45-4339-9653-75a7d72add07)

## Version History
* 0.2
   * Added Draw Sky Transfers

* 0.1
    * Initial Release

## Useful Links
[Ultimate Doom Builder](https://ultimatedoombuilder.github.io)
[UDBScript Docs](https://biwa.github.io/udbscript-docs/)
