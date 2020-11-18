<template>
  <div class="home" id="top">
    <!-- <QuestionNav /> -->
    <!-- <h1>DESIGN IS DEAD</h1> -->
    <div class="wrapper">
      <div class="clock-div">
        <!-- Clock start -->

        <div class="clock-border-div">
          <div class="clock-outer">
            <div class="clock-inner">
              <div class="mins-box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="clock-hands-box">
                <span class="hour-hand"></span>
                <span class="min-hand" id="minCheck"></span>
                <!-- <span class="sec-hand"></span> -->
              </div>
              <div class="center-dot"></div>
            </div>
          </div>
        </div>
        <!-- Clock End -->
      </div>

      <div id="info-div">
        <h1>WE ARE</h1>
        <h2 class="h1-background-bar" id="minutes-away">0 MINUTES</h2>
        <h1>TO MIDNIGHT</h1>
        <h3 class="h3-upper-case">Have you doomed us, or will you save us?</h3>
        <a>
          <button v-on:click="takeTest" id="test-link">Take The Test</button>
        </a>
      </div>
    </div>
    <section id="about">
      <h1 class="h1-upper-case">doomed</h1>
      <h2 class="h1-upper-case">Really?</h2>
      <p>That's up to you.</p>
      <br />
      <div class="container">
        <div>
          <h3>Design</h3>
          <p style="opacity: 0.15; text-decoration-line: line-through">
            (v.) The act of making things pretty and nice looking and attractive
            and pop and jazz and fun.
          </p>
          <p>(n.) The discipline that seeks to humanize.</p>
        </div>
      </div>
    </section>
    <section id="origin">
      <h1 class="h1-upper-case">
        Our whole universe was in a hot, dense state Then nearly fourteen
        billion years ago expansion started, wait The earth began to cool, the
        autotrophs began to drool Neanderthals developed tools We built a wall
        (we built the pyramids) Math, science, history, unraveling the mysteries
        That all started with the big bang! Hey!
      </h1>
      <h2 class="h1-upper-case">then</h2>
      <p>
        Design had its humble roots in typography and architecture and has
        branched out to an ever-rising number of fields and areas of
        application, but has always had the same motives; solve problems,
        address needs, humanize. Initially, design was used in methods of
        preserving and transmitting knowledge in the forms of manuscripts and
        encyclopedias, evolving with the changing techniques and technology of
        printing and type setting. With the onset of the industrial revolution,
        new jobs such as advertising, book publishing and art direction, allowed
        designers new ways to broadcast information of otherwise machine-made
        products. The industrial revolution also brought about industrial design
        as a means of addressing a variety of human problems with speed and mass
        production. With the advancement of technology, design as a discipline
        widened, fields of Interaction, Ergonomics, Service (to name a few) came
        about to address a variety of different and evolving user needs.
      </p>
      <h3 class="h3-upper-case" style="margin-bottom: 10%">Or did it?</h3>
    </section>
    <section id="today">
      <h1 class="h1-upper-case">
        now now now now now now now now now now now now now now now now now now
        now now now now now now now now now now now now now now now now now now
        now now now now now now now now now now now now now now now now now now
        now now now now now now now now now now now now now now now now now now
        now now now now now now now now now now now now now now now now now now
        now
      </h1>
      <h2 class="h1-upper-case">now</h2>
      <p>
        Today, design is used everywhere, from designing more humane prisons, to
        making space travel safer for astronauts. On the other side however, is
        where design is seen as a box to just check off, a way to bring in more
        revenue, provide a competitive advantage or make something more
        addictive. With job descriptions demanding software skills rather than
        analytical skills, conflicting articles either in support or outright
        discrediting formal education in design (with claims that bootcamps will
        help you be a <em>certified designer</em> in a month) and the barrage of
        memes about the plight of designers where they merely make things look
        good or how they’re just “hand-tools” to the client, make it look like
        design is more of a thankless pixel pushing job than a discipline with
        intention of addressing humanity’s concerns.
      </p>
      <h3 class="h3-upper-case" style="margin-bottom: 10%">Or is it?</h3>
    </section>
    <section id="designDoomed">
      <h1 class="h1-upper-case">
        Oh, it's crashing... oh, 4 or 500 feet into the sky, and it's a terrific
        crash, ladies and gentlemen. There's smoke, and there's flames, now, and
        the frame is crashing to the ground, not quite to the mooring mast. Oh,
        the humanity, and all the passengers screaming around here!
      </h1>
      <h2 class="h1-upper-case">Doomed ./?</h2>
      <p style="margin-bottom: 2.5%">
        Is designed doomed or is it all just unwarranted hysteria? Dunno. And
        that’s kinda the problem. Designed Is Doomed takes a pessimistic
        approach to addressing this question and assumes that it is, with the
        intention of making sure it doesn’t die. Design Is Doomed consist of two
        Artefacts, the first, is this website that informs the audience that
        design might be in danger. Visitors can take the test to see if they
        have pushed us further towards doom or pulled the hand back and saved
        the discipline. At the end of the test, you will find ways to improve
        based on the answers you have provided. The second artefact is a card
        game based of the ever-popular party game, Cards Against Humanity. This
        game provides designers a way to have fun as well as provoke
        conversations about the condition of design. So, is design doomed?
      </p>
      <a>
        <button v-on:click="takeTest" id="test-link" style="margin-bottom: 5%">
          Take The Test
        </button>
      </a>
    </section>
    <section id="splitter">
      <div class="container">
        <div class="wrapper">
          <a href="/cards-against-design"
            ><div id="cad">
              <h3>Cards Against Design</h3>
            </div></a
          >
        </div>
        <div class="wrapper">
          <a href="/your-voice">
            <div id="your-voice">
              <h3>Your Voice</h3>
            </div></a
          >
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
          <a
            style="cursor: pointer"
            onClick="window.scrollTo({ top: 0, behavior: 'smooth' })"
            >Clock of Doom</a
          >

          <router-link to="/take-the-test">take the test</router-link>
          <router-link to="/cards-against-design"
            >Cards Against Design</router-link
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
  color: #eeeeee;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.2px;
}

