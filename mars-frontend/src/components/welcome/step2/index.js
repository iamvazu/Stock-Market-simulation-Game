import React , {Component} from 'react';

class Step2 extends Component{

    _onSelection = (selection) => {
        this.props.select(selection)
    };

    render(){
        return(
            <div>
                <div className="py-5 text-center"
                     style={{ backgroundImage: 'url(&quot;https://pingendo.github.io/templates/sections/assets/cover_event.jpg&quot;)' }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-3 mb-4 text-primary">Multiplayer</h1>
                                <p className="lead mb-5">Play with Your friends!</p>
                                <a className="btn mx-1 btn-secondary btn-lg" onClick={this._onSelection.bind(this,1)}>Create New Game</a>
                                <a className="btn btn-lg btn-primary mx-1" onClick={this._onSelection.bind(this,2)}>Join To Existing</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <a className="btn btn-primary w-25 d-flex" href="#">Home </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Step2 };