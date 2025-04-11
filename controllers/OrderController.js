import OrderService from './Services/OrderService';
const orderService = new OrderService();
const createOrder= async (req,res)=>{
    try
    {
        const order= await orderService.createOrder(
            req.user._id,
            req.body.shippingAddressId,
            req.body.billingAddressId,
            req.body.itemId,
            req.body.paymentId,
        );
        res.status(201).json(order);
    }catch(err){
        res.status(400).json(err);
    }
}
const getPaymentCallback = async (req,res)=>{
    try{
        const callback= await orderService.processPaymentCallback(
            req.body.ordered,
            req.body.paymentResult
        );
        res.status(200).json(callback);
    }catch(err){
        res.status(400).json(err);
    }
}
const updateShipOrder = async (req,res)=>{
    try
    {
        const callback= await orderService.processPaymentCallback(
            req.body.orderId,
            req.body.trackingNumber,
        );
        res.status(200).json(callback);
    }catch(err){
        res.status(400).json(err);
    }
}
const getOrder = async (req,res)=>{
    try
    {
        const callback= await orderService.getOrderForBuyer(
            req.body.orderId,
            req.user._id,
        );
        res.status(200).json(callback);
    }catch(err){
        res.status(400).json(err);
    }
}
export {
    createOrder
}