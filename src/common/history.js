import createHistory from 'history/createBrowserHistory';
const history = createHistory();

history.listen(location => {
  setTimeout(() => {
    if (location.action === 'POP') {
      return;
    }
    window.scrollTo(0, 0);
  });
});

export {history};
