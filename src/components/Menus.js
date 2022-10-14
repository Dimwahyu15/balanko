
import {Col, Card} from 'react-bootstrap';
import numberWithCommas from '../utils/utils';

export const Menus = ({menu}) => {
  return (
  //   <div>
  //      {/* <h3>{menu.nama}</h3> */}
    
  //      <div class="card">
  //      <div class="head-card">
  //      </div>
  //      <div class="body-card">
  //     <h1>{menu.nama}</h1>
  //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad repudiandae fuga facilis dicta fugiat voluptates deleniti libero earum sed aliquid. </p>
  //      </div>
  // </div>

    
  //   </div>

  <Col>
      <Card md={4} xs={6} className="mb-4"> 
      <Card.Img variant="top" src={"assets/images/"+menu.category.nama.toLowerCase()+"/"+menu.gambar} />
      <Card.Body>
        <Card.Title>{menu.nama}</Card.Title>
        <Card.Text>
         Rp. {numberWithCommas(menu.harga)}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  )
}


export default Menus;