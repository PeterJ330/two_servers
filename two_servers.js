// Require/import the HTTP module
var http = require("http");

    // Define a port to listen for incoming requests
    var PORT_ONE = 7000;

    // Create a generic function to handle requests and responses
    function handleRequestOne(request, response) {

        // Send the below string to the client when the user visits the PORT URL
        response.end("Great job! Keep up the good work!!" + request.url);
    }

    // Use the Node HTTP package to create our server.
    // Pass the handleRequest function to empower it with functionality.
    var serverOne = http.createServer(handleRequestOne);

    // Start our server so that it can begin listening to client requests.
    serverOne.listen(PORT_ONE, function () {

        // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT_ONE);
    });


    var PORT_TWO = 7500;
    function handleRequestTwo(request, response) {
        response.end("Yikes, did you forget to put on deodorant today?! " + request.url);
    }

    var serverTwo = http.createServer(handleRequestTwo);
    serverTwo.listen(PORT_TWO, function () {
        console.log("Server listening on: http://localhost:" + PORT_TWO);
    });

    var PORT_THREE = 8080;
    function handleRequestThree(request, response) {
        response.end("This is port 8080 " + request.url);
    }

    var serverTwo = http.createServer(handleRequestThree);
    serverTwo.listen(PORT_THREE, function () {
        console.log("Server listening on: http://localhost:" + PORT_THREE);
    });