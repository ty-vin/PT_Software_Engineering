/*

Write a ~1 sentence summary for each one:

DRY - "Don’t repeat yourself" by avoiding repitition.

KISS - "Keep it simple, sweetie!" - Simpler code has fewer bugs and is easier to modify. 

Avoid creating a YAGNI - "You aren’t going to need it" - Only add what you need.

Do the simplest thing that could possibly work - Try to code the simplest thing that will work and build from there.

Don't make me think - Create code that is easy to unerstand with minimum effort.

Write code for the maintainer - Make the code easy for someone else to maintain in the future.

Single responsibility principle - Create a component of code that is responsibile and works for one function.

Avoid premature optimization - Only optimize when the code works.

Separation of concerns - Different areas of functionality should be managed by minimally overlappying mods of code.


Which ones surprise you (if any)?
    The single responsibility principle.

Which one is currently giving you the most struggle? I'm not really sure which is most troublesome. I'm still learning to code.

*/

const f = l => { // f is equal to l and is passed to a function
    let es = 0, p = 0, c = 1, n = 0  //
    while (c <= l) {
      n = c + p;
      [c, p] = [n, c]
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  
 // console.log(f(55))

  const priS = () => {
    for (i = 1; i <= 11; i++){
        a = a++; 
       // a = a + '#';
    }  
    console.log (a);

    /*console.log (10 + 10);
        console.log ('#');
        console.log ('##');
        console.log ('###');
        console.log ('####')
        console.log ('#####'); */
  };
priS();
