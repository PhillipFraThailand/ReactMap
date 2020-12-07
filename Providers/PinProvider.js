import React, {useState, useEffect} from 'react';
import axios from 'axios'
const PinContext =  React.createContext();

//component which uses hooks and contextAPI
const PinProvider = (props) => {

// const axios = require('axios');
const [pins, setPins] = useState();
const [isLoading, setIsLoading] = useState(false);

// tried to call the axios from outside useEffect as stackoverflow told me to try
const setPinsFromAPI = () => {
    axios.get('http://localhost:8088/get-all-markers')
    .then((response) => {
        console.log(response.data)
        setPins(response.data)
    })
    .catch((err) => {
        console.log('Error fetching markers')
    })
}

// tried to make the request inside of useEffect as ive seen examples who should work do
useEffect(() => {
    console.log('useEffect called');
    const fetchData = async () => {
        const request  = await axios.get('http://localhost:8088/get-all-markers'); // this is an API call
        if (request) {
            setItems(request.data);
            console.log(setItems);
        } else {
            console.log('Error fetching data in PinProvider line 24');
        }
    }
    // async function fetchData() {
    //     const request = await axios.get('http://localhost:8088/get-all-markers');
        // console.log(request);
        // setPins(request.data) //or data.results
        // return request;
    fetchData();
},[]); //empty [] means run once when it loads, and not again, if we pass in [pins] it runs on load and on update to a pin
            //if a variable is being used in useEffect we have to provide it in [] though because its dependent on the variable. 
                // so everytime the variable changes we have to update our useEffect. 


    return (
        <PinContext.Provider
            value={{
                pins,
                isLoading,
                setPins,
                setIsLoading
            }}
        >
            {props.children}
        </PinContext.Provider>
    )
}

export {PinProvider, PinContext};