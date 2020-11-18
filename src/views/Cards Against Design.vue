<template>
  <div class="cards-against-design">
    <div id="cardRandomizeWrapper">
      <div id="blackCards">
        <img id="blackCard" :src="selectedBlack" alt="" />
      </div>
      <div id="randombtn">
        <div>
          <p>Doesn't make sense?<br />Hit the button.</p>
          <a>
            <button v-on:click="randCard" id="test-link">
              <i class="fa fa-random"></i>
            </button>
          </a>
          <p>Makes sense? Reflect.</p>
          <p style="text-transform: uppercase">scroll for more</p>
        </div>
      </div>
      <div id="whiteCards">
        <img id="whiteCard" :src="selectedWhite" alt="" />
      </div>
    </div>
    <h1>Cards Against Design</h1>
    <p class="p-upper-case">The Game for horrified designers</p>

    <section class="stats">
      <div class="container">
        <div class="reflections">
          <h2><i class="fas fa-infinity"></i></h2>
          <h3>Reflections</h3>
        </div>

        <div class="cardNo">
          <h2>100+</h2>
          <h3>Trigger & Response Cards</h3>
        </div>

        <div class="objective">
          <h2>1</h2>
          <h3>Objective</h3>
        </div>
      </div>
    </section>

    <section class="aboutCAD">
      <div class="container">
        <div class="what">
          <h1 class="h1-upper-case">What?</h1>
          <p>
            Cards Against Design is a card game based on the popular adult party
            game Cards Against Humanity. The game can be played in either the
            provided game modes or any custom game mode made by the players. The
            objective however, is to always provoke conversations based off the
            lives, struggles and raison d'etre of designers everywhere. Using
            humour, absurdity and emotion, Cards Against Design hopes to make
            the world (and designers better) understand what design truly is and
            its place and purpose in building a better tomorrow.
          </p>
        </div>
        <div class="why">
          <h1 class="h1-upper-case">Why?</h1>
          <p>
            Being taught the value of design in D school and then seeing it all
            crumble in the industry, made me angry. So, I decided to reach out
            to the design community and understand if I had a one-off bad
            experience or if this was the state of our discipline; but research
            showed mixed responses. Some say all they are required to do is make
            things pop, while some say they are doing serious business; Some say
            deliverables are all that people care about, some say process and
            some say it’s the impact. But design has always been and always will
            be the discipline that seeks to humanize, and since nobody knows any
            better, a pessimistic approach was taken, design was declared doomed
            and now attempt to save it is being made.
          </p>
        </div>
        <div class="works">
          <h1 class="h1-upper-case">Does It Work?</h1>
          <p>
            Don’t know, but sure hope it does!<br />You can
            <a href="/your-voice">share your voice</a> and let me know what
            works and what doesn’t. After all, we can’t be right on our first
            go, and it would be hypocritical if feedback and iteration aren’t
            encouraged and made a part of the process!
          </p>
        </div>
      </div>
    </section>

    <section id="types">
      <div id="buttons">
        <a>
          <button
            v-on:click="blackCardsSelect"
            class="selectorButtons selectorButtons-active"
            id="selectBlackCards"
          >
            <i style="margin-right: 5%" class="fas fa-bolt"></i>Trigger Cards
          </button>
        </a>

        <a>
          <button
            v-on:click="whiteCardsSelect"
            class="selectorButtons"
            id="selectWhiteCards"
          >
            <i style="margin-right: 5%" class="fas fa-comment-dots"></i>Response
            Cards
          </button>
        </a>
        <a href="./files/Printable Template and Rules.pdf" target="_blank">
          <button
            class="selectorButtons"
            style="border-radius: 48px; margin-top: 30%"
          >
            <i style="margin-right: 5%" class="fas fa-long-arrow-alt-down"></i
            >Download Game
          </button>
        </a>
        <p style="margin-top: 0">
          <strong>Includes rules &<br />game template</strong>
        </p>
      </div>
      <div id="cardDisplay">
        <div id="blackCardsCard">
          <img src="../assets/images/cards/black/language-of-gods.png" alt="" />
        </div>
        <div id="whiteCardsCard" class="displayNone">
          <img src="../assets/images/cards/white/make-it-pop.png" alt="" />
        </div>
      </div>
      <div id="cardContent">
        <h3>Meet The Cards</h3>
        <div id="blackCardsInfo">
          <p class="p-upper-case"><strong>Trigger Cards</strong></p>
          <p>
            These cards are played first by <strong>Pretty Pops</strong> in
            <strong>Get Rid of It!</strong> or is the
            <strong>Source of Truth</strong> in
            <strong>It’s All Connected!</strong>. Each card contains either a
            question, or a provocation that triggers a response from designers.
            Designers may play or match any number of white cards in response to
            a black card, unless it contains a ‘Pick 2’ in which case 2 cards
            must be played, no more no less.
          </p>
        </div>
        <div id="whiteCardsInfo" class="displayNone">
          <p class="p-upper-case"><strong>Response Cards</strong></p>
          <p>
            These cards are played in Response to a Trigger Card. Each card
            contains a word or a phrase that is intentionally left vague so that
            it’s subjectivity may connect with the players in their own personal
            ways. There is no right or wrong card to play as per game rules,
            that is determined by the players and how it relates to them. Since
            every match at different times may trigger different responses for
            different people in different situations, an infinite number of
            conversations might be had in the form of friendly game-time banter
            or serious discussions if played in such a setting.
          </p>
        </div>
      </div>
    </section>

    <section id="reviews">
      <div id="title">
        <h1 style="margin-bottom: 0" class="h1-upper-case">
          Reviews we gave ourselves
        </h1>
        <p><strong>(Because who cares about user feedback!)</strong></p>
      </div>
      <div id="content">
        <div class="first">
          <img src="../assets/images/reviews/review-1.png" alt="" />
          <img src="../assets/images/reviews/review-2.png" alt="" />
          <img src="../assets/images/reviews/review-3.png" alt="" />
          <img src="../assets/images/reviews/review-4.png" alt="" />
          <img src="../assets/images/reviews/review-5.png" alt="" />
          <img src="../assets/images/reviews/review-6.png" alt="" />
          <img src="../assets/images/reviews/review-7.png" alt="" />
          <img src="../assets/images/reviews/review-8.png" alt="" />
          <img src="../assets/images/reviews/review-9.png" alt="" />
          <img src="../assets/images/reviews/review-10.png" alt="" />
          <img src="../assets/images/reviews/review-1.png" alt="" />
          <img src="../assets/images/reviews/review-2.png" alt="" />
          <img src="../assets/images/reviews/review-3.png" alt="" />
          <img src="../assets/images/reviews/review-4.png" alt="" />
          <img src="../assets/images/reviews/review-5.png" alt="" />
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        <div class="logo">
          <img src="../assets/images/logo-rw.png" alt="" />
        </div>
        <div class="links">
          <h1>Page Links</h1>
          <a href="/">Clock of Doom</a>

          <router-link to="/take-the-test">take the test</router-link>
          <a
            style="cursor: pointer"
            onClick="window.scrollTo({ top: 0, behavior: 'smooth' })"
            >Cards Against Design</a
          >
          <router-link to="/your-voice">Your Voice</router-link>
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
  display: none;
}

