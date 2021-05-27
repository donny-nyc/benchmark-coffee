<template>
	<div class='footer'>
		<div class='footer-column'>
			<h2>Navigation</h2>
			<a href="#">About</a>
			<a href="#">Coffee</a>
		</div>
		<div class='footer-column'>
			<h2>Locations</h2>
			<span>1141 Broadway, NY, NY</span>
		</div>
		<div class='footer-column'>
			<h2>Contact</h2>
			<span>hello@benchmark.nyc</span>
			<span>+1 (718) 555-0000</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Footer',
}
</script>

<style>
	.footer {
		border-top: 2px solid black;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.footer-column {
		display: flex;
		flex-direction: column;
	}

	.footer-column a {
		text-decoration: none;
		color: black;
	}	
</style>
