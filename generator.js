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

//makes a single POST request given the cookie and data you want to upload
const post = async (body, cookie) => {
    try{
        const res = await axios.post('http://localhost:5000/rest/signup/rules', body, {
            headers: {
                'cookie': `SESSION=${cookie}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        console.log(`POST /rest/signup/rules --- Status: ${res.status} --- Response Time: ${res.headers['request-duration']} ms`);
    }
    catch (err) {
        console.log("err");
        console.log(`Status: ${err.response.status}\nMessage: ${err.response.headers['exception-message']}`);
    }
};

//main function - takes the user input (cookie), and makes all POST requests with said cookie
const sendRequests = async (cookie) => {
    for (var i = 0; i < data.length; i++){
        await post(data[i], cookie);
    }
}

rl.question("Enter cookie session: ", async (cookie) => {
    await sendRequests(cookie);
});

rl.on("close", () => {
    process.exit(0);
});