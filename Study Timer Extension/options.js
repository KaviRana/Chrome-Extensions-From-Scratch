const nameInput = document.getElementById("name-input")
const notifyInput = document.getElementById("notify-input")
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click",() => {
    const name = nameInput.value
    const notificationTime = notifyInput.value
    chrome.storage.sync.set({
        name,
        notificationTime,
    })
})

chrome.storage.sync.get(["name", "notificationTime"],(res)=>{
    nameInput.value = res.name ?? "Unknown"
    notifyInput.value = res.notificationTime ?? 1000
}) 