import { Button, TextField }    from '@material-ui/core';
import React, { FC, useState }  from 'react'
import { Todo }                 from './inter';

interface singleListProps {
    key:        number;
    allList:    React.Dispatch<React.SetStateAction<Todo[]>>;
    list:       Todo;
    item:       Todo[];
}


const SingleList: FC<singleListProps> = ({ list, item, allList }) => {

    const [editMode, setEditMode]   = useState<boolean>(false);
    const [edit, setEdit]           = useState<string>(list.todo)


    const handleDone = (id: number) => {
        allList(item.map((li: any) => li.id === id ? { ...li, isDone: !li.isDone } : li))
    }

    const handleDelete = (id: number) => {
        allList(item.filter((li: any) => li.id !== id))
    }

    const handleSave = (id: number) => {
        allList(item.map((li: any) => li.id === id ? { ...li, todo: edit } : li))

        setEditMode(false)
    }

    return (
        <div>
            {editMode ?
                (<TextField
                    id              ="standard-basic"
                    autoComplete    ="off"
                    value           ={edit}
                    onChange        ={(e) => setEdit(e.target.value)}
                />) : list.isDone ? (
                    <s>{list.todo}</s>
                ) : (
                    <span>{list.todo}</span>
                )
            }
            {editMode ?
                (<div>
                    <Button
                        className   ="button_style"
                        variant     ="outlined"
                        color       ="default"
                        size        ="small"
                        onClick     ={() => handleSave(list.id)}
                    >
                        save
                    </Button>
                    <Button
                        className   ="button_style"
                        variant     ="outlined"
                        color       ="secondary"
                        size        ="small"
                        onClick     ={() => setEditMode(false)}

                    >
                        cancel
                    </Button>
                </div>) : (<div>
                    <Button
                        className   ="button_style"
                        variant     ="outlined"
                        color       ="primary"
                        size        ="small"
                        onClick     ={() => {
                            if (!editMode && !list.isDone) {
                                setEditMode(!editMode);
                            }
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        className   ="button_style"
                        variant     ="outlined"
                        color       ="inherit"
                        size        ="small"
                        onClick     ={() => handleDone(list.id)}
                    >
                        done
                    </Button>
                    <Button
                        className   ="button_style"
                        variant     ="outlined"
                        color       ="secondary"
                        size        ="small"
                        onClick     ={() => handleDelete(list.id)}
                    >
                        delete
                    </Button>
                </div>)
            }


        </div>
    )
}

export default SingleList