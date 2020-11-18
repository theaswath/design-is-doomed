<template>
  <div id="app">
    <!-- <div id="loader"></div> -->
    <loading
      :active.sync="isLoading"
      is-full-page
      background-color="#000000"
      color="#ffffff"
      lock-scroll
    ></loading>
    <div id="nav-wrapper">
      <div id="nav">
        <span id="nav-logo">
          <a class="ul_anim" href="/"
            ><img id="logo-container" :src="displayToggle" alt="" /> </a
        ></span>
        <span id="ham" @click.prevent="navToggle">
          <v-burger
            type="collapse-r"
            :active="isActive"
            @updated="isActive = $event"
        /></span>
      </div>
    </div>
    <div id="hiddenNav" class="overlay">
      <div id="overlay-content">
        <div class="top-part">
          <img src="./assets/images/logo-rw.png" alt="" />
          <!-- <a class="closebtn" @click.prevent="closeNav">&times;</a> -->
        </div>
        <!-- <router-link class="ul_anim" to="/">Clock of Doom</router-link> -->
        <a class="ul_anim" href="/">Clock of Doom</a>

        <router-link class="ul_anim" to="/take-the-test"
          >take the test</router-link
        >
        <router-link class="ul_anim" to="/cards-against-design"
          >Cards Against Design</router-link
        >
        <router-link class="ul_anim" to="/your-voice">Your Voice</router-link>
      </div>
    </div>

    <transition
      :name="transitionName"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view />
    </transition>
    <!-- <div class="qnav-container"> -->
    <div id="qnav" v-bind:class="{ qnavDisplay: isHidden }">
      <a>
        <button v-on:click="prevQuestion" id="prev">
          <i
            class="fas fa-long-arrow-alt-left"
            style="vertical-align: middle"
          ></i>
          Previous Question
        </button>
      </a>
      <a>
        <button
          v-on:click="nextQuestion"
          id="next"
          data-text-swap="Submit"
          data-text-original="Next Question  <i class='fas fa-long-arrow-alt-right' style='vertical-align: middle;'></i>"
        >
          Next Question
          <i
            class="fas fa-long-arrow-alt-right"
            style="vertical-align: middle"
          ></i>
        </button>
      </a>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import firebase from "./firebaseConfig.js";
const db = firebase.firestore();

import $ from "jquery";

