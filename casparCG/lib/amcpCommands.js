// All commands, as their corosponding AMCP text

// Basic
var LOADBG = "LOADBG";
var LOAD = "LOAD";
var PLAY = "PLAY";
var PAUSE = "PAUSE";
var STOP = "STOP";
var CLEAR = "CLEAR";
var CALL = "CALL";
var SWAP = "SWAP";
var ADD = "ADD";
var REMOVE = "REMOVE";
var PRINT = "PRINT";
var SET = "SET";
var LOOP = "LOOP";
var CUT = "CUT";
var MIX = "MIX";
var PUSH = "PUSH";
var WIPE = "WIPE";
var SLIDE = "SLIDE";
var LEFT = "LEFT";
var RIGHT = "RIGHT";
var SEEK = "SEEK";
var LENGTH = "LENGTH";
var FILTER = "FILTER";
var AUTO = "AUTO";
var MODE = "MODE";
// Data
var DATA_STORE = "DATA STORE";
var DATA_RETRIEVE = "DATA RETRIEVE";
var DATA_LIST = "DATA LIST";
var DATA_REMOVE = "DATA REMOVE";
// CG
var CG_ADD = "ADD";
var CG_REMOVE = "REMOVE";
var CG_CLEAR = "CLEAR";
var CG_PLAY = "PLAY";
var CG_STOP = "STOP";
var CG_NEXT = "NEXT";
var CG_UPDATE = "UPDATE";
var CG_INVOKE = "INVOKE";
// Mixer
var MIXER_KEYER = "KEYER";
var MIXER_BLEND = "BLEND";
var MIXER_OPACITY = "VIDEO OPACITY";
var MIXER_BRIGHTNESS = "BRIGHTNESS";
var MIXER_SATURATION = "SATURATION";
var MIXER_CONTRAST = "CONTRAST";
var MIXER_LEVELS = "LEVELS";
var MIXER_FILL = "FILL";
var MIXER_CLIP = "CLIP";
var MIXER_GRID = "GRID";
var MIXER_VOLUME = "VOLUME";
var MIXER_CLEAR = "CLEAR";
var CHANNEL_GRID = "CHANNEL_GRID";
// Query
var CINF = "CINF";
var CLS = "CLS";
var TLS = "TLS";
var VERSION = "VERSION";
var INFO = "INFO";
var DIAG = "DIAG";
var BYE = "BYE";

// String Defaults for AMCP commands
var space = " ";
var endline = "\r\n";

// Basic Commands and Helpers
function AdditionalParameters(){
	this.loop = null;
	this.transition = null;
	this.duration = null;
	this.tween = null;
	this.direction = null;
	this.seek = null;
	this.length = null;
	this.filter = null;
	this.auto = null;
	
	this.toString = function(){
		var parameters = ""
		if(this.loop){
			parameters = parameters+space+LOOP;
		}
		if(this.transition){
			parameters = parameters+space+this.transition;
		}
		if(this.duration){
			parameters = parameters+space+this.duration;
		}
		if(this.tween){
			parameters = parameters+space+this.tween;
		}
		if(this.direction){
			parameters = parameters+space+this.direction;
		}
		if(this.seek){
			parameters = parameters+space+SEEK+space+this.seek;
		}
		if(this.length){
			parameters = parameters+space+LENGTH+space+this.length;
		}
		if(this.filter){
			parameters = parameters+space+FILTER+space+this.filter;
		}
		if(this.auto){
			parameters = parameters+space+AUTO;
		}
		return parameters;
	};
}

