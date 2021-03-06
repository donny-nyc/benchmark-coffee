export var productGetter = {
	fetchProducts: () => {
		return new Promise((res) => {
			res([
				{
					id: "prod_JtCrjX8lINseiq",
					name: "Blue Nile", 
					region: "Ethiopia", 
					description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.", 
					price: "20",
					color: "#35b3ff",
					imgSrc: "/daily.svg"
				},
				{
					id: "prod_KT9ywZLFvWj62Y",
					name: "Oral Tradition", 
					region: "Rwanda",
					price: "19.90",
					description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.", 
					color: "#bb131b",
					imgSrc: "/coffee2.jpg"
				},
				{
					id: "prod_KTA0fTm6NtP9BZ",
					name: "Bullerengue",
					region: "Columbia",
					price: "20.90",
					description: "Royal Salute’s first 25-year-old expression, created as a tribute to the Crown Jewels, The Treasured Blend is a rare gem, waiting to be discovered.",
					color: "#ffd145",
					imgSrc: "/coffee3.jpg"
				},
				{
				id: "prod_KTA0NauvF9NSfu",
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