// Import component
import Loading from "vue-loading-overlay";
import { VBurger } from "vue-burger";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  data() {
    return {
      isHidden: true,
      transitionName: "defaultFade",
      prevHeight: 0,
      check: this.$route.path,
      avg: 0,
      flag: 0,
      isLoading: false,
      isActive: false,
      loaderBG: "#000000",
      displayToggle: "",
      scrollPosition: null,
      logoSelection: [
        {
          id: 0,
          url: require(`./assets/images/logo-bw.png`),
        },
        {
          id: 1,
          url: require(`./assets/images/logo-rw.png`),
        },
        {
          id: 2,
          url: require(`./assets/images/logo-br.png`),
        },
      ],
    };
  },

  components: {
    Loading,
    VBurger,
  },

  watch: {
    $route() {
      if (this.check != "null") {
        this.check = this.$route.path;
      }
      // NEED TO CHECK LAST QUESTION NUMBER AND ADD AN OR FOR STUDENT
      // Next Or Submit Start
      if (this.$router.currentRoute.name === "Data Privacy Compliance") {
        document.getElementById("next").innerHTML = document
          .getElementById("next")
          .getAttribute("data-text-swap");
      } else {
        document.getElementById("next").innerHTML = document
          .getElementById("next")
          .getAttribute("data-text-original");
      }

      // Next Or Submit End

      // Remove testers later
      if (this.$route.path === "/") {
        this.displayToggle = this.logoSelection[0].url;
        document.body.style.backgroundColor = "#f85215";
        document.title = "Design Is Doomed" || "Design Is Doomed";

        this.qnavDisplayChange(true);
        this.getLatestTime();

        this.closeNav();
        this.navToggle();
      } else if (this.$route.path === "/cards-against-design") {
        this.displayToggle = this.logoSelection[2].url;
        document.body.style.backgroundColor = "#eeeeee";
        document.title = "Cards Against Design" || "Design Is Doomed";

        this.isLoading = false;

        this.qnavDisplayChange(true);

        this.closeNav();
        this.navToggle();
      } else if (this.$route.path === "/your-voice") {
        this.displayToggle = this.logoSelection[2].url;
        document.body.style.backgroundColor = "#eeeeee";
        document.title = "Your Voice" || "Design Is Doomed";

        this.isLoading = false;

        this.qnavDisplayChange(true);

        this.closeNav();
        this.navToggle();
      }

      //Take The Test Backgrounds and Titles Start:
      else if (
        this.check.includes("take-the-test") &&
        this.$router.currentRoute.name !== "Test Complete"
      ) {
        this.displayToggle = this.logoSelection[0].url;
        document.body.style.background = "#5e8a65";
        document.title = "Take The Test" || "Design Is Doomed";
        this.qnavDisplayChange(false);
        this.closeNav();

        this.navToggle();
        document.getElementById("prev").style.opacity = "0";
        document.getElementById("next").style.opacity = "0";

        if (
          this.check.includes("-q") ||
          this.$router.currentRoute.name === "Data Privacy Compliance"
        ) {
          this.displayToggle = this.logoSelection[0].url;
          document.getElementById("prev").style.opacity = "1";
          document.getElementById("next").style.opacity = "1";
        }
      } else if (
        this.check.includes("take-the-test") &&
        this.$router.currentRoute.name === "Test Complete"
      ) {
        this.displayToggle = this.logoSelection[2].url;
        this.qnavDisplayChange(true);

        if (localStorage.getItem("newAvg") < localStorage.getItem("oldAvg")) {
          // document.body.style.backgroundColor = "#eeeeee";
          document.body.style.backgroundColor = "rgba(66, 109, 219, 0.3)";

          document.title = "SAVIOUR" || "DEFAULT";
        } else if (
          localStorage.getItem("newAvg") > localStorage.getItem("oldAvg")
        ) {
          document.body.style.backgroundColor = "rgba(219, 74, 66, 0.3)";
          // document.body.style.backgroundColor = "#db4a42";
          document.title = "DOOOOOOOM" || "DEFAULT";
        }
      }

      //Take The Test Backgrounds and Titles End:
      else if (this.$route.path === "/about") {
        this.isActive = false;
        this.closeNav();
        // document.body.style.backgroundColor = "#0e0e0e0FF";
        document.title = "About" || "DEFAULT";
      } else {
        // document.body.style.backgroundColor = "#f85215";
        document.title = "Design Is Doomed" || "Design Is Doomed";
        document.getElementById("prev").style.opacity = "1";
        document.getElementById("next").style.opacity = "1";
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    if (this.$route.path === "/cards-against-design") {
      this.displayToggle = this.logoSelection[2].url;
    } else {
      this.displayToggle = this.logoSelection[0].url;
    }
  },

  created() {
    if (this.$route.path === "/") {
      // console.log("Triggered 2");
      // document.body.style.background = "url(/assets/images/bg.jpg)";
      document.body.style.backgroundColor = "#f85215";
      // document.body.style.backgroundSize = "100%";
      document.title = "Design Is Doomed" || "Design Is Doomed";
      this.qnavDisplayChange(true);
      this.getLatestTime();
    }

    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName;

      if (transitionName === "questionSlide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName =
          toDepth < fromDepth ? "questionSlide-right" : "questionSlide-left";
      }

      this.transitionName = transitionName || "JustFade";

      next();
    });
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.scrollFunction();
    },

    async scrollFunction() {
      if (
        this.check.includes("take-the-test") &&
        this.$router.currentRoute.name !== "Test Complete"
      ) {
        this.displayToggle = this.logoSelection[0].url;

        document.getElementById("nav-logo").style.transform = "scale(1)";
        document.getElementById("nav-wrapper").style.backgroundColor =
          "transparent";
        document.getElementById("nav").style.paddingTop = "2%";
        document.getElementById("nav").style.paddingBottom = "2%";
        document.documentElement.style.setProperty("--hamColor", "#0e0e0e");
      } else {
        if (this.scrollPosition > 50) {
          this.displayToggle = this.logoSelection[1].url;
          document.getElementById("nav-logo").style.transform = "scale(0.8)";

          document.getElementById("nav").style.paddingTop = "1%";
          document.getElementById("nav").style.paddingBottom = "0.5%";

          document.documentElement.style.setProperty("--hamColor", "#eeeeee");

          if (document.getElementById("hiddenNav").style.width == "100%") {
            document.getElementById("nav-wrapper").style.backgroundColor =
              "#transparent";
          } else {
            document.getElementById("nav-wrapper").style.backgroundColor =
              "#0e0e0e";
          }
        } else {
          if (
            this.$route.path === "/cards-against-design" ||
            this.$route.path === "/your-voice" ||
            (this.check.includes("take-the-test") &&
              this.$router.currentRoute.name == "Test Complete")
          ) {
            this.displayToggle = this.logoSelection[2].url;
          } else {
            this.displayToggle = this.logoSelection[0].url;
          }

          document.getElementById("nav-logo").style.transform = "scale(1)";
          document.getElementById("nav-wrapper").style.backgroundColor =
            "transparent";
          document.getElementById("nav").style.paddingTop = "2%";
          document.getElementById("nav").style.paddingBottom = "2%";
          document.documentElement.style.setProperty("--hamColor", "#0e0e0e");

          // this.logoLocation = "logo-bw.png";
        }
      }
    },

    navToggle() {
      if (this.isActive) {
        this.openNav();
        document.body.style.overflow = "hidden";
        document.getElementById("nav-logo").style.visibility = "hidden";
      } else {
        this.closeNav();
        document.body.style.overflow = "auto";
      }
    },

    openNav() {
      document.getElementById("hiddenNav").style.width = "100%";
      localStorage.setItem(
        "navBGcolor",
        document.getElementById("nav-wrapper").style.backgroundColor
      );
      document.getElementById("nav-wrapper").style.backgroundColor =
        "transparent";
      // console.log("CHANGE NAV BG");
      setTimeout(() => {
        document.getElementById("overlay-content").style.opacity = 1;
      }, 300);
    },

    /* Close when someone clicks on the "x" symbol inside the overlay */
    closeNav() {
      this.isActive = false;
      document.getElementById("overlay-content").style.opacity = 0;
      setTimeout(() => {
        document.getElementById("hiddenNav").style.width = "0%";
        document.getElementById("nav-logo").style.visibility = "visible";
        document.getElementById(
          "nav-wrapper"
        ).style.backgroundColor = localStorage.getItem("navBGcolor");
      }, 500);
    },

    qnavDisplayChange: function (e) {
      this.isHidden = e;
    },
    prevQuestion: function () {
      // Professional Questions Order Start
      if (localStorage.getItem("qset") == "W") {
        if (this.$route.path === "/take-the-test/professional-q1") {
          this.$router.push({ path: "/take-the-test" });
          console.log(this.$route.path);
        } else if (this.$route.path === "/take-the-test/professional-q2") {
          this.$router.push({ path: "/take-the-test/professional-q1" });
        } else if (this.$route.path === "/take-the-test/professional-q3") {
          this.$router.push({ path: "/take-the-test/professional-q2" });
        } else if (this.$route.path === "/take-the-test/professional-q4") {
          this.$router.push({ path: "/take-the-test/professional-q3" });
        } else if (this.$route.path === "/take-the-test/professional-q5") {
          this.$router.push({ path: "/take-the-test/professional-q4" });
        } else if (this.$route.path === "/take-the-test/professional-q6") {
          this.$router.push({ path: "/take-the-test/professional-q5" });
        } else if (this.$route.path === "/take-the-test/professional-q7") {
          this.$router.push({ path: "/take-the-test/professional-q6" });
        } else if (this.$route.path === "/take-the-test/professional-q8") {
          this.$router.push({ path: "/take-the-test/professional-q7" });
        } else if (this.$route.path === "/take-the-test/professional-q9") {
          this.$router.push({ path: "/take-the-test/professional-q8" });
        } else if (this.$route.path === "/take-the-test/professional-q10") {
          this.$router.push({ path: "/take-the-test/professional-q9" });
        } else if (this.$route.path === "/take-the-test/professional-q11") {
          this.$router.push({ path: "/take-the-test/professional-q10" });
        } else if (this.$route.path === "/take-the-test/professional-q12") {
          this.$router.push({ path: "/take-the-test/professional-q11" });
        } else if (this.$route.path === "/take-the-test/professional-q13") {
          this.$router.push({ path: "/take-the-test/professional-q12" });
        } else if (this.$route.path === "/take-the-test/professional-q14") {
          this.$router.push({ path: "/take-the-test/professional-q13" });
        } else if (this.$route.path === "/take-the-test/professional-q15") {
          this.$router.push({ path: "/take-the-test/professional-q14" });
        } else if (this.$route.path === "/take-the-test/professional-q16") {
          this.$router.push({ path: "/take-the-test/professional-q15" });
        } else if (this.$route.path === "/take-the-test/professional-q17") {
          this.$router.push({ path: "/take-the-test/professional-q16" });
        } else if (this.$route.path === "/take-the-test/professional-q18") {
          this.$router.push({ path: "/take-the-test/professional-q17" });
        } else if (this.$route.path === "/take-the-test/professional-q19") {
          this.$router.push({ path: "/take-the-test/professional-q18" });
        } else if (this.$route.path === "/take-the-test/professional-q20") {
          this.$router.push({ path: "/take-the-test/professional-q19" });
        } else if (this.$route.path === "/take-the-test/professional-q21") {
          this.$router.push({ path: "/take-the-test/professional-q20" });
        } else if (this.$route.path === "/take-the-test/professional-q22") {
          this.$router.push({ path: "/take-the-test/professional-q21" });
        } else if (this.$route.path === "/take-the-test/professional-q23") {
          this.$router.push({ path: "/take-the-test/professional-q22" });
        } else if (this.$route.path === "/take-the-test/professional-q24") {
          this.$router.push({ path: "/take-the-test/professional-q23" });
        } else if (this.$route.path === "/take-the-test/professional-q25") {
          this.$router.push({ path: "/take-the-test/professional-q24" });
        } else if (this.$route.path === "/take-the-test/professional-q26") {
          this.$router.push({ path: "/take-the-test/professional-q25" });
        } else if (
          this.$route.path === "/take-the-test/data-privacy-compliance"
        ) {
          this.$router.push({ path: "/take-the-test/professional-q26" });
        }
      }
      // Professional Questions Order End

      // Student Questions Order Start

      if (localStorage.getItem("qset") == "S") {
        if (this.$route.path === "/take-the-test/student-q1") {
          this.$router.push({ path: "/take-the-test" });
          console.log(this.$route.path);
        } else if (this.$route.path === "/take-the-test/student-q2") {
          this.$router.push({ path: "/take-the-test/student-q1" });
        } else if (this.$route.path === "/take-the-test/student-q3") {
          this.$router.push({ path: "/take-the-test/student-q2" });
        } else if (this.$route.path === "/take-the-test/student-q4") {
          this.$router.push({ path: "/take-the-test/student-q3" });
        } else if (this.$route.path === "/take-the-test/student-q5") {
          this.$router.push({ path: "/take-the-test/student-q4" });
        } else if (this.$route.path === "/take-the-test/student-q6") {
          this.$router.push({ path: "/take-the-test/student-q5" });
        } else if (this.$route.path === "/take-the-test/student-q7") {
          this.$router.push({ path: "/take-the-test/student-q6" });
        } else if (this.$route.path === "/take-the-test/student-q8") {
          this.$router.push({ path: "/take-the-test/student-q7" });
        } else if (this.$route.path === "/take-the-test/student-q9") {
          this.$router.push({ path: "/take-the-test/student-q8" });
        } else if (this.$route.path === "/take-the-test/student-q10") {
          this.$router.push({ path: "/take-the-test/student-q9" });
        } else if (this.$route.path === "/take-the-test/student-q11") {
          this.$router.push({ path: "/take-the-test/student-q10" });
        } else if (this.$route.path === "/take-the-test/student-q12") {
          this.$router.push({ path: "/take-the-test/student-q11" });
        } else if (this.$route.path === "/take-the-test/student-q13") {
          this.$router.push({ path: "/take-the-test/student-q12" });
        } else if (this.$route.path === "/take-the-test/student-q14") {
          this.$router.push({ path: "/take-the-test/student-q13" });
        } else if (this.$route.path === "/take-the-test/student-q15") {
          this.$router.push({ path: "/take-the-test/student-q14" });
        } else if (this.$route.path === "/take-the-test/student-q16") {
          this.$router.push({ path: "/take-the-test/student-q15" });
        } else if (
          this.$route.path === "/take-the-test/data-privacy-compliance"
        ) {
          this.$router.push({ path: "/take-the-test/student-q16" });
        }
      }

      // Student Questions Order End
    },
    nextQuestion: function () {
      if (this.$route.name === "Take The Test") {
        if (localStorage.getItem("qset") == "S") {
          this.$router.push({ path: "/take-the-test/student-q1" });
          return;
        } else if (localStorage.getItem("qset") == "W") {
          this.$router.push({ path: "/take-the-test/professional-q1" });
          return;
        }
      }

      // Professional Questions Order Start
      if (localStorage.getItem("qset") == "W") {
        if (this.$route.name === "Take The Test") {
          console.log(this.$route.path);
          this.$router.push({ path: "/take-the-test/professional-q1" });
        } else if (this.$route.path === "/take-the-test/professional-q1") {
          console.log(this.$route.path);
          this.$router.push({ path: "/take-the-test/professional-q2" });
        } else if (this.$route.path === "/take-the-test/professional-q2") {
          this.$router.push({ path: "/take-the-test/professional-q3" });
        } else if (this.$route.path === "/take-the-test/professional-q3") {
          this.$router.push({ path: "/take-the-test/professional-q4" });
        } else if (this.$route.path === "/take-the-test/professional-q4") {
          this.$router.push({ path: "/take-the-test/professional-q5" });
        } else if (this.$route.path === "/take-the-test/professional-q5") {
          this.$router.push({ path: "/take-the-test/professional-q6" });
        } else if (this.$route.path === "/take-the-test/professional-q6") {
          this.$router.push({ path: "/take-the-test/professional-q7" });
        } else if (this.$route.path === "/take-the-test/professional-q7") {
          this.$router.push({ path: "/take-the-test/professional-q8" });
        } else if (this.$route.path === "/take-the-test/professional-q8") {
          this.$router.push({ path: "/take-the-test/professional-q9" });
        } else if (this.$route.path === "/take-the-test/professional-q9") {
          this.$router.push({ path: "/take-the-test/professional-q10" });
        } else if (this.$route.path === "/take-the-test/professional-q10") {
          this.$router.push({ path: "/take-the-test/professional-q11" });
        } else if (this.$route.path === "/take-the-test/professional-q11") {
          this.$router.push({ path: "/take-the-test/professional-q12" });
        } else if (this.$route.path === "/take-the-test/professional-q12") {
          this.$router.push({ path: "/take-the-test/professional-q13" });
        } else if (this.$route.path === "/take-the-test/professional-q13") {
          this.$router.push({ path: "/take-the-test/professional-q14" });
        } else if (this.$route.path === "/take-the-test/professional-q14") {
          this.$router.push({ path: "/take-the-test/professional-q15" });
        } else if (this.$route.path === "/take-the-test/professional-q15") {
          this.$router.push({ path: "/take-the-test/professional-q16" });
        } else if (this.$route.path === "/take-the-test/professional-q16") {
          this.$router.push({ path: "/take-the-test/professional-q17" });
        } else if (this.$route.path === "/take-the-test/professional-q17") {
          this.$router.push({ path: "/take-the-test/professional-q18" });
        } else if (this.$route.path === "/take-the-test/professional-q18") {
          this.$router.push({ path: "/take-the-test/professional-q19" });
        } else if (this.$route.path === "/take-the-test/professional-q19") {
          this.$router.push({ path: "/take-the-test/professional-q20" });
        } else if (this.$route.path === "/take-the-test/professional-q20") {
          this.$router.push({ path: "/take-the-test/professional-q21" });
        } else if (this.$route.path === "/take-the-test/professional-q21") {
          this.$router.push({ path: "/take-the-test/professional-q22" });
        } else if (this.$route.path === "/take-the-test/professional-q22") {
          this.$router.push({ path: "/take-the-test/professional-q23" });
        } else if (this.$route.path === "/take-the-test/professional-q23") {
          this.$router.push({ path: "/take-the-test/professional-q24" });
        } else if (this.$route.path === "/take-the-test/professional-q24") {
          this.$router.push({ path: "/take-the-test/professional-q25" });
        } else if (this.$route.path === "/take-the-test/professional-q25") {
          this.$router.push({ path: "/take-the-test/professional-q26" });
        } else if (this.$route.path === "/take-the-test/professional-q26") {
          this.$router.push({ path: "/take-the-test/data-privacy-compliance" });
        } else if (
          this.$route.path === "/take-the-test/data-privacy-compliance"
        ) {
          if (document.getElementById("userID").value === "") {
            console.log("null");
            localStorage.setItem("userID", "user" + Math.random());
            console.log("USERID NULL: " + localStorage.getItem("userID"));
          } else {
            localStorage.setItem(
              "userID",
              document.getElementById("userID").value
            );
            console.log("USERID Not NULL: " + localStorage.getItem("userID"));
          }

          this.checkFlag();
          console.log("Flag Before AVG: " + this.flag);

          this.calcAvg();

          console.log("New AVG: " + localStorage.getItem("newAvg"));
          if (isNaN(localStorage.getItem("newAvg")) !== true) {
            this.fbOrder();
          }
        }
      }

      // Professional Questions Order End

      // Student Questions Order Start
      if (localStorage.getItem("qset") == "S") {
        if (this.$route.name === "Take The Test") {
          console.log(this.$route.path);
          this.$router.push({ path: "/take-the-test/student-q1" });
        } else if (this.$route.path === "/take-the-test/student-q1") {
          console.log(this.$route.path);
          this.$router.push({ path: "/take-the-test/student-q2" });
        } else if (this.$route.path === "/take-the-test/student-q2") {
          this.$router.push({ path: "/take-the-test/student-q3" });
        } else if (this.$route.path === "/take-the-test/student-q3") {
          this.$router.push({ path: "/take-the-test/student-q4" });
        } else if (this.$route.path === "/take-the-test/student-q4") {
          this.$router.push({ path: "/take-the-test/student-q5" });
        } else if (this.$route.path === "/take-the-test/student-q5") {
          this.$router.push({ path: "/take-the-test/student-q6" });
        } else if (this.$route.path === "/take-the-test/student-q6") {
          this.$router.push({ path: "/take-the-test/student-q7" });
        } else if (this.$route.path === "/take-the-test/student-q7") {
          this.$router.push({ path: "/take-the-test/student-q8" });
        } else if (this.$route.path === "/take-the-test/student-q8") {
          this.$router.push({ path: "/take-the-test/student-q9" });
        } else if (this.$route.path === "/take-the-test/student-q9") {
          this.$router.push({ path: "/take-the-test/student-q10" });
        } else if (this.$route.path === "/take-the-test/student-q10") {
          this.$router.push({ path: "/take-the-test/student-q11" });
        } else if (this.$route.path === "/take-the-test/student-q11") {
          this.$router.push({ path: "/take-the-test/student-q12" });
        } else if (this.$route.path === "/take-the-test/student-q12") {
          this.$router.push({ path: "/take-the-test/student-q13" });
        } else if (this.$route.path === "/take-the-test/student-q13") {
          this.$router.push({ path: "/take-the-test/student-q14" });
        } else if (this.$route.path === "/take-the-test/student-q14") {
          this.$router.push({ path: "/take-the-test/student-q15" });
        } else if (this.$route.path === "/take-the-test/student-q15") {
          this.$router.push({ path: "/take-the-test/student-q16" });
        } else if (this.$route.path === "/take-the-test/student-q16") {
          this.$router.push({ path: "/take-the-test/data-privacy-compliance" });
        } else if (
          this.$route.path === "/take-the-test/data-privacy-compliance"
        ) {
          if (document.getElementById("userID").value === "") {
            console.log("null");
            localStorage.setItem("userID", "user" + Math.random());
            console.log("USERID NULL: " + localStorage.getItem("userID"));
          } else {
            localStorage.setItem(
              "userID",
              document.getElementById("userID").value
            );
            console.log("USERID Not NULL: " + localStorage.getItem("userID"));
          }

          this.checkFlag();
          console.log("Flag Before AVG: " + this.flag);

          this.calcAvg();

          console.log("New AVG: " + localStorage.getItem("newAvg"));

          if (isNaN(localStorage.getItem("newAvg")) !== true) {
            console.log("New AVG: Is Number");
            this.fbOrder();
          }
        }
      }

      // Student Questions Order End
    },

    // Transition js hooks start
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    // Transition js hooks end

    checkFlag() {
      if (localStorage.getItem("qset") == "W") {
        console.log("Flag" + this.flag);
        if (parseInt(localStorage.getItem("Q18")) == "0") {
          this.flag += 5;
          console.log("Flag" + this.flag);
        }
        if (parseInt(localStorage.getItem("Q23")) == "0") {
          this.flag += 3;
          console.log("Flag" + this.flag);
        }
        if (parseInt(localStorage.getItem("Q24")) == "0") {
          this.flag += 5;
          console.log("Flag" + this.flag);
        }
      } else if (localStorage.getItem("qset") == "S") {
        console.log("Flag" + this.flag);

        if (parseInt(localStorage.getItem("Q14")) == "0") {
          this.flag += 3;
          console.log("Flag" + this.flag);
        }
        if (parseInt(localStorage.getItem("Q15")) == "0") {
          this.flag += 5;
          console.log("Flag" + this.flag);
        }
      }
    },

    async calcAvg() {
      console.log("Start AVG Calc");
      this.isLoading = true;
      await this.startCalc();
      console.log("End AVG Calc");
    },

    startCalc() {
      if (localStorage.getItem("qset") == "W") {
        localStorage.setItem(
          "newAvg",
          (parseInt(localStorage.getItem("Q1")) +
            parseInt(localStorage.getItem("Q2")) +
            parseInt(localStorage.getItem("Q3")) +
            parseInt(localStorage.getItem("Q4")) +
            parseInt(localStorage.getItem("Q5")) +
            parseInt(localStorage.getItem("Q6")) +
            parseInt(localStorage.getItem("Q7")) +
            parseInt(localStorage.getItem("Q8")) +
            parseInt(localStorage.getItem("Q9")) +
            parseInt(localStorage.getItem("Q10")) +
            parseInt(localStorage.getItem("Q11")) +
            parseInt(localStorage.getItem("Q12")) +
            parseInt(localStorage.getItem("Q13")) +
            parseInt(localStorage.getItem("Q14")) +
            parseInt(localStorage.getItem("Q15")) +
            parseInt(localStorage.getItem("Q16")) +
            parseInt(localStorage.getItem("Q17")) +
            parseInt(localStorage.getItem("Q18")) +
            parseInt(localStorage.getItem("Q19")) +
            parseInt(localStorage.getItem("Q20")) +
            parseInt(localStorage.getItem("Q21")) +
            parseInt(localStorage.getItem("Q22")) +
            parseInt(localStorage.getItem("Q23")) +
            parseInt(localStorage.getItem("Q24")) +
            parseInt(localStorage.getItem("Q25")) +
            parseInt(localStorage.getItem("Q26"))) /
            (178 - this.flag)
        );
      }

      if (localStorage.getItem("qset") == "S") {
        localStorage.setItem(
          "newAvg",
          (parseInt(localStorage.getItem("Q1")) +
            parseInt(localStorage.getItem("Q2")) +
            parseInt(localStorage.getItem("Q3")) +
            parseInt(localStorage.getItem("Q4")) +
            parseInt(localStorage.getItem("Q5")) +
            parseInt(localStorage.getItem("Q6")) +
            parseInt(localStorage.getItem("Q7")) +
            parseInt(localStorage.getItem("Q8")) +
            parseInt(localStorage.getItem("Q9")) +
            parseInt(localStorage.getItem("Q10")) +
            parseInt(localStorage.getItem("Q11")) +
            parseInt(localStorage.getItem("Q12")) +
            parseInt(localStorage.getItem("Q13")) +
            parseInt(localStorage.getItem("Q14")) +
            parseInt(localStorage.getItem("Q15")) +
            parseInt(localStorage.getItem("Q16"))) /
            (108 - this.flag)
        );
      }
    },

    async getLatestTime() {
      this.isLoading = true;
      console.log("Reading Started");
      await this.readRecord();
      console.log("Reading Complete");
      this.isLoading = false;
      this.moveHands();
      this.minCounter();
    },

    moveHands() {
      console.log("Hands Moved");
      var minHandPosDeg = 360 / 60;
      // var hourHandPosDeg = 360 / 12;

      // var time = new Date();
      // var currentSecHand = time.getSeconds();
      // var currentMinHand = localStorage.getItem("oldAvg") * 60;
      var currentMinHand = localStorage.getItem("oldAvg") * 60;
      // var currentHourHand = 12;

      // setHandPosition(currentMinHand, currentHouHand);
      // // startMoving();

      // function setHandPosition(minDeg) {
      // var remainHovDeg = hourHandPosDeg * hovDeg + minDeg * 0.5;
      // $(".clock-hands-box .sec-hand").css(
      //   "transform",
      //   "rotate(" + secHandPosDeg * secDeg + "deg)"
      // );

      $(document).ready(function () {
        $(".clock-hands-box .min-hand").css(
          "transform",
          "rotate(" + minHandPosDeg * currentMinHand + "deg)"
        );

        console.log(document.getElementById("minCheck").style.transform);
      });
      // $(".clock-hands-box .hour-hand")
      //   .css
      //   // "transform",
      //   // "rotate(" + remainHovDeg + "deg)"
      //   ();
      // }
    },

    minCounter() {
      var start;

      // var obj = document.getElementById("minutes-away");
      var end = 60 - Math.trunc(localStorage.getItem("oldAvg") * 60);
      // var end = 61;

      for (start = 0; start <= end; start++) {
        task(start);
      }

      function task(start) {
        setTimeout(function () {
          document.getElementById("minutes-away").textContent =
            start + " MINUTES";
        }, 50 * start);
      }
    },

    // Firebase Methods Start

    async fbOrder() {
      await this.createRecord();
      await this.readRecord();
      await this.updateRecord();
      this.isLoading = false;
      this.$router.push({ path: "/take-the-test/test-complete" });
    },

    //Create Method Start

    async createRecord() {
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
          console.log(user.isAnonymous);
          console.log("USER ID: " + user.uid);
          // ...
        } else {
          // User is signed out.
          // ...
        }
        // ...
      });

      //Firebase Anon Auth End

      //Send Information To Records DB Start

      db.collection("records")
        .doc(localStorage.getItem("userID"))
        .set({
          UserID: localStorage.getItem("userID"),
          Q1: localStorage.getItem("Q1"),
          Q2: localStorage.getItem("Q2"),
          Q3: localStorage.getItem("Q3"),
          Q4: localStorage.getItem("Q4"),
          Q5: localStorage.getItem("Q5"),
          Q6: localStorage.getItem("Q6"),
          Q7: localStorage.getItem("Q7"),
          Q8: localStorage.getItem("Q8"),
          Q9: localStorage.getItem("Q9"),
          Q10: localStorage.getItem("Q10"),
          Q11: localStorage.getItem("Q11"),
          Q12: localStorage.getItem("Q12"),
          Q13: localStorage.getItem("Q13"),
          Q14: localStorage.getItem("Q14"),
          Q15: localStorage.getItem("Q15"),
          Q16: localStorage.getItem("Q16"),
          Q17: localStorage.getItem("Q17"),
          Q18: localStorage.getItem("Q18"),
          Q19: localStorage.getItem("Q19"),
          Q20: localStorage.getItem("Q20"),
          Q21: localStorage.getItem("Q21"),
          Q22: localStorage.getItem("Q22"),
          Q23: localStorage.getItem("Q23"),
          Q24: localStorage.getItem("Q24"),
          Q25: localStorage.getItem("Q25"),
          Q26: localStorage.getItem("Q26"),
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      //Send Information To Records DB End
    },

    //Create Method End

    // Read Method Start

    async readRecord() {
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
          console.log(user.isAnonymous);
          console.log(user.uid);
          // ...
        } else {
          // User is signed out.
          // ...
        }
        // ...
      });

      //Firebase Anon Auth End

      // let averageKeeper = [];
      await db
        .collection("average")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            localStorage.setItem("oldAvg", doc.data().average);
            localStorage.setItem("oldRecords", doc.data().records);
            console.log("OLD AVERAGE " + localStorage.getItem("oldAvg"));
            console.log("OLD Records " + localStorage.getItem("oldRecords"));
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },

    // Read Method End

    //Update Method Start

    async updateRecord() {
      console.log(parseFloat(localStorage.getItem("oldAvg")));
      console.log(parseInt(localStorage.getItem("oldRecords")));
      console.log(parseFloat(localStorage.getItem("newAvg")));

      await db
        .collection("average")
        .doc("average")
        .update({
          records: parseInt(localStorage.getItem("oldRecords")) + 1,
          average:
            (parseFloat(localStorage.getItem("oldAvg")) *
              parseInt(localStorage.getItem("oldRecords")) +
              parseFloat(localStorage.getItem("newAvg"))) /
            (parseInt(localStorage.getItem("oldRecords")) + 1),
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    },

    //Update Method End

    //Delete Method Start

    deleteRecord(id) {
      db.collection("records")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },

    //Delete Method End

    //Firebase Methods End
  },
};
</script>

