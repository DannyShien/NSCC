import React, { Component } from 'react'; 

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchComic: '',
            comicDisplay: [],
            alt: '',
            title: ''
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
        let comicObj = obj
        console.log(`SEARCH OBJ: `, comicObj)
        let comic = obj.img
        let alt = comicObj.title
        let title = comicObj.alt

        this.setState({
            comicDisplay: comic,
            alt: alt, 
            title: title
        })
    }

    // displaySearchedComic = () => {
    //     return (
    //         this.state.searchComic === null ?
    //             <form
    //                 className='form'
    //                 onSubmit={(event) => {
    //                     console.log(`FORM SUBMITTED`)
    //                     event.preventDefault();
    //                     this.submit()
    //                 }}
    //             >
    //                 <input
    //                     className = 'searchInput'
    //                     text = 'text'
    //                     onChange = {(e) => {
    //                         console.log(e.target.value)
    //                         this.comicSearch(e.target.value)
    //                     }}
    //                     name = 'search' 
    //                     value = {this.state.search}
    //                 />
    //                 <button
    //                     className='searchSubmit'
    //                     type='submit'
    //                 >Submit</button>
    //             </form>
    //         : 
    //         <div>
    //             <img src={this.state.comicDisplay} className='searchImage' />
    //         </div>
    //     )
    // }

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
                    <img src={this.state.comicDisplay} className='searchImage' alt={this.state.alt} title={this.state.title} />
                </div>
            </div>
        );
    }
    
}

export default Search; 