#cardRandomizeWrapper {
  display: flex;
  justify-content: space-evenly;
  overflow-x: hidden;
  margin-bottom: 10%;
  // align-items: center;
  #whiteCards {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 90vh;
    width: 45%;
    // background-color: #eeeeee;
    #whiteCard {
      transition: 0.3s ease-in-out;
      // border: 1px #0e0e0e solid;
      // border-radius: 20px;
      // filter: drop-shadow(10px 10px 0px rgba(14, 14, 14, 1));
    }
  }

  #randombtn {
    display: flex;
    align-items: center;
    // flex-direction: column;
    height: 90vh;
    width: 10%;
    div {
      flex-direction: column;
      align-items: center;
    }
    p {
      font-size: 14px;
      color: #0e0e0e;
      margin-top: 10%;
      margin-bottom: 10%;
    }

    #test-link {
      transition: ease-in-out;
      transition-duration: 1s;
      opacity: 1;
      width: 150px;
      height: 56px;
      transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transition-duration: 0.3s;
      background-color: rgba(238, 238, 238, 0);
      color: #0e0e0e;
      border: 2px #0e0e0e solid;
      font-size: 24px;
      font-family: AndersonGrotesk;
      font-weight: 700;
      cursor: pointer;
      // padding: 16px 24px 16px 24px;
      &:hover {
        transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition-duration: 0.3s;
        background-color: rgba(14, 14, 14, 1);
        color: #eeeeee;
        border: 2px rgba(14, 14, 14, 1) solid;
      }
    }
  }

  #blackCards {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 90vh;
    width: 45%;
    // background-color: #0e0e0e;
    // transform: translateX(100%);
    #blackCard {
      transition: 0.3s ease-in-out;
      // transition: 0.5 ease-in-out;
      // border: 1px #eeeeee solid;
      // border-radius: 30px;
      // filter: drop-shadow(10px 10px 0px rgba(219, 74, 66, 1));
      // filter: drop-shadow(2px 2px 0px rgba(14, 14, 14, 1));

      // filter: drop-shadow(10px 10px 0px rgba(255, 255, 255, 1));
    }
  }
}