#test-link {
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
    background-color: rgba(238, 238, 238, 1);
    color: rgba(17, 17, 17, 1);
    border: 2px rgba(238, 238, 238, 1) solid;
  }
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clock-div {
  margin: -15% 5% 5% 5%;

  transform-origin: top left;
  transform: scale(2);
}

#info-div {
  margin: 5%;
  // margin-top: -5%;
  width: 40%;
  animation: ease-in 1.5s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes ease-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.clock-border-div {
  // transform: scale(2);
  // transform-origin: left top;
  // margin-top: 50px;
  padding: 30px;
  left: 0;
  top: 0;
  border: 25px solid black;
  border-radius: 50%;
  // width: 50%;
}
// .info-div {
//   margin-top: 50px;
//   width: 50%;
// }

// Clock Start

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// body {
//   background: #0e0e0e;
// }
$outerbox-height: 300px;
$outerbox-width: 300px;

$ticksColor: #0e0e0e;
$ticksAnimTime: 600ms;
$ticksAnimCount: 10;
$ticksAnimFunction: ease-in-out;

// $secHandColor: #c0392b;
$minHandColor: #0e0e0e;
$hovHandColor: #eeeeee;

.clock-outer {
  // margin-left: 10%;
  position: relative;
  height: $outerbox-height;
  width: $outerbox-height;
  left: 0;
  right: 0;

  // margin: 100%;
  // top: 100%;
  // margin-top: -($outerbox-height/2);
  .clock-inner {
    // transform: scale(0.5);

    .mins-box {
      span {
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        margin: auto;
        display: block;
        height: 100%;
        width: 1px;
        &:before {
          content: "";
          display: block;
          position: absolute;
          height: 10px;
          width: 1px;
          background: $ticksColor;
          animation: jumpTicks $ticksAnimTime $ticksAnimCount $ticksAnimFunction;
        }
        &:after {
          content: "";
          bottom: 0;
          display: block;
          position: absolute;
          height: 10px;
          width: 1px;
          background: $ticksColor;
          animation: jumpTicks1 $ticksAnimTime $ticksAnimCount
            $ticksAnimFunction;
        }
        $min-count: 30;
        $rotate-deg: 360 / ($min-count * 2);
        $ticksAnimDelay: $ticksAnimTime / $min-count;
        @for $i from 1 through $min-count {
          &:nth-child(#{$i}) {
            transform: rotate(#{$rotate-deg * $i}deg);
            &:before,
            &:after {
              animation-delay: $ticksAnimDelay * $i;
            }
          }
          @if $i == 0 or $i % 5 == 0 {
            &:nth-child(#{$i}) {
              // transform: scale(25);

              &:before,
              &:after {
                transform: scale(30);
                height: 1px;
                width: 1px;
                border-radius: 50%;
                opacity: 1;
              }
            }
          } @else {
            &:nth-child(#{$i}) {
              &:before,
              &:after {
                transform: scale(25);
                opacity: 0;
              }
            }
          }
        }
      }
    }
    .clock-hands-box {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      span {
        display: block;
        position: absolute;
        height: 100%;
        width: 8px;
        left: 0;
        right: 0;
        margin: auto;
        transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        &:before {
          border-radius: 2px;
        }
        // &.sec-hand {
        //   &:before {
        //     $from-top: 10px;
        //     content: "";
        //     display: block;
        //     position: absolute;
        //     background: $secHandColor;
        //     height: $outerbox-height / 2 - $from-top;
        //     top: $from-top;
        //     width: 1px;
        //   }
        // }
        &.min-hand {
          &:before {
            $from-top: 30px;
            content: "";
            display: block;
            position: absolute;
            background: $minHandColor;
            height: $outerbox-height / 2 - $from-top;
            top: $from-top;
            width: 9px;
          }
        }
        &.hour-hand {
          &:before {
            $from-top: 40px;
            content: "";
            display: block;
            position: absolute;
            background: $hovHandColor;
            height: $outerbox-height / 2 - $from-top;
            top: $from-top;
            width: 10px;
          }
        }
      }
    }
  }
  .center-dot {
    $dot-size: 25;
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    height: $dot-size + px;
    width: $dot-size + px;
    border-radius: 50%;
    transform: translateY(-50%);
    background: #0e0e0e;
    z-index: 2;
    &:before {
      content: "";
      display: block;
      position: absolute;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      z-index: 1;
      left: 0;
      right: 0;
      margin: auto;
      transform: translatey(-50%);
      transform-origin: center center;
      animation: rippleAnim 1.5s infinite ease-in-out;
    }
    &:before {
      background: #0e0e0e;
    }
    &:after {
      background: #eeeeee;
    }
  }
}

// @keyframes jumpTicks {
//   from {
//     transform: translatey(-10px);
//     background: #3498db;
//   }
//   to {
//     transform: translatey(0px);
//   }
// }

// @keyframes jumpTicks1 {
//   from {
//     transform: translatey(10px);
//     background: #3498db;
//   }
//   to {
//     transform: translatey(0px);
//   }
// }

@keyframes rippleAnim {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2.5);
  }
}