<style lang="scss">
$main-black: #0e0e0e;
:root {
  --hamColor: #0e0e0e;
}
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";
// body {
//   // background-color: #f85215;
//   // background-image: url("./assets/images/bg.jpg");
// }
// Start Font Import
@font-face {
  font-family: AndersonGrotesk;
  src: url("../src/assets/fonts/AndersonGrotesk/AndersonGrotesk-Light.otf")
    format("opentype");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: AndersonGrotesk;
  src: url("../src/assets/fonts/AndersonGrotesk/AndersonGrotesk-LightOblique.otf")
    format("opentype");
  font-weight: 300;
  font-style: oblique;
}
@font-face {
  font-family: AndersonGrotesk;
  src: url("../src/assets/fonts/AndersonGrotesk/AndersonGrotesk.otf")
    format("opentype");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: AndersonGrotesk;
  src: url("../src/assets/fonts/AndersonGrotesk/AndersonGrotesk-Oblique.otf")
    format("opentype");
  font-weight: 400;
  font-style: oblique;
}

@font-face {
  font-family: AndersonGrotesk;
  src: url("../src/assets/fonts/AndersonGrotesk/AndersonGrotesk-Bold.otf")
    format("opentype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: AndersonGrotesk;
  src: url("../src/assets/fonts/AndersonGrotesk/AndersonGrotesk-BoldOblique.otf")
    format("opentype");
  font-weight: 700;
  font-style: oblique;
}

@font-face {
  font-family: AndersonGrotesk;
  src: url("../src/assets/fonts/AndersonGrotesk/AndersonGrotesk-Ultrabold.otf")
    format("opentype");
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: AndersonGrotesk;
  src: url("../src/assets/fonts/AndersonGrotesk/AndersonGrotesk-UltraboldOblique.otf")
    format("opentype");
  font-weight: 800;
  font-style: oblique;
}
@font-face {
  font-family: AndersonGrotesk;
  src: url("../src/assets/fonts/AndersonGrotesk/AndersonGrotesk-Black.otf")
    format("opentype");
  font-weight: 900;
  font-style: normal;
}

@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

// End Font Import

#app {
  font-family: AndersonGrotesk, Arial, Helvetica, sans-serif;
  font-weight: 400;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e0e0e;
}

