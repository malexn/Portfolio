let rootDiv = document.getElementById("root");

let routes = {
  "Portfolio/": homePage,
  "Portfolio/index.html": homePage,
  "Portfolio/projects": projectPage
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

const onNavigate = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

rootDiv.innerHTML = routes[window.location.pathname];