// Clock End

#about {
  background-color: #0e0e0e;
  margin-top: 10%;
  // display: block;
  padding: 20px;
  h1 {
    font-size: 20em;
    color: transparent;
    -webkit-text-stroke: 4px #eeeeee;
    opacity: 0.1;
    text-align: center;
  }
  h2 {
    font-size: 15em;
    color: #eeeeee;
    margin-top: -15%;
    margin-bottom: 5%;
  }

  p {
    font-size: 20px;
    letter-spacing: 0.1px;
    // line-height: 1.2em;
  }
  .container {
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    // display: flex;
    // justify-content: space-evenly;
    padding: 2.5%;
    div {
      // display: inline-block;
      width: 33%;
      text-align: left;
      h3 {
        text-align: left;
        color: #eeeeee;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 1.2px;
      }
      p {
        font-size: 16px;
        letter-spacing: 0.1px;
        word-spacing: -0.1em;
        // line-height: 1.2em;
      }
    }
  }
}

#origin {
  background-color: #0e0e0e;
  overflow: hidden;
  // display: block;

  // padding: 20px;
  h1 {
    font-size: 3em;
    color: transparent;
    -webkit-text-stroke: 1px #eeeeee;
    opacity: 0.05;
    text-align: center;
    line-height: 1em;
    transform-origin: center;
    transform: scale(2);
  }
  h2 {
    font-size: 15em;
    -webkit-text-stroke: 1px #eeeeee;
    color: #0e0e0e;
    margin-top: -15%;
    margin-bottom: 2.5%;
    z-index: 1;
    position: relative;
  }

  h3 {
    margin-top: 2.5%;
    color: #eeeeee;
  }

  p {
    font-size: 20px;
    letter-spacing: 0.1px;
    // line-height: 1.2em;
    padding-left: 10%;
    padding-right: 10%;
    text-align: justify;
  }
  .container {
    margin-top: 5%;
    // display: flex;
    // justify-content: space-evenly;
    padding: 2.5%;
    div {
      // display: inline-block;
      width: 33%;
      text-align: left;
      h3 {
        text-align: left;
        color: #eeeeee;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 1.2px;
      }
      p {
        font-size: 16px;
        letter-spacing: 0.1px;
        word-spacing: -0.1em;
        // line-height: 1.2em;
      }
    }
  }
}

