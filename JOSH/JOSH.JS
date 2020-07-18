
$( document ).prop( "title" , "[JOSH.*]" );

    
    //:nice to have, but let's get basic functionality
    //:working first.
    //:
    //:Todo: Create some type of movable dialog on this
    //:      page using jquery.

    //:  // first invoke jquery modal the standard way
    //:  $('#myModal').modal();
    //:  
    //:  // now make it draggable
    //:  $('#myModal').draggable();   

    function SOME_FUNCTION_HERE(){
        alert("[hello]");
    };;

    $("<button>")
        .text( "TEST" )
        .click( SOME_FUNCTION_HERE )
    ;;