#types {
  transition: 0.5s ease-in-out;
  margin-top: 10%;
  margin-bottom: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  #buttons {
    width: 20%;
    margin-left: 2.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    font-size: 11px;
    color: #0e0e0e;
    // margin-top: 10%;
    // margin-bottom: 10%;
    text-align: center;
    line-height: 1em;
  }

  #cardDisplay {
    width: 30%;
    img {
      height: 500px;
    }
    #whiteCardsCard {
      transition: 0.3s ease-in-out;
    }
    #blackCardsCard {
      transition: 0.3s ease-in-out;
    }
  }

  #cardContent {
    margin-left: 2.5%;
    margin-right: 5%;
    width: 40%;
    p {
      font-size: 16px;
      letter-spacing: 0.7px;
      line-height: 1.3em;
      text-align: justify;
    }
    h3 {
      text-align: left;
      transition: 0.3s ease-in-out;
    }
    #whiteCardsInfo {
      min-height: 200px;
      transition: 0.3s ease-in-out;
    }
    #blackCardsInfo {
      min-height: 200px;
      transition: 0.3s ease-in-out;
    }
  }

  .selectorButtons {
    margin-top: 5%;
    margin-bottom: 5%;
    transition: ease-in-out;
    transition-duration: 1s;
    opacity: 1;
    width: 200px;
    height: 56px;
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
      background-color: rgba(17, 17, 17, 1);
      color: rgba(238, 238, 238, 1);
      border: 2px rgba(17, 17, 17, 1) solid;
    }
  }
  .selectorButtons-active {
    background-color: rgba(17, 17, 17, 1) !important;
    color: rgba(238, 238, 238, 1) !important;
    border: 2px rgba(17, 17, 17, 1) solid !important;
  }
}

.stats {
  margin-top: 5%;
  background-color: #eeeeee;
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;

    h1 {
      font-size: 2em;
      color: transparent;
      // -webkit-text-stroke: 1px #eeeeee;
      color: #0e0e0e;
      // opacity: 0.05;
      text-align: left;
      line-height: 1em;
      font-weight: 900;
      // transform-origin: center;
      // transform: scale(2);
    }

    h2 {
      color: #0e0e0e;
      margin-top: 0;
      margin-bottom: 2.5%;

      font-size: 80px;
      font-weight: 800;
    }
    h3 {
      color: #0e0e0e;
      margin-top: 2.5%;
      font-size: 20px;
      text-align: center;
      font-weight: 700;
    }
    p {
      color: #0e0e0e;
    }
  }
}

.aboutCAD {
  margin-top: 5%;
  // background-color: #0e0e0e;
  .container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    // padding: 2.5%;

    div {
      padding-left: 2.5%;
      padding-right: 2.5%;
      width: 30%;
    }
    h1 {
      font-size: 22px;
      color: transparent;
      // -webkit-text-stroke: 1px #eeeeee;
      color: #0e0e0e;
      // opacity: 0.05;
      text-align: center;
      line-height: 1em;
      font-weight: 800;
      // transform-origin: center;
      // transform: scale(2);
    }

    h2 {
      // color: #eeeeee;
      margin-top: 0;
      margin-bottom: 2.5%;

      font-size: 80px;
      font-weight: 800;
    }
    h3 {
      // color: #eeeeee;
      margin-top: 2.5%;
      font-size: 20px;
      text-align: center;
      font-weight: 700;
    }
    p {
      color: #0e0e0e;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 0.2px;
      text-align: justify;
      text-align-last: center;
    }
    a {
      color: #0e0e0e;
      text-decoration: underline;
    }
  }
}

#reviews {
  background-color: #eeeeee;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
  margin-bottom: 5%;
  // padding-left: 2.5%;
  // padding-right: 2.5%;

  h1 {
    font-size: 2em;
    color: transparent;
    // -webkit-text-stroke: 1px #eeeeee;
    color: #0e0e0e;
    // opacity: 0.05;
    text-align: left;
    line-height: 1em;
    font-weight: 900;
    // transform-origin: center;
    // transform: scale(2);
  }
  h2 {
    font-size: 15em;
    -webkit-text-stroke: 1px #eeeeee;
    color: #0e0e0e;
    margin-top: -15%;
    margin-bottom: 5%;
    z-index: 1;
    position: relative;
  }

  h3 {
    color: #eeeeee;
  }

  p {
    font-size: 14px;
    letter-spacing: 0.1px;
    // line-height: 1.2em;
    // padding-left: 5%;
    // padding-right: 5%;
    text-align: justify;
  }
  #title {
    width: 25%;
    // background-color: #0e0e0e;
    color: #0e0e0e;
    padding-left: 2.5%;
  }
  #content {
    width: 75%;
    overflow-x: hidden;
    div {
      display: flex;
      align-items: center;

      img {
        width: 180px;
        padding-left: 50px;
        padding-right: 50px;
      }
      &:hover {
        animation-play-state: paused;
      }
    }
  }
}

