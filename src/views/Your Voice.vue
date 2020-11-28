<template>
  <div class="your-voice">
    <div class="title">
      <h1>Your Feedback. Your Voice.</h1>
      <p>
        Design Is Doomed is an academic project started with the intention of
        understanding the state of design (and by extension designers) and if it
        remains true to its intentions of humanization. Surveys and literature
        studies conducted led to the realization of a divided consensus. Hence,
        a pessimistic approach was taken in order to have to greatest impact in
        spreading the raison d'être of design, improving its state and pushing
        further towards its goal. Of course, this goal wouldn’t be met if not
        hearing the voice of the target groups!
      </p>
    </div>
    <div id="form">
      <div>
        <div class="form-row">
          <span>
            <div>
              <h2>Name</h2>
              <label for="Name"></label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <h2>Email</h2>
              <label for="Email"></label>
              <input type="email" id="email" name="email" v-model="email" />
            </div>
          </span>
        </div>
        <div>
          <h2>What would you like to say?*</h2>
          <textarea
            v-model="text"
            type="text"
            id="feedbackContent"
            name="feedback-content"
            rows="12"
            cols="100"
            required
          >
          </textarea>
        </div>
        <div>
          <p style="margin-bottom: 2.5%">*Required</p>
          <button @click.prevent="feedbackSubmit" id="submit" disabled>
            Submit
          </button>
        </div>
      </div>
    </div>
    <div id="formSuccess" class="displayNone">
      <h2>Your feedback has been sent!</h2>
    </div>
    <footer>
      <div class="container">
        <div class="logo">
          <img src="../assets/images/logo-rw.png" alt="" />
        </div>
        <div class="links">
          <h1>Page Links</h1>
          <a href="/">Clock of Doom</a>

          <router-link to="/take-the-test">take the test</router-link>
          <router-link to="/cards-against-design"
            >Cards Against Design</router-link
          >
          <a
            style="cursor: pointer"
            onClick="window.scrollTo({ top: 0, behavior: 'smooth' })"
            >Your Voice</a
          >
        </div>
        <div class="disclaimer">
          <h1>Disclaimer</h1>
          <p>
            This website and all its contents are a part of an academic research
            project and does not intend to hurt sentiments of any kind. Some
            images used are either in the public domain or used under the CC0
            license (Creative Commons “No Rights Reserved”, Public Domain). All
            remaining content of this website, including but not limited to
            images not covered by CC0 nor existing in the public domain, is
            licensed under
            <a
              a
              rel="license"
              href="https://creativecommons.org/licenses/by-nc-sa/4.0"
              >CC BY-NC-SA 4.0</a
            >
            (Attribution-NonCommercial-ShareAlike 4.0 International). If you
            think your work has been used without permission, object to any
            content or would like to help improve this project and/or its goal,
            you may contact us via the <a href="/your-voice">feedback page</a>.
          </p>
        </div>
      </div>
      <div class="copyright">
        &copy; 2020 Aswath Sivakumaran. Some Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.displayNone {
  display: none !important;
}

.title {
  margin: 5% 2.5%;
  width: 70%;
  p {
    margin-top: 5%;
    width: 80%;
    text-align: justify;
  }
}

