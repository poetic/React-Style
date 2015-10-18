## About

The react ecosystem seems to be leaning toward inline styles.  Radium does a
great job when you get your styles to the item you want styled, but doesn't have
any opinions on getting the styles to the object.

This attempts to solve the problem of getting the styles to your object from
multiple sources, and merging them in correct order.

This way of handling styles does not currently fully modularize styles.  Child
objects still inherit styles from parents, though they won't have any bleed
through from non-parents.

### Order of precedence

Style overrides
Theme styles
Component Defaults
Theme base


## Setup
Note you may have to append a version to try out first release candidate.

    meteor add poetic:react-style

### Use

    let yourTheme = {
      card: {
        height: '200px',
        backgroundColor: 'grey'
      },
      'card/header': {
        fontSize: '45px'
      },
      button: {
        borderRadius: '5px'
      }
    };

    Styleable = StyleableFactory( yourTheme );

    Button = Styleable( React.createClass({
      name: 'button',

      defaultStyles: {
        component: {
          height: '45px',
          color: 'red'
        }
      },

      render(){
        return (<button style={this.styles()}>Text</button>);
      }
    });

    Component = Styleable( React.createClass({
      name: 'card'
      defaultStyles: {
        component: {
          fontSize: "45px",
          backgroundColor: 'black',
          color: 'black'
        },
        header: {
          fontColor: 'grey'
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
            <Button styleOverride={this.buttonStyles}/>
          </div>
        );
      }
    }));

## Notes

### Why a higher order function
Currently a higher order function, only due to having trouble getting context to
flow through react router.  In the future this should be changed to context
based site wide theme setting.
