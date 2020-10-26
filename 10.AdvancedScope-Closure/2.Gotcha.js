const findSomeone = () => {

    const speak = () => {
      console.log(who);
    };
  
    let who = 'Why hello there, Prof Plum!';
  
    return speak;
};
const someoneSpeak = findSomeone();
someoneSpeak(); // will return 'Why hello there, Prof Plum!'


// Here whenver you invloke timer the parent scope still executing so elapsed still increments
const makeTimer = () => {
    let elapsed = 0;

    const stopwatch = () => { return elapsed; };

    const increase = () => elapsed++;

    setInterval(increase, 1000);

    return stopwatch;
};

let timer = makeTimer();

// Another version with console.log

const makeTimer = () => {
    console.log('initialized');
    let elapsed = 0;
    console.log(elapsed);
  
    const stopwatch = () => {
      console.log('stopwatch');
      return elapsed;
    };
  
    const increase = () => elapsed++;
  
    setInterval(increase, 1000);
  
    return stopwatch;
  
};
  
const timer = makeTimer();