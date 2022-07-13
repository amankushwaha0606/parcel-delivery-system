module.exports.orderStatus = (stage) => {
    if (stage == 0) return "";
    
    const orderStages = [
        "Not PLaced",
        "Order Confirmed",
        "Shipped",
        "Out for Delivery",
        "Delivered",
        "Return",
        "Refunded",
    ];
    let statusString = "";
    
    // Starting stage is 1... so we need to set stage as limit
    // stage 0 means order is not placed yet
    let i=1;
    for (i = 1; i <= stage; i++) { 
        statusString += orderStages[i] + " (Done) ---------> ";
    }
    if (stage < 4) {
        statusString += orderStages[i] + " (waiting) ---------> ";
    }
    if (stage == 5) {
        statusString += orderStages[i] + " (waiting) ---------> ";
    }
    return statusString;
}