import React, { Component } from 'react';
import './Display.css'

class Latest extends Component {
    constructor(props) {
        super(props); 
        this.state = ({
            latestComic: [],
            alt: '', 
            title: ''
        })
    }
    componentDidMount() {
        this.fetchComic()
    }

    fetchComic = () => {
        fetch(`https://xkcd.now.sh/?comic=latest`)
            .then(r => {return r.json()})
            .catch(err => {console.log(err)})
            .then(this.displayComic)
    }
    
    displayComic = (obj) => {
        let comicObj = obj
        console.log(`COMIC OBJECT: `, comicObj)
        let comic = comicObj.img
        let alt = comicObj.title
        let title = comicObj.alt

        this.setState({
            latestComic: comic,
            alt: alt, 
            title: title
        })
    }
    

    render () {
        const displayStyle = {
            padding: '5px',
            backgroundColor: 'white'
        }
        return (
            <div className = 'display' style={displayStyle}>
                <img src={this.state.latestComic} className='latestImage' alt={this.state.alt} title={this.state.title} />
            </div>
        )
    }    
}

export default Latest; 