function Basic(){

	this.command = null;
	this.channel = null;
	this.layer = null;
	this.clip = null;
	this.channel2 = null;
	this.layer2 = null;
	this.parameter = null;
	this.additionalParameters = new AdditionalParameters();
	
	this.toString = function(){
		var command = ""+this.command;
		if(this.channel){
			command = command+space+this.channel;
		}
		if(this.layer){
			command = command+"-"+this.layer;
		}
		if(this.clip){
			command = command+space+this.clip;
		}
		if(this.channel2){
			command = command+space+this.channel2
		}
		if(this.layer2){
			command = command+"-"+this.layer2;
		}
		if(this.parameter){
			if(this.command === SET){
				command = command+space+MODE+space+this.parameter;
			}
			else
			{
				command = command+space+this.parameter;
			}
		}
		if(this.additionalParameters){
			command = command+space+this.additionalParameters.toString();
		}
		return command+endline;
	};
}

exports.LoadBG = function(channel, layer, clip, additionalParameters){
	Basic.call(this);
	this.command = LOADBG;
	
	if(channel){
		this.channel = channel;
	}
	if(layer){
		this.layer = layer;
	}
	if(clip){
		this.clip = clip;
	}
	if(additionalParameters){
		this.additionalParameters = additionalParameters;
	}
	
};

exports.Load = function(channel, layer, clip, additionalParameters){
	Basic.call(this);
	
	this.command = LOAD;
	
	if(channel){
		this.channel = channel;
	}
	if(layer){
		this.layer = layer;
	}
	if(clip){
		this.clip = clip;
	}
	if(additionalParameters){
		this.additionalParameters = additionalParameters;
	}
	
};

exports.Play = function(channel, layer, clip, additionalParameters){
	Basic.call(this);
	
	this.command = PLAY;
	
	if(channel){
		this.channel = channel;
	}
	if(layer){
		this.layer = layer;
	}
	if(clip){
		this.clip = clip;
	}
	if(additionalParameters){
		this.additionalParameters = additionalParameters;
	}
	
};

exports.Pause = function(channel, layer){
	Basic.call(this);
	
	this.command = PAUSE;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	
};

exports.Stop = function(channel, layer){
	Basic.call(this);
	
	this.command = STOP;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	
};

exports.Clear = function(channel, layer){
	Basic.call(this);
	
	this.command = CLEAR;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	
};

exports.Call = function(channel, layer, parameter){
	Basic.call(this);
	
	this.command = CALL;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(parameter){
		this.parameter = parameter;
	}
	
	
};

exports.Swap = function(channel, layer, channel2, layer2){
	Basic.call(this);
	
	this.command = SWAP;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(channel2){
		this.channel2 = channel2;
	}
	
	if(layer2){
		this.layer2 = layer2;
	}
	
	
};

exports.Add = function(channel, parameter){
	Basic.call(this);
	
	this.command = ADD;
	
	if(channel){
		this.channel = channel;
	}
	
	if(parameter){
		this.parameter = parameter;
	}
	
	
};

exports.Remove = function(channel, parameter){
	Basic.call(this);
	
	this.command = REMOVE;
	
	if(channel){
		this.channel = channel;
	}
	
	if(parameter){
		this.parameter = parameter;
	}
	
	
};

exports.Print = function(channel){
	Basic.call(this);

	this.command = PRINT;
	
	if(channel){
		this.channel = channel;
	}
	
	
};

exports.Set = function(channel, parameter){
	Basic.call(this);
	
	this.command = SET;
	
	if(channel){
		this.channel = channel;
	}
	
	if(parameter){
		this.parameter = parameter;
	}
	
	
};

// Data commands and helpers

function Data(){
	this.command = null;
	this.name = null;
	this.data = null;
	
	this.toString = function(){
		var command = this.command+"";
		
		if(this.name){
			command = command+space+this.name;
		}
		
		if(this.data){
			command = command+space+this.data;
		}
		
		return command;
	}
}

exports.DataStore = function(name, data){
	Data.call(this);
	
	this.command = DATA_STORE;
	
	if(name){
		this.name = name;
	}
	
	if(data){
		this.data = data;
	}
}

exports.DataRetrieve = function(name, data){
	Data.call(this);
	
	this.command = DATA_RETRIEVE;
	
	if(name){
		this.name = name;
	}
	
	if(data){
		this.data = data;
	}
}

