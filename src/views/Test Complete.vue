<template>
  <div class="take-the-test" id="main">
    <div id="intro">
      <h1 class="h1-upper-case">
        you
        <h1 id="roll_adj"></h1>
        <h1 id="roll"></h1>
        <h1>.</h1>
      </h1>

      <h1 class="h1-upper-case">
        you have
        <h1 id="amt"></h1>
      </h1>

      <h1 id="tofrom" class="h1-upper-case"></h1>
    </div>

    <h2 class="h2-upper-case" id="improve">How you can improve</h2>
    <div class="poster-container">
      <div class="content">
        <div class="division">
          <!-- Cards Start -->

          <!-- Proffesional Cards Start -->

          <!-- Card 1 -->
          <a id="C1Container">
            <div class="card-learn">
              <div id="C1"></div>
            </div>
          </a>

          <!-- Card 2 -->
          <a id="C2Container">
            <div class="card-learn">
              <div id="C2"></div>
            </div>
          </a>

          <!-- Card 3 -->
          <a id="C3Container">
            <div class="card-learn">
              <div id="C3"></div>
            </div>
          </a>

          <!-- Card 4 -->
          <a id="C4Container">
            <div class="card-learn">
              <div id="C4"></div>
            </div>
          </a>

          <!-- Card 5 -->
          <a id="C5Container">
            <div class="card-learn">
              <div id="C5"></div>
            </div>
          </a>

          <!-- Card 6 -->
          <a id="C6Container">
            <div class="card-learn">
              <div id="C6"></div>
            </div>
          </a>

          <!-- Card 7 -->
          <a id="C7Container">
            <div class="card-learn">
              <div id="C7"></div>
            </div>
          </a>

          <!-- Card 8 -->
          <a id="C8Container">
            <div class="card-learn">
              <div id="C8"></div>
            </div>
          </a>

          <!-- Card 9 -->
          <a id="C9Container">
            <div class="card-learn">
              <div id="C9"></div>
            </div>
          </a>

          <!-- Card 10 -->
          <a id="C10Container">
            <div class="card-learn">
              <div id="C10"></div>
            </div>
          </a>

          <!-- Card 11 -->
          <a id="C11Container">
            <div class="card-learn">
              <div id="C11"></div>
            </div>
          </a>

          <!-- Card 12 -->
          <a id="C12Container">
            <div class="card-learn">
              <div id="C12"></div>
            </div>
          </a>

          <!-- Card 13 -->
          <a id="C13Container">
            <div class="card-learn">
              <div id="C13"></div>
            </div>
          </a>

          <!-- Card 14 -->
          <a id="C14Container">
            <div class="card-learn">
              <div id="C14"></div>
            </div>
          </a>

          <!-- Card 15 -->
          <a id="C15Container">
            <div class="card-learn">
              <div id="C15"></div>
            </div>
          </a>

          <!-- Card 16 -->
          <a id="C16Container">
            <div class="card-learn">
              <div id="C16"></div>
            </div>
          </a>

          <!-- Proffesional Cards End -->

          <!-- Cards End -->
        </div>
      </div>
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
// Proffesional Question Styling Starts
// Q1 Start

#C1 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/metrics_of_design_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/metrics_of_design_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C1__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C1__face--front {
  background-image: url("../assets/images/metrics_of_design_content.jpg") !important;
}

