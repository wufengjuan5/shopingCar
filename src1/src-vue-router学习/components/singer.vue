<template>
  <div>
    <h3>这是歌手页面</h3>
    <ul>
      <li>
        <router-link to="/singer/info"> 歌手信息</router-link>
      </li>
        <li>
        歌手歌曲
      </li>
    </ul>
    <hr>  
    <router-view></router-view>
  </div>
</template>
