const data = [
    {
        "name": "EU Test 0",
        "description": "EU Region 0",
        "status": "ACTIVE",
        "country": "IN",
        "edition": "DEVELOPER",
        "isDefaultRule": false,
        "requestingOrg": "blah",
        "instances": [
            "ap1"
        ]
    },
    {
        "name": "EU Test 1",
        "description": "EU Region 1",
        "status": "INACTIVE",
        "routingZone": "EU1",
        "isDefaultRule": true,
        "instances": [
            "ap2",
            "ap1"
        ]
    },
    {
        "name": "EU Test 2",
        "description": "EU Region 2",
        "status": "ACTIVE",
        "routingZone": "EU2",
        "isDefaultRule": true,
        "instances": [
            "ap2"
        ]
    },
    {
        "name": "EU Test 3",
        "description": "EU Region 3",
        "status": "INACTIVE",
        "routingZone": "EU3",
        "isDefaultRule": true,
        "instances": [
            "ap3"
        ]
    },
    {
        "name": "EU Test 4",
        "description": "EU Region 4",
        "status": "INACTIVE",
        "routingZone": "EU4",
        "isDefaultRule": true,
        "instances": [
            "ap4"
        ]
    },
    {
        "name": "EU Test 5",
        "description": "EU Region 5",
        "status": "ACTIVE",
        "routingZone": "EU5",
        "isDefaultRule": true,
        "instances": [
            "ap5"
        ]
    },
    {
        "name": "EU Test 6",
        "description": "EU Region 6",
        "status": "ACTIVE",
        "routingZone": "EU6",
        "isDefaultRule": true,
        "instances": [
            "ap6"
        ]
    },
    {
        "name": "EU Test 7",
        "description": "EU Region 7",
        "status": "INACTIVE",
        "routingZone": "EU7",
        "isDefaultRule": true,
        "instances": [
            "ap7"
        ]
    },
    {
        "name": "EU Test 8",
        "description": "EU Region 8",
        "status": "ACTIVE",
        "routingZone": "EU8",
        "isDefaultRule": true,
        "instances": [
            "ap8"
        ]
    },
    {
        "name": "EU Test 9",
        "description": "EU Region 9",
        "status": "ACTIVE",
        "routingZone": "EU9",
        "isDefaultRule": true,
        "instances": [
            "ap9"
        ]
    },
    {
        "name": "EU Test 10",
        "description": "EU Region 10",
        "status": "INACTIVE",
        "routingZone": "EU10",
        "isDefaultRule": true,
        "instances": [
            "ap10"
        ]
    },
    {
        "name": "USA Test 1",
        "description": "USA Region 1",
        "status": "ACTIVE",
        "routingZone": "USA1",
        "isDefaultRule": true,
        "instances": [
            "ap11"
        ]
    },
    {
        "name": "USA Test 2",
        "description": "USA Region 2",
        "status": "ACTIVE",
        "routingZone": "USA2",
        "isDefaultRule": true,
        "instances": [
            "ap12"
        ]
    },
    {
        "name": "USA Test 3",
        "description": "USA Region 3",
        "status": "ACTIVE",
        "routingZone": "USA3",
        "isDefaultRule": true,
        "instances": [
            "ap13"
        ]
    },
    {
        "name": "USA Test 4",
        "description": "USA Region 4",
        "status": "ACTIVE",
        "routingZone": "USA4",
        "isDefaultRule": true,
        "instances": [
            "ap14"
        ]
    },
    {
        "name": "USA Test 5",
        "description": "USA Region 5",
        "status": "INACTIVE",
        "routingZone": "USA5",
        "isDefaultRule": true,
        "instances": [
            "ap15"
        ]
    },
    {
        "name": "USA Test 6",
        "description": "USA Region 6",
        "status": "ACTIVE",
        "routingZone": "USA6",
        "isDefaultRule": true,
        "instances": [
            "ap16"
        ]
    },
    {
        "name": "USA Test 7",
        "description": "USA Region 7",
        "status": "INACTIVE",
        "routingZone": "USA7",
        "isDefaultRule": true,
        "instances": [
            "ap17"
        ]
    },
    {
        "name": "USA Test 8",
        "description": "USA Region 8",
        "status": "ACTIVE",
        "routingZone": "USA8",
        "isDefaultRule": true,
        "instances": [
            "ap18"
        ]
    },
    {
        "name": "USA Test 9",
        "description": "USA Region 9",
        "status": "ACTIVE",
        "routingZone": "USA9",
        "isDefaultRule": true,
        "instances": [
            "ap19"
        ]
    },
    {
        "name": "USA Test 10",
        "description": "USA Region 10",
        "status": "ACTIVE",
        "routingZone": "USA10",
        "isDefaultRule": true,
        "instances": [
            "ap20"
        ]
    },
    {
        "name": "TEST Test 1",
        "description": "TEST Region 1",
        "status": "INACTIVE",
        "routingZone": "TEST1",
        "isDefaultRule": true,
        "instances": [
            "ap11"
        ]
    },
    {
        "name": "TEST Test 2",
        "description": "TEST Region 2",
        "status": "ACTIVE",
        "routingZone": "TEST2",
        "isDefaultRule": true,
        "instances": [
            "ap12"
        ]
    },
    {
        "name": "TEST Test 3",
        "description": "TEST Region 3",
        "status": "INACTIVE",
        "routingZone": "TEST3",
        "isDefaultRule": true,
        "instances": [
            "ap13"
        ]
    },
    {
        "name": "TEST Test 4",
        "description": "TEST Region 4",
        "status": "ACTIVE",
        "routingZone": "TEST4",
        "isDefaultRule": true,
        "instances": [
            "ap14"
        ]
    },
    {
        "name": "TEST Test 5",
        "description": "TEST Region 5",
        "status": "ACTIVE",
        "routingZone": "TEST5",
        "isDefaultRule": true,
        "instances": [
            "ap15"
        ]
    },
    {
        "name": "TEST Test 6",
        "description": "TEST Region 6",
        "status": "INACTIVE",
        "routingZone": "TEST6",
        "isDefaultRule": true,
        "instances": [
            "ap16"
        ]
    },
    {
        "name": "TEST Test 7",
        "description": "TEST Region 7",
        "status": "ACTIVE",
        "routingZone": "TEST7",
        "isDefaultRule": true,
        "instances": [
            "ap17"
        ]
    },
    {
        "name": "TEST Test 8",
        "description": "TEST Region 8",
        "status": "ACTIVE",
        "routingZone": "TEST8",
        "isDefaultRule": true,
        "instances": [
            "ap18"
        ]
    },
    {
        "name": "TEST Test 9",
        "description": "TEST Region 9",
        "status": "ACTIVE",
        "routingZone": "TEST9",
        "isDefaultRule": true,
        "instances": [
            "ap19"
        ]
    },
    {
        "name": "TEST Test 10",
        "description": "TEST Region 10",
        "status": "INACTIVE",
        "routingZone": "TEST10",
        "isDefaultRule": true,
        "instances": [
            "ap20"
        ]
    }
];

module.exports = data;