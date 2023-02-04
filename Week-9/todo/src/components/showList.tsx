import React, { FC }    from 'react'
import { Todo }         from './inter';
import SingleList       from './singleList';

interface showListProps {
    item: Todo[];
    del: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ShowList: FC<showListProps> = ({ item, del }) => {
    return (
        <div>
            {item.map((list) => (
                <SingleList
                    key     ={list.id}
                    allList ={del}
                    list    ={list}
                    item    ={item}
                />
            ))}
        </div>
    )
}

export default ShowList