<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <div class="logo">
      <img src="/icon.png" alt="Logo" />
      <span>Coin Top-Up</span>
    </div>
    <div class="nav">
      <div class="search">
        <input type="text" v-model="searchQuery" placeholder="Search games..." />
        <button @click="search"><i class="fas fa-search"></i></button>
      </div>
      <nav class="links">
        <a href="#price-list">Price List</a>
        <a href="#contact">Contact Us</a>
        <button class="login-btn" @click="login">Login</button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      alert(`Searching for: ${this.searchQuery}`);
    },
    login() {
      alert("Login page will open here");
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #ffffff;
  border-bottom: 2px solid #eee;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
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
  background: #377dff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
