const data = require('./data');
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

axios.interceptors.request.use((config) => {
    config.headers['request-startTime'] = process.hrtime()
    return config
});

axios.interceptors.response.use((response) => {
    const start = response.config.headers['request-startTime']
    const end = process.hrtime(start)
    const milliseconds = Math.round((end[0] * 1000) + (end[1] / 1000000))
    response.headers['request-duration'] = milliseconds
    return response
});

//makes a single DELETE request given the cookie and id of the record you want to delete
const del = async (id, cookie) => {
    try{
        const res = await axios.delete(`http://localhost:5000/rest/signup/rules/${id}`, {
            headers: {
                'cookie': `SESSION=${cookie}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log(`DELETE /rest/signup/rules/${id} --- Status: ${res.status} --- Response Time: ${res.headers['request-duration']} ms`);
    }
    catch (err) {
        console.log("err");
        console.log(`Status: ${err.response.status}\nMessage: ${err.response.headers['exception-message']}`);
    }
};

const fetchFirstId = async (cookie) => {
    const res = await axios.get('http://localhost:5000/rest/signup/rules/', {
        headers: {
            'cookie': `SESSION=${cookie}`
        }
    });
    const data = res.data;
    const firstRecord = data[0];
    const firstId = firstRecord.id;
    console.log(data);
    console.log(firstRecord);
    console.log(firstId);
    return firstId;
}

//main function - takes the user input (cookie), and makes all POST requests with said cookie
const sendRequests = async (cookie) => {
    //const firstId = await fetchFirstId(cookie);
    for (var i = 0; i <= data.length; i++){
        await del(i, cookie);
    }
}

rl.question("Enter cookie session: ", async (cookie) => {
    await sendRequests(cookie);
});

rl.on("close", () => {
    process.exit(0);
});