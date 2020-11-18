<template>
  <div class="take-the-test" id="main">
    <!-- <div class="intro"></div> -->
    <div class="container">
      <div class="content">
        <h2>Compliance With Data & Privacy Protection Laws Of Individuals</h2>
        <p>
          While all data submitted is anonymous and no private information
          (including IP addresses) are collected, individual question responses
          and the corresponding question set are stored under randomly generated
          user IDs for future academic and research use. To comply with data and
          privacy protection laws, you may choose to enter a unique identifier
          (UID) that will help us delete your response data in case you require.
          Note that however it is not possible to delete the calculated data
          which is the result of all responses of everyone who has ever taken
          the test and such data does not have individually identifiable
          components. This step is optional and by not providing a UID there is
          no way to identify and hence no way to delete your data from our
          records.
        </p>
        <!-- Options Start -->

        <div class="division">
          <input
            id="userID"
            name="userID"
            class="input-id"
            type="text"
            autofocus
            maxlength="16"
            minlength="3"
            placeholder="3-16 alpha-numeric charecters"
          />
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
  display: flex;
  justify-content: center;

  .input-id {
    text-align: center;
    transition: ease-in-out;
    transition-duration: 0.2s;
    transition-property: background-color;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.2px;
    background-color: rgba(0, 0, 0, 0);
    color: #0e0e0e;
    border: 2px #0e0e0e solid;
    padding: 8px 40px;
    // text-align: center;
    // text-transform: uppercase;
    font-family: "Space Grotesk", sans-serif;
    margin: 0% 0% 10% 0%;
    &:focus {
      background-color: rgba(0, 0, 0, 0);
      color: #0e0e0e;
    }
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
    }
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
  },
  methods: {
    optionSelected: function () {
      //console.log(event.currentTarget.id);
    },
  },

  watch: {},
};
</script>
