const hydrateAuth = fetching => ({
  authenticated: false,
  fetching,
  uid: null,
});

export default hydrateAuth;
