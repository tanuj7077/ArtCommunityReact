//--------------------------Home--------------------------
const sideNavHover = () => {
  document
    .getElementsByClassName("sideNav--home")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("home");
    });
  document
    .getElementsByClassName("sideNav--home")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("home");
    });
  document
    .getElementsByClassName("sideNav-expansion--home")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("home");
    });
  document
    .getElementsByClassName("sideNav-expansion--home")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("home");
    });
  //--------------------------Followed--------------------------
  document
    .getElementsByClassName("sideNav--followed")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("followed");
    });
  document
    .getElementsByClassName("sideNav--followed")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("followed");
    });
  document
    .getElementsByClassName("sideNav-expansion--followed")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("followed");
    });
  document
    .getElementsByClassName("sideNav-expansion--followed")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("followed");
    });
  //--------------------------Daily--------------------------
  document
    .getElementsByClassName("sideNav--daily")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("daily");
    });
  document
    .getElementsByClassName("sideNav--daily")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("daily");
    });
  document
    .getElementsByClassName("sideNav-expansion--daily")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("daily");
    });
  document
    .getElementsByClassName("sideNav-expansion--daily")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("daily");
    });
  //--------------------------Explore--------------------------
  document
    .getElementsByClassName("sideNav--topic")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("topic");
    });
  document
    .getElementsByClassName("sideNav--topic")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("topic");
    });
  document
    .getElementsByClassName("sideNav-expansion--topic")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("topic");
    });
  document
    .getElementsByClassName("sideNav-expansion--topic")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("topic");
    });
  //--------------------------Popular--------------------------
  document
    .getElementsByClassName("sideNav--popular")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("popular");
    });
  document
    .getElementsByClassName("sideNav--popular")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("popular");
    });
  document
    .getElementsByClassName("sideNav-expansion--popular")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("popular");
    });
  document
    .getElementsByClassName("sideNav-expansion--popular")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("popular");
    });
  //--------------------------New--------------------------
  document
    .getElementsByClassName("sideNav--new")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("new");
    });
  document
    .getElementsByClassName("sideNav--new")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("new");
    });
  document
    .getElementsByClassName("sideNav-expansion--new")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("new");
    });
  document
    .getElementsByClassName("sideNav-expansion--new")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("new");
    });
  //---------------------Poll---------------------
  document
    .getElementsByClassName("sideNav--poll")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("poll");
    });
  document
    .getElementsByClassName("sideNav--poll")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("poll");
    });
  document
    .getElementsByClassName("sideNav-expansion--poll")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("poll");
    });
  document
    .getElementsByClassName("sideNav-expansion--poll")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("poll");
    });

  //-------------------------functions-------------------------
  function mouseOverIcon(elem) {
    document
      .getElementsByClassName("sideNav-expansion--" + elem)[0]
      .classList.toggle("sideNavTitle-hover");
  }

  function mouseOutIcon(elem) {
    document
      .getElementsByClassName("sideNav-expansion--" + elem)[0]
      .classList.toggle("sideNavTitle-hover");
  }

  function mouseOverTitle(elem) {
    document
      .getElementsByClassName("sideNav--" + elem)[0]
      .classList.toggle("sideNavIcon-hover");
  }

  function mouseOutTitle(elem) {
    document
      .getElementsByClassName("sideNav--" + elem)[0]
      .classList.toggle("sideNavIcon-hover");
  }
};
export default sideNavHover;
