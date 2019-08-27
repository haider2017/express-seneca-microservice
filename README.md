# express-seneca-microservice
A simple application containing a server and one microservice. 
The server is built using express skeleton. 
Server is the entry point of our application. It receives a user request "to calculate sales tax" on it's API and forwards the request to the clientservice. 
The client calculates the sales tax and returns the final result back to server which is then rendered to the user in a view
