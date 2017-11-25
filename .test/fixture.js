export var normalDescriptor= {
	normal: 42
}

export var normalDescriptors= {
	foo: 6,
	bar: 9
}

export var hiddenDescriptors= Object.defineProperties({}, {
	_accum: {
		value: 1,
		writable: true
	},
	doubler: {
		get: function(){
			return this._accum*= 2
		},
		set: function( val){
			this._accum= 2* val
		},
		enumerable: true
	}
})
