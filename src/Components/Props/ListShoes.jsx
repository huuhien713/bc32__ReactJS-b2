import React, { Component } from 'react';

import ItemShoes from '../Props/ItemShoes'

class ListShoes extends Component {  
    
    renderSanPham = () => {
        // lấy giá trị mảng sản phẩm từ component cha truyền vào thông qua thuộc tính this.props
        let {mangSanPham} = this.props;
        console.log(mangSanPham);
        return mangSanPham = mangSanPham.map((sp, index) => {
            return <ItemShoes sp={sp} key={index}/>
        })
    }
    render() {
        

        return (
            <div className='row'>
                {this.renderSanPham()}
            </div>
        );
    }
}

export default ListShoes;