module.exports = function (app) {
    app.post('/', (req, res) => {

        try {
            var arrayFound = req.body.payload.filter(function (item) {
                return item.workflow == "completed" && item.type == "htv";
            });

            var jsonResultObj = JSON.parse('{"response": []}');
            arrayFound.forEach(function (element) {
                var concataddress = element.address.buildingNumber
                    + " " + element.address.street
                    + " " + element.address.suburb
                    + " " + element.address.state
                    + " " + element.address.postcode

                jsonResultObj.response.push({ "concataddress": concataddress, "type": element.type, "workflow": element.workflow })
            });

            res.send(jsonResultObj)
        }catch(err){
            throw new Error("Parse Error !")
        }

    });
}; 