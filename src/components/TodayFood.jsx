import React from 'react';
function TodayFood({ name, calories, quantity, total }) {
	const calc = calories * quantity

	total(calc)

  return <div>
		<ul>
			<li>
				<p>{quantity} {name} = {calc} cal</p>
			</li>
		</ul>
	</div>;
}

export default TodayFood;