#nav-wrapper {
  z-index: 8;
  position: sticky;
  top: 0;
  background-color: transparent;
  transition: 0.15s ease-in-out;
}
#nav {
  transition: 0.15s ease-in-out;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  #ham {
    position: relative;
  }

  .hamburger.is-active:hover,
  .hamburger:hover {
    opacity: 1;

    .hamburger-inner,
    .hamburger-inner:after,
    .hamburger-inner:before {
      background-color: #eeeeee;
    }
  }

  .hamburger-inner,
  .hamburger-inner:after,
  .hamburger-inner:before {
    background-color: var(--hamColor);
  }

  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner:after,
  .hamburger.is-active .hamburger-inner:before {
    background-color: #eeeeee;
  }

  // display: block;
  // width: 100vw;

  img {
    // src: "./assets/images/logo-bw.png";
    height: 8vh;
  }

  #mode-toggle {
    transition: ease-in-out;
    transition-duration: 1s;
    opacity: 1;
    width: auto;
    height: 5vh;
    padding-left: 10%;
    padding-right: 10%;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-duration: 0.3s;
    background-color: rgba(238, 238, 238, 0);
    color: #0e0e0e;
    border: 2px #0e0e0e solid;
    font-size: 18px;
    font-family: AndersonGrotesk;
    font-weight: 800;
    cursor: pointer;
    // padding: 16px 24px 16px 24px;
    &:hover {
      transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transition-duration: 0.3s;
      background-color: rgba(238, 238, 238, 1);
      color: rgba(17, 17, 17, 1);
      border: 2px rgba(238, 238, 238, 1) solid;
    }
  }
}

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 5; /* Sit on top */
  left: 0;
  top: 0;
  background-color: #0e0e0e; /* Black fallback color */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  .closebtn {
    cursor: pointer;
    position: absolute;
    // top: 5%;
    right: 5%;
    transition: opacity 0.15s ease-in-out;

    font-size: 96px;
    font-weight: 700;
    color: #eeeeee;
  }
}

