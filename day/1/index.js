const json = require( './input.json' )

const data = json.reduce( ( obj, num ) => {
  obj[ num ] = num

  return obj
}, {} )

const answer = Object.keys( data )
  .filter( num => !!data[ 2020 - num ] )
  .reduce( ( multiplier, num ) => {
    console.log( 'multiplier, num', multiplier, num );
    return multiplier ? multiplier * num : num
  }, 0 )

console.log( 'answer', answer );