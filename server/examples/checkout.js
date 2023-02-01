
$('#checkout').on('submit', checkout)

async function checkout(e){
  e.preventDefault()

  // stripe checkout body
  const body = {
    "items":[
      {
        "description": $("#description").val(),
        "price": $("#price").val(),
        "quantity": $("#quantity").val()
      }
    ]
  }

  let response = await fetch('/data/checkout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  console.log('response', response)
  let result = await response.json()
  console.log('result', result)
  if(result.url){
    $('#link-to-stripe').attr('href', result.url).show()
  }
}

async function getCheckoutResult(){
  let response = await fetch('/data/checkout')
  console.log('response', response)
  let result = await response.json()
  console.log('result', result)
  $('#result').text('Status' + result.checkoutSession.status)
}