/* Position the content inside the overlay */
#overlay-content {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: relative;
  top: 5%; /* 25% from the top */
  // width: 100%; /* 100% width */
  text-align: left; /* Centered text/links */
  margin-left: 5%; /* 30px top margin to avoid conflict with the close button on smaller screens */
  .top-part {
    display: flex;
    align-items: center;
    margin-bottom: 2.5%;
  }
  img {
    height: 15vh;
  }

  .ul_anim {
    padding-top: 24px;
    padding-bottom: 16px;
    font-size: 88px;
    letter-spacing: 1px;
    font-weight: 900;
    color: #eeeeee;
    text-decoration: none;
    text-transform: uppercase;
    display: block; /* Display block instead of inline */
    transition: 0.3s; /* Transition effects on hover (color) */

    &.router-link-exact-active {
      color: #eeeeee;
      font-weight: 900;

      &:after {
        content: "";
        display: block;
        height: 10px;
        left: 0;
        position: absolute;
        background: #eeeeee;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 75%;
      }
    }
    &:hover {
      color: #eeeeee;
    }
    &:after {
      content: "";
      display: block;
      height: 10px;
      left: 0;
      // position: absolute;
      background: #eeeeee;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    &:hover:after {
      width: 75%;
      left: 0;
    }
  }
}

