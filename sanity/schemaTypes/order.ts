
export default{
    "name": "order",
    "title": "Order",
    "type": "document",
    "fields": [
      {
        "name": "customerName",
        "title": "Customer Name",
        "type": "string"
      },
      {
        "name": "pohomeNumber",
        "title": "Phone Number",
        "type": "number"
      },
      {
        "name": "state",
        "title": "Customer State",
        "type": "string"
      },
      {
        "name": "adress",
        "title": "Customer Adress",
        "type": "text"
      },
      {
        "name": "products",
        "title": "Products",
        "type": "array",
        "of": [{ "type": "reference", "to": [{ "type": "product" }] }]
      },
      {
        "name": "quantity",
        "title": "Quantity",
        "type": "number"
      },
      {
        "name": "totalAmount",
        "title": "Total Amount",
        "type": "number"
      }
    ]
  }
  