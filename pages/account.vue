<template>
  <section class="container">
    <div>
      <!-- ログイン中の画面 -->
      <div v-if="isAuthenticated">
        {{ user.email }}でログイン中です。<br>
        <button v-on:click="Logout" class="button--green">ログアウト</button><br>
        <a href="/member-page">メンバーページへ</a>
      </div>
      <!-- 未ログイン時の画面 -->
      <div v-else>
        <button v-on:click="Login" class="button--green">Googleでログイン</button><br>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  layout: 'default',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  methods : {
    ...mapActions(['setUser']),
    Login() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        .then(user => {
        // ログインしたら飛ぶページを指定
        this.$router.push("/member-page")
        }).catch((error) => {
          alert(error)
      });
    },
    Logout() {
      firebase.auth().signOut()
      .then(() => {
        this.setUser(null)
      }).catch((error) => {
        alert(error)
      })
    },
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
