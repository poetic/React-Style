let yourTheme = {
  card: {
    height: '200px',
    backgroundColor: 'grey'
  },
  'card/header': {
    fontSize: '20px'
  },
  button: {
    borderRadius: '5px',
    backgroundColor: 'white'
  }
};

Styleable = StyleableFactory( yourTheme );

Button = Styleable( React.createClass({
  name: 'button',

  propTypes: {
    styleOverride: React.PropTypes.object
  },

  defaultStyles: {
    component: {
      height: '45px',
      color: 'red'
    }
  },

  render(){
    return (<button style={this.styles()}>Text</button>);
  }
}));

Component = Styleable( React.createClass({
  name: 'card',

  defaultStyles: {
    component: {
      fontSize: "45px",
      backgroundColor: 'black',
      color: 'black'
    },
    header: {
      color: 'purple'
    }
  },

  buttonStyles: {
    component: {
      color: 'blue'
    }
  },

  render(){
    return (
      <div style={this.styles()}>
        <h1 style={this.styles('header')}>Just a header</h1>
        <Button styleOverride={this.buttonStyles}/>
      </div>
    );
  }
}));


Meteor.startup(function() {
  React.render((<div>
      <Component/>
      <Button/>
    </div>
  ),document.getElementsByTagName('body')[0]);
});
