import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['トイレ掃除', 'ポチの散歩'],
      inputText: '',
    }
  }

  handleChangeText(event) {
    this.setState({inputText: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.inputText === '') {
      return
    }

    const newTasks = this.state.tasks    // 1
    newTasks.push(this.state.inputText)  // 2
    this.setState({
      tasks: newTasks,                   // 3
      inputText: '',                     // 4
    })
  }

  render() {
    return (
      <div className="main">
        <h1>タスク一覧</h1>
        <div className="tasks">
          {this.state.tasks.map((task, index) => {
            return (
              <List key={'list-${index}'} title={task} />
            )
          })}
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChangeText.bind(this)}
          />
        </form>
      </div>
    );
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  changeChecked() {
    this.setState({checked: !this.state.checked})
  }

  render() {
    return (
      <div className="list">
        <span onClick={this.changeChecked.bind(this)}>
          {this.state.checked
            ? <i className="fas fa-check-circle" />
            : <i className="fas fa-circle" />
          }
        </span>
        {this.props.title}
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
)