exports.DataList = function(){
	Data.call(this);
	
	this.command = DATA_LIST;

}

exports.DataRemove = function(name, data){
	Data.call(this);
	
	this.command = DATA_REMOVE;
	
	if(name){
		this.name = name;
	}
}

// Template Graphics commands and helpers

function TemplateData(){

}

function CG(){
	this.command = null;
	this.channel = null;
	this.layer = null;
	this.flashLayer = null;
	this.template = null;
	this.playOnLoad = null;
	this.templateData = new TemplateData();
	this.method = null;
	
	this.toString = function(){
		var command = "CG";
		
		if(this.channel){
			command = command+space+this.channel;
		}
		
		if(this.layer){
			command = command+"-"+this.layer;
		}
		
		command = command+space+this.command;
		
		if(this.flashLayer){
			command = command+space+this.flashLayer;
		}
		
		if(this.template){
			command = command+space+this.template;
		}
		
		if(this.playOnLoad){
			command = command+space+this.playOnLoad;
		}
		
		if(this.templateData){
			command = command+space+this.templateData;
		}
		
		if(this.method){
			command = command+space+this.method;
		}
		
		return command;
	};
}

exports.CGAdd = function(channel, layer, flashLayer, template, playOnLoad, templateData){
	CG.call(this);
	
	this.command = CG_ADD;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(flashLayer){
		this.flashLayer = flashLayer;
	}
	
	if(template){
		this.template = template;
	}
	
	if(playOnLoad){
		this.playOnLoad = playOnLoad;
	}
	
	if(templateData){
		this.templateData = templateData;
	}
}

exports.CGRemove = function(channel, layer, flashLayer){
	CG.call(this);
	
	this.command = CG_REMOVE;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(flashLayer){
		this.flashLayer = flashLayer;
	}

}

exports.CGClear = function(channel, layer){
	CG.call(this);
	
	this.command = CG_CLEAR;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
}

exports.CGPlay = function(channel, layer, flashLayer){
	CG.call(this);
	
	this.command = CG_PLAY;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(flashLayer){
		this.flashLayer = flashLayer;
	}

}

exports.CGStop = function(channel, layer, flashLayer){
	CG.call(this);
	
	this.command = CG_STOP;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(flashLayer){
		this.flashLayer = flashLayer;
	}

}

exports.CGNext = function(channel, layer, flashLayer){
	CG.call(this);
	
	this.command = CG_NEXT;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(flashLayer){
		this.flashLayer = flashLayer;
	}

}

exports.CGUpdate = function(channel, layer, flashLayer, templateData){
	CG.call(this);
	
	this.command = CG_UPDATE;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(flashLayer){
		this.flashLayer = flashLayer;
	}
	
	if(templateData){
		this.templateData = templateData;
	}

}

exports.CGInvoke = function(channel, layer, flashLayer, method){
	CG.call(this);
	
	this.command = CG_INVOKE;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(flashLayer){
		this.flashLayer = flashLayer;
	}
	
	if(method){
		this.method = method;
	}

}

// Mixer commands and helper functions

