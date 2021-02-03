console.log("service-worker");

self.addEventListener("push",(res)=>{
    let data = res.data.json();
    self.registration.showNotification(data.title,{body:data.text,"favicon.ico"})
})