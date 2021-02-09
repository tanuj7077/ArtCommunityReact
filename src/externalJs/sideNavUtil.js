export const LoggedInSideNavHover = () => {
  document
    .getElementsByClassName("sideNav--1")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("1");
      return false;
    });
  document
    .getElementsByClassName("sideNav--1")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("1");
      return false;
    });
  document
    .getElementsByClassName("sideNav-expansion--1")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("1");
      return false;
    });
  document
    .getElementsByClassName("sideNav-expansion--1")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("1");
      return false;
    });
  //--------------------------Followed--------------------------
  document
    .getElementsByClassName("sideNav--2")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("2");
    });
  document
    .getElementsByClassName("sideNav--2")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("2");
    });
  document
    .getElementsByClassName("sideNav-expansion--2")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("2");
    });
  document
    .getElementsByClassName("sideNav-expansion--2")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("2");
    });
  //--------------------------Daily--------------------------
  document
    .getElementsByClassName("sideNav--3")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("3");
    });
  document
    .getElementsByClassName("sideNav--3")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("3");
    });
  document
    .getElementsByClassName("sideNav-expansion--3")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("3");
    });
  document
    .getElementsByClassName("sideNav-expansion--3")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("3");
    });
  //--------------------------Explore--------------------------
  document
    .getElementsByClassName("sideNav--4")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("4");
    });
  document
    .getElementsByClassName("sideNav--4")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("4");
    });
  document
    .getElementsByClassName("sideNav-expansion--4")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("4");
    });
  document
    .getElementsByClassName("sideNav-expansion--4")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("4");
    });
  //--------------------------Popular--------------------------
  document
    .getElementsByClassName("sideNav--5")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("5");
    });
  document
    .getElementsByClassName("sideNav--5")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("5");
    });
  document
    .getElementsByClassName("sideNav-expansion--5")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("5");
    });
  document
    .getElementsByClassName("sideNav-expansion--5")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("5");
    });
  //--------------------------New--------------------------
  document
    .getElementsByClassName("sideNav--6")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("6");
    });
  document
    .getElementsByClassName("sideNav--6")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("6");
    });
  document
    .getElementsByClassName("sideNav-expansion--6")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("6");
    });
  document
    .getElementsByClassName("sideNav-expansion--6")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("6");
    });
  //---------------------Poll---------------------
  document
    .getElementsByClassName("sideNav--7")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("7");
    });
  document
    .getElementsByClassName("sideNav--7")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("7");
    });
  document
    .getElementsByClassName("sideNav-expansion--7")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("7");
    });
  document
    .getElementsByClassName("sideNav-expansion--7")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("7");
    });
};

export const SideNavHover = () => {
  document
    .getElementsByClassName("sideNav--1")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("1");
    });
  document
    .getElementsByClassName("sideNav--1")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("1");
    });
  document
    .getElementsByClassName("sideNav-expansion--1")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("1");
    });
  document
    .getElementsByClassName("sideNav-expansion--1")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("1");
    });
  //--------------------------Followed--------------------------
  document
    .getElementsByClassName("sideNav--2")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("2");
    });
  document
    .getElementsByClassName("sideNav--2")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("2");
    });
  document
    .getElementsByClassName("sideNav-expansion--2")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("2");
    });
  document
    .getElementsByClassName("sideNav-expansion--2")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("2");
    });
  //--------------------------Daily--------------------------
  document
    .getElementsByClassName("sideNav--3")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("3");
    });
  document
    .getElementsByClassName("sideNav--3")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("3");
    });
  document
    .getElementsByClassName("sideNav-expansion--3")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("3");
    });
  document
    .getElementsByClassName("sideNav-expansion--3")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("3");
    });
  //--------------------------Explore--------------------------
  document
    .getElementsByClassName("sideNav--4")[0]
    .addEventListener("mouseover", function () {
      mouseOverIcon("4");
    });
  document
    .getElementsByClassName("sideNav--4")[0]
    .addEventListener("mouseout", function () {
      mouseOutIcon("4");
    });
  document
    .getElementsByClassName("sideNav-expansion--4")[0]
    .addEventListener("mouseover", function () {
      mouseOverTitle("4");
    });
  document
    .getElementsByClassName("sideNav-expansion--4")[0]
    .addEventListener("mouseout", function () {
      mouseOutTitle("4");
    });
};

//--------------------------reset--------------------------
export const ResetHoverClass = (l) => {
  if (l === 7) {
    document
      .getElementsByClassName("sideNav--1")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--1")[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--2")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--2")[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--3")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--3")[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--4")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--4")[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--5")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--5")[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--6")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--6")[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--7")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--7")[0]
      .classList.remove("sideNavTitle-hover");
  }
  if (l === 4) {
    document
      .getElementsByClassName("sideNav--1")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--1")[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--2")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--2")[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--3")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--3")[0]
      .classList.remove("sideNavTitle-hover");
    document
      .getElementsByClassName("sideNav--4")[0]
      .classList.remove("sideNavIcon-hover");
    document
      .getElementsByClassName("sideNav-expansion--4")[0]
      .classList.remove("sideNavTitle-hover");
  }
};

export const RemoveClass = (name) => {
  document
    .getElementsByClassName("sideNav--" + name)[0]
    .classList.remove("sideNavIcon-hover");
  document
    .getElementsByClassName("sideNav-expansion--" + name)[0]
    .classList.remove("sideNavTitle-hover");
};

//-------------------------functions-------------------------

function mouseOverIcon(elem) {
  document
    .getElementsByClassName("sideNav-expansion--" + elem)[0]
    .classList.add("sideNavTitle-hover");
}

function mouseOutIcon(elem) {
  document
    .getElementsByClassName("sideNav-expansion--" + elem)[0]
    .classList.remove("sideNavTitle-hover");
}

function mouseOverTitle(elem) {
  document
    .getElementsByClassName("sideNav--" + elem)[0]
    .classList.add("sideNavIcon-hover");
}

function mouseOutTitle(elem) {
  document
    .getElementsByClassName("sideNav--" + elem)[0]
    .classList.remove("sideNavIcon-hover");
}
//export default sideNavHover;

//--------------------------Home--------------------------
