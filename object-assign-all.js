export function objectAssignAll(o, ...sources){
	o= o|| {}
	var
	  sourceDescriptors= sources.map( source=> Object.getOwnPropertyDescriptor( source)),
	  descriptors= Object.assign.apply( Object, sourceDescriptors)
	return Object.defineProperties( o, descriptors)
}
export default objectAssignAll
