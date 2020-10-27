### Installation

If you do not have any node modules installed locally or a package.json file use the following command

### 'run npm init '

Install the necessary dependencies if not present

npm install express 
npm install express body-parser --save-dev
npm install node-env-run nodemon npm-run-all --save-dev
npm install cors
npm install mongodb

### Compatibility

Can run on both windows and linux

### Extract the project

Extract the project files to a directory of your choice

### Open terminal

To run the project, open two terminals of cmd (command line prompt)
and navigate to the directory of the project for each of them.

### 'cd dir/project

Once you have entered into the directory for both terminals, run one of the scripts for
each terminal
 
E.g... Terminal one
### `npm start`

Terminal two
### `npm run server`

If successful, the single page app should launch automatically, and a confirmation
message confirming the server is running. Alternatively you can also
use the run-p command to run both the server and client in one instance


### --------------------Additional information------------------ ###

By default, the server runs on port 3001, you may need to configure it,
if you do, you must also configure the port on the proxy (package.json).

You should also configure the port located in the whitelist (src/server/server.js)

### MongoDB

For this project mongodb runs on port 27017 without authentication, if you wish to 
use a different port to connect to the database or use authentication, 
you can configure the url (src/server/server.js) or consult the official documentation
