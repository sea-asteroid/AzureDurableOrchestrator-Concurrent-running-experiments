/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

const df = require("durable-functions");
var count = 0;
module.exports = df.orchestrator(function* (context) {
    const outputs = [];
    /*
    let instanceID = context.df.instanceId;
    console.log('InstanceID', instanceID, 'Start count = ', count);

    count += 1;

    let tmp1 = yield context.df.callActivity("Hello", count instanceID);
    console.log(instanceID, ' one count = %d', tmp1);
    outputs.push(tmp1);

    let tmp2 = yield context.df.callActivity("Hello", tmp1, instanceID);
    console.log(instanceID, ' two count = %d', tmp2);
    outputs.push(tmp2);

    let tmp3 = yield context.df.callActivity("Hello", tmp2, instanceID);
    console.log(instanceID, ' three count = %d', tmp3);
    outputs.push(tmp3);

    return outputs;
    */
   /*
   json encoding/decoding from Paarajat
   var count = 0;
   let instanceID = context.df.instanceId;
   var obj = {'id': instanceID, 'count': count};
   console.log('InstanceID', instanceID, 'Start count = ', count);
   count += 1;
   let tmp1 = yield context.df.callActivity("Hello", JSON.stringify(obj));
   console.log(instanceID + ' one count = %d', tmp1);
   outputs.push(tmp1);
   var obj = {'id': instanceID, 'count': tmp1};
   let tmp2 = yield context.df.callActivity("Hello", JSON.stringify(obj));
   console.log(instanceID + ' two count = %d', tmp2);
   outputs.push(tmp2);
   var obj = {'id': instanceID, 'count': tmp2};
   let tmp3 = yield context.df.callActivity("Hello", JSON.stringify(obj));
   console.log(instanceID + ' three count = %d', tmp3);
   outputs.push(tmp3);
   return outputs;
   */
  let instanceID = context.df.instanceId;
  console.log('InstanceID = ' + instanceID, 'Start count = ', count);

  count += 1;

  let tmp1 = yield context.df.callActivity("Hello", `${count} ${instanceID}`);
  console.log('InstanceID = ' + instanceID + ' one count = %d', tmp1);
  outputs.push(tmp1);

  let tmp2 = yield context.df.callActivity("Hello", `${tmp1} ${instanceID}`);
  console.log('InstanceID = ' + instanceID + ' two count = %d', tmp2);
  outputs.push(tmp2);

  let tmp3 = yield context.df.callActivity("Hello", `${tmp2} ${instanceID}`);
  console.log('InstanceID = ' + instanceID + ' three count = %d', tmp3);
  outputs.push(tmp3);

  return outputs;

});