import React from 'react';

const Latest = () => {

    // componentDidMount() {
    //     this.displayComic()
    // }

    displayComic = () => {
        fetch(`https://xkcd.now.sh/?comic=latest`)
            .then(r => {return r.json()})
            console.log(r)
            // .catch(err => {console.log(message)})
    }
    return (

        <>
            {this.displayComic}
        </>
    ); 
}

export default Latest; 