#form {
  opacity: 1;
  transition: 0.5s ease-in-out;
  margin-bottom: 2.5%;
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-top: -5%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  span {
    display: flex;
    justify-content: space-between;

    // align-items: flex-start;
  }

  div {
    div {
      margin: 5% 0;
    }
  }

  label {
    color: #0e0e0e;
    text-align: left;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.2px;
  }

  input[type="text"],
  input[type="email"] {
    height: 2em;
    width: 20em;
    background-color: transparent;
    color: #0e0e0e;
    text-align: left;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.2px;
    border: 1px rgba(14, 14, 14, 0.5) solid;
  }

  input[type="email"] {
    &:focus {
      &:invalid {
        border: 1px rgb(219, 74, 66) solid;
        background-color: rgba(219, 74, 66, 0.3);
      }
    }
  }

  textarea {
    background-color: transparent;
    border: 1px rgba(14, 14, 14, 0.5) solid;
  }

  #submit {
    // margin-top: 15%;
    transition: ease-in-out;
    transition-duration: 0.3s;
    opacity: 1;
    width: 200px;
    height: 48px;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-duration: 0.3s;
    background-color: rgba(238, 238, 238, 0);
    color: #0e0e0e;
    border: 2px #0e0e0e solid;
    font-size: 16px;
    font-family: AndersonGrotesk;
    font-weight: 700;
    cursor: pointer;
    // padding: 16px 24px 16px 24px;
    &:hover {
      transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transition-duration: 0.3s;
      background-color: rgba(14, 14, 14, 1);
      color: rgba(238, 238, 238, 1);
      border: 2px rgba(14, 14, 14, 1) solid;
    }

    &:disabled {
      background-color: rgba(14, 14, 14, 0.2);
      color: rgba(14, 14, 14, 0.2);
      border: 2px rgba(14, 14, 14, 0.2) solid;
      cursor: not-allowed;
    }
  }
}

#formSuccess {
  margin: 5%;
  opacity: 0;
  transition: 0.5s ease-in-out;
}

h1 {
  color: #0e0e0e;
  font-size: 72px;
  font-weight: 900;
  text-align: left;
  letter-spacing: 0.8px;
  line-height: 4px;
}
.h1-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.h1-background-bar {
  // background-image: linear-gradient(0, #eeeeee 70%, transparent 30%);
  background-color: #eeeeee;
}
h2 {
  color: #0e0e0e;
  font-size: 24px;
  font-weight: 900;
  text-align: left;
  letter-spacing: 0.8px;
}
.h2-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
h3 {
  color: #0e0e0e;
  font-size: 24px;
  text-align: center;
  font-weight: 900;
}
.h3-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

p {
  color: #0e0e0e;
  text-align: left;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.2px;
}

.p-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.2px;
}

#test-link {
  transition: ease-in-out;
  transition-duration: 1s;
  opacity: 1;
  width: 300px;
  height: 56px;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 0.3s;
  background-color: rgba(238, 238, 238, 0);
  color: #eeeeee;
  border: 2px #eeeeee solid;
  font-size: 16px;
  font-family: AndersonGrotesk;
  font-weight: 700;
  cursor: pointer;
  // padding: 16px 24px 16px 24px;
  &:hover {
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-duration: 0.3s;
    background-color: rgba(238, 238, 238, 1);
    color: #0e0e0e;
    border: 2px rgba(238, 238, 238, 1) solid;
  }
}

footer {
  text-align: left;
  background-color: #0e0e0e;
  color: #eeeeee;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  .copyright {
    font-family: "Space Grotesk", sans-serif;
    margin-top: 2.5%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .container {
    margin-top: 2.5%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 2.5%;
    margin-right: 2.5%;

    .logo {
      // padding-left: 5%;
      width: 15%;
      img {
        width: 50%;
        height: 50%;
        object-fit: contain;
        // width: inherit;
        // padding-bottom: 16px;
        // padding-right: 2.5%;
      }
    }
    .disclaimer {
      width: 40%;
      h1 {
        // text-decoration: underline;
        text-align: left;
        color: #eeeeee;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 0.07em;
        margin-top: 0;
      }

      p {
        color: #eeeeee;
        font-size: 13px;
      }
      a {
        color: #eeeeee;
        text-decoration: underline;
      }
    }
    .links {
      h1 {
        text-align: left;
        // text-decoration: underline;
        color: #eeeeee;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 0.07em;
        margin-top: 0;
      }
      width: 25%;

      // padding-top: 24px;
      a,
      router-link {
        padding-top: 6px;
        padding-bottom: 6px;
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: 800;
        color: #eeeeee;
        text-decoration: none;
        text-transform: uppercase;
        display: block; /* Display block instead of inline */
        transition: 0.3s; /* Transition effects on hover (color) */
      }
    }
  }
}

