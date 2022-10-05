import React, { Component } from 'react';

class ItemShoes extends Component {

    render() {
        let { sp } = this.props;
        return (
            <div className='col-3'>
                <div className='container'>
                    <div className='card text-dark bg-light mb-3'>
                        <div width={'200px'} height={'200px'}>
                          <img width={'50%'} src={sp.image} alt="" /> 
                        </div>
                        <div className='card-body text-center'>
                            <div>
                                <h4 className="card-title text-center">{sp.name}</h4>
                                <p className="card-text">{sp.price} $</p>
                                <a href="https://create-react-app.dev/" className="btn btn-primary">Details</a>
                                <a href="https://create-react-app.dev/" className="btn btn-danger">Cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemShoes;