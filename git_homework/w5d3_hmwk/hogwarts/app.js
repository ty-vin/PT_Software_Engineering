

/*
if (typeof jQuery == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file!')};
*/

/*
Query for your div with the id of container and set it to a variable named $container
console.log $container.   Create an <h1> element and set it to a variable called $h1 and console log it. 
Add some text inside the h1 element. Example text: 'Hogwarts'
  */

  $(() => {
    // put jQuery in here
    let $container = $('#container');  // id of container and set it to a variable named $container console.log $container.
    console.log($container);

    let $h1 = $('<h1>');         // Create an <h1> element and set it to a variable called $h1 and console log it
    $h1.text('Hogwarts 5.3');
    $container.append($h1);     // appended $h1 so that text appears on page
    console.log($h1.text);      // console logged 'Hogwarts 5.3'
});

