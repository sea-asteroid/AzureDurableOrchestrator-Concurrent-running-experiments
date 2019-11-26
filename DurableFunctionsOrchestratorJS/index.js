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
module.exports = df.orchestrator(function* (context) {
  const outputs = [];
  var count = 0;
  var tmp1 = 0;
  var tmp2 = 0;
  var tmp3 = 0;
  var str = "";
  var i = 0;
  var num =0;
  var instanceID = 0;
  for (num = 3; num > 1; num--){
    str = "a";
    for (i = 2048*num; i > 0; i --) {
      str += "String concatenation. ";
    };
    instanceID = context.df.instanceId;
    console.log('InstanceID = ' + instanceID + ' Start count = ', count);
    count += 1;

    //console.log('InstanceID = ' + instanceID + ' time_start_01_pass =' + new Date().getTime());
    time_start_01_pass = new Date().getTime();
    tmp1 = yield context.df.callActivity("Hello", `${count} ${instanceID} ${str}`);
    //console.log('InstanceID = ' + instanceID + ' time_end_01_pass =' + new Date().getTime());
    time_end_01_pass = new Date().getTime(); 
    time_duration_01_pass = time_end_01_pass - time_start_01_pass;
    console.log('InstanceID = ' + instanceID + ' time_duration_01_pass =' + time_duration_01_pass);
    //context.bindings.myInputBlog = 'InstanceID = ' + instanceID + ' time_duration_01_pass =' + time_duration_01_pass;
    //context.bindings.myOutputBlob = context.bindings.myInputBlob;
    //context.done();
    outputs.push(tmp1);
    
    //console.log('InstanceID = ' + instanceID + ' time_start_12_pass =' + new Date().getTime());
    time_start_12_pass = new Date().getTime();
    tmp2 = yield context.df.callActivity("Hello", `${tmp1} ${instanceID} ${str}`);
    //console.log('InstanceID = ' + instanceID + ' time_end_12_pass =' + new Date().getTime());
    time_end_12_pass = new Date().getTime(); 
    time_duration_12_pass = time_end_12_pass - time_start_12_pass;
    console.log('InstanceID = ' + instanceID + ' time_duration_12_pass =' + time_duration_12_pass);
    outputs.push(tmp2);
    context.bindings.

    //console.log('InstanceID = ' + instanceID + ' time_start_23_pass =' + new Date().getTime());
    time_start_23_pass = new Date().getTime();
    tmp3 = yield context.df.callActivity("Hello", `${tmp2} ${instanceID} ${str}`);
    //console.log('InstanceID = ' + instanceID + ' time_end_23_pass =' + new Date().getTime());
    time_end_23_pass = new Date().getTime(); 
    time_duration_23_pass = time_end_23_pass - time_start_23_pass;
    
    outputs.push(tmp3);
  }
  return outputs;
});

