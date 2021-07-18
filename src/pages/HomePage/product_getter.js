export var productGetter = {
	fetchProducts: () => {
		return new Promise((res) => {
			res({
				0: {
					name: "Blue Nile", 
					region: "Ethiopia", 
					description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.", 
					color: "#35b3ff",
					imgSrc: "/coffee1.jpg"},
				1: {
					name: "Oral Tradition", 
					region: "Rwanda",
					description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.", 
					color: "#bb131b",
					imgSrc: "/coffee2.jpg"},
				2: {
					name: "Bullerengue",
					region: "Columbia",
					description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.",
					color: "#ffd145",
					imgSrc: "/coffee3.jpg"},
				3: {name: "851",
					region: "Papua New Guinea",
					description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.",
					color: "#64d33c",
					imgSrc: "/coffee4.jpg"},
			})
		})
	}
}
