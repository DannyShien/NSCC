import React, { Component } from 'react'; 
import Form from './Form'
import Display from './Display'

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
         fetch(`https://xkcd.now.sh/?comic=${this.state.searchComic}`)
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


    render() {
        return (
            <>
                <Form
                    input = {this.state.searchComic}
                    submit = {this.submit}
                    handleChange = {this.comicSearch}
                />
                <Display 
                    display = {this.state.comicDisplay}
                    alt = {this.state.alt}
                    title = {this.state.title}
                />
            </>    
        );
    }
    
}

export default Search; 