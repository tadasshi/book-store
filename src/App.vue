<template>
  <div id="app">
    <q-layout>
      <q-page-container>
        <div class="row">
          <div class="col-lg-10 offset-lg-1 col-md-12 bg-white">
            <router-view/>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/custom.scss';
</style>
