<template>
    <section>
        <div class="container">
            <div class="over">
                <div class="room_list">
                <RoomPreview v-for="item in getRooms" :key="item.id" :room="item"/>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
import RoomPreview from '@/components/RoomPreview'
export default {
    components: {
        RoomPreview
    },
    computed : {
        getRooms(){
            return this.$store.getters.getCatalog
        }
    }
}
</script>

<style lang="scss" scoped>
.over{
    width: 100%;
    height: 100vh;
    overflow-x: scroll;
}
.room_list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
}
@media screen and (max-width: 980px){
    .room_list{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
}
@media screen and (max-width: 500px){
    .room_list{
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    }
}
</style>