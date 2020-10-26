const newClue = (name) => {
    const length = name.length;
  
    return (weapon) => {
      let clue = length + weapon.length;
      return !!(clue % 2);
    };
};
  
function countClues() {
    var n = 0;
    return {
        count: function() { return ++n; },
        reset: function() { return n = 0; }
    };
};

//ES6 equivalent
const countClues = () => {
    let n = 0;

    return {
        count: () => n++,
        reset: () => n = 0
    };
};
  
const c = countClues(), d = countClues();

c.count();
d.count();
c.reset();
c.count();
d.count();