function Mixer(){

	this.command = null;
	this.channel = null;
	this.layer = null;
	this.keyer = null;
	this.blend = null;
	this.opacity = null;
	this.brightness = null;
	this.saturation = null;
	this.contrast = null;
	this.volume = null;
	this.min_input = null;
	this.max_input = null;
	this.gamma = null;
	this.min_output = null;
	this.max_output = null;
	this.x = null;
	this.y = null;
	this.xScale = null;
	this.yScale = null;
	this.resolution = null;
	this.duration = null;
	this.tween = null;
	
	this.toString = function(){
		var command = "MIXER";
		
		if(this.channel){
			command = command+space+this.channel;
		}
		
		if(this.layer){
			command = command+"-"+this.layer;
		}
		
		if(this.command === MIXER_KEYER){
			command = command+space+this.command+space+this.keyer;
		}
		
		if(this.command === MIXER_BLEND){
			command = command+space+this.command+space+this.blend;
		}
		
		if(this.command === MIXER_OPACITY){
			command = command+space+this.command+space+this.opacity;
		}
		
		if(this.command === MIXER_BRIGHTNESS){
			command = command+space+this.command+space+this.brightness;
		}
		
		if(this.command === MIXER_SATURATION){
			command = command+space+this.command+space+this.saturation;
		}
		
		if(this.command === MIXER_CONTRAST){
			command = command+space+this.command+space+this.contrast;
		}
		
		if(this.command === MIXER_LEVELS){
			command = command+space+this.command;
		}
		
		if(this.command === MIXER_FILL){
			command = command+space+this.command;
		}
		
		if(this.command === MIXER_CLIP){
			command = command+space+this.command;
		}
		
		if(this.command === MIXER_GRID){
			command = command+space+this.command;
		}
		
		if(this.command === MIXER_VOLUME){
			command = command+space+this.command+space+this.volume;
		}
		
		if(this.command === MIXER_CLEAR){
			command = command+space+this.command;
		}
		
		if(this.min_input){
			command = command+space+this.min_input;
		}
		
		if(this.max_input){
			command = command+space+this.max_input;
		}
		
		if(this.gamma){
			command = command+space+this.gamma;
		}
		
		if(this.min_output){
			command = command+space+this.min_output;
		}
		
		if(this.max_output){
			command = command+space+this.max_output;
		}
		
		if(this.x){
			command = command+space+this.x;
		}
		
		if(this.y){
			command = command+space+this.y;
		}
		
		if(this.xScale){
			command = command+space+this.xScale;
		}
		
		if(this.yScale){
			command = command+space+this.yScale;
		}
		
		if(this.resolution){
			command = command+space+this.resolution;
		}
		
		if(this.duration){
			command = command+space+this.duration;
		}
		
		if(this.tween){
			command = command+space+this.tween;
		}
		
		if(this.command === CHANNEL_GRID){
			command = this.command;
		}
		
		return command;
	};
	
}

exports.MixerKeyer = function(channel, layer, keyer){
	Mixer.call(this);
	
	this.command = MIXER_KEYER;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(keyer){
		this.keyer = keyer;
	}
	
}

exports.MixerBlend = function(channel, layer, blend){
	Mixer.call(this);
	
	this.command = MIXER_BLEND;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(blend){
		this.blend = blend;
	}
	
}

exports.MixerOpacity = function(channel, layer, opacity, duration, tween){
	Mixer.call(this);
	
	this.command = MIXER_OPACITY;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(opacity){
		this.opacity = opacity;
	}
	
	if(duration){
		this.duration = duration;
	}
	
	if(tween){
		this.tween = tween;
	}
	
}

exports.MixerBrightness = function(channel, layer, brightness, duration, tween){
	Mixer.call(this);
	
	this.command = MIXER_BRIGHTNESS;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(brightness){
		this.brightness = brightness;
	}
	
	if(duration){
		this.duration = duration;
	}
	
	if(tween){
		this.tween = tween;
	}
	
}

exports.MixerSaturation = function(channel, layer, saturation, duration, tween){
	Mixer.call(this);
	
	this.command = MIXER_SATURATION;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(saturation){
		this.saturation = saturation;
	}
	
	if(duration){
		this.duration = duration;
	}
	
	if(tween){
		this.tween = tween;
	}
	
}

exports.MixerContrast = function(channel, layer, contrast, duration, tween){
	Mixer.call(this);
	
	this.command = MIXER_CONTRAST;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(saturation){
		this.contrast = contrast;
	}
	
	if(duration){
		this.duration = duration;
	}
	
	if(tween){
		this.tween = tween;
	}
	
}

