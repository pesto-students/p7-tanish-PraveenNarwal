import React, {Component} from 'react';
import {Button, TextField} from '@material-ui/core';

interface todoProps {
  }

  interface todoState {
    todo_array: any,
    task: string,
    edit_task: string,
  }


export default class Todo extends Component<todoProps, todoState> {
  constructor (props: todoProps) {
    super (props);
    this.props;
    this.state = {
      todo_array: [],
      task: '',
      edit_task: '',
    };
  }

  private onChangeTask = (e: any)  => {
    this.setState ({
      task: e.target.value,
    });
  };

  private addTask = () => {
    let {todo_array, task} = this.state;
    let obj = {
      id: todo_array.length == 0 ? 1 : todo_array[todo_array.length - 1].id + 1,
      name: task,
      is_editing: false,
      is_done: false,
    };
    todo_array.push (obj);
    this.setState ({
      todo_array: todo_array,
      task: '',
    });
  };

  private edit = (object: any) => {
    let {todo_array} = this.state;

    let i = todo_array.findIndex ((task: any) => task.id === object.id);
    todo_array[i].is_editing = !todo_array[i].is_editing;

    todo_array.map ((task: any) => {
      task.id !== object.id
        ? (task.is_editing = false)
        : (task.is_editing = task.is_editing);
      return task;
    });

    this.setState ({
      todo_array: todo_array,
      edit_task: object.name,
    });
  };

  private editTask = (task: any) => {
    this.setState ({
      edit_task: task,
    });
  };

  private saveEditTask = (object: any) => {
    let {todo_array, edit_task} = this.state;
    let i = todo_array.findIndex ((task: any) => task.id === object.id);
    todo_array[i].name = edit_task;

    this.setState (
      {
        todo_array: todo_array,
        edit_task: '',
      },
        () => {
        this.edit (object);
      }
    );
  };

  private delete = (object: any) => {
    let {todo_array} = this.state;
    let i = todo_array.findIndex ((task: any) => task.id === object.id);
    todo_array.splice (i, 1);
    this.setState ({
      todo_array: todo_array,
    });
  };

  private done = (object: any) => {
    let {todo_array} = this.state;
    let i = todo_array.findIndex ((task: any) => task.id === object.id);
    todo_array[i].is_done = true;

    this.setState ({
      todo_array: todo_array,
    });
  };

  render () {
    return (
      <div>
        <div>
          <h2>ToDo List</h2>
        </div>

        <div>
          <TextField
            id="standard-basic"
            autoComplete="off"
            value={this.state.task}
            onChange={this.onChangeTask}
            placeholder="Add TO DO"
          />
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            disabled={this.state.task == ''}
            onClick={this.addTask}
          >
            Add
          </Button>
        </div>

        {this.state.todo_array.length > 0
          ? <div>
              <table className="centerTable" style={{marginTop: 20}}>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {this.state.todo_array.map ((object: any, i: number) => {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          {object.is_editing
                            ? <TextField
                                id="standard-basic"
                                value={this.state.edit_task}
                                onChange={e => this.editTask (e.target.value)}
                              />
                            : object.is_done
                                ? <s>{object.name}</s>
                                : <span>{object.name}</span>}
                        </td>
                        <td>
                          {object.is_editing
                            ? <div>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  color="primary"
                                  size="small"
                                  disabled={this.state.edit_task == ''}
                                  onClick={e => this.saveEditTask (object)}
                                >
                                  Save
                                </Button>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  color="inherit"
                                  size="small"
                                  onClick={e => this.edit (object)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            : <div>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  color="primary"
                                  size="small"
                                  onClick={e => this.edit (object)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  color="secondary"
                                  size="small"
                                  disabled={object.is_done}
                                  onClick={e => this.done (object)}
                                >
                                  Done
                                </Button>
                                <Button
                                  className="button_style"
                                  variant="outlined"
                                  size="small"
                                  onClick={e => this.delete (object)}
                                >
                                  Delete
                                </Button>
                              </div>}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          : <h2>Nothing to do!</h2>}
      </div>
    );
  }
}
