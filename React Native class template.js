import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class CLASSNAME extends Component {

	constructor(props, context) {
		super(props, context);

		// this.METHOD = this.METHOD.bind(this);
	}

	componentDidMount() {

	}

	render() {

		return (
				<View style={styles.container}>
					<Text>This is a test</Text>
				</View>
			);
	}
}

CLASSNAME.propTypes = {
	SOMEPROP: React.PropTypes.array
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default CLASSNAME;