#today {
  background-color: #0e0e0e;
  overflow: hidden;

  // display: block;
  // padding: 20px;
  h1 {
    font-size: 3em;
    color: transparent;
    -webkit-text-stroke: 1px #eeeeee;
    opacity: 0.05;
    text-align: center;
    line-height: 1em;
    transform-origin: center;
    transform: scale(2);
  }
  h2 {
    font-size: 15em;
    -webkit-text-stroke: 1px #eeeeee;
    color: #0e0e0e;
    margin-top: -15%;
    margin-bottom: 2.5%;
    z-index: 1;
    position: relative;
  }

  h3 {
    margin-top: 2.5%;
    color: #eeeeee;
  }

  p {
    font-size: 20px;
    letter-spacing: 0.1px;
    // line-height: 1.2em;
    padding-left: 10%;
    padding-right: 10%;
    text-align: justify;
  }
  .container {
    margin-top: 5%;
    // display: flex;
    // justify-content: space-evenly;
    padding: 2.5%;
    div {
      // display: inline-block;
      width: 33%;
      text-align: left;

      h3 {
        text-align: left;
        color: #eeeeee;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 1.2px;
      }
      p {
        font-size: 16px;
        letter-spacing: 0.1px;
        word-spacing: -0.1em;
        // line-height: 1.2em;
      }
    }
  }
}