.first {
  animation: scrollingReviews 15s linear infinite;
}

@keyframes scrollingReviews {
  0% {
    transform: translate3d(0px, 0, 0);
  }

  100% {
    transform: translate3d(-2800px, 0, 0);
  }
}

h1 {
  color: #0e0e0e;
  font-size: 100px;
  font-weight: 900;
  text-align: center;
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
  font-size: 100px;
  font-weight: 900;
  text-align: center;
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
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
  font-size: 24px;
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

#splitter {
  .container {
    // margin-top: 5%;
    display: flex;
    justify-content: space-evenly;
    height: 200px;
    // padding: 2.5%;
    // .wrapper {
    //   a {
    //     width: 100%;
    //     height: 100%;
    //     display: flex;

    //   }
    // }

    .wrapper {
      // display: inline-block;
      width: 100%;

      a {
        width: 100%;
        height: 100%;

        text-decoration: none;

        h3 {
          color: #eeeeee;
          font-weight: 900;
          text-transform: uppercase;
        }

        // font-family: 'Space Grotesk', sans-serif;

        #cad {
          // width: 100%;
          text-decoration: none;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-image: url(../assets/images/cad-splitter.jpg);
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url(../assets/images/cad-splitter.jpg);
          background-size: 100%;
          transition: 0.5s ease-in-out;
          background-position: center center;
          h3 {
            &:after {
              content: "";
              display: flex;
              height: 10px;
              left: 0;
              // position: absolute;
              background: #eeeeee;
              transition: width 0.3s ease 0s, left 0.3s ease 0s;
              width: 0;
            }
          }
          &:hover {
            background-size: 110%;
            transition: 0.5s ease-in-out;

            h3 {
              &:after {
                content: "";
                display: flex;
                height: 10px;
                left: 0;
                // position: absolute;
                background: #eeeeee;
                transition: width 0.3s ease 0s, left 0.3s ease 0s;
                width: 100%;
              }
            }
          }
        }

        #support {
          // width: 100%;
          text-decoration: none;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-image: url(../assets/images/cad-splitter.jpg);
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url(../assets/images/cad-splitter.jpg);
          background-size: 100%;
          transition: 0.5s ease-in-out;
          background-position: center center;
          h3 {
            &:after {
              content: "";
              display: flex;
              height: 10px;
              left: 0;
              // position: absolute;
              background: #eeeeee;
              transition: width 0.3s ease 0s, left 0.3s ease 0s;
              width: 0;
            }
          }
          &:hover {
            background-size: 110%;
            transition: 0.5s ease-in-out;

            h3 {
              &:after {
                content: "";
                display: flex;
                height: 10px;
                left: 0;
                // position: absolute;
                background: #eeeeee;
                transition: width 0.3s ease 0s, left 0.3s ease 0s;
                width: 100%;
              }
            }
          }
        }
      }
    }
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

@media screen and (min-device-width: 1200px) and (max-device-width: 1601px) {
}

