
//state argument is not application state only the state this reducer is responsible for
//redux does not alllow undefined values so that default for state is set to null
export default (state=null, action)=>{
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}