//The three code snippets here will run cleanly in your console.

//Problem One: Countdown

//In the code for the "solution", decrementing happens before the code runs, 
// meaning whatever amount of time is set to be countdown, the first number 
// never happens. So if you try to run with a blastoff number of "4", the countdown 
// starts at 3. Below I added a prompt for the countdown, set the countdown on 
// an arrow function and moved the decrementer.
let blastoff = prompt("Set the countdown timer!");
let time = parseInt(blastoff);

function countDown(time){
let timer = setInterval(() => {

        if (time !== 0){
        console.log(time);
        }

        else {
        clearInterval(timer);
        console.log("DONE!");
        }

        time--;

    },1000)

};
 
countDown(time); 

//And here's a further amount of playing with the code where I separated the countdown function from the call to setInterval. 
// This forced me to learn how to deal with set/clear interval when used in an if else statement. To see the full countdown, 
// enter 20 when prompted.  

let blastoff = prompt("Set the countdown timer!");
let time = parseInt(blastoff);
let timer = setInterval(tickTock, 1000);

function tickTock(){
if (time === 20){
  console.log(`${time} seconds and counting.`);
  }
  else if (time === 15){
  console.log(`T minus ${time} seconds, guidance is internal.`);
  }
  else if (time === 9){
  console.log(`${time}, Ignition sequence starts...`);
  }
  else if (time !== 0){
  console.log(`${time}...`);
  }
  else {
  clearInterval(timer);
  console.log(`${time}, all engines running... LIFT-OFF! We have a lift-off, 32 minutes past the hour. Lift-Off on Apollo 11."`);
  }
  time--;
}

function countDown(time){
  timer;
  };
 
countDown(time); 

//Problem Two: Randomizer. I dressed this up to be a lap betting routine where you guess how many time the computer has to 
//run the program before hitting a number above .75. If you guess greater than that number, you wine. If you guess less 
//then that number, well, better luck next time. My goal was to wrap some extra commands around the problem and see if 
//I got expected behavior.

let anteUp = prompt("Who's the mark?");
let foldEm = parseFloat(anteUp);

function randomGame(){
    let randoLap;
    let randoLaps = 0;
    let lapTracker = setInterval(() => {
        randoLap = Math.random().toFixed(2);
        randoLaps++;
        console.log(`Try #${randoLaps}: ${randoLap}`);

        if (randoLap > .75) {

        clearInterval(lapTracker);
        console.log(`It took ${randoLaps} laps to get a number greater than .75, but it happened. Are you proud of yourself?`);
        
        if (foldEm >= randoLaps){console.log(`${anteUp} laps my foot. Not only are you a cheat, you're a gutless cheat as well.`); 
        } else {console.log(`${anteUp} laps... What are you spraying money around like that for? You could've been nailed.`); 
      }
    }
  }, 1000); 

}

randomGame();