#designDoomed {
  background-color: #0e0e0e;
  overflow: hidden;

  // display: block;
  // padding: 20px;
  h1 {
    font-size: 3em;
    color: transparent;
    -webkit-text-stroke: 1px #eeeeee;
    opacity: 0.05;
    text-align: center;
    line-height: 1em;
    transform-origin: center;
    transform: scale(2);
  }
  h2 {
    font-size: 15em;
    -webkit-text-stroke: 1px #eeeeee;
    color: #0e0e0e;
    margin-top: -15%;
    margin-bottom: 2.5%;
    z-index: 1;
    position: relative;
  }

  h3 {
    margin-top: 2.5%;
    color: #eeeeee;
  }

  p {
    font-size: 20px;
    letter-spacing: 0.1px;
    // line-height: 1.2em;
    padding-left: 10%;
    padding-right: 10%;
    text-align: justify;
  }
  .container {
    margin-top: 5%;
    // display: flex;
    // justify-content: space-evenly;
    padding: 2.5%;
    div {
      // display: inline-block;
      width: 33%;
      text-align: left;

      h3 {
        text-align: left;
        color: #eeeeee;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 1.2px;
      }
      p {
        font-size: 16px;
        letter-spacing: 0.1px;
        word-spacing: -0.1em;
        // line-height: 1.2em;
      }
    }
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

        #your-voice {
          // width: 100%;
          text-decoration: none;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-image: url(../assets/images/your-voice-splitter.jpg);
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url(../assets/images/your-voice-splitter.jpg);
          background-size: 100%;
          transition: 0.5s ease-in-out;
          background-position: bottom center;
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

@media screen and (min-device-width: 1200px) and (max-device-width: 1601px) {
  .clock-div {
    margin: -5% 2.5% 5% 2.5%;
    transform-origin: top left;
    transform: scale(1.5);
  }
  h1 {
    color: #0e0e0e;
    font-size: 72px;
    font-weight: 900;
    text-align: center;
    letter-spacing: 0.8px;
    line-height: 4px;
  }

  h2 {
    color: #0e0e0e;
    font-size: 72px;
    font-weight: 900;
    text-align: center;
    letter-spacing: 0.8px;
  }

  h3 {
    color: #0e0e0e;
    font-size: 16px;
    text-align: center;
    font-weight: 900;
  }

  #info-div {
    margin: 2.5%;
    margin-top: 5%;
    width: 40%;
    animation: ease-in 1.5s ease-in-out;
    animation-fill-mode: forwards;
  }

  #about {
    h1 {
      font-size: 15em;
    }
    h2 {
      font-size: 10em;
    }
  }
}

/* ----------- iPad Pro 10.5" ----------- */

