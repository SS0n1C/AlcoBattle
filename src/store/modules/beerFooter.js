export default{
    state:{
        social:[
            {id:0, title: "GitHub", link: "https://github.com/SS0n1C/",icon: "fdf"},
            {id:1, title: "Instagram", link: "https://www.instagram.com/s_s1c/",icon: "/assets/img/sprite.svg#search"},
            {id:2, title: "Linkedin", link:"https://ua.linkedin.com/in/vitalii-lymar-a0874023a",icon: "/assets/img/sprite.svg#search"},
            {id:3, title: "facebook", link:"https://www.facebook.com/people/%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%9B%D1%8B%D0%BC%D0%B0%D1%80%D1%8C/100026704785528/",icon: 'search'},
        ]
    },
    getters:{
        getAllSocial(state){
            return state.social
        }
    },
    mutations:{

    }
}