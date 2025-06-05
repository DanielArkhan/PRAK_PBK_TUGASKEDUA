<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="brand">
        <img src="/icon.png" alt="Logo" />
        <span>Coin Top-Up</span>
      </div>
      <div class="socials">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Coin Top-Up · Specialist Top Up Hemat Super Cepat!</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin-top: 40px;
  background: #f5f5f5;
  padding: 20px 32px;
  font-family: 'Poppins', sans-serif;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.brand {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.brand img {
  width: 32px;
  margin-right: 8px;
}

.socials a {
  margin: 0 8px;
  font-size: 18px;
  color: #555;
}

.footer-bottom {
  text-align: center;
  color: #888;
  font-size: 14px;
}
</style>
