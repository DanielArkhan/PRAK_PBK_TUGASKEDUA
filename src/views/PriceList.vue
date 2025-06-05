<template>
  <div class="pricelist">
    <h2>Top-Up Pricelist</h2>

    <div class="game-list">
      <GameCard
        v-for="game in uniqueGamesWithImage"
        :key="game.name"
        :game="game"
        :prices="prices.filter(p => p.game === game.name)"
        buttonText="Daftar Harga"
        @show-prices="selectGame"
        :class="{ selected: selectedGame === game.name }"
      />
    </div>

    <div v-if="selectedGame" class="price-table-container">
      <h3>Harga Paket untuk {{ selectedGame }}</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredPrices" :key="item.id">
            <td>{{ item.package }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import GameCard from '../components/GameCard.vue';

export default {
  components: { GameCard },
  data() {
    return {
      selectedGame: '',
      prices: [
        { id: 1, game: 'Genshin Impact', package: '60 Genesis Crystals', price: 'Rp15.000' },
        { id: 2, game: 'Genshin Impact', package: '300 Genesis Crystals', price: 'Rp75.000' },
        { id: 3, game: 'Genshin Impact', package: '6480 Genesis Crystals', price: 'Rp1.250.000' },

        { id: 4, game: 'Mobile Legends', package: '86 Diamonds', price: 'Rp20.000' },
        { id: 5, game: 'Mobile Legends', package: '172 Diamonds', price: 'Rp39.000' },
        { id: 6, game: 'Mobile Legends', package: '568 Diamonds', price: 'Rp125.000' },

        { id: 7, game: 'Honkai Star Rail', package: '60 Oneiric Shards', price: 'Rp15.000' },
        { id: 8, game: 'Honkai Star Rail', package: '300 Oneiric Shards', price: 'Rp75.000' },
        { id: 9, game: 'Honkai Star Rail', package: '6480 Oneiric Shards', price: 'Rp1.200.000' },

        { id: 10, game: 'PUBG Mobile', package: '60 UC', price: 'Rp13.000' },
        { id: 11, game: 'PUBG Mobile', package: '325 UC', price: 'Rp69.000' },
        { id: 12, game: 'PUBG Mobile', package: '810 UC', price: 'Rp149.000' },

        { id: 13, game: 'Free Fire', package: '70 Diamonds', price: 'Rp11.000' },
        { id: 14, game: 'Free Fire', package: '140 Diamonds', price: 'Rp21.000' },
        { id: 15, game: 'Free Fire', package: '720 Diamonds', price: 'Rp109.000' }
      ],
      gamesInfo: [
        {
          name: 'Genshin Impact',
          image: 'https://kaleoz-media.seagmcdn.com/kaleoz-store/202208/oss-8ccbf9e6128bcda49a5eab1649e054c2.png?x-oss-process=image/format,webp',
          route: 'genshin'
        },
        {
          name: 'Mobile Legends',
          image: 'https://img.utdstc.com/icon/78d/66f/78d66ff1ab1bd23f7fd6d9cdb93854881cb8f0b69e8a301faaf4f4eab058d19e:200',
          route: 'ml'
        },
        {
          name: 'Honkai Star Rail',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2zYTPg3tQA-qL53_Wjs8qJuN82MEYQb9uKw&s',
          route: 'hsr'
        },
        {
          name: 'PUBG Mobile',
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/PlayerUnknown%27s_Battlegrounds_Mobile.webp/180px-PlayerUnknown%27s_Battlegrounds_Mobile.webp.png',
          route: 'pubg'
        },
        {
          name: 'Free Fire',
          image: 'https://cdn6.aptoide.com/imgs/9/b/a/9baa66a3fb33bfcea3e8b791dee5d1c7_icon.png',
          route: 'ff'
        }
      ]
    };
  },
  computed: {
    uniqueGames() {
      return [...new Set(this.prices.map(item => item.game))];
    },
    uniqueGamesWithImage() {
      return this.gamesInfo.filter(g => this.uniqueGames.includes(g.name));
    },
    filteredPrices() {
      return this.prices.filter(item => item.game === this.selectedGame);
    }
  },
  methods: {
    selectGame(gameName) {
      this.selectedGame = gameName;
    }
  }
};
</script>

<style scoped>
.pricelist {
  padding: 20px;
  text-align: center;
}

h2 {
  color: #4d3eff;
  margin-bottom: 20px;
}

.game-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.price-table-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
}

th {
  background-color: #f5f5f5;
}

.selected {
  border: 3px solid #4d3eff;
  border-radius: 16px;
}
</style>