exports.MixerLevels = function(channel, layer, min_input, max_input, gamma, min_output, max_output, duration, tween){
	Mixer.call(this);
	
	this.command = MIXER_LEVELS;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(min_input){
		this.min_input = min_input;
	}
	
	if(max_input){
		this.max_input = max_input;
	}
	
	if(gamma){
		this.gamma = gamma;
	}
	
	if(min_output){
		this.min_output = min_output;
	}
	
	if(max_output){
		this.max_output = max_output;
	}
	
	if(duration){
		this.duration = duration;
	}
	
	if(tween){
		this.tween = tween;
	}
	
}

exports.MixerFill = function(channel, layer, x, y, xScale, yScale, duration, tween){
	Mixer.call(this);
	
	this.command = MIXER_FILL;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(y){
		this.y = y;
	}
	
	if(xScale){
		this.xScale = xScale;
	}
	
	if(yScale){
		this.yScale = yScale;
	}
	
	if(duration){
		this.duration = duration;
	}
	
	if(tween){
		this.tween = tween;
	}
	
}

exports.MixerClip = function(channel, layer, x, y, xScale, yScale, duration, tween){
	Mixer.call(this);
	
	this.command = MIXER_CLIP;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(y){
		this.y = y;
	}
	
	if(xScale){
		this.xScale = xScale;
	}
	
	if(yScale){
		this.yScale = yScale;
	}
	
	if(duration){
		this.duration = duration;
	}
	
	if(tween){
		this.tween = tween;
	}
	
}

exports.MixerGrid = function(channel, resolution, duration, tween){
	Mixer.call(this);
	
	this.command = MIXER_GRID;
	
	if(channel){
		this.channel = channel;
	}
	
	if(resolution){
		this.resolution = resolution;
	}
	
	if(duration){
		this.duration = duration;
	}
	
	if(tween){
		this.tween = tween;
	}
	
}

exports.MixerVolume = function(channel, layer, volume, duration, tween){
	Mixer.call(this);
	
	this.command = MIXER_VOLUME;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
	if(volume){
		this.volume = volume;
	}
	
	if(duration){
		this.duration = duration;
	}
	
	if(tween){
		this.tween = tween;
	}
	
}

exports.MixerClear = function(channel, layer){
	Mixer.call(this);
	
	this.command = MIXER_CLEAR;
	
	if(channel){
		this.channel = channel;
	}
	
	if(layer){
		this.layer = layer;
	}
	
}

exports.ChannelGrid = function(){
	Mixer.call(this);
	
	this.command = CHANNEL_GRID;
	
}

//Query commands
function Query(){
	
	this.command = null;
	this.channel = null;
	this.layer = null;
	this.filename = null;
	this.folder = null;
	this.component = null;
	
	
	this.toString = function(){
		
		command = this.command;
		
		if(this.channel){
			command = command+space+this.channel;
		}
		
		if(this.layer){
			command = command+"-"+this.layer;
		}
		
		if(this.filename){
			command = command+space+this.filename;
		}
		
		if(this.folder){
			command = command+space+this.folder;
		}
		
		if(this.component){
			command = command+space+this.component;
		}
		
		return command;
	}
}

exports.Cinf = function(filename){
	Query.call(this);
	
	this.command = CINF;
	
	if(filename){
		this.filename = filename;
	}
	
	
}

exports.Cls = function(){
	Query.call(this);
	
	this.command = CLS;

}

exports.Tls = function(folder){
	Query.call(this);
	
	this.command = TLS;
	
	if(folder){
		this.folder = folder;
	}
}

exports.Version = function(component){
	Query.call(this);
	
	this.command = VERSION;
	
	if(component){
		this.component = component;
	}
}

exports.Info = function(channel, layer, component){
	Query.call(this);
	
	this.command = INFO;
	
	if(component){
		this.component = component;
	}
}

exports.Diag = function(){
	Query.call(this);
	
	this.command = DIAG;

}

exports.Bye = function(){
	Query.call(this);
	
	this.command = BYE;

}
