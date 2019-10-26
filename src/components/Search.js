import React, { Component } from 'react'; 

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }
    render() {

        comicSearch = (input) => {
            this.serState({
                search: input
            });
        }

        return (
            <form
                className='form'
                onSubmit={(event) => {
                    console.log(`FORM SUBMITTED`)
                    event.preventDefault();
                    submit(event)
                }}
            >
                <input>
                </input>
            </form>
        );
    }
    
}

export default Search; 