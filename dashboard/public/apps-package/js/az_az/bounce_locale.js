var appLocale = {lc:{"ar":function(n){
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
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
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
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
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
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
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
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
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
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){appLocale.c(d,k);return d[k]},
p:function(d,k,o,l,p){appLocale.c(d,k);return d[k] in p?p[d[k]]:(k=appLocale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){appLocale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).appLocale = {
"bounceBall":function(d){return "bounce ball"},
"bounceBallTooltip":function(d){return "Bounce a ball off of an object."},
"continue":function(d){return "Davam et"},
"dirE":function(d){return "Şərq"},
"dirN":function(d){return "Şimal"},
"dirS":function(d){return "Cənub"},
"dirW":function(d){return "Qərb"},
"doCode":function(d){return "et"},
"elseCode":function(d){return "əks halda"},
"finalLevel":function(d){return "Təbriklər! Axırıncı tapmacanı da tapdınız."},
"heightParameter":function(d){return "hündürlük"},
"ifCode":function(d){return "əgər"},
"ifPathAhead":function(d){return "əgər qabaqda yol varsa,"},
"ifTooltip":function(d){return "Əgər göstərilən istiqamətdə bir yol varsa, bəzi əmrləri yerinə yetir."},
"ifelseTooltip":function(d){return "Əgər göstərilən istiqamətdə yol varsa, əmrlərin birinci blokunu yerinə yetir. Əks halda isə əmrlərin ikinci blokunu."},
"incrementOpponentScore":function(d){return "score opponent point"},
"incrementOpponentScoreTooltip":function(d){return "Add one to the current opponent score."},
"incrementPlayerScore":function(d){return "score point"},
"incrementPlayerScoreTooltip":function(d){return "Oyunçunun hazırki xallarının üstünə bir gəl."},
"isWall":function(d){return "bu divardırmı"},
"isWallTooltip":function(d){return "Returns true if there is a wall here"},
"launchBall":function(d){return "launch new ball"},
"launchBallTooltip":function(d){return "Launch a ball into play."},
"makeYourOwn":function(d){return "Make Your Own Bounce Game"},
"moveDown":function(d){return "move down"},
"moveDownTooltip":function(d){return "Move the paddle down."},
"moveForward":function(d){return "irəli get"},
"moveForwardTooltip":function(d){return "Məni bir xana irəli apar."},
"moveLeft":function(d){return "move left"},
"moveLeftTooltip":function(d){return "Move the paddle to the left."},
"moveRight":function(d){return "move right"},
"moveRightTooltip":function(d){return "Move the paddle to the right."},
"moveUp":function(d){return "move up"},
"moveUpTooltip":function(d){return "Move the paddle up."},
"nextLevel":function(d){return "Təbriklər! Siz bu tapmacanı tamamladınız."},
"no":function(d){return "Xeyr"},
"noPathAhead":function(d){return "yol kəsilib"},
"noPathLeft":function(d){return "sola yol yoxdur"},
"noPathRight":function(d){return "sağa yol yoxdur"},
"numBlocksNeeded":function(d){return "Bu  tapmaca %1 blokla həll oluna bilər."},
"pathAhead":function(d){return "irəli yol var"},
"pathLeft":function(d){return "əgər sola yol varsa,"},
"pathRight":function(d){return "əgər sağa yol varsa,"},
"pilePresent":function(d){return "təpəcik var"},
"playSoundCrunch":function(d){return "play crunch sound"},
"playSoundGoal1":function(d){return "play goal 1 sound"},
"playSoundGoal2":function(d){return "play goal 2 sound"},
"playSoundHit":function(d){return "play hit sound"},
"playSoundLosePoint":function(d){return "play lose point sound"},
"playSoundLosePoint2":function(d){return "play lose point 2 sound"},
"playSoundRetro":function(d){return "play retro sound"},
"playSoundRubber":function(d){return "play rubber sound"},
"playSoundSlap":function(d){return "play slap sound"},
"playSoundTooltip":function(d){return "Play the chosen sound."},
"playSoundWinPoint":function(d){return "play win point sound"},
"playSoundWinPoint2":function(d){return "play win point 2 sound"},
"playSoundWood":function(d){return "play wood sound"},
"putdownTower":function(d){return "qülləni yerə qoy"},
"reinfFeedbackMsg":function(d){return "You can press the \"Try again\" button to go back to playing your game."},
"removeSquare":function(d){return "kvadratı yığışdır"},
"repeatUntil":function(d){return "təkrar et, ta ki"},
"repeatUntilBlocked":function(d){return "hələ ki, qabaqda yol var"},
"repeatUntilFinish":function(d){return "bitənə qədər təkrar et"},
"scoreText":function(d){return "Score: "+appLocale.v(d,"playerScore")+" : "+appLocale.v(d,"opponentScore")},
"setBackgroundRandom":function(d){return "set random scene"},
"setBackgroundHardcourt":function(d){return "set hardcourt scene"},
"setBackgroundRetro":function(d){return "set retro scene"},
"setBackgroundTooltip":function(d){return "Sets the background image"},
"setBallRandom":function(d){return "set random ball"},
"setBallHardcourt":function(d){return "set hardcourt ball"},
"setBallRetro":function(d){return "set retro ball"},
"setBallTooltip":function(d){return "Sets the ball image"},
"setBallSpeedRandom":function(d){return "set random ball speed"},
"setBallSpeedVerySlow":function(d){return "set very slow ball speed"},
"setBallSpeedSlow":function(d){return "set slow ball speed"},
"setBallSpeedNormal":function(d){return "set normal ball speed"},
"setBallSpeedFast":function(d){return "set fast ball speed"},
"setBallSpeedVeryFast":function(d){return "set very fast ball speed"},
"setBallSpeedTooltip":function(d){return "Sets the speed of the ball"},
"setPaddleRandom":function(d){return "set random paddle"},
"setPaddleHardcourt":function(d){return "set hardcourt paddle"},
"setPaddleRetro":function(d){return "set retro paddle"},
"setPaddleTooltip":function(d){return "Sets the paddle image"},
"setPaddleSpeedRandom":function(d){return "set random paddle speed"},
"setPaddleSpeedVerySlow":function(d){return "set very slow paddle speed"},
"setPaddleSpeedSlow":function(d){return "set slow paddle speed"},
"setPaddleSpeedNormal":function(d){return "set normal paddle speed"},
"setPaddleSpeedFast":function(d){return "set fast paddle speed"},
"setPaddleSpeedVeryFast":function(d){return "set very fast paddle speed"},
"setPaddleSpeedTooltip":function(d){return "Sets the speed of the paddle"},
"shareBounceTwitter":function(d){return "Check out the Bounce game I made. I wrote it myself with @codeorg"},
"shareGame":function(d){return "Oyununuzu bölüşün:"},
"turnLeft":function(d){return "sola dön"},
"turnRight":function(d){return "sağa dön"},
"turnTooltip":function(d){return "Məni 90 dərəcə sola və ya sağa döndərir."},
"whenBallInGoal":function(d){return "when ball in goal"},
"whenBallInGoalTooltip":function(d){return "Execute the actions below when a ball enters the goal."},
"whenBallMissesPaddle":function(d){return "when ball misses paddle"},
"whenBallMissesPaddleTooltip":function(d){return "Execute the actions below when a ball misses the paddle."},
"whenDown":function(d){return "when down arrow"},
"whenDownTooltip":function(d){return "Execute the actions below when the down arrow key is pressed."},
"whenGameStarts":function(d){return "oyun başladıqda"},
"whenGameStartsTooltip":function(d){return "Execute the actions below when the game starts."},
"whenLeft":function(d){return "when left arrow"},
"whenLeftTooltip":function(d){return "Execute the actions below when the left arrow key is pressed."},
"whenPaddleCollided":function(d){return "when ball hits paddle"},
"whenPaddleCollidedTooltip":function(d){return "Execute the actions below when a ball collides with a paddle."},
"whenRight":function(d){return "when right arrow"},
"whenRightTooltip":function(d){return "Execute the actions below when the right arrow key is pressed."},
"whenUp":function(d){return "when up arrow"},
"whenUpTooltip":function(d){return "Execute the actions below when the up arrow key is pressed."},
"whenWallCollided":function(d){return "when ball hits wall"},
"whenWallCollidedTooltip":function(d){return "Execute the actions below when a ball collides with a wall."},
"whileMsg":function(d){return "hələ ki,"},
"whileTooltip":function(d){return "Hasarlanmış əmrləri son nöqtəyə çatana qədər təkrarla."},
"yes":function(d){return "Bəli"}};