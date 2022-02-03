function getAgentDetails() {
    // selectElement = document.querySelector('#select-agent');
    url="https://valorant-api.com/v1/agents";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}

console.log(getAgentDetails())