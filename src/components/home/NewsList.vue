<template>
    <div>
        <NewsItem v-for="item in $attrs.newsList" :key="item.id" :item="item"></NewsItem>
    </div>
</template>
<script>
import NewsItem from './NewsItem'
export default {
    components: {
        NewsItem
    }
}
</script>