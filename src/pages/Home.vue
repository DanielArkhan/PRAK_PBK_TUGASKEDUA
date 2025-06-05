<template>
  <div class="home">
    <h1 class="title">Coin Top-up</h1>
    <h2 class="subtitle">Simple, Easy, and Trusted</h2>
    
    <div class="game-list">
      <GameCard
        v-for="game in games"
        :key="game.name"
        :game="game"
        buttonText="Top Up"
        @show-prices="openTopUpForm"
      />
    </div>

    <TopUpForm
      v-if="selectedGame"
      :game="selectedGame"
      @close="selectedGame = null"
    />
  </div>
</template>

<script>
import GameCard from '../components/GameCard.vue'
import TopUpForm from '../components/TopUpForm.vue'

export default {
  components: { GameCard, TopUpForm },
  data() {
    return {
      selectedGame: null,
      games: [
        { name: 'Genshin Impact', image: 'https://kaleoz-media.seagmcdn.com/kaleoz-store/202208/oss-8ccbf9e6128bcda49a5eab1649e054c2.png?x-oss-process=image/format,webp', route: 'genshin' },
        { name: 'Mobile Legends', image: 'https://img.utdstc.com/icon/78d/66f/78d66ff1ab1bd23f7fd6d9cdb93854881cb8f0b69e8a301faaf4f4eab058d19e:200', route: 'ml' },
        { name: 'Honkai Star Rail', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zYTPg3tQA-qL53_Wjs8qJuN82MEYQb9uKw&s', route: 'hsr' },
        { name: 'PUBG Mobile', image: 'https://www.gamespot.com/a/uploads/scale_medium/1352/13527689/3955566-icon_logo.jpg', route: 'pubg' },
        { name: 'Free Fire', image: 'https://cdn6.aptoide.com/imgs/9/b/a/9baa66a3fb33bfcea3e8b791dee5d1c7_icon.png', route: 'ff' }
      ]
    }
  },
  methods: {
    openTopUpForm(gameName) {
      this.selectedGame = gameName;
    }
  }
}
</script>

<style scoped>
.home {
  padding: 24px;
  text-align: center;
}

.title {
  font-size: 32px;
  color: #ff0000;
}

.subtitle {
  color: #888;
  margin-bottom: 24px;
}

.game-list {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
