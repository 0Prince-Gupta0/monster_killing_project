const attackValue=8;  
const strongAttackValue=12;
const monsterAttackValue=10; 
const healValue =2;
let hasBonusLife=true;

const enteredHealthValue= parseInt(prompt('Enter Maximum Heatlh for You and Monster.','100' )); 
if(isNaN(enteredHealthValue) || enteredHealthValue<=0)
{
   maxHealth=100;
}
let maxHealth=enteredHealthValue;   
let currentMonsterHealth= maxHealth; 
let currentPlayerHealth= maxHealth; 
let healing=0; 

adjustHealthBars(maxHealth);   

function endround(){ 
   if (currentMonsterHealth<=0 && currentPlayerHealth>0)
    {alert('yeah!!!!you won');
   reset();} 
    else if(currentPlayerHealth<=0 && currentMonsterHealth>0)
    {alert('afsos!!! ap haar gye');
   reset();}  
    else if(currentMonsterHealth<=0 && currentPlayerHealth<=0)
    {alert('game is draw');
   reset();} 
}
function attackType (typeOfAttack){ 
    const damage= dealMonsterDamage(typeOfAttack); 
    currentMonsterHealth-=damage; 
    const playerDamage = dealPlayerDamage(monsterAttackValue);
    currentPlayerHealth-=playerDamage;
    
    if(currentPlayerHealth<=0 && hasBonusLife) 
    {
       removeBonusLife();
       hasBonusLife=false;
       alert('Saved by bonus life'); 
       currentPlayerHealth=100;
       setPlayerHealth(100); 
       endround();
    } 


    endround();
}   

function reset(){
currentMonsterHealth=maxHealth;
currentPlayerHealth=maxHealth;
resetGame(maxHealth);
}
function healPlayer(){  
   let healing;
   if(currentPlayerHealth>=maxHealth-healValue)
{
 alert('you cant heal more'); 
 healing=maxHealth-currentPlayerHealth;
}
else{
   healing=healValue;
}
   increasePlayerHealth(healValue);
   currentPlayerHealth+= healValue;
   endround();
 }

function attack(){
   attackType(attackValue); 
 }
function strongAttack(){
   attackType(strongAttackValue)
}
attackBtn.addEventListener('click', attack) 
strongAttackBtn.addEventListener('click', strongAttack) 
healBtn.addEventListener('click', healPlayer)