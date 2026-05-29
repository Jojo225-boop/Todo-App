const app = new Framework7({
  root: '#app',
  name: 'My ToDo App',
  routes: [
    {
      path: '/',
      componentUrl: './pages/accueil.f7.html'
    },
    {
      path: '/tasks/',
      componentUrl: './pages/tasks.f7.html'
    }
  ]
});