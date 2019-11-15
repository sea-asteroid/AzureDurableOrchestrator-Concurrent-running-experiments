/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 * 
 * Before running this sample, please:
 * - create a Durable orchestration function
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *   function app in Kudu
 */

module.exports = async function (context) {
    //return `Hello ${context.bindings.name}!`;
    //let instanceID = context.bindings.instanceID;
    var num = 1000000000;
    function fibonacci(num){
        var a = 1, b = 0, temp;
        while (num >= 0){
          temp = a;
          a = a + b;
          b = temp;
          num--;
        } 
        return b;
    }
    //console.log(context.bindings.name);
    var res = context.bindings.name;
    //console.log('res', res);
    var obj = res.split(" ");
    obj_id = obj[1];
    obj_count = obj[0];
    //console.log('obj_id', obj_id);
    //console.log('obj_count', obj_count);
    
    let time_start_fibonacci = new Date().getTime();
    console.log('InstanceID = ' + obj_id + ' time_start_fibonacci =', time_start_fibonacci);
    let va = fibonacci(num);
    let time_end_fibonacci = new Date().getTime();
    console.log('InstanceID = ' + obj_id + ' time_end_fibonacci =', time_end_fibonacci);
    time_wait = time_end_fibonacci - time_start_fibonacci;

    console.log('InstanceID = ' + obj_id + ' time_duratioin_fibonacci =', time_wait);
    var aaa = parseInt(obj_count, 10);
    return aaa+100;
    /*
    console.log(context.bindings.name)
    var obj = JSON.parse(context.bindings.name);
    let time_start_fibonacci = new Date().getTime();
    //let time_start_fibonacci = context.df.getTime();
    console.log(obj.id + ' time_start_fibonacci =', time_start_fibonacci);
    let va = fibonacci(num);
    let time_end_fibonacci = new Date().getTime();
    //let time_end_fibonacci = context.df.getTime();
    console.log(obj.id + ' time_end_fibonacci =', time_end_fibonacci);
    time_wait = time_end_fibonacci - time_start_fibonacci;
    
    
    //obj.count
    console.log(obj.id + ' time_duratioin_fibonacci =', time_wait);
    //return context.bindings.name; 
    return obj.count+100;
    */

};