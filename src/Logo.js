import React from 'react';
import {useStyles} from './styles';

function Logo() {
    const styles = useStyles();
  return (
    
      <img 
      src="/logo.png" 
      alt="large"
      className={styles.logo1}>
    </img>
  )
}

export default Logo
