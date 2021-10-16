import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import axios from 'axios'
import { useEffect, useState } from 'react'

function BuyRequset() {
  const [requests, setRequest] = useState([])
  const [bookRequest, setBookRequest] = useState('')

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
      .get('http://127.0.0.1:5000/product/order/orderRequest', config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        setRequest(res.data)
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  const BookKorun = async (product_id) => {
    const token = localStorage.getItem('user')

    const _token = token.split('"').join('')
    console.log(product_id)
    //console.log(token)
    //console.log(`Bearer ` + _token)
    const config = {
      headers: {
        Authorization: `Bearer ${_token}`,
      },
    }

    axios
      .get(
        'http://127.0.0.1:5000/product/ssl-commerze/payment?productId=' +
          product_id,
        config
      )
      .then((res) => {
        //console.log('RESPONSE RECEIVED: ', res)
        //console.log(res.data.url)
        //setBookRequest(res.data.url)
        //console.log(bookRequest)
        //console.log(bookRequest.url)
        //redirect from here
        //console.log(res.data.url)
        //window.location.replace(res.data.url)
        window.open(res.data.url, '_blank')
        //alert('Data fetched')
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  const paymentDone = async (product_id) => {
    //console.log(product_id)

    const productID = {
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
      .post('http://127.0.0.1:5000/product/order/paid', productID, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert('Product payment successful')
        window.location.reload()
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err)
      })
  }

  const productReceived = async (product_id) => {
    //console.log(product_id)

    const productID = {
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
      .post('http://127.0.0.1:5000/product/order/complete', productID, config)
      .then((res) => {
        console.log('RESPONSE RECEIVED: ', res)
        alert('Product Received successful')
        window.location.reload()
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
  let buyingMoney = []
  let buyingQuantity = []
  let buyingQuantityUnit = []
  let productName = []
  let status = []

  for (let i = 0; i < soldProducts.length; i++) {
    productID.push(soldProducts[i].product_id)
    bookingMoney.push(soldProducts[i].bookingMoney)
    buyingMoney.push(soldProducts[i].buyingMoney)
    buyingQuantity.push(soldProducts[i].buyingQuantity)
    buyingQuantityUnit.push(soldProducts[i].buyingQuantityUnit)
    productName.push(soldProducts[i].productName)
    status.push(soldProducts[i].status)
  }

  let sellrequset = []
  for (let i = 0; i < soldProducts.length; i++) {
    if (status[i] == 'accepted') {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>{productName[i]}</td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td>{status[i]}</td>
          <td>
            <Button
              size='sm'
              variant='warning'
              value={productID[i]}
              onClick={(e) => BookKorun(e.target.value)}
            >
              বুক করুন
            </Button>
          </td>
        </tr>
      )
    } else if (status[i] == 'paid') {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>{productName[i]}</td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td color='yellow'>{status[i]}</td>
          <td>
            <Button
              size='sm'
              variant='warning'
              value={productID[i]}
              onClick={(e) => productReceived(e.target.value)}
            >
              পণ্য বুঝে পেয়েছি
            </Button>
          </td>
        </tr>
      )
    } else {
      sellrequset.push(
        <tr>
          <td>{i + 1}</td>
          <td>{productName[i]}</td>
          <td>{bookingMoney[i]}</td>
          <td>{buyingMoney[i]}</td>
          <td>{buyingQuantity[i]}</td>
          <td color='yellow'>{status[i]}</td>
          <td></td>
        </tr>
      )
    }
  }

  return (
    <Card className='strpied-tabled-with-hover'>
      <Card.Header>
        <Card.Title as='h4'>পণ্য ক্রয় অনুরোধ</Card.Title>
        <p className='card-category'>
          নিম্নের পণ্যসমূহ ক্রয়ের জন্য অনুরোধ করা হয়েছে
        </p>
      </Card.Header>
      <Card.Body className='table-full-width table-responsive px-0'>
        <Table className='table-hover table-striped'>
          <thead>
            <tr>
              <th className='border-0'>ক্রমিক</th>
              <th className='border-0'>পণ্যের নাম</th>
              <th className='border-0'>বুকিং মানি</th>
              <th className='border-0'>মোট মূল্য</th>
              <th className='border-0'>পরিমাণ</th>
              <th className='border-0'>স্ট্যাটাস</th>
            </tr>
          </thead>
          <tbody>{sellrequset}</tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default BuyRequset
