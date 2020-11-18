<template>
  <div class="take-the-test" id="main">
    <!-- <div class="intro"></div> -->
    <div class="container">
      <div class="content">
        <h2>
          Q22. At your organization (or on your project if you are a
          freelancer), accessibility is considered:
        </h2>
        <!-- Options Start -->

        <div class="division">
          <a>
            <div
              id="optionA"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>A. If required by law(s)</h3>
            </div>
          </a>

          <a>
            <div
              id="optionB"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>B. Always</h3>
            </div>
          </a>

          <a>
            <div
              id="optionC"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>C. If It impacts most of our users</h3>
            </div>
          </a>

          <a>
            <div
              id="optionD"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>D. Never</h3>
            </div>
          </a>
        </div>
        <!-- Options End -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body-bg {
  animation: bg-transit 1s;
  animation-fill-mode: forwards;
  background-position: center center;
  background-image: url("https://blush-design.imgix.net/collections/croods/banner-0.png?auto=format");
}
.body-bg2 {
  transition: ease-in-out;
  transition-duration: 1s;
  background-image: url("https://blush-design.imgix.net/collections/power-moves/banner.png?auto=format");
}

@keyframes bg-transit {
  0% {
    background-size: 100%;
  }
  100% {
    background-size: 120%;
  }
}
h1 {
  color: #0e0e0e;
  font-size: 80px;
  font-weight: 900;
  text-align: center;
  line-height: 1.2px;
}
.h1-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
h2 {
  color: #0e0e0e;
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  padding-right: 5%;
  padding-left: 5%;
}
.h2-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
h3 {
  color: #0e0e0e;
  font-size: 24px;
  font-weight: 800;
  text-align: left;
}
.h3-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

p {
  color: #0e0e0e;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.2px;
}
button {
  margin: 50px;
}
.btn-primary {
  border: 1px;
  background-color: #eeeeee;
  color: #0e0e0e;
  border: 2px #eeeeee solid;
  padding: 16px;
  text-align: center;
  // text-transform: uppercase;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.2px;
  &:hover {
    background-color: #0e0e0e;
    color: #eeeeee;
  }
}
.btn-secondary {
  border: 1px;
  background-color: #0e0e0e;
  color: #eeeeee;
  border: 2px #eeeeee solid;
  padding: 16px;
  text-align: center;
  // text-transform: uppercase;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.2px;
  &:hover {
    background-color: #eeeeee;
    color: #0e0e0e;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.division {
  text-align: left;

  a {
    cursor: pointer;
  }
  .option-not-selected {
    transition: ease-in-out;
    transition-duration: 0.2s;
    transition-property: background-color;
    border: 1px;
    // background-color: #0e0e0e;

    border: 2px #0e0e0e solid;
    padding: 16px;
    // text-align: center;
    // text-transform: uppercase;
    font-family: "Space Grotesk", sans-serif;
    margin: 2.5% 5% 2.5% 5%;
    h3 {
      transition: ease-in-out;
      transition-duration: 0.2s;
      transition-property: color;
      color: #0e0e0e;
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 0.01px;
      text-align: left;
      // line-height: 2px;
    }
    p {
      color: #0e0e0e;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.2px;
      width: 80%;
    }
  }
}

.option-selected {
  transition: ease-in-out;
  transition-duration: 0.2s;
  transition-property: background-color;
  border: 1px;
  background-color: #eeeeee;

  border: 2px #0e0e0e solid;
  padding: 16px;
  // text-align: center;
  // text-transform: uppercase;
  font-family: "Space Grotesk", sans-serif;

  margin: 2.5% 5% 2.5% 5%;
  h3 {
    transition: ease-in-out;
    transition-duration: 0.2s;
    transition-property: color;
    color: #0e0e0e;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.01px;
    text-align: left;
    // line-height: 2px;
  }
  p {
    color: #0e0e0e;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.2px;
    width: 80%;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.returningUser();

    if (localStorage.getItem("Q22") === null) {
      console.log("Works");
      document.getElementById("next").style.cursor = "not-allowed";
      document.getElementById("next").disabled = true;
    }
  },
  methods: {
    optionSelected: function () {
      console.log(event.currentTarget.id);
      document.getElementById("next").style.cursor = "pointer";
      document.getElementById("next").disabled = false;

      // Option A Selected
      if (event.currentTarget.id == "optionA") {
        localStorage.setItem("Q22", "4");

        document.getElementById("optionA").classList.add("option-selected");
        document
          .getElementById("optionA")
          .classList.remove("option-not-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
      }

      // Option B Selected
      if (event.currentTarget.id == "optionB") {
        localStorage.setItem("Q22", "0");

        document.getElementById("optionB").classList.add("option-selected");
        document
          .getElementById("optionB")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
      }

      // Option C Selected
      if (event.currentTarget.id == "optionC") {
        localStorage.setItem("Q22", "2");

        document.getElementById("optionC").classList.add("option-selected");
        document
          .getElementById("optionC")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
      }

      // Option D Selected
      if (event.currentTarget.id == "optionD") {
        localStorage.setItem("Q22", "5");

        document.getElementById("optionD").classList.add("option-selected");
        document
          .getElementById("optionD")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
      }
    },

    returningUser: function () {
      console.log("returning User Triggered");

      if (localStorage.getItem("qset") == "W") {
        //Option A
        if (localStorage.getItem("Q22") == "4") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionA").classList.add("option-selected");
          document
            .getElementById("optionA")
            .classList.remove("option-not-selected");
          document
            .getElementById("optionB")
            .classList.remove("option-selected");
          document
            .getElementById("optionB")
            .classList.add("option-not-selected");
          document
            .getElementById("optionC")
            .classList.remove("option-selected");
          document
            .getElementById("optionC")
            .classList.add("option-not-selected");
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
        }

        //Option B
        else if (localStorage.getItem("Q22") == "0") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionB").classList.add("option-selected");
          document
            .getElementById("optionB")
            .classList.remove("option-not-selected");
          document
            .getElementById("optionA")
            .classList.remove("option-selected");
          document
            .getElementById("optionA")
            .classList.add("option-not-selected");
          document
            .getElementById("optionC")
            .classList.remove("option-selected");
          document
            .getElementById("optionC")
            .classList.add("option-not-selected");
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
        }

        //Option C
        else if (localStorage.getItem("Q22") == "2") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionC").classList.add("option-selected");
          document
            .getElementById("optionC")
            .classList.remove("option-not-selected");
          document
            .getElementById("optionA")
            .classList.remove("option-selected");
          document
            .getElementById("optionA")
            .classList.add("option-not-selected");
          document
            .getElementById("optionB")
            .classList.remove("option-selected");
          document
            .getElementById("optionB")
            .classList.add("option-not-selected");
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
        }

        //Option D
        else if (localStorage.getItem("Q22") == "5") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionD").classList.add("option-selected");
          document
            .getElementById("optionD")
            .classList.remove("option-not-selected");
          document
            .getElementById("optionA")
            .classList.remove("option-selected");
          document
            .getElementById("optionA")
            .classList.add("option-not-selected");
          document
            .getElementById("optionB")
            .classList.remove("option-selected");
          document
            .getElementById("optionB")
            .classList.add("option-not-selected");
          document
            .getElementById("optionC")
            .classList.remove("option-selected");
          document
            .getElementById("optionC")
            .classList.add("option-not-selected");
        }
      }
    },
  },

  watch: {},
};
</script>
