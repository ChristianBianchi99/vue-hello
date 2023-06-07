const { createApp } = Vue;

createApp({
    data(){
        return{
            hello: "Hello World",
            img: "https://picsum.photos/200/300"
        }
    }
}).mount("#app")