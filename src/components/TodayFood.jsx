import React from 'react';
function TodayFood({ name, calories, quantity }) {

  return <div>
		<ul>
			<li>
				<p>{quantity} {name} = {calories * quantity} cal</p>
			</li>
		</ul>
	</div>;
}

export default TodayFood;
