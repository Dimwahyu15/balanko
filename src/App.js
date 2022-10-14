import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import {NavigationBar, Hasil, Listcategories, Menus} from './components'
import {API_URL} from './utils/constants'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus :[],
    }
  }
  
  componentDidMount(){
    axios.get(API_URL + "Products")
    .then(res => {
      console.log("response :", res)
      const menus = res.data;
      this.setState({ menus });
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const {menus} = this.state
    return (
      <div>
      <div className="NavigationBar">
          < NavigationBar/>
      </div>
      <div className='content mt-3'>
          <Container>
            <Row>
              <Listcategories/>
                  <Col>
                    <h4><strong>Daftar Produk</strong></h4>
                    <hr/>
                      <Row>
                        {/* {menus && menus.map((menu) => (
                          <Menus 
                            key ={menu.id}
                            menu = {menu}
                          />
                        ))} */}
                        
                        {menus && menus.map((menu) => (
                         <Menus
                          key ={menu.id}
                          menu ={menu}
                         />
                        ))}
                      </Row>
                  </Col>
              <Hasil/>
            </Row>
          </Container>
      </div>
    </div>
    );
  }
}
