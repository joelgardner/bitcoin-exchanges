install                     : install-server install-client

install-server      : server/package.json
																				cd server;      \
																				npm install;  \
																				cd ..;              \

install-client      :   client/package.json
																				cd client;      \
																				npm install;    \
																				cd ..;              \

build-client    :   client/src/webpack.config.js
																cd client/src;          \
																webpack;

run-webpack-dev-server  : client/src/webpack-dev-server.js
																										cd client/src;                                          \
																										node webpack-dev-server.js;