import React from "react";
import attack from "../assets/attack.png";
import defend from "../assets/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefend = this.handleDefend.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: "",
    };
  }

  handleAttack = () => {
    this.setState((prevState) => {
      let newCount = prevState.count + Math.round(Math.random() * 10);

      return {
        count: newCount,
        gameStatus: newCount > 10 ? "You won" : prevState.gameStatus,
        lastPlay: "Attack",
      };
    });

    // alert("you attacked");
    // this.setState({ count: this.state.count + 100 });
    // this.setState({ count: this.state.count + 10 });
  };
  handleDefend = () => {
    this.setState((prevState) => {
      let newCount = prevState.count - Math.round(Math.random() * 10);

      return {
        count: newCount,
        gameStatus: newCount < 1 ? "You lost" : prevState.gameStatus,
        lastPlay: "Defend",
      };
    });
    // alert("you defended");
    //this.setState({ count: this.state.count - 1 });
  };

  handleRandom = () => {
    let playMode = Math.round(Math.random());

    if (playMode == 1) {
      this.handleAttack();
    } else {
      this.handleDefend();
    }
  };

  handleReset = () => {
    this.setState({
      count: 0,
      gameStatus: "",
      lastPlay: "",
    });
  };

  render() {
    return (
      <div className="text-center mt-4">
        <p className="text-3xl font-bold">Game Score: {this.state.count}</p>

        <p className="text-[1.25rem] mt-3">
          You win at +10 points and lose at -10 points!
        </p>
        <p className="text-[1.25rem] mt-5">Last play: {this.state.lastPlay}</p>
        <p className="font-semibold text-[1.5625rem] mt-5">
          Game status: {this.state.gameStatus}
        </p>

        <div className="flex  space-x-4 justify-center mt-4">
          <img
            src={attack}
            className="h-28 border border-green-800 p-3 rounded-[0.5625rem]"
            onClick={this.handleAttack}
          />
          <img
            src={defend}
            className="h-28 border border-red-800 p-3 rounded-[0.5625rem]"
            onClick={this.handleDefend}
          />
        </div>

        <div className="flex flex-col mt-3 justify-center items-center space-y-2">
          <button
            className="w-[25rem] text-[1.25rem] bg-gray-500 py-3 font-semibold rounded-[0.5625rem] hover:bg-gray-600 active:bg-slate-400 transition duration-150 ease-in-out"
            onClick={this.handleRandom}
          >
            Random play
          </button>

          <button
            className="w-[25rem] text-[1.25rem] bg-yellow-500 py-3 font-semibold rounded-[0.5625rem] hover:bg-yellow-600 active:bg-yellow-400 transition duration-150 ease-in-out"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
