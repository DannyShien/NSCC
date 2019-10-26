import React, { Component } from 'react';

class Latest extends Component {
    constructor(props) {
        super(props); 
        this.state = ({
            comic: []
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
            comic: comic
        })
    }

    render () {
        return (
            <div>
                <img src={this.state.comic} className='latestImage' />
            </div>
        )
    }    
}

export default Latest; 