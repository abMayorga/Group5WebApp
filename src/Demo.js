import React, { useEffect, useState } from "react";
//import { VendiaClient } from "@vendia/client";
import { VendiaClient } from "./VendiaClient";

const { client } = VendiaClient();

export const Demo = () => {

    //state variables; adds reactivity to react: if you assign something to state variable, updating one of them refreshes the page
    const [device, setDevice] = useState();
    const [testName, setTestName] = useState();
    const [testList, setTestList] = useState();

    useEffect(() => { //every time component is loaded, useffect is called
        const listTest = async () => {
            const listTestResponse = await client.entities.test.list();
            console.log(listTestResponse?.items);
            setTestList(listTestResponse?.items)
    }
    listTest(); 
    }, []) //[] is to make sure only called once

    //adding a device (hardcoded)
    const addDevice = async () => {
        const addDeviceResponse = await client.entities.test.add({
            Device: device,
            TestName: testName
        })
        console.log(addDeviceResponse);
    }
    const handleDeviceChange = (event) => {
        setDevice(event.target.value);
    }
    const handleTestNameChange = (event) => {
        setTestName(event.target.value);    
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        addDevice();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <div>
                    <input
                    type="text"
                    name="Device"
                    value={device}
                    onChange={handleDeviceChange}
                    />
                </div>
                <div>
                <input
                    type="text"
                    name="testName"
                    value={testName}
                    onChange={handleTestNameChange}
                    />
                </div>
                <input type="submit"/> 
            </form>
            <div>
                {testList?.map((item, index) => (
                    <div key={index}>
                        {item?.TestID}
                    </div>
                ))

                }
            </div>
        </div> 
    )
};