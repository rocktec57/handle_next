<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 shadow-sm bg-bodyWhite/95 supports-backdrop-blur:bg-bodyWhite/60 dark:bg-transparent">
    <HeaderNavBar />
  </header>
  <slot></slot>
  <footer>
    <Footer />
  </footer>
</template>
