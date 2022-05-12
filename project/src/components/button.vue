<template>
    <button><slot></slot></button>
</template>
<script>
export default {
name: "Button",
};
</script>
<style>
button{
    width: 8rem;
    font-size: 20px;
    background-color: rgb(239,78,66);
    color: white;
    border: none;
    padding: .7rem;
    justify-content: flex-end;
    transition: .1s;
}
button:hover {background-color: rgb(41,43,131)}
button:active {
  background-color: rgb(41,43,131);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>