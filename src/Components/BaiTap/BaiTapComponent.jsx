import React, { Component } from 'react';

import State from '../State&ReRender/State';
// import ListShoes from '../Props/ListShoes';


class BaiTapComponent extends Component {
    mangSanPham = [
        {
          id: 1,
          name: "Adidas Prophere",
          alias: "adidas-prophere",
          price: 350,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 995,
          image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
          id: 2,
          name: "Adidas Prophere Black White",
          alias: "adidas-prophere-black-white",
          price: 450,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 990,
          image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
          id: 3,
          name: "Adidas Prophere Customize",
          alias: "adidas-prophere-customize",
          price: 375,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 415,
          image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
          id: 4,
          name: "Adidas Super Star Red",
          alias: "adidas-super-star-red",
          price: 465,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 542,
          image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
          id: 5,
          name: "Adidas Swift Run",
          alias: "adidas-swift-run",
          price: 550,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 674,
          image: "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
          id: 6,
          name: "Adidas Tenisky Super Star",
          alias: "adidas-tenisky-super-star",
          price: 250,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 456,
          image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
          id: 7,
          name: "Adidas Ultraboost 4",
          alias: "adidas-ultraboost-4",
          price: 450,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 854,
          image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
          id: 8,
          name: "Adidas Yeezy 350",
          alias: "adidas-yeezy-350",
          price: 750,
          description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
          shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
          quantity: 524,
          image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        }
    ]

    render() {
        return (
            <State />
            // <ListShoes mangSanPham={this.mangSanPham} />
        );
    }
}

export default BaiTapComponent;