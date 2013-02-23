var _ = require('underscore');

var amcp = require('./lib/amcp');

this.servers = new Object();

this.amcp = amcp;

this.server = function(host, protocols){
	
	var.id = _.uniqueId('casparServer_');
	var host = host;
	
	this.getID = function(){return id};
	this.host = host || 'localhost';
	this.amcpServer = amcp.getServer(this.host);
	
}

