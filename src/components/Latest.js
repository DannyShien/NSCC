import React, { Component } from 'react';

class Latest extends Component {
    constructor(props) {
        super(props); 
        this.state = ({
            latestComic: []
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
        console.log(`COMIC OBJECT: `, obj)
        let comic = obj.img

        this.setState({
            latestComic: comic
        })
    }

    render () {
        return (
            <div>
                <img src={this.state.latestComic} className='latestImage' />
            </div>
        )
    }    
}

export default Latest; 