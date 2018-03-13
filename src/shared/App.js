import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';

// 나중에 어떤 주소로 왔을때 어디로 향하게 할 지 여기서 정의함
class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        {/* Switch 이 컴포넌트에 감싸면 매칭되는 첫번째 라우트만 보여주고 나머지는 보여주지 않습니다. */}
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

export default App;
