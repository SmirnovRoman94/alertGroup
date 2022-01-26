<template>
    <section>
        <div class="wrapper-content wrapper-content--fixed">
            <div class="container">
                <h3 class="catalog_header">Lorem ipsum dolor sit</h3>
                <Search />
                <RoomList/>
            </div>
        </div>
    </section>
</template>

<script>
import Search from '@/components/Search'
import RoomList from '@/components/RoomList'
export default {
    components: {
        Search,
        RoomList
    }
}
</script>

<style lang="scss" scoped>
.catalog_header{
    font-size: 38px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
}
</style>