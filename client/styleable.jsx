StyleableFactory = function( theme ){
  return function( component ){
    /*
     * React must do something with this on creation.  This doesn't work
     *
    if( !component.prototype.propTypes ){
      component.prototype.propTypes = {};
    }
    component.prototype.propTypes['styleOverride'] = React.PropTypes.object;
    */

    component.prototype.styles = function( name, defaults ){
      let defaultName = 'component';
      var styles = [];

      if( theme && theme.base ){
        styles.push( theme.base );
      }

      if( this.name ){
        if( name ){
          if( this.defaultStyles ){
            styles.push( this.defaultStyles[name] );
          }
          styles.push( theme[ this.name  + '/' + name] );
        }else{
          if( this.defaultStyles ){
            styles.push( this.defaultStyles[defaultName] );
          }
          if( theme[ this.name ] ){
            styles.push( theme[ this.name  ] );
          }
        }
      }else{
        if( this.defaultStyles ){
          if( name ){
            styles.push( this.defaultStyles[name] );
          }else{
            styles.push( this.defaultStyles[defaultName] );
          }
        }
      }

      if( this.props.styleOverride ){
        if( name ){
          styles.push( this.props.styleOverride[name] );
        }else{
          styles.push( this.props.styleOverride[defaultName] );
        }
      }


      return styles;
    }

    return Radium( component );
  };
}
