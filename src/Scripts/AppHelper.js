const AppHelper = (function () {
  // Another private function
  const _getServerUrl = () => {
    return "https://fitnsportbackend.onrender.com";
  };

  return {
    getServerUrl: _getServerUrl,
  };
})();

export default AppHelper;
