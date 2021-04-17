export var productGetter = {
	fetchProducts: () => {
		return new Promise((res) => {
			res({
				1: {name: "Dark Bean", description: "Pitch Black"},
				2: {name: "Light Bean", description: "Basically Raw"},
			})
		})
	}
}
