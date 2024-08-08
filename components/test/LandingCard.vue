<template>
  <div class="landing-card">
    <div class="landing-card-content">
      <div class="landing-card-image">
        <img :src="image" alt="Card Image" />
      </div>
      <div class="landing-card-body">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <nuxt-link :to="link" class="landing-card-button">{{ buttonText }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.landing-card {
  border: 2px solid transparent;
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.3s ease;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  padding: 2px;
}

.landing-card-content {
  background-color: white;
  border-radius: 14px;
  overflow: hidden;
}

.landing-card-image img {
  width: 100%;
  height: auto;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.landing-card-body {
  padding: 16px;
}

.landing-card-body h2 {
  font-size: 24px;
  margin: 0 0 8px;
}

.landing-card-body p {
  font-size: 16px;
  margin: 0 0 16px;
}

.landing-card-button {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: #ff7e5f;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.landing-card-button:hover {
  background-color: #feb47b;
}

.landing-card:hover {
  border-color: #feb47b;
}
</style>
