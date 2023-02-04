import { Button, TextField }  from "@material-ui/core";
import React, { FC }          from "react";

interface textFieldProps {
  todoList:     string;
  setTodoList:  React.Dispatch<React.SetStateAction<string>>
  taskValue?:   string;
  handleclickAdd: (e: React.FormEvent) => void;
}

const TextInputF: FC<textFieldProps> = ({todoList, setTodoList, handleclickAdd}) => {

  return (
    <form onSubmit={handleclickAdd}>
      <TextField
        id            ="standard-basic"
        autoComplete  ="off"
        value         ={todoList}
        onChange      ={(e) => setTodoList(e.target.value)}
        placeholder   ="Add TO DO"
      />
      <Button
        className     ="button_style"
        variant       ="contained"
        color         ="primary"
        size          ="small"
        type          ="submit"
      >
        Add
      </Button>
    </form>
    );
  
}

export default TextInputF;