import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transitionName: "JustFade" },
  },

  {
    path: "/cards-against-design",
    name: "Cards Against Design",
    meta: { transitionName: "JustFade" },
    component: () => import("../views/Cards Against Design.vue")
  },

  {
    path: "/your-voice",
    name: "Your Voice",
    meta: { transitionName: "JustFade" },
    component: () => import("../views/Your Voice.vue")
  },
  
  {
    path: "/take-the-test",
    name: "Take The Test",
    meta: { transitionName: "JustFade" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Take The Test.vue")
  },
  {
    path: "/take-the-test/data-privacy-compliance",
    name: "Data Privacy Compliance",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Data Privacy Compliance.vue")
  },
  
  {
    path: "/take-the-test/test-complete",
    name: "Test Complete",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test Complete.vue")
  },

  // Questions Registration Start
  
  // Proffessional Start
  {
    path: "/take-the-test/professional-q1",
    name: "Professional Q1",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q1.vue")
  },
  {
    path: "/take-the-test/professional-q2",
    name: "Professional Q2",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q2.vue")
  },
  {
    path: "/take-the-test/professional-q3",
    name: "Professional Q3",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q3.vue")
  },
  {
    path: "/take-the-test/professional-q4",
    name: "Professional Q4",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q4.vue")
  },
  {
    path: "/take-the-test/professional-q5",
    name: "Professional Q5",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q5.vue")
  },
  {
    path: "/take-the-test/professional-q6",
    name: "Professional Q6",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q6.vue")
  },
  {
    path: "/take-the-test/professional-q7",
    name: "Professional Q7",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q7.vue")
  },
  {
    path: "/take-the-test/professional-q8",
    name: "Professional Q8",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q8.vue")
  },
  {
    path: "/take-the-test/professional-q9",
    name: "Professional Q9",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q9.vue")
  },
  {
    path: "/take-the-test/professional-q10",
    name: "Professional Q10",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q10.vue")
  },
  {
    path: "/take-the-test/professional-q11",
    name: "Professional Q11",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q11.vue")
  },
  {
    path: "/take-the-test/professional-q12",
    name: "Professional Q12",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q12.vue")
  },
  {
    path: "/take-the-test/professional-q13",
    name: "Professional Q13",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q13.vue")
  },
  {
    path: "/take-the-test/professional-q14",
    name: "Professional Q14",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q14.vue")
  },
  {
    path: "/take-the-test/professional-q15",
    name: "Professional Q15",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q15.vue")
  },
  {
    path: "/take-the-test/professional-q16",
    name: "Professional Q16",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q16.vue")
  },
  {
    path: "/take-the-test/professional-q17",
    name: "Professional Q17",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q17.vue")
  },
  {
    path: "/take-the-test/professional-q18",
    name: "Professional Q18",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q18.vue")
  },
  {
    path: "/take-the-test/professional-q19",
    name: "Professional Q19",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q19.vue")
  },
  {
    path: "/take-the-test/professional-q20",
    name: "Professional Q20",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q20.vue")
  },
  {
    path: "/take-the-test/professional-q21",
    name: "Professional Q21",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q21.vue")
  },
  {
    path: "/take-the-test/professional-q22",
    name: "Professional Q22",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q22.vue")
  },
  {
    path: "/take-the-test/professional-q23",
    name: "Professional Q23",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q23.vue")
  },
  {
    path: "/take-the-test/professional-q24",
    name: "Professional Q24",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q24.vue")
  },
  {
    path: "/take-the-test/professional-q25",
    name: "Professional Q25",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q25.vue")
  },
  {
    path: "/take-the-test/professional-q26",
    name: "Professional Q26",
    meta: { transitionName: "questionSlide" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Professional Q26.vue")
  },

  // Proffessional End

// Student Start
{
  path: "/take-the-test/student-q1",
  name: "Student Q1",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q1.vue")
},
{
  path: "/take-the-test/student-q2",
  name: "Student Q2",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q2.vue")
},
{
  path: "/take-the-test/student-q3",
  name: "Student Q3",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q3.vue")
},
{
  path: "/take-the-test/student-q4",
  name: "Student Q4",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q4.vue")
},
{
  path: "/take-the-test/student-q5",
  name: "Student Q5",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q5.vue")
},
{
  path: "/take-the-test/student-q6",
  name: "Student Q6",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q6.vue")
},
{
  path: "/take-the-test/student-q7",
  name: "Student Q7",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q7.vue")
},
{
  path: "/take-the-test/student-q8",
  name: "Student Q8",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q8.vue")
},
{
  path: "/take-the-test/student-q9",
  name: "Student Q9",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q9.vue")
},
{
  path: "/take-the-test/student-q10",
  name: "Student Q10",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q10.vue")
},
{
  path: "/take-the-test/student-q11",
  name: "Student Q11",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q11.vue")
},
{
  path: "/take-the-test/student-q12",
  name: "Student Q12",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q12.vue")
},
{
  path: "/take-the-test/student-q13",
  name: "Student Q13",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q13.vue")
},
{
  path: "/take-the-test/student-q14",
  name: "Student Q14",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q14.vue")
},
{
  path: "/take-the-test/student-q15",
  name: "Student Q15",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q15.vue")
},
{
  path: "/take-the-test/student-q16",
  name: "Student Q16",
  meta: { transitionName: "questionSlide" },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/Student Q16.vue")
},


// Student End

  // Questions Registration End


];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
