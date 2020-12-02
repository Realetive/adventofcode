const json = require( './input.json' )

const data = json.reduce( ( obj, num ) => {
  obj[ num ] = num

  return obj
}, {} )

const answer = Object.keys( data )
  .reduce( ( multiplier, num1, _, arr ) => {
    if ( num1 < ( 2020 / 3 ) ) {
      arr.filter( num2 => num2 < ( ( 2020 - num1 ) / 2 ) )
        .forEach( num2 => {
          const num3 = data[ 2020 - num1 - num2 ]
          if ( num3 ) {
            multiplier = num1 * num2 * num3
          }
        }, 0 )         
    }
    
    return multiplier
  }, 0 )

console.log( 'answer', answer );