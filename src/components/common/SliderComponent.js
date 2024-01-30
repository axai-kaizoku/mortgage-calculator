import { Slider, Stack, Typography } from '@mui/material';
import React from 'react';

const SliderComponent = ({
	label,
	total,
	defaultVal,
	min,
	max,
	step,
	onChange,
	value,
	unit,
}) => {
	return (
		<Stack my={1.3}>
			<Stack gap={1}>
				<Typography variant="subtitle2">{label}</Typography>
				<Typography variant="h5">
					{unit} {total}
				</Typography>
			</Stack>
			<Slider
				value={value}
				defaultValue={defaultVal}
				min={min}
				max={max}
				aria-label="Default"
				valueLabelDisplay="auto"
				marks
				step={step}
				onChange={onChange}
			/>

			<Stack
				gap={1}
				direction="row"
				justifyContent="space-between">
				<Typography
					color="text.secondary"
					variant="caption">
					$ {min}
				</Typography>
				<Typography
					color="text.secondary"
					variant="caption">
					$ {max}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default SliderComponent;
