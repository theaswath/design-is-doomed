<template>
  <div class="take-the-test" id="main">
    <!-- <div class="intro"></div> -->
    <div class="container">
      <div class="content">
        <h2>
          Q15. I have been able to work effecitvely with people from other
          departments/proffessions as a part of my work.
        </h2>
        <p>
          Rate the statement on a scale of 0 (Completely Disagree) - 10
          (Completely Agree)
        </p>
        <!-- Options Start -->

        <div class="division">
          <a>
            <div
              id="optionA"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>0</h3>
            </div>
          </a>

          <a>
            <div
              id="optionB"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>1</h3>
            </div>
          </a>

          <a>
            <div
              id="optionC"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>2</h3>
            </div>
          </a>

          <a>
            <div
              id="optionD"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>3</h3>
            </div>
          </a>

          <a>
            <div
              id="optionE"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>4</h3>
            </div>
          </a>

          <a>
            <div
              id="optionF"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>5</h3>
            </div>
          </a>

          <a>
            <div
              id="optionG"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>6</h3>
            </div>
          </a>

          <a>
            <div
              id="optionH"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>7</h3>
            </div>
          </a>

          <a>
            <div
              id="optionI"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>8</h3>
            </div>
          </a>

          <a>
            <div
              id="optionJ"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>9</h3>
            </div>
          </a>

          <a>
            <div
              id="optionK"
              v-on:click="optionSelected($event)"
              class="option-not-selected"
            >
              <h3>10</h3>
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

.intro {
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
}

