import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

const TenureSelect = ({ data, setData }) => {
	const handleChange = (value) => {
		setData({
			...data,
			loanTerm: value,
		});
	};
	return (
		<div>
			<FormControl fullWidth>
				<InputLabel>Tenure</InputLabel>
				<Select
					value={data.loanTerm}
					label="Tenure"
					onChange={(e) => handleChange(e.target.value)}>
					<MenuItem value={5}>5 years</MenuItem>
					<MenuItem value={10}>10 years</MenuItem>
					<MenuItem value={15}>15 years</MenuItem>
					<MenuItem value={20}>20 years</MenuItem>
					<MenuItem value={25}>25 years</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default TenureSelect;
