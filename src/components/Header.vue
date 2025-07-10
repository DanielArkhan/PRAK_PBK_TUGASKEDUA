<template>
  <header class="header">
    <div class="logo">
      <router-link to="/" class="home-link" title="Home">
        <i class="fas fa-home"></i>
      </router-link>
      <img src="/icon.png" alt="Logo" />
      <span>Coin Top-Up</span>
    </div>

    <div class="nav">
      <div class="search">
        <input type="text" v-model="searchQuery" placeholder="Search games..." />
        <button @click="search"><i class="fas fa-search"></i></button>
      </div>

      <nav class="links">
        <router-link to="/pricelist">Price List</router-link>
        <router-link to="/contact">Contact Us</router-link>
        <router-link to="/login" class="login-btn">Login</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search() {
      alert(`Searching for: ${this.searchQuery}`)
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #ffffff;
  border-bottom: 2px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.logo {
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: #333;
  font-family: 'Poppins', sans-serif;
}

.logo img {
  width: 36px;
  margin-right: 12px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.search {
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 6px;
  padding: 4px 8px;
}

.search input {
  border: none;
  outline: none;
  background: transparent;
  padding: 4px 8px;
}

.search button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.links {
  display: flex;
  align-items: center;
  gap: 16px;
}

.links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.login-btn {
  background: white;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.home-link {
  font-size: 24px;
  color: #333;
  margin-right: 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.home-link:hover {
  color: #ff0000;
}
</style>
