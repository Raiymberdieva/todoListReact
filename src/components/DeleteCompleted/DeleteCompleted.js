

const DeleteCompleted = ({todoArr, setTodoArr}) => {
    const deleteAllCompleted = () => setTodoArr(todoArr.filter(item =>!item.isCompleted));

    const completedBool =
        todoArr.length === todoArr.filter((item)=>item.isCompleted).length;

    const handlerSelect = ()=>{
        setTodoArr(
            todoArr.map((item)=>{
                if (completedBool){
                    return {...item, isCompleted: false};
                }else{
                    return {...item, isCompleted: true};
                }
            })
        )
    };

    return (
<>
    {todoArr.length !== 0 ?(
        <input
            type='checkbox'
            checked={completedBool}
            onChange={handlerSelect}
        />
    )
        : (
            ''
        )}
    <p className='todo__deleteCompleted' onClick={deleteAllCompleted}>Delete completed</p>
    </>
    );
};

export default DeleteCompleted;