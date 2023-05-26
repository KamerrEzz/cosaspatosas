/**
 * Lo que hace este archivo es crear una factura en paypal
 * 
 */ 


const paypal = require('paypal-rest-sdk');
const fs = require('fs');

const CLIENT = 'AWuG6n5tk2LCPQcAoFp07m0jXd2nIVkOtXwRdh-iPoVnQpuD37apH94LZE8IIoOazOYyGktUYkLBKD_o';
const SECRET = 'EMiTsCrrictnn1BeH-FmaVpjN_G0rdmIHSQ-X3YSzogo1MT7LjFt8q8o93B3KdNaF_AjLCLTJO9MN2R3';

// sb-vpckg10146471@personal.example.com || jz&yZ36F
// sb-kmx7a10140416@business.example.com || RS@q?o3u
 
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': CLIENT,
    'client_secret': SECRET
});

let create_invoice_json = {
    "merchant_info": {
        "email": "sb-kmx7a10140416@business.example.com",
        "business_name": "Medical Professionals, LLC",
        "first_name": "Dennis",
        "last_name": "Doctor",
        "phone": {
            "country_code": "001",
            "national_number": "5032141716"
        },
        "address": {
            "line1": "1234 Main St.",
            "city": "Portland",
            "state": "OR",
            "postal_code": "97217",
            "country_code": "US"
        }
        
    },
    "billing_info": [{
        "email": 'sb-vpckg10146471@personal.example.com'
    }],
    "items": [{
        "name": "Item Name",
        "quantity": 1.0,
        "unit_price": {
            "currency": "USD",
            "value": "500.00"
        },
    }],
    "payment_term": {
        "term_type": "NET_45"
    },
    "tax_inclusive": false,
    "total_amount": {
        "currency": "USD",
        "value": "500.00"
    },
};

// paypal.invoice.create(create_invoice_json, function (error, invoice) {
//     if (error) {
//         throw error;
//     } else {
//         console.log("Create Invoice Response");
//         fs.writeFileSync('invoice.json', JSON.stringify(invoice, null, 4));
//         let invoice_id = invoice.id;
//         paypal.invoice.send(invoice_id, function (error, response) {
//             if (error) {
//                 console.log(error.response);
//             } else {
//                 console.log("Send Invoice Response");
//                 console.log({response,
//                     invoice_id,
//                     url: `https://sandbox.paypal.com/invoice/payerView/details/${invoice.id}`
//                 });
//                 fs.writeFileSync('response.json', JSON.stringify(response, null, 4));
//             }
//         });
//     }
// });

// INV2-HB88-68J8-JBES-U2EC // pagado
// INV2-U3Y4-4QVV-ZHBN-WTZQ // no pagado

paypal.invoice.get('INV2-HB88-68J8-JBES-U2EC', function (error, invoice) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Get Invoice Response");
        console.log({invoice});
    }
});