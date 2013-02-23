var _ = require('underscore');
var casparCG = require('./');
var server = new casparCG.casparServer('localhost');
var command = new casparCG.amcp.amcpCommands.Cls();
server.amcpServer.connect();
server.amcpServer.sendCommand(command.toString());
server.amcpServer.sendCommand((new casparCG.amcp.amcpCommands.Tls()).toString());
