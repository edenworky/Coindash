export class AjaxUtils {
	static queryParams(source) {
	  var array = [];

	  for(var key in source) {
	  	let data = source[key];
	  	if (Object.prototype.isPrototypeOf(data)) {
	  		array.push(AjaxUtils.encodeSubObject(key, data));
	  	}
	  	else {
	  		array.push(encodeURIComponent(key) + "=" + encodeURIComponent(data));
	  	}
	  }

	  return array.join("&");
	}

	static encodeSubObject(originalKey, object) {
		var array = [];

		for(var key in object) {
			let data = object[key];
			if (Object.prototype.isPrototypeOf(data)) {
				array.push("%5B" + key + "%5D" + AjaxUtils.encodeSubObject(data));
			}
			else {
				array.push(originalKey + "%5B" + key + "%5D=" + encodeURIComponent(data));
			}
		}

	  	return array.join("&");
	}
}