export function fallbackValue(defaultVal, val){
	// returns val (or sub-field of val) if not null. otherwise, return defaultVal
	if(arguments.length === 0){
		return null;
	} else if(arguments.length === 1){
		return defaultVal;
	} else {
		var currentVal = val;

		for(var ind=2; ind < arguments.length; ind++){
			try{
				currentVal = currentVal[arguments[ind]];
			} catch(e){
				return defaultVal;
			}
		}

		if(currentVal === null || currentVal === undefined){
			return defaultVal;
		}
		return currentVal;
	}
}

export function makeid(len){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export function parseFileExtension(fileName){
	var splitName = fileName.split('.');
	var candidateFileExtension = (splitName.length > 0)? splitName[splitName.length - 1] : "";
	if(candidateFileExtension !== fileName){
		return candidateFileExtension;
	}
	return null;
}

export function isTrue(val){
	if(typeof val === "string"){
		var lower = val.toLowerCase();
		if(lower === "true" || lower === "yes" || lower === "1" || lower === "t"){return true;}
		return false;
	} else if(typeof val === "boolean"){
		return val;
	} else if(typeof val === "number"){
		return val === 1;
	}
}

export function cloneThroughJSON(ele){
	return JSON.parse(JSON.stringify(ele));
}

export function mkVector(start, end, step){
	const  dist = end - start;

	// check step
	if(step === undefined){
		if(dist >= 0){
			step = 1;
		} else {
			step = -1;
		}
	}
	// check sign
	if(dist !== 0 && step ===0){
		console.warn("Step has value of 0. Return array of start and end value")
		return [start, end];
	}
	if(dist * step < 0){ // if went in different direction, thus can't reach
		console.error("Invalid step value to make vector")
		return null;
	}

	var acc = start;
	var toReturn = [acc];
	if(dist >= 0){
		while (acc + step < end) {
			acc += step;
			toReturn.push(acc);
		}
		toReturn.push(end)
	} else {
		while (acc + step > end) {
			acc += step;
			toReturn.push(acc);
		}
		toReturn.push(end)
	}
	return toReturn;
}
