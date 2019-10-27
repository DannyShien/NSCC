import React, { Component } from 'react'; 

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchComic: '',
            comicDisplay: []
        };
    }

    comicSearch = (input) => {
        this.setState({
            searchComic: input
        });
    }
    submit = () => {
         fetch('https://xkcd.now.sh/?comic=303')
            .then(r => {return r.json()})
            .catch((err) => {console.log(err)})
            .then(this.displayComic)
    }

    displayComic = (obj) => {
        console.log(`SEARCH OBJ: `, obj)
        let comic = obj.img

        this.setState({
            comicDisplay: comic
        })
    }

    displaySearchedComic = () => {
        return (
            this.state.searchComic === null ?
                <form
                    className='form'
                    onSubmit={(event) => {
                        console.log(`FORM SUBMITTED`)
                        event.preventDefault();
                        this.submit()
                    }}
                >
                    <input
                        className = 'searchInput'
                        text = 'text'
                        onChange = {(e) => {
                            console.log(e.target.value)
                            this.comicSearch(e.target.value)
                        }}
                        name = 'search' 
                        value = {this.state.search}
                    />
                    <button
                        className='searchSubmit'
                        type='submit'
                    >Submit</button>
                </form>
            : 
            <div>
                <img src={this.state.comicDisplay}  className='searchImage' />
            </div>
        )
    }

    render() {
        return (
            <div>
                <form
                    className='form'
                    onSubmit={(event) => {
                        console.log(`FORM SUBMITTED`)
                        event.preventDefault();
                        this.submit()
                    }}
                >
                    <input
                        className = 'searchInput'
                        text = 'text'
                        onChange = {(e) => {
                            console.log(e.target.value)
                            this.comicSearch(e.target.value)
                        }}
                        name = 'search' 
                        value = {this.state.search}
                    />
                    <button
                        className='searchSubmit'
                        type='submit'
                    >Submit</button>
                </form>
                <div>
                    <img src={this.state.comicDisplay}  className='searchImage' />
                </div>
            </div>
        );
    }
    
}

export default Search; 