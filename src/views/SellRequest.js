import React from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Sellrequset() {
  const [requests, setRequest] = useState([])

  const ShowRequest = async () => {
    const token = localStorage.getItem('user')

    const _token = token.split('"').join('')
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .get('http://127.0.0.1:5000/product/order/buyRequest', config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        setRequest(res.data)
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  useEffect(async () => {
    ShowRequest()
  }, [])

  let soldProducts = []
  if (requests.data != undefined) {
    soldProducts = requests.data
  }

  let productID = []
  let bookingMoney = []
  let buyerName = []
  let buyingMoney = []
  let buyingQuantity = []
  let buyingQuantityUnit = []
  let productName = []
  let status = []

  for (let i = 0; i < soldProducts.length; i++) {
    productID.push(soldProducts[i].product_id)
    bookingMoney.push(soldProducts[i].bookingMoney)
    buyerName.push(soldProducts[i].buyerName)
    buyingMoney.push(soldProducts[i].buyingMoney)
    buyingQuantity.push(soldProducts[i].buyingQuantity)
    buyingQuantityUnit.push(soldProducts[i].buyingQuantityUnit)
    productName.push(soldProducts[i].productName)
    status.push(soldProducts[i].status)
  }

  let sellrequset = []
  for (let i = 0; i < soldProducts.length; i++) {
    sellrequset.push(
      <Col
        style={{ background: 'rgba(181, 218, 164, .3)', borderColor: 'white' }}
      >
        <table>
          <th>
            <h3 style={{ marginRight: '20px' }}>{productName[i]}</h3>
          </th>
          <th style={{ color: 'gray', marginLeft: '5px' }}>
            আইডি: {productID[i]}
          </th>
        </table>
        <table>
          <th>
            <h5
              style={{
                color: 'green',
                marginRight: '50px',
                font: 'message-box',
              }}
            >
              বুকিং মানি: {bookingMoney[i]} টাকা
            </h5>
          </th>
          <th>
            {' '}
            <h5
              style={{
                color: 'green',
                marginRight: '50px',
                font: 'message-box',
              }}
            >
              মোট মূল্য: {buyingMoney[i]} টাকা{' '}
            </h5>
          </th>
        </table>
        <table>
          <th>
            <h5>পরিমাণ:</h5>
          </th>
          <th>
            <h5
              style={{
                color: 'green',
                marginLeft: '10px',
                font: 'message-box',
              }}
            >
              {buyingQuantity[i]} {buyingQuantityUnit[i]}
            </h5>
          </th>
          <th>
            <h5 style={{ marginLeft: '30px', font: 'message-box' }}>
              স্ট্যাটাস: {status[i]}
            </h5>
          </th>
        </table>
        <table style={{ marginLeft: '85%' }}>
          <Button
            variant='success'
            style={{ marginLeft: '20px' }}
            onClick={approve}
          >
            এপ্রুভ করুন
          </Button>
        </table>
        <Row style={{ background: 'white', height: '15px' }}></Row>
      </Col>
    )
  }

  function approve() {
    const body = {
      productId: product_id,
    }

    const token = localStorage.getItem('user')
    const _token = token.split('"').join('')
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .post('http://127.0.0.1:5000/product/order/accept', product, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert('Product added successfully')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as='h4'>পণ্য বিক্রয় অনুরোধ</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <h5>
                  <small>বিক্রয় সম্পন্নকৃত পণ্যসমূহ</small>
                </h5>
                {sellrequset}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Sellrequset
