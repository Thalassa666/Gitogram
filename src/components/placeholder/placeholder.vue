<template>
    <div class="textarea">
        <input class="textarea_input" type="textarea">
    </div>
    <div class="placeholder">
        <input class="placeholder_input" type="placeholder">
        <input class="placeholder_input input2" type="placeholder">
        <input class="placeholder_input input3" type="placeholder">
    </div>
    <div class="placeholder">
        <input class="placeholder_input" type="placeholder">
        <input class="placeholder_input input2" type="placeholder">
        <input class="placeholder_input input3" type="placeholder">
    </div>
</template>

<script>
export default {
  data () {
    return {
      paragraphs: '<input class="placeholder_input" type="placeholder">'
    }
  }
}
</script>

<style lang="scss" scoped>
    .placeholder_input {
    background: #DEDEDE;
    border: 1px solid #DEDEDE;
    border-radius: 4px;
    width: 177px;
    margin-bottom: 8px;
}

.input2 {
    width: 218px;
    margin-right: 20px;
}

.input3 {
    width: 139px;
}
.textarea_input {
    width: 266px;
    height: 136px;
    margin-bottom: 22px;
    background: #DEDEDE;
    border: 1px solid #DEDEDE;
    border-radius: 4px;
}
.textarea {
    padding-top: 20px;
}
</style>