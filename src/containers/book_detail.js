import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        //initial this.prop.book is null so we must check for this
        if (!this.props.book) {
            return (
                <div>
                    Book selected
                    Book selected
                </div>
            )
        }
        return (
            <div>
                <h3>
                    Details for:
              </h3>
                <div>
                    {this.props.book.title}
                </div>
                <h4>
                    Pages: 
                </h4>
                <div>
                    {this.props.book.pages}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);