/* Position the close button (top right corner) */

// .qnav-container {
//   display: flex;
//   flex-wrap: wrap;
// }

// .hamburger-inner {
//   background-color: yellow;
//   &:after {
//     background-color: yellow;
//   }
//   &:before {
//     background-color: yellow;
//   }
// }

#qnav {
  transition: ease-in-out;
  transition-duration: 1s;
  display: flex;
  justify-content: space-between;
  margin: 0.5% 10% 2.5% 10%;
}

.qnavDisplay {
  display: none !important;
  // opacity
}

#prev {
  transition: ease-in-out;
  transition-duration: 1s;
  opacity: 1;
  width: 200px;
  height: 56px;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 0.3s;
  background-color: rgba(238, 238, 238, 0);
  color: #0e0e0e;
  border: 2px rgba(24, 11, 11, 0.7) solid;
  font-size: 16px;
  font-family: AndersonGrotesk;
  font-weight: 700;
  cursor: pointer;
  // padding: 16px 24px 16px 24px;
  &:hover {
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-duration: 0.3s;
    background-color: rgba(238, 238, 238, 1);
    color: rgba(17, 17, 17, 1);
    border: 2px rgba(24, 11, 11, 1) solid;
  }
}
#next {
  transition: ease-in-out;
  transition-duration: 1s;
  opacity: 1;
  width: 200px;
  height: 56px;
  transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition-duration: 0.3s;
  background-color: rgba(238, 238, 238, 0);
  color: rgba(24, 11, 11, 1);
  border: 2px rgba(24, 11, 11, 0.7) solid;
  font-size: 16px;
  font-family: AndersonGrotesk;
  font-weight: 700;
  cursor: pointer;
  // padding: 16px 24px 16px 24px;
  &:hover {
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-duration: 0.3s;
    background-color: rgba(238, 238, 238, 1);
    color: rgba(17, 17, 17, 1);
    border: 2px rgba(24, 11, 11, 1) solid;
  }
}

