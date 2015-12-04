var craft_locale = {lc:{"en":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"he":function(n){return n===1?"one":"other"},"tr":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"fi":function(n){return n===1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){craft_locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:(k=craft_locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){craft_locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).craft_locale = {
"blockDestroyBlock":function(d){return "блокты жою"},
"blockIf":function(d){return "егер"},
"blockIfLavaAhead":function(d){return "Егер алда лава болса"},
"blockMoveForward":function(d){return "алдыға қозғалу"},
"blockPlaceTorch":function(d){return "Шам орнату"},
"blockPlaceXAheadAhead":function(d){return "алдында"},
"blockPlaceXAheadPlace":function(d){return "орнату"},
"blockPlaceXPlace":function(d){return "орнату"},
"blockPlantCrop":function(d){return "егін егу"},
"blockShear":function(d){return "жүн кесу"},
"blockTillSoil":function(d){return "топыраққа дейін"},
"blockTurnLeft":function(d){return "солға бұрылу"},
"blockTurnRight":function(d){return "оңға бұрылу"},
"blockTypeBedrock":function(d){return "топырақ"},
"blockTypeBricks":function(d){return "кірпіш"},
"blockTypeClay":function(d){return "Саз"},
"blockTypeClayHardened":function(d){return "шыңдалған саз"},
"blockTypeCobblestone":function(d){return "төселген"},
"blockTypeDirt":function(d){return "балшық"},
"blockTypeDirtCoarse":function(d){return "қатты балшық"},
"blockTypeEmpty":function(d){return "бос"},
"blockTypeFarmlandWet":function(d){return "ауыл шаруашылығы учаскесі"},
"blockTypeGlass":function(d){return "шыны"},
"blockTypeGrass":function(d){return "шөп"},
"blockTypeGravel":function(d){return "құмтас"},
"blockTypeLava":function(d){return "лава"},
"blockTypeLogAcacia":function(d){return "акация журналы"},
"blockTypeLogBirch":function(d){return "қайың"},
"blockTypeLogJungle":function(d){return "jungle log"},
"blockTypeLogOak":function(d){return "емен"},
"blockTypeLogSpruce":function(d){return "шырша"},
"blockTypeOreCoal":function(d){return "көмір кені"},
"blockTypeOreDiamond":function(d){return "алмас кені"},
"blockTypeOreEmerald":function(d){return "изумруд кені"},
"blockTypeOreGold":function(d){return "алтын кені"},
"blockTypeOreIron":function(d){return "темір кені"},
"blockTypeOreLapis":function(d){return "лазурит кені"},
"blockTypeOreRedstone":function(d){return "redstone ore"},
"blockTypePlanksAcacia":function(d){return "ағаш тақталар"},
"blockTypePlanksBirch":function(d){return "қайың тақталар"},
"blockTypePlanksJungle":function(d){return "jungle planks"},
"blockTypePlanksOak":function(d){return "емен тақталар"},
"blockTypePlanksSpruce":function(d){return "шырша тақталар"},
"blockTypeRail":function(d){return "рельс"},
"blockTypeSand":function(d){return "құм"},
"blockTypeSandstone":function(d){return "құмтас"},
"blockTypeStone":function(d){return "тас"},
"blockTypeTnt":function(d){return "тротил"},
"blockTypeTree":function(d){return "ағаш"},
"blockTypeWater":function(d){return "су"},
"blockTypeWool":function(d){return "жүн"},
"blockWhileXAheadAhead":function(d){return "алдында"},
"blockWhileXAheadDo":function(d){return "жасау"},
"blockWhileXAheadWhile":function(d){return "болған кезде "},
"generatedCodeDescription":function(d){return "By dragging and placing blocks in this puzzle, you've created a set of instructions in a computer language called Javascript. This code tells computers what to display on the screen. Everything you see and do in Minecraft also starts with lines of computer code like these."},
"houseSelectChooseFloorPlan":function(d){return "Үйіңіздіт қабат жоспарыт таңдаңыз."},
"houseSelectEasy":function(d){return "оңай"},
"houseSelectHard":function(d){return "қиын"},
"houseSelectLetsBuild":function(d){return "Үй салып көрейік."},
"houseSelectMedium":function(d){return "Орта"},
"keepPlayingButton":function(d){return "Ойынды жалғастыру"},
"level10FailureMessage":function(d){return "Cover up the lava to walk across, then mine two of the iron blocks on the other side."},
"level11FailureMessage":function(d){return "Make sure to place cobblestone ahead if there is lava ahead. This will let you safely mine this row of resources."},
"level12FailureMessage":function(d){return "Be sure to mine 3 redstone blocks. This combines what you learned from building your house and using \"if\" statements to avoid falling in lava."},
"level13FailureMessage":function(d){return "Place \"rail\" along the dirt path leading from your door to the edge of the map."},
"level1FailureMessage":function(d){return "You need to use commands to walk to the sheep."},
"level1TooFewBlocksMessage":function(d){return "Try using more commands to walk to the sheep."},
"level2FailureMessage":function(d){return "To chop down a tree, walk to its trunk and use the \"destroy block\" command."},
"level2TooFewBlocksMessage":function(d){return "Try using more commands to chop down the tree. Walk to its trunk and use the \"destroy block\" command."},
"level3FailureMessage":function(d){return "To gather wool from both sheep, walk to each one and use the \"shear\" command. Remember to use turn commands to reach the sheep."},
"level3TooFewBlocksMessage":function(d){return "Try using more commands to gather wool from both sheep. Walk to each one and use the \"shear\" command."},
"level4FailureMessage":function(d){return "You must use the \"destroy block\" command on each of the three tree trunks."},
"level5FailureMessage":function(d){return "Place your blocks on the dirt outline to build a wall. The pink \"repeat\" command will run commands placed inside it, like \"place block\" and \"move forward\"."},
"level6FailureMessage":function(d){return "Place blocks on the dirt outline of the house to complete the puzzle."},
"level7FailureMessage":function(d){return "Use the \"plant\" command to place crops on each patch of dark tilled soil."},
"level8FailureMessage":function(d){return "If you touch a creeper it will explode. Sneak around them and enter your house."},
"level9FailureMessage":function(d){return "Don't forget to place at least 2 torches to light your way AND mine at least 2 coal."},
"minecraftBlock":function(d){return "блок"},
"nextLevelMsg":function(d){return "Puzzle "+craft_locale.v(d,"puzzleNumber")+" completed. Congratulations!"},
"playerSelectChooseCharacter":function(d){return "Кейіпкер таңдаңыз."},
"playerSelectChooseSelectButton":function(d){return "Таңдау"},
"playerSelectLetsGetStarted":function(d){return "Бастайық."},
"reinfFeedbackMsg":function(d){return "You can press \"Keep Playing\" to go back to playing your game."},
"replayButton":function(d){return "Ойынды қайталау"},
"selectChooseButton":function(d){return "Таңдау"},
"tooManyBlocksFail":function(d){return "Puzzle "+craft_locale.v(d,"puzzleNumber")+" completed. Congratulations! It is also possible to complete it with "+craft_locale.p(d,"numBlocks",0,"en",{"one":"1 block","other":craft_locale.n(d,"numBlocks")+" blocks"})+"."}};