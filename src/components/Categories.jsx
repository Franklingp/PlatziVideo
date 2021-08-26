import React from "react";

//styles
import "@styles/components/Categories.scss";

export default function Categories({ children }) {
	return (
		<div className="categories">
			<h3 class="categories__title">Mi lista</h3>
			{children}
		</div>
	);
}
