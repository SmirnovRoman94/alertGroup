<template>
    <div class="room">
        <div class="room_header">
            <div class="room_header_first">
                <p>{{room.floor}}<span class="metrix">этаж</span></p>
            </div>
            <div class="room_header_last">
                <p class="room_header_last_item">{{room.rooms}}<span class="metrix">комната</span><span class="tip">-</span></p>
                <p class="room_header_last_item">{{room.square}}<span class="metrix_metr">м<sup>2</sup></span></p>
            </div>
        </div>
        <div class="room_plan">
            <p class="room_number"><span class="number">№</span>{{room.building_id}}</p>
            <img class="plan_img" :src="require(`@/assets/scss/img${room.plan}`)" :alt="room.building_id"/>
        </div>
        <div class="room_price">
            <p class="price_total">{{newPrice}}<span class="metrix">р.</span></p>
            <p class="price_metr">{{metr}}<span class="metrix">р. за м<sup>2</sup></span></p>
        </div>
        <button class="room_more">ПОДРОБНЕЕ</button>
    </div>
</template>

<script>
export default {
    props: {
        room: {
            type: Object,
            required: true
        }
    },
    computed: {
        metr(){
           let metr = Math.round((this.room.price)/(this.room.square))
           let newFrm = new Intl.NumberFormat('ru-RU').format(metr)
           return newFrm
        },
        newPrice(){
            let price = this.room.price
            let newFrm = new Intl.NumberFormat('ru-RU').format(price)
            return newFrm
        }
    }
}
</script>

<style lang="scss" scoped>
.room{
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
    border-radius: 10px;
    padding: 8px 10px 10px 10px;
    &:hover .room_plan{
        height: 230px;
        transition: 1s;
        .plan_img{
             padding: 24px 32px;
             transition: 1s;
        }
    }

    
    .room_header{
        padding: 0 10px 4px 5px ;
        display: flex;
        justify-content: space-between;
        line-height: 24px;
        .room_header_first{
            font-size: 12px;
            font-weight: 700;
            color: #2C323A;
            opacity: .5;
        }
        .room_header_last{
            display: flex;
            color: #2C323A;
            font-weight: 700;
            font-size: 12px;
            .tip{
                padding: 0 10px;
            }
        }
    }
    .room_plan{
        position: relative;
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 5px;
        transition: 1s;
        
        .plan_img{
            width: 100%;
            padding: 31px 10px;
            transition: 1s;
        }
        .room_number{
            position: absolute;
            right: 0;
            padding: 2px 10px 0 10px;
            font-size: 14px;
            line-height: 28px;
            display: flex;
            border-bottom: 1px solid #EBEBEB;
            border-left: 1px solid #EBEBEB;
            box-sizing: border-box;
            border-radius: 0px 5px;

        }

    }
    .room_price{
        padding: 11px 10px 0 5px;
        text-align: right;
        .price_total{
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
        }
        .price_metr{
            font-size: 12px;
            font-weight: 700;
            line-height: 28px;
            color: #2C323A;
            opacity: .5;
        }
    }
    .room_more{
        display: none;
        padding: 7px 0 5px 0;
        text-align: center;
        width: 100%;
        color: #fff;
        font-size: 14px;
        line-height: 28px;
        font-weight: 700;
        background: #70D24E;
        border-radius: 2px 2px 5px 5px;
    }
}
.room:hover .room_more{
    display: block;
    animation: hidden 2s;
}
@keyframes hidden {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

sup{
    font-size: 8px;
    position: absolute;
    top: -12px;
}
.metrix{
    padding-left: 3px;
    position: relative;
}
.metrix_metr{
    position: relative;
}
</style>