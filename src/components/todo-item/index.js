function TodoItem({myindex, mytodo}) {
    return(
      <li className="list-group-item">
         <input
            className="form-check-input me-1"
            type="checkbox"
            id="{myindex}"/>
         <label
            className="form-check-label"
            htmlFor={myindex}>{mytodo}</label>
   {/* {Take home assignment: Implement single delete} */}
         <button className="btn btn-danger" >Delete</button>
      </li>
        );
}

export default TodoItem;