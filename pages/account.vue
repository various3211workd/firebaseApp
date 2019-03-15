<template>
  <div>
    <!-- ログイン中の画面 -->
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です。
      <button v-on:click="Logout" class="button is-primary">ログアウト</button>
      <a href="/member-page">メンバーページへ</a>
    </div>
    <!-- 未ログイン時の画面 -->
    <div v-else>
    <!--
      <button @click="Login" class="button is-primary">googleでログイン</button>
    -->
      メール<br>
      <input type="text" v-model="email" class="input"><br>
      パスワード<br>
      <input type="password" v-model="password" class="input"><br>
    <button v-on:click="Login" class="button is-primary">ログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
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
    /*
    Login: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .then(user => {
        this.$router.push("/member-page")
      }).catch((error) => {
        alert(error)
      });
    },
    Logout: function() {
      firebase.auth().signOut();
    },
    */
    Login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
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