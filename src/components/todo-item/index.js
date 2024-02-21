function TodoItem(props) {
    return(
      <li className="list-group-item" key={props.myindex}>
         <input
            className="form-check-input me-1"
            type="checkbox"
            id={props.myindex} />
         <label
            className="form-check-label"
            for={props.myindex}
         >{props.mytodo}</label>
   {/* {Take home assignment: Implement single delete} */}
         <button className="btn btn-danger" >Delete</button>
      </li>
        );
}

export default TodoItem;