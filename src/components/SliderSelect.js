import React from 'react';
import SliderComponent from './common/SliderComponent';

const SliderSelect = ({ data, setData }) => {
	return (
		<div>
			<SliderComponent
				label="Home Value"
				total={data.homeValue}
				defaultVal={data.homeValue}
				value={data.homeValue}
				min={1000}
				max={10000}
				unit="$"
				step={500}
				onChange={(e) =>
					setData({
						...data,
						homeValue: e.target.value.toFixed(0),
						downPayment: (0.2 * e.target.value).toFixed(0),
						loanAmount: (0.8 * e.target.value).toFixed(0),
					})
				}
			/>
			<SliderComponent
				label="Down Payment"
				total={data.downPayment}
				defaultVal={data.downPayment}
				min={0}
				max={data.homeValue}
				value={data.downPayment}
				step={100}
				unit="$"
				onChange={(e) =>
					setData({
						...data,
						loanAmount: data.homeValue - e.target.value,
						downPayment: e.target.value,
					})
				}
			/>
			<SliderComponent
				label="Loan Amount"
				total={data.loanAmount}
				defaultVal={data.loanAmount}
				min={0}
				max={data.homeValue}
				value={data.loanAmount}
				step={100}
				unit="$"
				onChange={(e) =>
					setData({
						...data,
						loanAmount: e.target.value.toFixed(0),
						downPayment: (data.homeValue - e.target.value).toFixed(0),
					})
				}
			/>
			<SliderComponent
				label="Interest Rate"
				total={data.interestRate}
				defaultVal={data.interestRate}
				value={data.interestRate}
				min={5}
				max={27}
				step={0.5}
				unit="%"
				onChange={(e) => setData({ ...data, interestRate: e.target.value })}
			/>
		</div>
	);
};

export default SliderSelect;
