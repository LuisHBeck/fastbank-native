import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native"

const DropList = ({ onChange, value }) => {
	const accTypes = [
		{ label: "Current", value: "Current" },
		{ label: "Savings", value: "Savings" },
	];

	return (
		<Dropdown
      placeholder="Account Type"
			placeholderStyle={styles.placeholderStyle}
			selectedTextStyle={styles.selectedTextStyle}
			iconStyle={styles.iconStyle}
			labelField="label"
			valueField="value"
			style={[styles.dropdown, { width: "85%" }]}
			data={accTypes}
			value={value}
			onChange={(value) => {
        onChange(value.value);
        console.log(value.value);
      }}
      size={200}
		/>
	);
};

const styles = StyleSheet.create({
	dropdown: {
		height: 50,
		borderColor: "white",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
    color: "white"
	},
	selectedTextStyle: {
		fontSize: 16,
    color: "white"
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
});

export default DropList;
