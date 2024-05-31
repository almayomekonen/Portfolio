// Importing the server class from the websocket library.
const webSocketServer = require("websocket").server;

// Importing the http library because WebSocket connections initially start as HTTP requests.
const http = require("http");

// Server address and port
const webSocketServerPort = 8000;

// Create a server instance
const server = http.createServer();

// Listen on the specified port
server.listen(webSocketServerPort);
console.log("Server listening on port:", webSocketServerPort);

// Function to check if the request origin is allowed
function originIsAllowed(origin) {
  return true; // Allow all origins for demonstration purposes
}

// Create a WebSocket server instance and attach it to the HTTP server
const wsServer = new webSocketServer({
  httpServer: server,
  // Add CORS headers to the WebSocket handshake response
  autoAcceptConnections: false, // Disable auto-accept to allow adding headers
  // Check origin and add appropriate CORS headers
  verifyClient: function (info, cb) {
    // Check if the request origin is allowed
    const origin = info.origin;
    if (originIsAllowed(origin)) {
      // Allow connection
      cb(true);
    } else {
      // Reject connection
      cb(false);
    }
  },
});

// Define default questions for a fullstack developer tutor
const defaultQuestions = [
  "What programming languages and technologies are you interested in learning?",
  "What is your current level of experience with web development?",
  "Do you have any specific goals or projects you'd like to work on?",
];

// Define automatic answers corresponding to each default question
const automaticAnswers = {
  "What programming languages and technologies are you interested in learning?":
    "I teach a wide range of technologies, including HTML, CSS, React, Node.js, and MongoDB ets.",
  "What is your current level of experience with web development?":
    "Embark on your web development journey with confidence. My tailored teaching approach is designed to meet your unique needs and goals.",
  "Do you have any specific goals or projects you'd like to work on?":
    "I've successfully taught numerous students and helped them build projects ranging from basic websites to full-stack applications. Let me know your goals, and we can work together to achieve them.",
};

// Updated code for logging and sending questions
wsServer.on("request", (request) => {
  console.log("Connection request from:", request.origin);

  // first argument is null to indicate that no subprotocol is provided
  const connection = request.accept(null, request.origin);

  console.log("Connection established.");

  // Send default questions to the user upon connection
  defaultQuestions.forEach((question) => {
    console.log("Sending question to client:", question);
    connection.sendUTF(JSON.stringify({ type: "question", question }));
  });

  connection.on("message", (message) => {
    console.log("Received Message:", message.utf8Data);

    try {
      // Parse the incoming message as JSON
      const data = JSON.parse(message.utf8Data);

      // Check if the received message is a question
      if (data.type === "question") {
        // Process the question
        const receivedQuestion = data.question;

        // Check if the received question has an automatic answer
        if (automaticAnswers.hasOwnProperty(receivedQuestion)) {
          // Send the automatic answer back to the client
          const automaticAnswer = automaticAnswers[receivedQuestion];

          connection.sendUTF(
            JSON.stringify({
              type: "answer",
              question: receivedQuestion,
              answer: automaticAnswer,
            })
          );
        } else {
          console.log(
            "No automatic answer found for the question:",
            receivedQuestion
          );
        }
      }
    } catch (error) {
      console.error("Error parsing message as JSON:", error);
    }
  });

  connection.on("close", (reasonCode, description) => {
    console.log(
      `Connection closed: ${connection.remoteAddress} (${reasonCode} - ${description})`
    );
  });
});
