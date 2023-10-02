//Avoid unnecessary mutation with Proxydesign pattern

const obj={
	
	name:"Pravallika",
	age:28,
	gender:"Female"
}

const proxiedObj = new Proxy(obj,{
	get(obj,prop){
		if(prop=="age"){
			Reflect.set(obj,prop,obj[prop]+1)
			return Reflect.get(obj,prop);
		}else{
		return Reflect.get(obj,prop)
}
	},
	set(obj,prop,value){
		if(prop === "gender"){
		if(typeof value !== string){
		console.log(`The value for ${[prop]} should be a string`)
		}else{
			Reflect.set(obj,prop,value)
		}
	}
	return true
	}
})

proxiedObj.gender=3
console.log(proxiedObj) //It throws Error
//If we update it to string then the object will update
proxiedObj.gender="3"
console.log(proxiedObj)