<template>
    <section>
        <div class="search">
            <div class="search_item">
                <div class="search_item_content">
                    <p class="search_header">КОМНАТЫ</p>
                    <div class="controls">
                        <button v-for="item in buttons" :key="item.id" @click="edit(item)" :class="{'active': item.active}" class="btn_rooms">{{item.title}}</button>
                    </div>
                </div>
            </div>
            <div class="search_item">
                <span class="let_last">|</span>
                <div class="search_item_content">
                    <p class="search_header">ЭТАЖ</p>
                    <Range @maxPrice="maxFr" @minPrice="minFr"/>
                </div>
            </div>
            <div class="search_item">
                <span class="let">|</span>
                <div class="search_item_content">
                    <p class="search_header">площадь<span class="metrix">м</span><sup>2</sup></p>
                    <Range @maxPrice="maxSc" @minPrice="minSc"/>
                </div>
            </div>
            <div class="search_item">
                <span class="let">|</span>
                <div class="search_item_content">
                    <p class="search_header">стоимость<span class="metrix">млн. р.</span></p>
                    <Range @maxPrice="maxPr" @minPrice="minPr"/>
                </div>
            </div>
            <div class="search_item">
                <span class="let_first">|</span>
                <div class="search_item_content">
                    <button @click="filterr" class="filter">Применить</button>
                    <p @click="deleteFilter" class="dlete_filter">сбросить фильтр</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Range from '@/components/Range'
export default {
    components: {
        Range
    },
    data(){
        return{
            buttons: [
                {
                    id: 1,
                    name: 'studio',
                    title: 'S',
                    active: false,

                },
                {
                    id: 2,
                    name: 'oneroom',
                    title: '1к',
                    active: false
                },
                {
                    id: 3,
                    name: 'tworoom',
                    title: '2к',
                    active: false
                },
                {
                    id: 4,
                    name: 'treeroom',
                    title: '3к',
                    active: false
                },

            ],
            minFloor : 1,
            maxFloor: 100,
            maxScuare: 100,
            minSquare: 1,
            maxCost: 100000000,
            minCost: 1000000,
            room: [],
        }
    },
    methods: {
        maxFr(item){
            this.maxFloor = item
        },
        minFr(item){
            this.minFloor = item
        },
        maxSc(item){
            this.maxScuare = item
        },
        minSc(item){
            this.minSquare = item
        },
        maxPr(item){
            this.maxCost = (item * 1000000)
        },
        minPr(item){
            this.minCost = (item * 1000000)
        },
       edit(item){
           if(item.name === 'studio'){
                this.room.push('1')
                if(item.active == false){
                    item.active = true
                }else{
                    item.active = false
                }
           }else if (item.name === 'oneroom'){
               this.room.push('2')
               if(item.active == false){
                    item.active = true
                }else{
                    item.active = false
                }
           }else if (item.name === 'tworoom'){
               this.room.push(3)
               if(item.active == false){
                    item.active = true
                }else{
                    item.active = false
                }
           }else if (item.name === 'treeroom'){
               this.room.push(4)
               if(item.active == false){
                    item.active = true
                }else{
                    item.active = false
                }
           }else{
               console.log('error')
           }
       },
       filterr(){
           this.$store.dispatch('filter', {
               room: this.room,
               minFl: Number(this.minFloor),
               maxFl: Number(this.maxFloor),
               maxSqre: Number(this.maxScuare),
               minSqre: Number(this.minSquare),
               maxPrce: Number(this.maxCost),
               minPrce: Number(this.minCost)
           })
       },
       deleteFilter(){
           this.$store.dispatch('deleteFilter')
           for(let i= 0; i<this.buttons.length; i++){
               let item = this.buttons[i]
               item.active = false
           }
       }
    }
    
}
</script>

<style lang="scss" scoped>
.search{
    display: flex;
    width: 100%;
    .search_item{
        width: 20%;
        position: relative;
        display: flex;

        &:last-child{
            padding: 0 0 0 40px;
            display: flex;
            flex-direction: column;
            flex-basis: fit-content;
        }
        .search_item_content{
            padding: 0 20px;
            width: 100%;
            &:first-child{
                padding: 0 20px 0 0;
            }
        }
        .let{
            position: absolute;
            top: 35px;
            color: #EBEBEB;
            height: 20px;

        }
        .let_first{
            position: absolute;
            top: 35px;
            color: #EBEBEB;
            height: 20px;
            left: 15px;
        }
        .let_last{
            position: absolute;
            top: 35px;
            color: #EBEBEB;
            height: 20px;
            left: -15px;
        }
    }
    .controls{
        display: flex;
        
        .btn_rooms{
            background: #FFFFFF;
            border: 1px solid #D8D8D8;
            box-sizing: border-box;
            border-radius: 5px;
            color: #2C323A;
            font-size: 16px;
            line-height: 28px;
            padding: 6px 14px;
            margin-right: 4px;
            width: 47px;
            height: 40px;
        }
        .btn_rooms.active{
            background-color: #70D24E;
            color: #fff;

        }
    }

}
.search_header{
    font-size: 12px;
    line-height: 28px;
    font-weight: 700;
    color: #2C323A;
    text-transform: uppercase;
}
.metrix{
    padding-left: 3px;
}
sup{
    top: -6px;
    position: absolute;
}
.filter{
    background: #70D24E;
    padding: 7px 54px;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    margin-top: 28px;
    border-radius: 5px;
    &:hover{
        color: #2C323A;
        background-color: #fff;
    }
}
.dlete_filter{
    width: 50%;
    margin-left: 50px;
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    color: #2C323A;
    padding-top: 5px;
    border-bottom: 1px solid #70D24E;
    &:hover{
        color: brown;
    }
}
@media screen and (max-width:980px) {
    .search{
        flex-wrap: wrap;
        justify-content: center;
        .search_item{
            width: 33%;
        }
    }
}
@media screen and (max-width:768px) {
    .search{
        flex-wrap: wrap;
        justify-content: center;
        .search_item{
            width: 50%;
            .search_item_content:first-child{
                padding-left: 20px;
            }
            .let_last, .let, .let_first{
                display: none;
            }
        }
    }
}
@media screen and (max-width:480px) {
    .search{
        flex-wrap: wrap;
        justify-content: center;
        .search_item{
            width: 100%;
            .search_item_content:first-child{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
            }
            .search_item_content:last-child{
                width: 100%;
                margin: 0 auto;
            }
        }
        .search_item:last-child{
            padding-left: 0;
        }
    }
}
</style>

