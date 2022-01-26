<template>
    <section>
        <div class="wrapper-content wrapper-content--fixed">
          <div class="container">
            <h1 class="home_header">IT-ЭКСПЕРТ ДЛЯ ДЕВЕЛОПЕРА<span>:\</span></h1>
            <div class="home_content">
                <p class="home_content_item">Первоначальная сфера деятельности компании — информационная безопасность, которая легла в основу разработки продуктов.</p>
                <p class="home_content_item">Мы автоматизируем бизнес-процессы внутри компании застройщика и предлагаем решения для web-пространства. Наши продукты отличаются отказоустойчивостью </p>
            </div>
            <div class="home_numbers">
                <div class="home_numbers_item">
                    <h3 class="numbers_header blue">15 лет</h3>
                    <p class="numbers_text">опыта в IT</p>
                </div>
                <div class="home_numbers_item">
                    <h3 class="numbers_header">1200+</h3>
                    <p class="numbers_text">проектов</p>
                </div>
                <div class="home_numbers_item">
                    <h3 class="numbers_header blue">8 лет</h3>
                    <p class="numbers_text">работы с девелоперами<span class="header">♥</span></p>
                </div>
                <div class="home_numbers_item">
                    <h3 class="numbers_header">84000+</h3>
                    <p class="numbers_text">часов разработки</p>
                </div>
            </div>
          </div>
      </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.home_header{
    font-weight: 700;
    font-size: 42px;
    span{
        font-size: 42px;
        color: rgb(0, 9, 255);
        padding-left: 10px;
    }
}
.home_content{
    padding: 1em 0 5em 0;
    width: 60%;
    .home_content_item{
        line-height: 1.55;
        font-size: 16px;
        &:first-child{
            padding-bottom: 1em;
        }
    }
}
.home_numbers{
    display: flex;
    width: 100%;
    justify-content: space-between;
    .numbers_header{
        font-size: 36px;
        font-weight: 700;
        border-bottom: 4px solid #000;
    }
    .blue{
        color: rgb(0, 9, 255);
    }
    .numbers_text{
        padding-top: 1em;
    }
    .header{
        color: rgb(255, 0, 0);
        padding-left: 10px;
    }
}
</style>