var net = require("net");

function Queue(){
	
	var queue = new Array();
	var queueBuffer = new Array();
	
	var locked = false;
	
	this.add = function(item){
		if(locked){
			queueBuffer.push(item);
		}
		else{
			queue.push(item);
		}
	};
	
	this.unlock = function(){
		queue.concat(queueBuffer);
		queueBuffer = new Array();
		locked = false;
	};
	
	this.next = function(){
		if(this.ready())
		{
			locked = true;
			var c = queue.shift();
			return c;
		}
	};
	
	this.ready = function(){
		if(queue.length === 0 || locked === true){
			return false;
		}
		
		else{
			return true;
		}
	};
}

module.exports = function(h, p){

	var host = h;
	var port = p;
	
	var connected = false;
	
	var queue = new Queue();
	
	var socket = new net.Socket();
	socket.setEncoding('utf8');
	
	this.connect = function(){
		socket.connect(port, host);
	};
	
	var send = function(){
		if(connected && queue.ready()){
			var c = queue.next();
			c = c+"\r\n";
			socket.write(c);
		}
	}
	
	this.addCommand = function(command){
		queue.add(command);
		send();
	}
	
	socket.on('connect', function(){
		connected = true;
		console.log('connected');
		send();
		
	});
	
	socket.on('data', function(data){
		console.log(data);
		queue.unlock();
		send();
	});
	
	socket.on('error', function(error){
		console.log(error);
	});
	
	socket.on('close', function(had_error){
		connected = false;
	});
	
	socket.on('drain', function(){
	});
	
};