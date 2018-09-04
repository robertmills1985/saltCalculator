import React, { Component } from 'react';
import './App.css';

const Input = (props) => (
	<div class="blue lighten-2 z-depth-5 card-panel br">
		<h4>{props.message}</h4>
		<input class="white input-font-size" id={props.id} type="text" />
	</div>
);

const Calculate = (props) => (
	<div class="card-panel center z-depth-5 br blue lighten-2">
		<button class="btn red waves-effect" onClick={props.hc}>
			Calculate
		</button>
	</div>
);

const Results = (props) => (
	<div class="card-panel center z-depth-5 br blue lighten-2">
		<h4>{props.title}</h4>
		<h5 class="white-text">{props.bagsNeeded}</h5>
	</div>
);

class App extends Component {
	constructor() {
		super();

		this.state = {
			saltdemand: 'Enter in your parameters. '
		};
	}
	handleClick() {
		var sal = document.getElementById('salinity').value;
		var req = document.getElementById('required').value;
		var vol = document.getElementById('volume').value;
		var divisionFactor = vol / 10000;
		var volumeFactor = 480 / divisionFactor;
		var saltFactor = req - sal
		var demand = saltFactor / volumeFactor;
		var answer = demand.toFixed(2);

		this.setState({
			saltdemand: "You will need " + answer + ' bags of salt. '
		})
	}
	render() {
		return (
			<div class="container">
				<div class="row">
					<div id="left-panel" class="col s6">
						<div class="col s12">
							<Input message="Enter current salt level." id="salinity" />
						</div>
						<div class="col s12">
							<Input message="Enter desired salt level." id="required" />
						</div>
						<div class="col s12">
							<Input message="Enter pool volume in gallons." id="volume" />
						</div>
						<div class="col s12">
							<Calculate hc={() => this.handleClick()} />
						</div>
					</div>
					<div id="right-panel" class="col s6">
						<Results title="Result" bagsNeeded={this.state.saltdemand} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
