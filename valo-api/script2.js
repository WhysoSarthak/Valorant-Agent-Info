let player={

    fetchAgent:function (uuid) {

    url="https://valorant-api.com/v1/agents/"+uuid;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data) => {
        this.displayAgent(data);
    })
},

displayAgent : function(data){
    const {displayName , description , fullPortrait } = data.data;
    const {displayIcon} = data.data.role;

    document.querySelector(".photo").src = fullPortrait;
    document.querySelector(".agentName").innerText = displayName;
    document.querySelector(".description").innerText = description;
    document.querySelector(".role").src = displayIcon;
}
};

document.querySelector("#agents").addEventListener("change",function () {

    player.fetchAgent(this.value);
});

player.fetchAgent("601dbbe7-43ce-be57-2a40-4abd24953621")