#C1__face--back {
  background-image: url("../assets/images/metrics_of_design_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C1.is-flipped {
  background-image: url("../assets/images/metrics_of_design_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q1 End

// Q2 Start
#C2 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/the_u_word_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/the_u_word_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C2__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C2__face--front {
  background-image: url("../assets/images/the_u_word_content.jpg") !important;
}

#C2__face--back {
  background-image: url("../assets/images/the_u_word_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C2.is-flipped {
  background-image: url("../assets/images/the_u_word_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q2 End

// Q3 Start
#C3 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/do_dont_tell_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/do_dont_tell_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C3__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C3__face--front {
  background-image: url("../assets/images/do_dont_tell_content.jpg") !important;
}

#C3__face--back {
  background-image: url("../assets/images/do_dont_tell_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C3.is-flipped {
  background-image: url("../assets/images/do_dont_tell_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q3 End

// Q4 Start
#C4 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/testing_testing_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/testing_testing_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C4__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C4__face--front {
  background-image: url("../assets/images/testing_testing_content.jpg") !important;
}

#C4__face--back {
  background-image: url("../assets/images/testing_testing_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C4.is-flipped {
  background-image: url("../assets/images/testing_testing_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q4 End

// Q5 Start
#C5 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/plagiarism_warning_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/plagiarism_warning_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C5__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C5__face--front {
  background-image: url("../assets/images/plagiarism_warning_content.jpg") !important;
}

#C5__face--back {
  background-image: url("../assets/images/plagiarism_warning_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C5.is-flipped {
  background-image: url("../assets/images/plagiarism_warning_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q5 End

// Q6 Start
#C6 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/the_thumbs_up_phenomenon_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/the_thumbs_up_phenomenon_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C6__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C6__face--front {
  background-image: url("../assets/images/the_thumbs_up_phenomenon_content.jpg") !important;
}

#C6__face--back {
  background-image: url("../assets/images/the_thumbs_up_phenomenon_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C6.is-flipped {
  background-image: url("../assets/images/the_thumbs_up_phenomenon_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q6 End

// Q7 Start
#C7 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/all_v_most_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/all_v_most_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C7__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C7__face--front {
  background-image: url("../assets/images/all_v_most_content.jpg") !important;
}

#C7__face--back {
  background-image: url("../assets/images/all_v_most_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C7.is-flipped {
  background-image: url("../assets/images/all_v_most_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q7 End

// Q8 Start
#C8 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/feedback_critical_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/feedback_critical_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;

    background-size: cover;
  }
}

#C8__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C8__face--front {
  background-image: url("../assets/images/feedback_critical_content.jpg") !important;
}

#C8__face--back {
  background-image: url("../assets/images/feedback_critical_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C8.is-flipped {
  background-image: url("../assets/images/feedback_critical_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q8 End

// Q9 Start
#C9 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/money_cant_buy_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/money_cant_buy_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C9__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C9__face--front {
  background-image: url("../assets/images/money_cant_buy_content.jpg") !important;
}

#C9__face--back {
  background-image: url("../assets/images/money_cant_buy_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C9.is-flipped {
  background-image: url("../assets/images/money_cant_buy_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q9 End

// Q10 Start
#C10 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/trending_not_anymore_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/trending_not_anymore_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C10__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C10__face--front {
  background-image: url("../assets/images/trending_not_anymore_content.jpg") !important;
}

#C10__face--back {
  background-image: url("../assets/images/trending_not_anymore_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C10.is-flipped {
  background-image: url("../assets/images/trending_not_anymore_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q10 End

// Q11 Start
#C11 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/zoom_in_out_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/zoom_in_out_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C11__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C11__face--front {
  background-image: url("../assets/images/zoom_in_out_content.jpg") !important;
}

#C11__face--back {
  background-image: url("../assets/images/zoom_in_out_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C11.is-flipped {
  background-image: url("../assets/images/zoom_in_out_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q11 End

// Q12 Start
#C12 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/i_can_feel_it_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/i_can_feel_it_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C12__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C12__face--front {
  background-image: url("../assets/images/i_can_feel_it_content.jpg") !important;
}

#C12__face--back {
  background-image: url("../assets/images/i_can_feel_it_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C12.is-flipped {
  background-image: url("../assets/images/i_can_feel_it_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q12 End

// Q13 Start
#C13 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/makin_it_pretty_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/makin_it_pretty_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C13__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C13__face--front {
  background-image: url("../assets/images/makin_it_pretty_content.jpg") !important;
}

#C13__face--back {
  background-image: url("../assets/images/makin_it_pretty_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C13.is-flipped {
  background-image: url("../assets/images/makin_it_pretty_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q13 End

// Q14 Start
#C14 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/no_seat_at_table_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/no_seat_at_table_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C14__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C14__face--front {
  background-image: url("../assets/images/no_seat_at_table_content.jpg") !important;
}

#C14_face--back {
  background-image: url("../assets/images/no_seat_at_table_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C14.is-flipped {
  background-image: url("../assets/images/no_seat_at_table_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q14 End

// Q15 Start
#C15 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/no_magic_formula_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/no_magic_formula_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C15__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C15__face--front {
  background-image: url("../assets/images/no_magic_formula_content.jpg") !important;
}

#C15_face--back {
  background-image: url("../assets/images/no_magic_formula_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C15.is-flipped {
  background-image: url("../assets/images/no_magic_formula_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q15 End

// Q16 Start
#C16 {
  height: inherit;
  width: inherit;
  background-image: url("../assets/images/jack_of_all_trades_clear.png") !important;
  transition: background 0.3s ease-in-out, transform 0.5s;
  background-size: cover;
  position: relative;

  transform-style: preserve-3d;

  &:hover {
    background-image: url("../assets/images/jack_of_all_trades_color.jpg") !important;
    transition: background 0.3s ease-in-out, transform 0.5s;
    background-size: cover;
  }
}

#C16__face {
  position: absolute;
  height: inherit;
  width: inherit;
  backface-visibility: hidden;
}

#C16__face--front {
  background-image: url("../assets/images/jack_of_all_trades_content.jpg") !important;
}

#C16_face--back {
  background-image: url("../assets/images/jack_of_all_trades_content.jpg") !important;
  transform: rotateY(-180deg);
}

#C16.is-flipped {
  background-image: url("../assets/images/jack_of_all_trades_content.jpg") !important;
  transform: rotateY(-180deg);
}

// Q15 End

// Proffesional Question Styling End

.body-bg {
  animation: bg-transit 1s;
  animation-fill-mode: forwards;
  background-position: center center;
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
  text-align: left;
  line-height: 0.5em;
  h1 {
    display: inline;
  }
}
.h1-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
h2 {
  padding-left: 2.5%;
  color: #0e0e0e;
  font-size: 32px;
  font-weight: 800;
  text-align: left;
  // text-decoration: underline;

  padding-top: 2.5%;
}
.h2-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
h3 {
  color: #eeeeee;
  font-size: 40px;
  font-weight: 800;
  text-align: left;
}
.h3-upper-case {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

p {
  color: #eeeeee;
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

#improve {
  overflow: hidden;
  margin-right: 2.5%;

  &:after {
    content: " ";
    display: inline-block;
    height: 0.4em;
    vertical-align: center;
    width: 100%;
    margin-right: -100%;
    margin-left: 20px;
    // border-top: 1px solid black;
    background-color: #0e0e0e;
  }
}

#intro {
  // padding-top: 5%;
  // padding-bottom: 5%;
  padding-left: 2.5%;
  padding-right: 2.5%;
}

.poster-container {
  display: flex;
  // justify-content: space-around;
  align-items: center;
  overflow-x: scroll;
  padding-left: 2.5%;
  padding-right: 2.5%;
  margin-bottom: 5%;
  // background-color: #0e0e0e;
}
// .content {
// }
.division {
  text-align: left;
  display: flex;
  justify-content: space-evenly;

  // align-items: center;

  a {
    cursor: pointer;
  }
}

.card-learn {
  width: 400px;
  height: 700px;
  border: 1px rgba(24, 11, 11, 1) solid;
  transition: border 0.3s ease-in-out;
  margin: 2.5% 25px 2.5% 25px;
  // overflow-y: hidden;
  perspective: 600px;

  &:hover {
    transition: border 0.3s ease-in-out;
    border: 1px rgba(24, 11, 11, 0) solid;
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

@media screen and (min-device-width: 1400px) and (max-device-width: 1601px) {
  h1 {
    font-size: 56px;
    font-weight: 900;
    text-align: left;
    line-height: 0.5em;
  }
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1399px) {
  h1 {
    font-size: 48px;
    font-weight: 900;
    text-align: left;
    line-height: 0.5em;
  }

  .card-learn {
    height: 550px;
    width: 314px;
  }
}

@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) {
  h1 {
    font-size: 56px;
    font-weight: 900;
    text-align: left;
    line-height: 0.5em;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    localStorage.setItem("cleanup", "1");
    // Card 1
    document.getElementById("C1").addEventListener("click", function () {
      document.getElementById("C1").classList.toggle("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 2
    document.getElementById("C2").addEventListener("click", function () {
      document.getElementById("C2").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 3
    document.getElementById("C3").addEventListener("click", function () {
      document.getElementById("C3").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 4
    document.getElementById("C4").addEventListener("click", function () {
      document.getElementById("C4").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 5
    document.getElementById("C5").addEventListener("click", function () {
      document.getElementById("C5").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 6
    document.getElementById("C6").addEventListener("click", function () {
      document.getElementById("C6").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 7
    document.getElementById("C7").addEventListener("click", function () {
      document.getElementById("C7").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 8
    document.getElementById("C8").addEventListener("click", function () {
      document.getElementById("C8").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 9
    document.getElementById("C9").addEventListener("click", function () {
      document.getElementById("C9").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 10
    document.getElementById("C10").addEventListener("click", function () {
      document.getElementById("C10").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 11
    document.getElementById("C11").addEventListener("click", function () {
      document.getElementById("C11").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 12
    document.getElementById("C12").addEventListener("click", function () {
      document.getElementById("C12").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 13
    document.getElementById("C13").addEventListener("click", function () {
      document.getElementById("C13").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 14
    document.getElementById("C14").addEventListener("click", function () {
      document.getElementById("C14").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 15
    document.getElementById("C15").addEventListener("click", function () {
      document.getElementById("C15").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C16").classList.remove("is-flipped");
    });

    // Card 16
    document.getElementById("C16").addEventListener("click", function () {
      document.getElementById("C16").classList.toggle("is-flipped");
      document.getElementById("C1").classList.remove("is-flipped");
      document.getElementById("C2").classList.remove("is-flipped");
      document.getElementById("C3").classList.remove("is-flipped");
      document.getElementById("C4").classList.remove("is-flipped");
      document.getElementById("C5").classList.remove("is-flipped");
      document.getElementById("C6").classList.remove("is-flipped");
      document.getElementById("C7").classList.remove("is-flipped");
      document.getElementById("C8").classList.remove("is-flipped");
      document.getElementById("C9").classList.remove("is-flipped");
      document.getElementById("C10").classList.remove("is-flipped");
      document.getElementById("C11").classList.remove("is-flipped");
      document.getElementById("C12").classList.remove("is-flipped");
      document.getElementById("C13").classList.remove("is-flipped");
      document.getElementById("C14").classList.remove("is-flipped");
      document.getElementById("C15").classList.remove("is-flipped");
    });

    // Card Display Start

    // Proffessional Start

    if (localStorage.getItem("qset") == "W") {
      // Metrics Of Design Start

      if (
        localStorage.getItem("Q1") != "5" &&
        localStorage.getItem("Q2") != "5"
      ) {
        //console.log("Metrics Gone");
        document.getElementById("C1Container").style.display = "none";
      }

      // Metrics Of Design End

      // The U Word Start

      if (
        localStorage.getItem("Q1") != "2" &&
        localStorage.getItem("Q2") != "2" &&
        parseInt(localStorage.getItem("Q9")) <= 5 &&
        parseInt(localStorage.getItem("Q10")) <= 5 &&
        localStorage.getItem("Q23") != "3" &&
        localStorage.getItem("Q23") != "0" &&
        localStorage.getItem("Q24") != "5" &&
        localStorage.getItem("Q24") != "3" &&
        localStorage.getItem("Q23") != "0" &&
        localStorage.getItem("Q20") != "2"
      ) {
        //console.log("U Word Gone");
        document.getElementById("C2Container").style.display = "none";
      }

      // The U Word End

      // Testing Testing start

      if (localStorage.getItem("Q3") != "5") {
        //console.log("Testing Gone)");
        document.getElementById("C4Container").style.display = "none";
      }

      // Testing end

      // Do dont tell start

      if (localStorage.getItem("Q3") != "3") {
        //console.log("Dont Tell Gone");
        document.getElementById("C3Container").style.display = "none";
      }

      // Do dont tell end

      // Plagiarism Warning start

      if (
        localStorage.getItem("Q4") != "5" &&
        localStorage.getItem("Q5") != "5" &&
        localStorage.getItem("Q5") != "4" &&
        localStorage.getItem("Q4") != "2" &&
        localStorage.getItem("Q6") != "5"
      ) {
        //console.log("Plagerism Gone");
        document.getElementById("C5Container").style.display = "none";
      }

      // Plagiarism Warning end

      // Thumbs Up start

      if (
        parseInt(localStorage.getItem("Q7")) <= 5 &&
        parseInt(localStorage.getItem("Q8")) <= 5 &&
        parseInt(localStorage.getItem("Q19")) <= 5
      ) {
        //console.log("Thumbs Gone");
        document.getElementById("C6Container").style.display = "none";
      }

      // Thumbs Up end

      // All v Most start

      if (
        localStorage.getItem("Q22") != "5" &&
        localStorage.getItem("Q22") != "3" &&
        localStorage.getItem("Q22") != "1"
      ) {
        //console.log("AllvMost Gone");
        document.getElementById("C7Container").style.display = "none";
      }

      // All v Most end

      // Feedback Critical start

      if (parseInt(localStorage.getItem("Q26")) <= 5) {
        //console.log("Feedback Gone");
        document.getElementById("C8Container").style.display = "none";
      }

      // Feedback Critical end

      // Money Cant start

      if (
        parseInt(localStorage.getItem("Q11")) <= 5 &&
        parseInt(localStorage.getItem("Q16")) <= 5
      ) {
        //console.log("Money Gone");
        document.getElementById("C9Container").style.display = "none";
      }

      // Money Cant end

      // Trending start

      if (
        parseInt(localStorage.getItem("Q12")) <= 5 &&
        parseInt(localStorage.getItem("Q21")) <= 5
      ) {
        //console.log("Trend Gone");
        document.getElementById("C10Container").style.display = "none";
      }

      // Trending end

      // Zoom start

      if (parseInt(localStorage.getItem("Q13")) <= 5) {
        //console.log("Zoom Gone");
        document.getElementById("C11Container").style.display = "none";
      }

      // Zoom end

      // I Can Feel It start

      if (parseInt(localStorage.getItem("Q14")) <= 5) {
        //console.log("Feeling Gone");
        document.getElementById("C12Container").style.display = "none";
      }

      // I can feel it end

      // Make Pretty start

      if (
        localStorage.getItem("Q16") != "5" &&
        localStorage.getItem("Q20") != "5" &&
        localStorage.getItem("Q20") != "4"
      ) {
        //console.log("Pretty Gone");
        document.getElementById("C13Container").style.display = "none";
      }

      // Make Pretty end

      // No Seat start

      if (
        localStorage.getItem("Q18") != "5" &&
        localStorage.getItem("Q18") != "4"
      ) {
        //console.log("Seat Gone");
        document.getElementById("C14Container").style.display = "none";
      }

      // No Seat end

      // No Formula start

      if (
        localStorage.getItem("Q17") != "5" &&
        localStorage.getItem("Q17") != "4" &&
        localStorage.getItem("Q17") != "3"
      ) {
        //console.log("Formula Gone");
        document.getElementById("C15Container").style.display = "none";
      }

      // No Formula end

      // Jack of trades start

      if (parseInt(localStorage.getItem("Q15")) <= 5) {
        //console.log("Jack Gone");
        document.getElementById("C16Container").style.display = "none";
      }

      // Jack of trades end
    }

    // Proffessional End

    // Student Start
    else if (localStorage.getItem("qset") == "S") {
      // N/A Start
      // Metrics Of Design Start

      //console.log("Metrics Gone");
      document.getElementById("C1Container").style.display = "none";

      // Metrics Of Design End

      // Do dont tell start

      //console.log("Dont Tell Gone");
      document.getElementById("C3Container").style.display = "none";

      // Do dont tell end

      // Plagiarism Warning start

      //console.log("Plagerism Gone");
      document.getElementById("C5Container").style.display = "none";

      // Plagiarism Warning end

      // All v Most start

      //console.log("AllvMost Gone");
      document.getElementById("C7Container").style.display = "none";

      // All v Most end

      // Money Cant start

      //console.log("Money Gone");
      document.getElementById("C9Container").style.display = "none";

      // Money Cant end

      // Trending start

      //console.log("Trend Gone");
      document.getElementById("C10Container").style.display = "none";

      // Trending end

      // Zoom start

      //console.log("Zoom Gone");
      document.getElementById("C11Container").style.display = "none";

      // Zoom end

      // Make Pretty start

      //console.log("Pretty Gone");
      document.getElementById("C13Container").style.display = "none";

      // Make Pretty end

      // No Seat start

      //console.log("Seat Gone");
      document.getElementById("C14Container").style.display = "none";

      // No Seat end

      // N/A End

      // The U Word Start

      if (
        parseInt(localStorage.getItem("Q5")) <= 5 &&
        localStorage.getItem("Q8") != "5" &&
        localStorage.getItem("Q8") != "3" &&
        localStorage.getItem("Q13") != "2" &&
        localStorage.getItem("Q13") != "4" &&
        localStorage.getItem("Q14") != "3" &&
        localStorage.getItem("Q14") != "1" &&
        localStorage.getItem("Q15") != "5" &&
        localStorage.getItem("Q15") != "3" &&
        localStorage.getItem("Q15") != "0"
      ) {
        //console.log("U Word Gone");
        document.getElementById("C2Container").style.display = "none";
      }

      // The U Word End

      // Testing Testing start

      if (
        localStorage.getItem("Q9") != "5" &&
        localStorage.getItem("Q9") != "3" &&
        localStorage.getItem("Q10") != "5" &&
        localStorage.getItem("Q10") != "3"
      ) {
        //console.log("Testing Gone)");
        document.getElementById("C4Container").style.display = "none";
      }

      // Testing end

      // Thumbs Up start

      if (
        parseInt(localStorage.getItem("Q3")) <= 5 &&
        parseInt(localStorage.getItem("Q4")) <= 5
      ) {
        //console.log("Thumbs Gone");
        document.getElementById("C6Container").style.display = "none";
      }

      // Thumbs Up end

      // Feedback Critical start

      if (parseInt(localStorage.getItem("Q7")) <= 5) {
        //console.log("Feedback Gone");
        document.getElementById("C8Container").style.display = "none";
      }

      // Feedback Critical end

      // I Can Feel It start

      if (
        parseInt(localStorage.getItem("Q6")) <= 5 &&
        localStorage.getItem("Q12") != "5"
      ) {
        //console.log("Feeling Gone");
        document.getElementById("C12Container").style.display = "none";
      }

      // I can feel it end

      // No Formula start

      if (
        localStorage.getItem("Q1") != "5" &&
        localStorage.getItem("Q1") != "4" &&
        localStorage.getItem("Q1") != "3"
      ) {
        //console.log("Formula Gone");
        document.getElementById("C15Container").style.display = "none";
      }

      // No Formula end

      // Jack of trades start

      if (
        parseInt(localStorage.getItem("Q2")) <= 5 &&
        localStorage.getItem("Q11") != "5"
      ) {
        //console.log("Jack Gone");
        document.getElementById("C16Container").style.display = "none";
      }

      // Jack of trades end
    }

    // Student End

    // Card Display End

    //Time + Display Calc Start

    var t, m, s; // time, min part, sec part

    if (localStorage.getItem("newAvg") > localStorage.getItem("oldAvg")) {
      t =
        (parseFloat(localStorage.getItem("newAvg")) -
          (parseFloat(localStorage.getItem("oldAvg")) *
            parseInt(localStorage.getItem("oldRecords")) +
            parseFloat(localStorage.getItem("newAvg"))) /
            (parseInt(localStorage.getItem("oldRecords")) + 1)) *
        60;

      m = Math.trunc(t);
      s = Math.trunc((t - m) * 60);

      document.getElementById("roll_adj").textContent = " have";
      document.getElementById("roll").textContent = " doomed us";
      document.getElementById("roll").style.color = "#d1423b";
      //console.log("PRINT NEW AVG" + localStorage.getItem("newAvg"));

      document.getElementById("amt").textContent =
        " added " + m + " min " + s + " sec";
      document.getElementById("amt").style.color = "#d1423b";

      document.getElementById("tofrom").textContent = " to the clock.";
    } else if (
      localStorage.getItem("newAvg") < localStorage.getItem("oldAvg")
    ) {
      t =
        (parseFloat(localStorage.getItem("oldAvg")) -
          (parseFloat(localStorage.getItem("oldAvg")) *
            parseInt(localStorage.getItem("oldRecords")) +
            parseFloat(localStorage.getItem("newAvg"))) /
            (parseInt(localStorage.getItem("oldRecords")) + 1)) *
        60;

      m = Math.trunc(t);
      s = Math.trunc((t - m) * 60);

      document.getElementById("roll_adj").textContent = " are a";
      document.getElementById("roll").textContent = " saviour";
      document.getElementById("roll").style.color = "#426ddb";

      //console.log("OLD AVG AT Complete" + localStorage.getItem("oldAvg"));
      document.getElementById("amt").textContent =
        " reduced " + m + " min " + s + " sec";
      document.getElementById("amt").style.color = "#426ddb";
      document.getElementById("tofrom").textContent = "  from the clock.";
    }
    //Time + Display Calc End

    // localStorage.clear();
  },
  methods: {
    /* Temporarily Abandonded
    returningUser: function() {
      //console.log(localStorage.getItem("qset"));

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
*/
  },
  watch: {},

  destroyed() {
    localStorage.removeItem("oldAvg");
    localStorage.removeItem("oldRecords");
    localStorage.removeItem("newAvg");
    //console.log("Destroyed");
  },
};
</script>
