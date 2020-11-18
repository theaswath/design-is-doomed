<template>
  <div class="take-the-test" id="main">
    <div class="intro">
      <h1 class="h1-upper-case">Take The Test</h1>
      <p>
        Answer a series of multiple-choice questions and in less than 5 minutes,
        you will know if you have pushed back the clock or edged us towards the
        apocalypse. Answer honestly, all your responses are anonymous! Good
        luck, and Godspeed!
      </p>
    </div>
    <div class="container">
      <div class="content">
        <h2 class="h2-upper-case">Choose you question set</h2>
        <p style="padding-left: 20%; padding-right: 20%">
          Both contain questions tailored and ordered to suit individual
          roles.<br />If you qualify for answering both, you may answer them one
          after the other.
        </p>
        <div class="division">
          <a>
            <div
              id="student"
              v-on:click="roller($event)"
              class="role-not-selected"
            >
              <h3>Academic</h3>
              <p>
                Current or former undergraduate, graduate or PhD student
                pursuing a degree in a creative field including but not limited
                to graphic design, industrial design, interaction design,
                advertising, medical equipment design, social innovation,
                product design, communication design, or any other field that
                qualifies you as a working design professional either now, in
                the past or in the future.
              </p>
            </div>
          </a>
          <a>
            <div
              id="working-professional"
              v-on:click="roller($event)"
              class="role-not-selected"
            >
              <h3>Industry Professional</h3>
              <p>
                Current or former working design professionals. For sake of
                clarity, “working design professional” should be based on your
                current/former job title in a field of design. Interns and
                freelancers also qualify for this question set. Former design
                professionals include those who are taking a break/sabbatical or
                between jobs. Retried and/or professionals who have pivoted away
                from design roles (including supervisory roles) do not qualify.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
}
.h2-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
h3 {
  color: #0e0e0e;
  font-size: 40px;
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
.intro {
  padding-bottom: 5%;
  padding-left: 10%;
  padding-right: 10%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
// .content {
//   p {

//   }
// }
.division {
  text-align: left;

  a {
    cursor: pointer;
  }
  .role-not-selected {
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
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.2px;
    margin: 2.5% 10% 2.5% 10%;
    h3 {
      transition: ease-in-out;
      transition-duration: 0.2s;
      transition-property: color;
      color: #0e0e0e;
      font-size: 40px;
      font-weight: 800;
      text-align: left;
      line-height: 2px;
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

.role-selected {
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
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.2px;
  margin: 2.5% 10% 2.5% 10%;
  h3 {
    transition: ease-in-out;
    transition-duration: 0.2s;
    transition-property: color;
    color: #0e0e0e;
    font-size: 40px;
    font-weight: 800;
    text-align: left;
    line-height: 2px;
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
    document.getElementById("next").style.cursor = "pointer";
    document.getElementById("next").disabled = false;
    this.returningUser();
  },
  methods: {
    // Temporarily Abandonded
    returningUser: function () {
      console.log(localStorage.getItem("qset"));

      if (localStorage.getItem("qset") == "S") {
        document.getElementById("next").style.opacity = "1";
        document.getElementById("student").classList.add("role-selected");
        document
          .getElementById("student")
          .classList.remove("role-not-selected");
        document
          .getElementById("working-professional")
          .classList.add("role-not-selected");
        document
          .getElementById("working-professional")
          .classList.remove("role-selected");
      }
      if (localStorage.getItem("qset") == "W") {
        document.getElementById("next").style.opacity = "1";
        document
          .getElementById("working-professional")
          .classList.add("role-selected");
        document
          .getElementById("working-professional")
          .classList.remove("role-not-selected");
        document.getElementById("student").classList.add("role-not-selected");
        document.getElementById("student").classList.remove("role-selected");
      }
    },

    roller: function () {
      console.log(event.currentTarget.id);
      console.log(this.$route.name);

      if (event.currentTarget.id == "student") {
        localStorage.setItem("qset", "S");
        document.getElementById("next").style.opacity = "1";
        document.getElementById("student").classList.add("role-selected");
        document
          .getElementById("student")
          .classList.remove("role-not-selected");
        document
          .getElementById("working-professional")
          .classList.add("role-not-selected");
        document
          .getElementById("working-professional")
          .classList.remove("role-selected");
      }
      if (event.currentTarget.id == "working-professional") {
        localStorage.setItem("qset", "W");
        document.getElementById("next").style.opacity = "1";
        document
          .getElementById("working-professional")
          .classList.add("role-selected");
        document
          .getElementById("working-professional")
          .classList.remove("role-not-selected");
        document.getElementById("student").classList.add("role-not-selected");
        document.getElementById("student").classList.remove("role-selected");
      }
    },
  },
  watch: {},
};
</script>