/* ----------- iPad Pro 10.5" ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
}
</style>
<script>
// import $ from "jquery";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      blackCards: [
        //Without Underline
        {
          id: 0,
          url: require(`../assets/images/cards/black/best-feeling.png`),
        },
        {
          id: 1,
          url: require(`../assets/images/cards/black/degree-never-have.png`),
        },
        {
          id: 2,
          url: require(`../assets/images/cards/black/hate-it.png`),
        },

        {
          id: 3,
          url: require(`../assets/images/cards/black/hotel-3.png`),
        },
        {
          id: 4,
          url: require(`../assets/images/cards/black/journey-outside.png`),
        },
        {
          id: 5,
          url: require(`../assets/images/cards/black/language-of-gods.png`),
        },
        {
          id: 6,
          url: require(`../assets/images/cards/black/love-it.png`),
        },
        {
          id: 7,
          url: require(`../assets/images/cards/black/not-enough-data.png`),
        },
        {
          id: 8,
          url: require(`../assets/images/cards/black/oprah-you.png`),
        },
        {
          id: 9,
          url: require(`../assets/images/cards/black/perfect.png`),
        },

        {
          id: 10,
          url: require(`../assets/images/cards/black/say-one-thing.png`),
        },
        {
          id: 11,
          url: require(`../assets/images/cards/black/sleep.png`),
        },
        {
          id: 12,
          url: require(`../assets/images/cards/black/what-are-you-doing-with-life.png`),
        },

        //With Underline
        {
          id: 13,
          url: require(`../assets/images/cards/black-ul/client-is.png`),
        },
        {
          id: 14,
          //SPELLING
          url: require(`../assets/images/cards/black-ul/brief-nature.png`),
        },
        {
          id: 15,
          url: require(`../assets/images/cards/black-ul/client-loves.png`),
        },
        {
          id: 16,
          url: require(`../assets/images/cards/black-ul/client-loves-saying.png`),
        },
        {
          id: 17,
          url: require(`../assets/images/cards/black-ul/degree-is.png`),
        },
        {
          id: 18,
          url: require(`../assets/images/cards/black-ul/design-at-org.png`),
        },
        {
          id: 19,
          url: require(`../assets/images/cards/black-ul/design-decisions-based.png`),
        },
        {
          id: 20,
          url: require(`../assets/images/cards/black-ul/designer-i.png`),
        },
        {
          id: 21,
          url: require(`../assets/images/cards/black-ul/design-is.png`),
        },
        {
          id: 22,
          url: require(`../assets/images/cards/black-ul/design-to.png`),
        },
        {
          id: 23,
          url: require(`../assets/images/cards/black-ul/feedback-mostly.png`),
        },
        {
          id: 24,
          url: require(`../assets/images/cards/black-ul/files-named.png`),
        },
        {
          id: 25,

          url: require(`../assets/images/cards/black-ul/hire-me.png`),
        },
        {
          id: 26,

          url: require(`../assets/images/cards/black-ul/important-to-college.png`),
        },
        {
          id: 27,
          url: require(`../assets/images/cards/black-ul/is-useless.png`),
        },
        {
          id: 28,
          url: require(`../assets/images/cards/black-ul/manager-is.png`),
        },
        {
          id: 29,
          url: require(`../assets/images/cards/black-ul/most-important.png`),
        },
        {
          id: 30,
          url: require(`../assets/images/cards/black-ul/most-important-to-me.png`),
        },
        {
          id: 31,
          url: require(`../assets/images/cards/black-ul/never-heard.png`),
        },
        {
          id: 32,
          url: require(`../assets/images/cards/black-ul/omg-stop.png`),
        },
        {
          id: 33,
          url: require(`../assets/images/cards/black-ul/pay-rent.png`),
        },
        {
          id: 34,
          url: require(`../assets/images/cards/black-ul/police.png`),
        },
        {
          id: 35,
          url: require(`../assets/images/cards/black-ul/real-clients.png`),
        },
        {
          id: 36,
          url: require(`../assets/images/cards/black-ul/real-designers.png`),
        },
        {
          id: 37,
          url: require(`../assets/images/cards/black-ul/understood-wish.png`),
        },
        {
          id: 38,
          url: require(`../assets/images/cards/black-ul/why-not-you.png`),
        },
        {
          id: 39,
          url: require(`../assets/images/cards/black-ul/wish-taught.png`),
        },
      ],
      selectedBlack: "",
      whiteCards: [
        { id: 0, url: require(`../assets/images/cards/white/5-year.png`) },
        {
          id: 1,
          url: require(`../assets/images/cards/white/always-rose.png`),
        },
        {
          id: 2,
          url: require(`../assets/images/cards/white/apple.png`),
        },
        {
          id: 3,
          url: require(`../assets/images/cards/white/arial.png`),
        },
        {
          id: 4,
          url: require(`../assets/images/cards/white/asdasdad.png`),
        },
        {
          id: 5,
          url: require(`../assets/images/cards/white/behance.png`),
        },
        {
          id: 6,
          url: require(`../assets/images/cards/white/bigger-logo.png`),
        },
        {
          id: 7,
          url: require(`../assets/images/cards/white/boring.png`),
        },
        {
          id: 8,
          url: require(`../assets/images/cards/white/bottomless-pit.png`),
        },
        {
          id: 9,
          url: require(`../assets/images/cards/white/bully.png`),
        },
        {
          id: 10,
          url: require(`../assets/images/cards/white/burnt.png`),
        },
        {
          id: 11,
          url: require(`../assets/images/cards/white/canva.png`),
        },
        {
          id: 12,
          url: require(`../assets/images/cards/white/captivating-prods.png`),
        },
        {
          id: 13,
          url: require(`../assets/images/cards/white/change-world.png`),
        },
        {
          id: 14,
          url: require(`../assets/images/cards/white/cheap.png`),
        },
        {
          id: 15,
          url: require(`../assets/images/cards/white/client.png`),
        },
        {
          id: 16,
          url: require(`../assets/images/cards/white/comic-sans.png`),
        },
        {
          id: 17,
          url: require(`../assets/images/cards/white/comp-adv.png`),
        },
        {
          id: 18,
          url: require(`../assets/images/cards/white/competitor.png`),
        },
        {
          id: 19,
          url: require(`../assets/images/cards/white/criticism.png`),
        },
        {
          id: 20,
          url: require(`../assets/images/cards/white/deadlines.png`),
        },
        {
          id: 21,
          url: require(`../assets/images/cards/white/design-degree.png`),
        },
        {
          id: 22,
          url: require(`../assets/images/cards/white/design-process.png`),
        },
        {
          id: 23,
          url: require(`../assets/images/cards/white/design-thinking.png`),
        },
        {
          id: 24,
          url: require(`../assets/images/cards/white/disrespect.png`),
        },
        {
          id: 25,
          url: require(`../assets/images/cards/white/docx.png`),
        },
        {
          id: 26,
          url: require(`../assets/images/cards/white/dribbble.png`),
        },
        {
          id: 27,
          url: require(`../assets/images/cards/white/experience.png`),
        },
        {
          id: 28,
          url: require(`../assets/images/cards/white/feedback.png`),
        },
        {
          id: 29,
          url: require(`../assets/images/cards/white/film.png`),
        },
        {
          id: 30,
          url: require(`../assets/images/cards/white/final-change.png`),
        },
        {
          id: 31,
          url: require(`../assets/images/cards/white/final-final.png`),
        },
        {
          id: 32,
          url: require(`../assets/images/cards/white/fiverr.png`),
        },
        {
          id: 33,
          url: require(`../assets/images/cards/white/flash.png`),
        },
        {
          id: 34,
          url: require(`../assets/images/cards/white/font.png`),
        },
        {
          id: 35,
          url: require(`../assets/images/cards/white/freedom.png`),
        },
        {
          id: 36,
          url: require(`../assets/images/cards/white/freestyle.png`),
        },
        {
          id: 37,
          url: require(`../assets/images/cards/white/gd.png`),
        },
        {
          id: 38,
          url: require(`../assets/images/cards/white/hate-it.png`),
        },
        {
          id: 39,
          url: require(`../assets/images/cards/white/helvetica.png`),
        },
        {
          id: 40,
          url: require(`../assets/images/cards/white/human-needs.png`),
        },
        {
          id: 41,
          url: require(`../assets/images/cards/white/insert-swear-word.png`),
        },
        {
          id: 42,
          url: require(`../assets/images/cards/white/interesting.png`),
        },
        {
          id: 43,
          url: require(`../assets/images/cards/white/intuition.png`),
        },
        {
          id: 44,
          url: require(`../assets/images/cards/white/just-do-it.png`),
        },
        {
          id: 45,
          url: require(`../assets/images/cards/white/kpi.png`),
        },
        {
          id: 46,
          url: require(`../assets/images/cards/white/laugh.png`),
        },
        {
          id: 47,
          url: require(`../assets/images/cards/white/likes-apps.png`),
        },
        {
          id: 48,
          url: require(`../assets/images/cards/white/little-left.png`),
        },
        {
          id: 49,
          url: require(`../assets/images/cards/white/little-right.png`),
        },
        {
          id: 50,
          url: require(`../assets/images/cards/white/lmao.png`),
        },
        {
          id: 51,
          url: require(`../assets/images/cards/white/logo.png`),
        },
        {
          id: 52,
          url: require(`../assets/images/cards/white/lol.png`),
        },
        {
          id: 53,
          url: require(`../assets/images/cards/white/looks-down.png`),
        },
        {
          id: 54,
          url: require(`../assets/images/cards/white/lorem.png`),
        },
        {
          id: 55,
          url: require(`../assets/images/cards/white/love-it.png`),
        },
        {
          id: 56,
          url: require(`../assets/images/cards/white/magician.png`),
        },
        {
          id: 57,
          url: require(`../assets/images/cards/white/make-it-pop.png`),
        },
        {
          id: 58,
          url: require(`../assets/images/cards/white/make-it-pretty.png`),
        },
        {
          id: 59,
          url: require(`../assets/images/cards/white/make-it-wow.png`),
        },
        {
          id: 60,
          url: require(`../assets/images/cards/white/make-pretty-products.png`),
        },
        {
          id: 61,
          url: require(`../assets/images/cards/white/money-money.png`),
        },
        {
          id: 62,
          url: require(`../assets/images/cards/white/more-black.png`),
        },
        {
          id: 63,
          url: require(`../assets/images/cards/white/more-white.png`),
        },
        {
          id: 64,
          url: require(`../assets/images/cards/white/most-users.png`),
        },
        {
          id: 65,
          url: require(`../assets/images/cards/white/mother-nature.png`),
        },
        {
          id: 66,
          url: require(`../assets/images/cards/white/music.png`),
        },
        {
          id: 67,
          url: require(`../assets/images/cards/white/my-job.png`),
        },
        {
          id: 68,
          url: require(`../assets/images/cards/white/never.png`),
        },
        {
          id: 69,
          url: require(`../assets/images/cards/white/never-heard.png`),
        },
        {
          id: 70,
          url: require(`../assets/images/cards/white/nike.png`),
        },
        {
          id: 71,
          url: require(`../assets/images/cards/white/no.png`),
        },
        {
          id: 72,
          url: require(`../assets/images/cards/white/no-more-changes.png`),
        },
        {
          id: 73,
          url: require(`../assets/images/cards/white/non-existent.png`),
        },
        {
          id: 74,
          url: require(`../assets/images/cards/white/not-there-yet.png`),
        },
        {
          id: 75,
          url: require(`../assets/images/cards/white/one-more-change.png`),
        },
        {
          id: 76,
          url: require(`../assets/images/cards/white/one-more-iteration.png`),
        },
        {
          id: 77,
          url: require(`../assets/images/cards/white/pft.png`),
        },
        {
          id: 78,
          url: require(`../assets/images/cards/white/pinterest.png`),
        },
        {
          id: 79,
          url: require(`../assets/images/cards/white/pirated-stuff.png`),
        },
        {
          id: 80,
          url: require(`../assets/images/cards/white/poke.png`),
        },
        {
          id: 81,
          url: require(`../assets/images/cards/white/portfolio.png`),
        },
        {
          id: 82,
          url: require(`../assets/images/cards/white/project-completed.png`),
        },
        {
          id: 83,
          url: require(`../assets/images/cards/white/project-completion.png`),
        },
        {
          id: 84,
          url: require(`../assets/images/cards/white/pull-hair.png`),
        },
        {
          id: 85,
          url: require(`../assets/images/cards/white/real.png`),
        },
        {
          id: 86,
          url: require(`../assets/images/cards/white/redbull.png`),
        },
        {
          id: 87,
          url: require(`../assets/images/cards/white/respect.png`),
        },
        {
          id: 88,
          url: require(`../assets/images/cards/white/roboto.png`),
        },
        {
          id: 89,
          url: require(`../assets/images/cards/white/set-on-fire.png`),
        },
        {
          id: 90,
          url: require(`../assets/images/cards/white/shut-up.png`),
        },
        {
          id: 91,
          url: require(`../assets/images/cards/white/sleep.png`),
        },
        {
          id: 92,
          url: require(`../assets/images/cards/white/solve-problems.png`),
        },
        {
          id: 93,
          url: require(`../assets/images/cards/white/something-missing.png`),
        },
        {
          id: 94,
          url: require(`../assets/images/cards/white/some-users.png`),
        },
        {
          id: 95,
          url: require(`../assets/images/cards/white/stole-credit.png`),
        },
        {
          id: 96,
          url: require(`../assets/images/cards/white/stress.png`),
        },
        {
          id: 97,
          url: require(`../assets/images/cards/white/stupid.png`),
        },
        {
          id: 98,
          url: require(`../assets/images/cards/white/tears.png`),
        },
        {
          id: 99,
          url: require(`../assets/images/cards/white/thank-you.png`),
        },
        {
          id: 100,
          url: require(`../assets/images/cards/white/there-is-another.png`),
        },
        {
          id: 101,
          url: require(`../assets/images/cards/white/there-is-no-other.png`),
        },
        {
          id: 102,
          url: require(`../assets/images/cards/white/think-different.png`),
        },
        {
          id: 103,
          url: require(`../assets/images/cards/white/ui.png`),
        },
        {
          id: 104,
          url: require(`../assets/images/cards/white/unreal.png`),
        },
        {
          id: 105,
          url: require(`../assets/images/cards/white/user-needs.png`),
        },
        {
          id: 106,
          url: require(`../assets/images/cards/white/user-research.png`),
        },
        {
          id: 107,
          url: require(`../assets/images/cards/white/user-study.png`),
        },
        {
          id: 108,
          url: require(`../assets/images/cards/white/uxd.png`),
        },
        {
          id: 109,
          url: require(`../assets/images/cards/white/uxr.png`),
        },
        {
          id: 110,
          url: require(`../assets/images/cards/white/vague.png`),
        },
        {
          id: 111,
          url: require(`../assets/images/cards/white/validation.png`),
        },
        {
          id: 112,
          url: require(`../assets/images/cards/white/waiting-pay.png`),
        },
        {
          id: 113,
          url: require(`../assets/images/cards/white/waste-money.png`),
        },
        {
          id: 114,
          url: require(`../assets/images/cards/white/waste-time.png`),
        },
        {
          id: 115,
          url: require(`../assets/images/cards/white/what-other-people-do.png`),
        },
        {
          id: 116,
          url: require(`../assets/images/cards/white/wix.png`),
        },
        {
          id: 117,
          url: require(`../assets/images/cards/white/work-free.png`),
        },
        {
          id: 118,
          url: require(`../assets/images/cards/white/yes.png`),
        },
      ],
      selectedWhite: "",
    };
  },

  created() {},

  methods: {
    takeTest() {
      this.$router.push({ path: "/take-the-test" });
    },

    returnBlackCard() {
      return this.selectedBlack;
    },

    returnWhiteCard() {
      return this.selectedWhite;
    },

    randCard() {
      document.getElementById("blackCard").classList.add("translateLeft");
      document.getElementById("whiteCard").classList.add("translateRight");
      setTimeout(() => {
        const idbx = Math.floor(Math.random() * this.blackCards.length);
        this.selectedBlack = this.blackCards[idbx].url;
        this.returnBlackCard();
        const idwx = Math.floor(Math.random() * this.whiteCards.length);
        this.selectedWhite = this.whiteCards[idwx].url;
        this.returnWhiteCard();
        document.getElementById("blackCard").classList.remove("translateLeft");
        document.getElementById("whiteCard").classList.remove("translateRight");
      }, 300);
      // await this.moveCardIn();
    },

    blackCardsSelect() {
      document
        .getElementById("selectBlackCards")
        .classList.add("selectorButtons-active");
      document
        .getElementById("selectWhiteCards")
        .classList.remove("selectorButtons-active");
      document.getElementById("whiteCardsInfo").classList.add("translateDown");
      document.getElementById("whiteCardsCard").classList.add("translateDown");
      setTimeout(() => {
        document.getElementById("whiteCardsInfo").classList.add("displayNone");
        document.getElementById("whiteCardsCard").classList.add("displayNone");
        document.getElementById("blackCardsInfo").classList.add("translateUp");
        document.getElementById("blackCardsCard").classList.add("translateUp");
        document
          .getElementById("blackCardsInfo")
          .classList.remove("displayNone");
        document
          .getElementById("blackCardsCard")
          .classList.remove("displayNone");
      }, 300);
      setTimeout(() => {
        document
          .getElementById("whiteCardsInfo")
          .classList.remove("translateDown");
        document
          .getElementById("whiteCardsCard")
          .classList.remove("translateDown");
        document
          .getElementById("blackCardsInfo")
          .classList.remove("translateUp");
        document
          .getElementById("blackCardsCard")
          .classList.remove("translateUp");
      }, 500);
    },

    whiteCardsSelect() {
      document
        .getElementById("selectWhiteCards")
        .classList.add("selectorButtons-active");
      document
        .getElementById("selectBlackCards")
        .classList.remove("selectorButtons-active");
      document.getElementById("blackCardsInfo").classList.add("translateDown");
      document.getElementById("blackCardsCard").classList.add("translateDown");
      setTimeout(() => {
        document.getElementById("blackCardsInfo").classList.add("displayNone");
        document.getElementById("blackCardsCard").classList.add("displayNone");
        document.getElementById("whiteCardsInfo").classList.add("translateUp");
        document.getElementById("whiteCardsCard").classList.add("translateUp");
        document
          .getElementById("whiteCardsInfo")
          .classList.remove("displayNone");
        document
          .getElementById("whiteCardsCard")
          .classList.remove("displayNone");
      }, 300);
      setTimeout(() => {
        document
          .getElementById("blackCardsInfo")
          .classList.remove("translateDown");
        document
          .getElementById("blackCardsCard")
          .classList.remove("translateDown");
        document
          .getElementById("whiteCardsInfo")
          .classList.remove("translateUp");
        document
          .getElementById("whiteCardsCard")
          .classList.remove("translateUp");
      }, 500);
    },
  },

  props: {},

  computed: {},

  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.randCard();
  },
};
</script>
