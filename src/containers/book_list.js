import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectBook } from './../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className='list-group-item'>
                    {book.title}
                </li>
            )
        })
    }
    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
//take state and whatever is return from here will show up as props inside of booklist
    return{
        books:state.books
    };
}

//Anything return from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook:selectBook},dispatch);
}

//Promote bookList from component to a container it will need to know about this dispatch method 
//selectBook. Make it available as a props
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
