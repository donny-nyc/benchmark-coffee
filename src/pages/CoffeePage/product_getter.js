export var productGetter = {
	fetchProducts: () => {
		return new Promise((res) => {
			res({
				0: {name: "Dark Bean", description: "Pitch Black"},
				1: {name: "Light Bean", description: "Basically Raw"},
				2: {name: "Green Bean", description: "Possibly a vegetable"},
				3: {name: "Lima Bean", description: "Really shitty coffee"},
			})
		})
	}
}
