function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // no i don't wanna i'm already learning something else leave me alone
    element.innerHTML = "Hello webpack";
  
    return element;
  }
  
  document.body.appendChild(component());