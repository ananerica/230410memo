import React, { Component, Fragment } from "react";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }

  render() {
    // const {
    //     data:{
    //         id,
    //         trip_id,
    //         memo_type,
    //         card_id,
    //         content
    //     } = {}
    // } = {
    //     data: {
    //         "id": "memo-t57jh87",
    //         "trip_id": "trip-ff5cv32",
    //         "memo_type": 1,
    //         "card_id": "card-p02jd37",
    //         "content": "記得帶防曬乳"
    //     }
    // }

    return (
      <Fragment>
        <div className="flex flex-col items-center">
          {/* <label htmlFor="insertArea" className="text-gray-700 dark:text-white text-lg mt-4 mb-2" style={{color:'#F0F2F1'}}>代辦事項</label> */}
          <div className="flex justify-center items-center w-full">
            <input
              id="insertArea"
              className="mt-2 bg-gray rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5 mr-1"
              value={this.state.inputValue}
              onChange={this.handleInputChange.bind(this)}
            />
          </div>
          <div className="flex justify-center items-center w-full">
            <button
              className="mt-1 px-3 py-2 bg-blue text-lg text-white rounded-lg hover:bg-yellow"
              onClick={this.handleBtnClick.bind(this)}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-1">
          <ul className="w-full max-w-lg bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-4 mr-1 overflow-y-scroll max-h-96">
            {this.state.list.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`mb-1 py-1 pl-3 pr-1 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 ${
                    item.isCompleted
                      ? "line-through bg-gray-200 dark:bg-gray-600"
                      : ""
                  }`}
                  onClick={this.handleItemComplete.bind(this, index)}
                >
                  {item.task}
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  //原版本
  handleBtnClick() {
    if (!this.state.inputValue.trim()) {
      return;
    }
    const newTask = {
      task: this.state.inputValue,
      isCompleted: false
    };
    this.setState({
      list: [...this.state.list, newTask],
      inputValue: ""
    });
  }

  handleItemComplete(index) {
    const newList = [...this.state.list];
    newList[index].isCompleted = !newList[index].isCompleted;
    this.setState({
      list: newList
    });
  }
}

export default TodoList;
