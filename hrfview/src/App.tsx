import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>hello</Button>
        <Button autoFocus>default</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello LG</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>hello SM</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">Baidu Link</Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>Baidu Link</Button>
      </header>
    </div>
  );
}

export default App;
