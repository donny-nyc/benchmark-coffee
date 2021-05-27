export var productGetter = {
	fetchProducts: () => {
		return new Promise((res) => {
			res({
				0: {name: "Dark Bean", description: "Pitch Black", imgSrc: "/coffee1.jpg"},
				1: {name: "Light Bean", description: "Basically Raw", imgSrc: "/coffee2.jpg"},
				2: {name: "Green Bean", description: "Possibly a vegetable", imgSrc: "/coffee3.jpg"},
				3: {name: "Lima Bean", description: "Really shitty coffee", imgSrc: "/coffee4.jpg"},
			})
		})
	}
}
