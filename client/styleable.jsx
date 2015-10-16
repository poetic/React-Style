Styleable = function( component ){
  if( !component.theme ){
    component.prototype.theme = Base.styles;
  }

  component.prototype.styles = function( name, defaults ){
    var styles = [];

    if( this.theme && this.theme.base ){
      styles.push( this.theme.base );
    }

    if( this.name ){
      if( name ){
        if( this.defaultStyles ){
          styles.push( this.defaultStyles[name] );
        }
        if( this.theme[ this.name ] ){
          styles.push( this.theme[ this.name  + '/' + name] );
        }
      }else{
        if( this.defaultStyles ){
          styles.push( this.defaultStyles['component'] );
        }
      }

      if( this.theme[ this.name ] ){
        if( name ){
          styles.push( this.theme[ this.name ][ name ] );
        }else{
          styles.push( this.theme[ this.name ]);
        }
      }

    }else{
      if( this.defaultStyles ){
        if( name ){
          styles.push( this.defaultStyles[name] );
        }else{
          styles.push( this.defaultStyles['component'] );
        }
      }
    }

    if( this.props.styles ){
      styles.push( ...this.props.styles );
    }

    return styles;
  }

  return Radium( component );
};
