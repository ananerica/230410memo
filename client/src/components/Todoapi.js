import React, { Component, Fragment } from "react";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
      memoList: [] // 新增 memoList 狀態
    };
  }

  componentDidMount() {
    const tripId = "trip-1234567";
    axios.get(`http://localhost:3000/memo/${tripId}`).then(res => {
      const memoList = Object.values(res.data)[0];
      this.setState({ memoList });
    });
  }

  render() {
    const { memoList } = this.state; // 取得 memoList 狀態

    return (
      <Fragment>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-full">
            <input
              id="insertArea"
              className="text-black mt-2 bg-gray rounded-lg focus:ring-blue focus:border-blue block w-full p-2.5 mr-1"
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
            {memoList.map(memo => (
              <li
                key={memo.id}
                className={`mb-1 py-1 pl-3 pr-1 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600`}
                onClick={this.handleItemComplete.bind(this, memo.id)}
              >
                {memo.content}
              </li>
            ))}
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

  //更新資訊(加入備忘)
  handleBtnClick() {
    if (!this.state.inputValue.trim()) {
      return;
    }

    const newMemo = {
      id: `memo-${Math.floor(Math.random() * 9000000) + 1000000}`,
      trip_id: "trip-1234567",
      memo_type: 0,
      card_id: null,
      content: this.state.inputValue.trim()
    };

    const memoList = [...this.state.memoList, newMemo];
    console.log(memoList);

    axios
      .post("http://localhost:3000/memo", newMemo)
      .then(res => {
        console.log(res);

        // 將新 memo 加入 memoList 陣列中
        const memoList = [...this.state.memoList, newMemo];
        console.log(memoList);

        // 更新狀態
        this.setState({
          memoList,
          inputValue: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleItemComplete(index) {
    const { memoList } = this.state; // 取得 memoList 狀態
    // console.log(memoList)
    // console.log(index)
    const memoId = index;
    const newList = [...this.state.memoList];
    this.setState({
      memoList: newList
    });
    axios
      .delete(`http://localhost:3000/memo/${memoId}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          memoList: newList.filter(memo => memo.id !== memoId)
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default TodoList;