/* Portrait and Landscape */
@media only screen and (min-device-width: 834px) and (max-device-width: 1112px) and (-webkit-min-device-pixel-ratio: 2) {
  .wrapper {
    display: inline-block;
    // justify-content: space-between;
    // align-items: center;
  }

  .clock-div {
    margin: 0% 5% 45% 5%;
    transform-origin: top left;
    transform: scale(1.5);

    position: relative;
  }

  #info-div {
    // margin-top: -5%;
    margin-left: -2.5%;

    width: 100%;
    animation: ease-in 1.5s ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes ease-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .clock-border-div {
    // transform: scale(2);
    // transform-origin: left top;
    // margin-top: 50px;
    // padding: 30px;
    left: 0;
    top: 0;
    border: 25px solid black;
    border-radius: 50%;
    width: 50%;
  }
  // .info-div {
  //   margin-top: 50px;
  //   width: 50%;
  // }

  // Clock Start

  // * {
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }
  // body {
  //   background: #0e0e0e;
  // }
  $outerbox-height: 300px;
  $outerbox-width: 300px;

  $ticksColor: #0e0e0e;
  $ticksAnimTime: 600ms;
  $ticksAnimCount: 10;
  $ticksAnimFunction: ease-in-out;

  // $secHandColor: #c0392b;
  $minHandColor: #0e0e0e;
  $hovHandColor: #eeeeee;

  .clock-outer {
    // margin-left: 10%;
    position: relative;
    height: $outerbox-height;
    width: $outerbox-height;
    left: 0;
    right: 0;

    // margin: 100%;
    // top: 100%;
    // margin-top: -($outerbox-height/2);
    .clock-inner {
      // transform: scale(0.5);

      .mins-box {
        span {
          position: absolute;
          top: 0px;
          left: 0;
          right: 0;
          margin: auto;
          display: block;
          height: 100%;
          width: 1px;
          &:before {
            content: "";
            display: block;
            position: absolute;
            height: 10px;
            width: 1px;
            background: $ticksColor;
            animation: jumpTicks $ticksAnimTime $ticksAnimCount
              $ticksAnimFunction;
          }
          &:after {
            content: "";
            bottom: 0;
            display: block;
            position: absolute;
            height: 10px;
            width: 1px;
            background: $ticksColor;
            animation: jumpTicks1 $ticksAnimTime $ticksAnimCount
              $ticksAnimFunction;
          }
          $min-count: 30;
          $rotate-deg: 360 / ($min-count * 2);
          $ticksAnimDelay: $ticksAnimTime / $min-count;
          @for $i from 1 through $min-count {
            &:nth-child(#{$i}) {
              transform: rotate(#{$rotate-deg * $i}deg);
              &:before,
              &:after {
                animation-delay: $ticksAnimDelay * $i;
              }
            }
            @if $i == 0 or $i % 5 == 0 {
              &:nth-child(#{$i}) {
                // transform: scale(25);

                &:before,
                &:after {
                  transform: scale(30);
                  height: 1px;
                  width: 1px;
                  border-radius: 50%;
                  opacity: 1;
                }
              }
            } @else {
              &:nth-child(#{$i}) {
                &:before,
                &:after {
                  transform: scale(25);
                  opacity: 0;
                }
              }
            }
          }
        }
      }
      .clock-hands-box {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        span {
          display: block;
          position: absolute;
          height: 100%;
          width: 8px;
          left: 0;
          right: 0;
          margin: auto;
          transition: all 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          &:before {
            border-radius: 2px;
          }
          // &.sec-hand {
          //   &:before {
          //     $from-top: 10px;
          //     content: "";
          //     display: block;
          //     position: absolute;
          //     background: $secHandColor;
          //     height: $outerbox-height / 2 - $from-top;
          //     top: $from-top;
          //     width: 1px;
          //   }
          // }
          &.min-hand {
            &:before {
              $from-top: 30px;
              content: "";
              display: block;
              position: absolute;
              background: $minHandColor;
              height: $outerbox-height / 2 - $from-top;
              top: $from-top;
              width: 9px;
            }
          }
          &.hour-hand {
            &:before {
              $from-top: 40px;
              content: "";
              display: block;
              position: absolute;
              background: $hovHandColor;
              height: $outerbox-height / 2 - $from-top;
              top: $from-top;
              width: 10px;
            }
          }
        }
      }
    }
    .center-dot {
      $dot-size: 25;
      position: absolute;
      display: block;
      top: 50%;
      left: 0;
      right: 0;
      margin: auto;
      height: $dot-size + px;
      width: $dot-size + px;
      border-radius: 50%;
      transform: translateY(-50%);
      background: #0e0e0e;
      z-index: 2;
      &:before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        z-index: 1;
        left: 0;
        right: 0;
        margin: auto;
        transform: translatey(-50%);
        transform-origin: center center;
        animation: rippleAnim 1.5s infinite ease-in-out;
      }
      &:before {
        background: #0e0e0e;
      }
      &:after {
        background: #eeeeee;
      }
    }
  }
}
</style>
<script>
// import $ from "jquery";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // name: "Home",
  // components: {
  //   QuestionNav
  // }

  methods: {
    takeTest() {
      this.$router.push({ path: "/take-the-test" });
    },
  },
  mounted() {
    if (localStorage.getItem("cleanup") == "1") {
      localStorage.removeItem("Q1");
      localStorage.removeItem("Q2");
      localStorage.removeItem("Q3");
      localStorage.removeItem("Q4");
      localStorage.removeItem("Q5");
      localStorage.removeItem("Q6");
      localStorage.removeItem("Q7");
      localStorage.removeItem("Q8");
      localStorage.removeItem("Q9");
      localStorage.removeItem("Q10");
      localStorage.removeItem("Q11");
      localStorage.removeItem("Q12");
      localStorage.removeItem("Q13");
      localStorage.removeItem("Q14");
      localStorage.removeItem("Q15");
      localStorage.removeItem("Q16");
      localStorage.removeItem("Q17");
      localStorage.removeItem("Q18");
      localStorage.removeItem("Q19");
      localStorage.removeItem("Q20");
      localStorage.removeItem("Q21");
      localStorage.removeItem("Q22");
      localStorage.removeItem("Q23");
      localStorage.removeItem("Q24");
      localStorage.removeItem("Q25");
      localStorage.removeItem("Q26");
      localStorage.removeItem("qset");
      localStorage.removeItem("userID");
      localStorage.removeItem("cleanup");
      console.log("removed");
    }
    // Clock Movement
    // $(document).ready(function() {
    //   // var secHandPosDeg = 360 / 60;
    //   var minHandPosDeg = 360 / 60;
    //   // var hourHandPosDeg = 360 / 12;

    //   // var time = new Date();
    //   // var currentSecHand = time.getSeconds();
    //   var currentMinHand = localStorage.getItem("oldAvg") * 60;
    //   var currentHouHand = 12;

    //   setHandPosition(currentMinHand, currentHouHand);
    //   // startMoving();

    //   function setHandPosition(minDeg) {
    //     // var remainHovDeg = hourHandPosDeg * hovDeg + minDeg * 0.5;
    //     // $(".clock-hands-box .sec-hand").css(
    //     //   "transform",
    //     //   "rotate(" + secHandPosDeg * secDeg + "deg)"
    //     // );
    //     $(".clock-hands-box .min-hand").css(
    //       "transform",
    //       "rotate(" + minHandPosDeg * minDeg + "deg)"
    //     );
    //     $(".clock-hands-box .hour-hand")
    //       .css
    //       // "transform",
    //       // "rotate(" + remainHovDeg + "deg)"
    //       ();
    //   }

    //   // function startMoving() {
    //   //   // var currentSec = currentSecHand;
    //   //   var currentMin = currentMinHand;
    //   //   var currentHov = currentHouHand * hourHandPosDeg + currentMinHand * 0.5;
    //   //   setInterval(function() {
    //   //     var nowTime = new Date();

    //   //     // currentSec += 1;
    //   //     // $(".clock-hands-box .sec-hand").css(
    //   //     //   "transform",
    //   //     //   "rotate(" + currentSec * secHandPosDeg + "deg)"
    //   //     // );

    //   //     if (nowTime.getSeconds() == 0) {
    //   //       currentMin += 1;
    //   //       $(".clock-hands-box .min-hand").css(
    //   //         "transform",
    //   //         "rotate(" + currentMin * minHandPosDeg + "deg)"
    //   //       );

    //   //       currentHov += 0.5;
    //   //       $(".clock-hands-box .hour-hand").css(
    //   //         "transform",
    //   //         "rotate(" + currentHov + "deg)"
    //   //       );
    //   //     }
    //   //   }, 1000);
    //   // }
    // });
    // Clock Movement End

    // var start;
    // // var obj = document.getElementById("minutes-away");
    // var end = 60 - Math.trunc(localStorage.getItem("oldAvg") * 60);
    // // var end = 61;

    // for (start = 0; start <= end; start++) {
    //   task(start);
    // }

    // function task(start) {
    //   setTimeout(function() {
    //     document.getElementById("minutes-away").textContent =
    //       start + " MINUTES";
    //   }, 50 * start);
    // }

    // document.getElementById("minutes-away").textContent =
    //   60 - Math.trunc(localStorage.getItem("oldAvg") * 60) + " minutes";
    document.getElementById("info-div").style.opacity = "1";
  },
};
</script>
