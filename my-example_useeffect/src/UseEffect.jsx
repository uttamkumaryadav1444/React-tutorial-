import * as React from "react";

function ApiCAllSimulation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "RKU Student" });
        }, 5000);
    });
}

function ApiTesting() {
    const [id, setid] = React.useState("loading...");
    const [name, setname] = React.useState("loading...");

    React.useEffect(() => {
        ApiCAllSimulation().then((user) => {
            setid(user.id);
            setname(user.name);
        });
    }, []); // Add an empty dependency array to run useEffect only once

    return (
        <div>
            User: {name} <br />
            ID: {id}
        </div>
    );
}

export default ApiTesting;
