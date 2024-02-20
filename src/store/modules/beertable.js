export default{
    state: {
        beerdesk:[
            {id:0, name: "Grimbergen Blanche",type:"ligth", alco:"6%",country:"Poland", design:{vit:7, evg:7},soft:{vit:8,evg:9},taste:{vit:8,evg:8},image: require('@/assets/img/beerPhoto/GrimBlanch.jpg')},
            {id:1, name: "Sitnan",type:"ligth", alco:"5%",country:"Slovakia ", design:{vit:6, evg:6},soft:{vit:5,evg:4},taste:{vit:5,evg:4},image: require('@/assets/img/beerPhoto/sitnat.jpg')},
            {id:2, name: "Mecklenburger",type:"wheat", alco:"5.1%",country:"German", design:{vit:4, evg:5},soft:{vit:8,evg:8},taste:{vit:9,evg:7},image: require(`@/assets/img/beerPhoto/mecklen.jpg`)},
            {id:3, name: "Xibeca damm",type:"ligth", alco:"4.6%",country:"Spain", design:{vit:6, evg:6},soft:{vit:6,evg:7},taste:{vit:7,evg:7},image: require("@/assets/img/beerPhoto/xibeca.jpg")},
            {id:4, name: "Royal Witbier",type:"ligth", alco:"5.2%",country:"Denmark", design:{vit:5, evg:6},soft:{vit:10,evg:9},taste:{vit:8,evg:8},image: require("@/assets/img/beerPhoto/royal.jpg")},
            {id:5, name: "Zubr",type:"ligth", alco:"4.1%",country:"Czech", design:{vit:4, evg:5},soft:{vit:6,evg:6},taste:{vit:5,evg:6},image: require("@/assets/img/placeholder.jpg")},
            {id:6, name: "Karlova",type:"ligth", alco:"4%",country:"Czech", design:{vit:5, evg:6},soft:{vit:7,evg:6},taste:{vit:7,evg:6},image: require("@/assets/img/placeholder.jpg")},
            {id:7, name: "Diesel tradici",type:"ligth", alco:"6%",country:"Lithuania", design:{vit:7, evg:7},soft:{vit:8,evg:8},taste:{vit:3,evg:5},image: require("@/assets/img/beerPhoto/dizelTradition.jpg")},
            {id:8, name: "Diesel dark",type:"dark", alco:"6%",country:"Lithuania", design:{vit:8, evg:7},soft:{vit:10,evg:9},taste:{vit:7,evg:6},image: require("@/assets/img/beerPhoto/diselDark.jpg")},
            {id:9, name: "Diesel strong",type:"ligth", alco:"7.4%",country:"Lithuania", design:{vit:8, evg:8},soft:{vit:6,evg:7},taste:{vit:5,evg:7},image: require("@/assets/img/beerPhoto/diselStrong.jpg")},
            {id:10, name: "Pivna Dizhka",type:"dark", alco:"4.2%",country:"Ukraine", design:{vit:8, evg:9},soft:{vit:9,evg:9},taste:{vit:8,evg:8},image:require("@/assets/img/placeholder.jpg")},
            {id:11, name: "Boso black",type:"dark", alco:"4.2%",country:"Lithuania", design:{vit:7, evg:7},soft:{vit:8,evg:8},taste:{vit:7,evg:6},image:require("@/assets/img/beerPhoto/BosoBlack.jpg")},
            {id:12, name: "Kelt",type:"light", alco:"3.9%",country:"Slovakia", design:{vit:6, evg:7},soft:{vit:8,evg:6},taste:{vit:6,evg:5},image:require("@/assets/img/beerPhoto/Kelt.jpg")},
            {id:13, name: "Boso wheat",type:"light", alco:"5.2%",country:"Lithuania", design:{vit:6, evg:6},soft:{vit:8,evg:8},taste:{vit:5,evg:7},image:require("@/assets/img/beerPhoto/BosoWheat.jpg")},
            {id:14, name: "Budweiser",type:"light", alco:"5%",country:"Czech", design:{vit:6, evg:8},soft:{vit:9,evg:9},taste:{vit:8,evg:7},image:require("@/assets/img/beerPhoto/Budweiser.jpg")},
            {id:15, name: "Binding",type:"dark", alco:"4.8%",country:"Denmark", design:{vit:7, evg:7},soft:{vit:6,evg:6},taste:{vit:5,evg:5},image:require("@/assets/img/beerPhoto/Binding.jpg")},
            {id:16, name: "Chornobaivka",type:"light", alco:"4%",country:"Ukraine", design:{vit:5, evg:5},soft:{vit:5,evg:7},taste:{vit:5,evg:7},image:require("@/assets/img/beerPhoto/Chornobaivka.jpg")},
            {id:17, name: "Binding White",type:"white", alco:"4.8%",country:"Ukraine", design:{vit:6, evg:6},soft:{vit:7,evg:7},taste:{vit:8,evg:6},image:require("@/assets/img/beerPhoto/BindingWhite.jpg")},
            {id:18, name: "A. Lecoq",type:"light", alco:"4.7%",country:"Estonia", design:{vit:6, evg:7},soft:{vit:6,evg:6},taste:{vit:5,evg:5},image:require("@/assets/img/beerPhoto/ALecoq.jpg")},
            {id:19, name: "Prazacka",type:"light", alco:"4%",country:"Czech", design:{vit:6, evg:6},soft:{vit:8,evg:8},taste:{vit:8,evg:7},image:require("@/assets/img/beerPhoto/Prazacka.jpg")},
            {id:20, name: "Erfunter",type:"light", alco:"4.8%",country:"Denmark", design:{vit:7, evg:7},soft:{vit:7,evg:7},taste:{vit:7,evg:7},image:require("@/assets/img/beerPhoto/Erfunter.jpg")},
            {id:21, name: "Holland Crown",type:"light", alco:"5%",country:"Austrian", design:{vit:8, evg:8},soft:{vit:9,evg:9},taste:{vit:9,evg:8},image:require("@/assets/img/beerPhoto/HollandCrown.jpg")},
            {id:22, name: "Zhazhkiv",type:"light", alco:"4.5%",country:"Ukraine", design:{vit:7, evg:7},soft:{vit:8,evg:7},taste:{vit:7,evg:7},image:require("@/assets/img/placeholder.jpg")},
        ],
        beerPhoto: false,
        sorted:false,
        newArr: "start"

    },
    getters: {
        getBeerDesk(state){
            return state.beerdesk
        },
        getSortList(state){
        if(state.newArr == "start"){
            return state.newArr = state.beerdesk
        } else {
            return state.newArr
        }
        }
    },
    mutations: {
        openbeerPhoto(state){
        if(state.beerPhoto == false){
            state.beerPhoto = true
        }
        },
        closeBeerPhoto(state){
            if(state.beerPhoto==true){
                state.beerPhoto = false
            }
        },
        sortBeerTab(state,val){
            if(val == "name" || val== "type" || val == "alco" || val == "country"){
                if(state.sorted == false){
                    state.newArr.sort((a,b) => a[val] < b[val]? 1: -1)
                state.sorted = true
                } else if(state.sorted == true){
                    state.newArr.sort((a,b) => a[val] < b[val]? -1: 1)
                state.sorted = false
                }
            }
            if(val == "design" || val=="soft" || val=="taste"){
                if(state.sorted == false){
                state.newArr.sort((a,b) =>(a[val].vit + a[val].evg) < (b[val].vit + b[val].evg)? 1: -1)
                state.sorted = true
                } else if(state.sorted == true){
                    state.newArr.sort((a,b) =>(a[val].vit + a[val].evg) < (b[val].vit + b[val].evg)? -1: 1)
                state.sorted = false
                }
            }   

        },
        searchBeer(state,searchVal){
            state.newArr = searchVal
        }
    },
    actions: {
    },
}