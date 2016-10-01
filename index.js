const app = require( 'express' )();
const path = require( 'path' );

app.get( '/', ( req, res ) => {
  res.sendFile( path.join( `${ __dirname }/home.html` ));
});

app.listen( 3000, () => {
  console.log( 'Listening on http://localhost:3000' );
});
