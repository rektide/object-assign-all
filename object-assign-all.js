"use strict"
"use module"
export function objectAssignAll(o, ...sources){
	o= o|| {}
	var
	  sourceDescriptors= sources.map( source=> Object.getOwnPropertyDescriptors( source|| {})),
	  descriptors= Object.assign.apply( Object, sourceDescriptors)
	return Object.defineProperties( o, descriptors)
}
export default objectAssignAll