.translateRight {
  transform: translateX(100%);
  opacity: 0;
}

.translateLeft {
  transform: translateX(-100%);
  opacity: 0;
}

.translateDown {
  transform: translateY(25%);
  opacity: 0;
}

.translateUp {
  transform: translateY(-25%);
  opacity: 0;
}

@media screen and (min-device-width: 1400px) and (max-device-width: 1601px) {
  h1 {
    font-size: 64px;

    line-height: 4px;
  }
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1399px) {
  h1 {
    font-size: 56px;

    line-height: 4px;
  }
}

/* ----------- iPad Pro 10.5" ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
}
</style>
<script>
import firebase from "../firebaseConfig.js";
const db = firebase.firestore();

export default {
  data() {
    return {
      text: "",
      email: "",
    };
  },

  watch: {
    text: function () {
      if (
        document.getElementById("feedbackContent").value !== null &&
        (document.getElementById("email").value === null ||
          document.getElementById("email").value === "")
      ) {
        document.getElementById("submit").disabled = false;
      } else if (
        document.getElementById("feedbackContent").value !== null &&
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          document.getElementById("email").value
        ) == true
      ) {
        document.getElementById("submit").disabled = false;
      }
      if (document.getElementById("feedbackContent").value === "") {
        document.getElementById("submit").disabled = true;
      }
    },

    email: function () {
      if (
        document.getElementById("feedbackContent").value !== null &&
        (document.getElementById("email").value === null ||
          document.getElementById("email").value === "")
      ) {
        document.getElementById("submit").disabled = false;
      } else if (
        document.getElementById("feedbackContent").value !== null &&
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          document.getElementById("email").value
        ) == true
      ) {
        document.getElementById("submit").disabled = false;
      } else if (
        document.getElementById("feedbackContent").value !== null &&
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          document.getElementById("email").value
        ) == false
      ) {
        document.getElementById("submit").disabled = true;
      }

      if (document.getElementById("feedbackContent").value === "") {
        document.getElementById("submit").disabled = true;
      }
    },
  },

  created() {},

  methods: {
    // async formValidation() {
    //   if (document.getElementById("feedbackContent").value !== null) {
    //     document.getElementById("submit").disabled = false;
    //   }
    // },

    async feedbackSubmit() {
      this.isLoading = true;
      await this.setUID();
      await this.sendFeedback();
      await this.submissionSuccess();
      this.isLoading = false;
    },

    async setUID() {
      if (document.getElementById("name").value === "") {
        //console.log("null");
        localStorage.setItem("feedbackName", "anon" + Math.random());
        //console.log("USERID NULL: " + localStorage.getItem("feedbackName"));
      } else {
        localStorage.setItem(
          "feedbackName",
          document.getElementById("name").value + +Math.random()
        );
        //console.log("USERID Not NULL: " + localStorage.getItem("feedbackName"));
      }
    },

    async sendFeedback() {
      //Firebase Anon Auth Start

      await firebase
        .auth()
        .signInAnonymously()
        .catch(function (error) {
          // Handle Errors here.
          console.log(error.code);
          console.log(error.message);
          // ...
        });

      await firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          //console.log(user.isAnonymous);
          //console.log("USER ID: " + user.uid);
          // ...
        } else {
          // User is signed out.
          // ...
        }
        // ...
      });

      //Firebase Anon Auth End

      //Send Information To Records DB Start

      db.collection("feedback")
        .doc(localStorage.getItem("feedbackName"))
        .set({
          name: localStorage.getItem("feedbackName"),
          email: document.getElementById("email").value,
          content: document.getElementById("feedbackContent").value,
        })
        .then(() => {
          //console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      //Send Information To Records DB End
    },

    async submissionSuccess() {
      document.getElementById("form").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("form").classList.add("displayNone");
        document.getElementById("formSuccess").classList.remove("displayNone");
      }, 1000);
      setTimeout(() => {
        document.getElementById("formSuccess").style.opacity = "1";
      }, 1000);
    },
  },

  props: {},

  computed: {},

  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>
