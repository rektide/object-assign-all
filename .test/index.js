"use strict"

var
  tape= require( "tape"),
  esm = require( "@std/esm")( module),
  oaa= esm( "..").objectAssignAll,
  fixture= esm( "./fixture")

tape( "Assigns normal descriptor", function( t){
	var normal= oaa( {}, fixture.normalDescriptor)
	t.equal( normal.normal, 42)
	t.end()
})

tape( "Assigns normal descriptors", function( t){
	var normals= oaa( {}, fixture.normalDescriptors)
	t.equal( normals.foo, 6)
	t.equal( normals.bar, 9)
	t.end()
})

tape( "Assigns hidden/complex descriptors", function( t){
	var hidden= oaa( {}, fixture.hiddenDescriptors)
	t.equal( hidden._accum, 1)
	t.equal( hidden.doubler, 2)
	t.equal( hidden._accum, 2)
	hidden.doubler= 16
	t.equal( hidden._accum, 32)
	t.equal( hidden.doubler, 64)
	t.equal( hidden._accum, 64)
	var hidden2= oaa( {}, fixture.hiddenDescriptors)
	t.equal( hidden2._accum, 1)
	t.equal( hidden2.doubler, 2)
	t.end()
})
