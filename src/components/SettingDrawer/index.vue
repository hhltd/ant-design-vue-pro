<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      :visible="visible"
      @close="onClose"
      width="300px"
    >
      <template v-slot:handle>
        <div class="setting-drawer-handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <a-radio-group
          :value="$route.query.navTheme || 'dark'"
          @change="e => handleSetting('navTheme', e.target.value)"
        >
          <h2>整体风格定制</h2>
          <a-radio value="dark">
            黑色
          </a-radio>
          <a-radio value="light">
            白色
          </a-radio>
        </a-radio-group>
        <a-radio-group
          :value="$route.query.navLayout || 'left'"
          @change="e => handleSetting('navLayout', e.target.value)"
        >
          <h2>导航模式</h2>
          <a-radio value="left">
            左侧
          </a-radio>
          <a-radio value="top">
            顶部
          </a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handleSetting(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    }
  }
};
</script>
<style lang="less" src="./index.less">

</style>
