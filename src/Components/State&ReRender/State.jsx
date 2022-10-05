import React, { Component } from 'react'

export default class State extends Component {

    constructor(props) {
        super(props)
        this.state = {
            img : '',
            name : '',
            price : '',
            desc : '',
        }
        this.ChangeGlass = this.ChangeGlass.bind(this);
    }
    glasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    Item() {
        return (
            <React.Fragment>
                {this.glasses.map((glass, index) => {
                    return (
                        <div className='glasses-item' key={index} onClick={() => this.ChangeGlass(glass.id)}>
                            <img  src={glass.url} alt={glass.id} />
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
    ChangeGlass(id) {
        let currentGlass = '';
        let currentName = '';
        let currentPrice = '';
        let currentDesc = '';
        let temp = this.glasses.find((glass) => {
            return glass.id === id;
        })
        if (temp.id === id) {
            currentGlass = `./img/v${id}.png`;
            currentName = `${temp.name}`;
            currentPrice = `- ${temp.price}$`;
            currentDesc = `${temp.desc}`;
        }
        // console.log(currentGlass);
        //gọi phương thức setState để truyền currentGlass mới từ sự kiện click => render lại giao diện với source mới
        this.setState({
            img: currentGlass,
            name : currentName,
            price : currentPrice,
            desc : currentDesc,
        }, () => console.log(this.state));
    }
    tryGlass() {
        return (
            <div className='tryGlass'>
                <img src={this.state.img} alt=""/>
            </div>
        )
    }
    getInfoGlass() {
        return (
            <div className='getInfoGlass' style={this.styleButton}>
                <span>{this.state.name}</span><span>{this.state.price}</span>
                <p>{this.state.desc}</p>
            </div>
        )
    }
    styleButton = {
        backgroundColor : 'rgba(0,0,0,0.3)',
    }
    render() {
        return (
        <React.Fragment>
            <section className='header'>
                <div>
                    <p>TRY GLASSES APP ONLINE</p>  
                </div>
        </section>
        <section className='body'>
                <div className="avatar">
                    <div className="avatar-wrap">
                        <img src="./img/model.jpg" alt="Model-Avatar" />
                    </div>
                    <div className="avatar-wrap">
                        <img src="./img/model.jpg" alt="Model-Avatar" />
                        {this.tryGlass()}
                        {this.getInfoGlass()}
                    </div>       
                </div>
                <div className='glasses-list'>
                    <div>
                        {this.Item()}              
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }
}
