import { createPayment, returnPayment } from "../services/paymentService";
import {
  VNPay,
  ProductCode,
} from 'vnpay';
require("dotenv").config();
const querystring = require("qs");
const crypto = require("crypto");
import { Buffer } from "buffer";

// const vnpay = new VNPay({
//   paymentGateway: "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
//   merchant: "S6ANVFJP",
//   secureSecret: "JNOGWVTOCUVPAKBWKWTPOIRQJRSVPVIJ",
// });

// const vnpay = new VNPay({
//   secureSecret: process.env.VNP_HASH_SECRET,
//   tmnCode: process.env.VNP_TMN_CODE,
// });

const vnpay = new VNPay({
  secureSecret: process.env.VNP_HASH_SECRET,
  tmnCode: process.env.VNP_TMN_CODE,
});

const handleCreatePayment = async (req, res) => {
  const bankList = await vnpay.getBankList();
    const productTypeList = Object.entries(ProductCode).map(([key, value]) => ({ key, value }));
    const contentPaymentDefault = `Thanh toan don hang ${new Date().toISOString()}`;

    const { amountInput, contentPayment, productTypeSelect, bankSelect, langSelect } = req.body;

    console.log("check data: ");
    const checkoutData = {
      vnp_Amount: req.body.amount,
      vnp_IpAddr: '127.0.0.1',
      vnp_OrderInfo: "contentPayment",
      vnp_ReturnUrl: process.env.RETURN_URL,
      vnp_TxnRef: new Date().getTime().toString(),
      vnp_BankCode: bankSelect ?? undefined,
      vnp_Locale: "vn",
      vnp_OrderType: "bill",
    };
    // vnpay.buildPaymentUrl(checkoutData).then((checkoutUrl) => {
    //   res.send({ checkoutUrl });
    // });
    console.log("check data: ", checkoutData);
    const checkoutUrl = vnpay.buildPaymentUrl(checkoutData);
    console.log("check url: ", checkoutUrl);
    
    res.send({ checkoutUrl });
};

const handleReturnPayment = (req, res) => {
  const query = req.query;
  console.log("check query: ", query);
  vnpay.verifyReturnUrl(query).then((results) => {
    console.log("check res: ", results);
    if (results.vnp_TransactionStatus === "00") {
      // Payment successful
      res.send("Payment successful");
    } else {
      // Payment unsuccessful
      res.send("Payment unsuccessful");
    }
  });
};

module.exports = {
  handleCreatePayment,
  handleReturnPayment,
};
