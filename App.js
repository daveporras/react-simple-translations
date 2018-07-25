const {Component} = React;

class App extends Component {
  state = {
    selectedLang: 'es'
  }
  selectLang = (id) => {
    this.setState({
      selectedLang: id
    });
  }
  translate = (item) => {
    return languages[this.state.selectedLang][item];
  }
  render () {
    const {translate} = this;
    return (
      <div>
        <button disabled={this.state.selectedLang === 'es' ? true:false} onClick={() => this.selectLang('es')} >Español</button>
        <button disabled={this.state.selectedLang === 'eng' ? true:false} onClick={() => this.selectLang('eng')}>English</button>
        <br />
        <h1>{translate('head')}</h1>
        <h2>{translate('content')}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);