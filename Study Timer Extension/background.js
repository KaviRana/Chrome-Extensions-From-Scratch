chrome.alarms.create({periodInMinutes : 1/60})

chrome.alarms.onAlarm.addListener((alarm)=>{
    //console.log(alarm)
    chrome.storage.local.get(["timer","isRunning"],(res) => {
        const time = res.timer ?? 0
        const isRunning = res.isRunning ?? true
        if(!isRunning){
            return
        }
        chrome.storage.local.set({
            timer: time+1,
        })
        chrome.action.setBadgeText({ text: `${time + 1}`,
        })
        if(time % 1000 == 0){
            self.registration.showNotification("Chrome Timer Extension", {
                body: "1000 second has passed",
                icon: "icon.png",
            });        
        }
        
})
})

