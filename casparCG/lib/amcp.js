var amcpSocket = require('./amcpSocket');
var _ = require('underscore');

function server(h, p){

	var host = h || 'localhost';
	var port = p || 5250;
	var id = _.uniqueId('amcpServer_');
	
	this.getHost = function(){ return host;};
	this.getPort = function(){ return port;};
	this.getId = function(){ return id;};
	
	this.connection = new amcpSocket(host, port);
	
	this.connect = function(){
		this.connection.connect();
	}
	
	this.sendCommand = function(command){
		this.connection.addCommand(command);
	}
	
}

module.exports = function(){
	// Defaults for AMCP servers
	this.commands = require('./amcpCommands');
	
	this.createServer = function(host, port){
		return new server(host, port);
	};
	
}