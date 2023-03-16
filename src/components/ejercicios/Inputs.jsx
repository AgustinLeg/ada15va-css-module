export const Inputs = ({ values, setValues }) => {
	const handleChange = (e) => {
		setValues({
			...values,
			[e.target.name]: Number(e.target.value),
		});
	};

	return (
		<div>
			<input
				type="number"
				value={values.uno}
				name="uno"
				onChange={handleChange}
			/>
			<input
				type="number"
				value={values.dos}
				name="dos"
				onChange={handleChange}
			/>
		</div>
	);
};