// Transitions
.defaultFade-enter-active,
.defaultFade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.defaultFade-enter,
.defaultFade-leave-active {
  opacity: 0;
}

// .defaultFade-enter-to,
// .defaultFade-leave {
//   opacity: 1;
// }

// Just Fade Transition Start

.JustFade-enter-active,
.JustFade-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity, background-color;
  // transition-delay: 0.5s;
  transition-timing-function: cubic-bezier(0.29, 1.06, 0.7, 1);
  overflow: hidden;
}

.JustFade-enter,
.JustFade-leave-active {
  opacity: 0;
}

.JustFade-leave-active,
.JustFade-enter {
  opacity: 0;
}

// Just Fade Transition End

.questionSlide-left-enter-active,
.questionSlide-left-leave-active,
.questionSlide-right-enter-active,
.questionSlide-right-leave-active {
  transition-duration: 0.6s;
  transition-property: height, opacity, transform;
  transition-delay: 0.5s;
  transition-timing-function: cubic-bezier(0.29, 1.06, 0.7, 1);
  overflow: hidden;
}

.questionSlide-left-enter,
.questionSlide-right-leave-active {
  opacity: 0;
  transform: translate(50%, 0);
}

.questionSlide-left-leave-active,
.questionSlide-right-enter {
  opacity: 0;
  transform: translate(-50%, 0);
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1601px) {
  #overlay-content {
    img {
      height: 10vh;
    }

    .ul_anim {
      font-size: 72px;
    }
  }
}

@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
  #overlay-content {
    img {
      height: 10vh;
    }

    .ul_anim {
      font-size: 60px;
    }
  }
}
</style>
