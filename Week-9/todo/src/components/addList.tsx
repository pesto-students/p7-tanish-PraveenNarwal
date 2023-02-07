import React, { FC, useState }  from 'react'
import { Todo }                 from './inter';
import ShowList                 from './showList';
import TextInputF               from './textInputF';

export const AddList: FC = () => {
    const [todo, setTodo]               = useState<string>("");
    const [listofTodo, setListofTodo]   = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setListofTodo([...listofTodo, { id: Date.now(), todo: todo, isDone: false }])
            setTodo("");
        }

    }

    return (
        <div>
            <TextInputF
                todoList        ={todo}
                setTodoList     ={setTodo}
                handleclickAdd  ={handleAdd}
            />
            <ShowList item={listofTodo} del={setListofTodo} />
        </div>
    );
}
