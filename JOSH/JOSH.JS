
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


    const CALL_REST_SERVICE=function(){ "use strict"

        alert("[TODO:CALL_REST_SERVICE]");

    };;

    const CreateDocumentBodyIfNotExists=function(){

        var doc_bod =( document.body );
        if(!doc_bod){
            doc_bod = document.createElement("BODY");
            document.body=( doc_bod );  
        };;

        //:Don't return anything because we need to use
        //:the jquery wrapped document body.
        return( undefined /** void **/ );
    };;

    CreateDocumentBodyIfNotExists();
    var doc_bod=$( document.body );

    doc_bod.append(
        $("<button>")
            .text( "TEST" )
            .click( CALL_REST_SERVICE )
    );;