.division {
  text-align: center;
  display: flex;
  justify-content: center;

  a {
    cursor: pointer;
  }
  .option-not-selected {
    transition: ease-in-out;
    transition-duration: 0.2s;
    transition-property: background-color;

    // background-color: #0e0e0e;

    border: 2px #0e0e0e solid;
    padding: 8px 40px;
    // text-align: center;
    // text-transform: uppercase;
    font-family: "Space Grotesk", sans-serif;
    margin: 0% 0% 50% 0%;
    h3 {
      transition: ease-in-out;
      transition-duration: 0.2s;
      transition-property: color;
      color: #0e0e0e;
      font-size: 32px;
      font-weight: 700;
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
  padding: 8px 40px;
  // text-align: center;
  // text-transform: uppercase;
  font-family: "Space Grotesk", sans-serif;

  margin: 0% 0% 50% 0%;
  h3 {
    transition: ease-in-out;
    transition-duration: 0.2s;
    transition-property: color;
    color: #0e0e0e;
    font-size: 32px;
    font-weight: 700;
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

    if (localStorage.getItem("Q15") === null) {
      //console.log("Works");
      document.getElementById("next").style.cursor = "not-allowed";
      document.getElementById("next").disabled = true;
    }
  },
  methods: {
    optionSelected: function () {
      //console.log(event.currentTarget.id);
      document.getElementById("next").style.cursor = "pointer";
      document.getElementById("next").disabled = false;

      // Option A Selected
      if (event.currentTarget.id == "optionA") {
        localStorage.setItem("Q15", "10");

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
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option B Selected
      if (event.currentTarget.id == "optionB") {
        localStorage.setItem("Q15", "9");

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
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option C Selected
      if (event.currentTarget.id == "optionC") {
        localStorage.setItem("Q15", "8");

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
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option D Selected
      if (event.currentTarget.id == "optionD") {
        localStorage.setItem("Q15", "7");

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
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option E Selected
      if (event.currentTarget.id == "optionE") {
        localStorage.setItem("Q15", "6");

        document.getElementById("optionE").classList.add("option-selected");
        document
          .getElementById("optionE")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option F Selected
      if (event.currentTarget.id == "optionF") {
        localStorage.setItem("Q15", "5");

        document.getElementById("optionF").classList.add("option-selected");
        document
          .getElementById("optionF")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option G Selected
      if (event.currentTarget.id == "optionG") {
        localStorage.setItem("Q15", "4");

        document.getElementById("optionG").classList.add("option-selected");
        document
          .getElementById("optionG")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option H Selected
      if (event.currentTarget.id == "optionH") {
        localStorage.setItem("Q15", "3");

        document.getElementById("optionH").classList.add("option-selected");
        document
          .getElementById("optionH")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option I Selected
      if (event.currentTarget.id == "optionI") {
        localStorage.setItem("Q15", "2");

        document.getElementById("optionI").classList.add("option-selected");
        document
          .getElementById("optionI")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option J Selected
      if (event.currentTarget.id == "optionJ") {
        localStorage.setItem("Q15", "1");

        document.getElementById("optionJ").classList.add("option-selected");
        document
          .getElementById("optionJ")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionK").classList.add("option-not-selected");
        document.getElementById("optionK").classList.remove("option-selected");
      }

      // Option K Selected
      if (event.currentTarget.id == "optionK") {
        localStorage.setItem("Q15", "0");

        document.getElementById("optionK").classList.add("option-selected");
        document
          .getElementById("optionK")
          .classList.remove("option-not-selected");
        document.getElementById("optionA").classList.add("option-not-selected");
        document.getElementById("optionA").classList.remove("option-selected");
        document.getElementById("optionB").classList.add("option-not-selected");
        document.getElementById("optionB").classList.remove("option-selected");
        document.getElementById("optionC").classList.add("option-not-selected");
        document.getElementById("optionC").classList.remove("option-selected");
        document.getElementById("optionD").classList.add("option-not-selected");
        document.getElementById("optionD").classList.remove("option-selected");
        document.getElementById("optionE").classList.add("option-not-selected");
        document.getElementById("optionE").classList.remove("option-selected");
        document.getElementById("optionF").classList.add("option-not-selected");
        document.getElementById("optionF").classList.remove("option-selected");
        document.getElementById("optionG").classList.add("option-not-selected");
        document.getElementById("optionG").classList.remove("option-selected");
        document.getElementById("optionH").classList.add("option-not-selected");
        document.getElementById("optionH").classList.remove("option-selected");
        document.getElementById("optionI").classList.add("option-not-selected");
        document.getElementById("optionI").classList.remove("option-selected");
        document.getElementById("optionJ").classList.add("option-not-selected");
        document.getElementById("optionJ").classList.remove("option-selected");
      }
    },
    returningUser: function () {
      //console.log("returning User Triggered");

      if (localStorage.getItem("qset") == "W") {
        //console.log("QSET W");
        //Option A
        if (localStorage.getItem("Q9") == "10") {
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
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option B
        else if (localStorage.getItem("Q9") == "9") {
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
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option C
        else if (localStorage.getItem("Q9") == "8") {
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
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option D
        else if (localStorage.getItem("Q9") == "7") {
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
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option E
        else if (localStorage.getItem("Q9") == "6") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionE").classList.add("option-selected");
          document
            .getElementById("optionE")
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
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option F
        else if (localStorage.getItem("Q9") == "5") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionF").classList.add("option-selected");
          document
            .getElementById("optionF")
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
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option G
        else if (localStorage.getItem("Q9") == "4") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionG").classList.add("option-selected");
          document
            .getElementById("optionG")
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
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option H
        else if (localStorage.getItem("Q9") == "3") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionH").classList.add("option-selected");
          document
            .getElementById("optionH")
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
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option I
        else if (localStorage.getItem("Q9") == "2") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionI").classList.add("option-selected");
          document
            .getElementById("optionI")
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
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option J
        else if (localStorage.getItem("Q9") == "1") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionJ").classList.add("option-selected");
          document
            .getElementById("optionJ")
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
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionK")
            .classList.remove("option-selected");
          document
            .getElementById("optionK")
            .classList.add("option-not-selected");
        }

        //Option K
        else if (localStorage.getItem("Q9") == "0") {
          document.getElementById("next").style.cursor = "pointer";
          document.getElementById("next").disabled = false;
          document.getElementById("optionK").classList.add("option-selected");
          document
            .getElementById("optionK")
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
          document
            .getElementById("optionD")
            .classList.remove("option-selected");
          document
            .getElementById("optionD")
            .classList.add("option-not-selected");
          document
            .getElementById("optionE")
            .classList.remove("option-selected");
          document
            .getElementById("optionE")
            .classList.add("option-not-selected");
          document
            .getElementById("optionF")
            .classList.remove("option-selected");
          document
            .getElementById("optionF")
            .classList.add("option-not-selected");
          document
            .getElementById("optionG")
            .classList.remove("option-selected");
          document
            .getElementById("optionG")
            .classList.add("option-not-selected");
          document
            .getElementById("optionH")
            .classList.remove("option-selected");
          document
            .getElementById("optionH")
            .classList.add("option-not-selected");
          document
            .getElementById("optionI")
            .classList.remove("option-selected");
          document
            .getElementById("optionI")
            .classList.add("option-not-selected");
          document
            .getElementById("optionJ")
            .classList.remove("option-selected");
          document
            .getElementById("optionJ")
            .classList.add("option-not-selected");
        }
      }
    },
  },

  watch: {},
};
</script>
