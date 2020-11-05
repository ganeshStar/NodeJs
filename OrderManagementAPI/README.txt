## You can used visual studio code to create and develop this backend REST API project


## Initiating the Back-end/REST API Node js Project

To initiate the back-end project let’s create a new empty project folder.Run the following command in terminal:

```bash
mkdir backend
```

## Change into that newly created folder by using visual studio code :

```bash
cd backend
```
## Let’s create a package.json file inside that folder by using the following command:

```bash
$ npm init -y
```

## With the package.json file available in the project folder we’re ready to add some dependencies to the project:

```bash
$ npm install express body-parser cors mongoose
```

## Let’s take a quick look at the four packages:

```bash
express: Express is a fast and lightweight web framework for Node.js. Express is an essential part of the MERN stack.

Node.js. Express is an essential part of the MERN stack.

body-parser: Node.js body parsing middleware.

cors: CORS is a node.js package for providing an Express middleware that can be used to enable 
CORS with various options. Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources 
on a web page to be requested from another domain outside the domain from which the first resource was served.

mongoose: A Node.js framework which lets us access MongoDB in an object-oriented way.

```
## Finally we need to make sure to install a global package by executing the following command:

``` bash
$ npm install -g nodemon
```

# Installing MondoDB

First of all we need to make sure that MongoDB is installed on your system. 
On MacOS this task can be completed by using the following command:

``` bash
$ brew install mongodb
```
If you’re working on Windows or Linux follow the installation instructions 
from https://docs.mongodb.com/manual/administration/install-community/.


``` bash
	create A manual database name as orderManagement in mongodb server when you working on window
```

## The following coding steps followed to develop order API  

``` bash
	1.Create a Mongoose Schema
	2.Implementing The Server Endpoints
	3.Testing The Server API With Postman
```

## Swagger UI Express installation .For swagger ui installation,Run following npm command and configure swagger in project using npm guid lines

``` bash
npm i swagger-ui-express
```

## To view Swagger UI documentation of this API use or type the following  URL in the browser

``` bash
 http://localhost:4000/api/api-docs/
```

## Start the server by using nodemon command:

``` bash
$ nodemon server
```

## Note:When try to run this existing project whitout node_modules folder,Run the following command to install reqauired packages which install all packages within node_modules folder

``` bash
 npm install package.json
```