export var productGetter = {
	fetchProducts: () => {
		return new Promise((res) => {
			res([
				{
					id: 0,
					name: "Blue Nile", 
					region: "Ethiopia", 
					description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.", 
					price: "20",
					color: "#35b3ff",
					imgSrc: "/coffee1.jpg"},
				{
					id: 1,
					name: "Oral Tradition", 
					region: "Rwanda",
					price: "19.90",
					description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.", 
					color: "#bb131b",
					imgSrc: "/coffee2.jpg"},
				{id: 2,
				name: "Bullerengue",
				region: "Columbia",
				price: "20.90",
				description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.",
				color: "#ffd145",
				imgSrc: "/coffee3.jpg"},
				{
				id: 3,
				name: "851",
				region: "Papua New Guinea",
				price: "20.90",
				description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.",
					color: "#64d33c",
					imgSrc: "/coffee4.jpg"},
			])
		})
	}
}
