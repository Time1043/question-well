<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>

      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <a-layout-footer class="footer">
        <a href="http://github.com/Time1043" target="_blank">Time1043 oswin</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<style scoped>
#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}

#basicLayout .content {
  margin-bottom: 16px;
  padding: 20px;
  background: linear-gradient(to right, #bbb, #fff);
}

#basicLayout .footer {
  position: sticky;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 16px;
  text-align: center;
  background: #efefef;
}
</style>
