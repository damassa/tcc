import React from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { FiMail } from 'react-icons/fi';
import Hidden from '@material-ui/core/Hidden';

import * as AppActions from '../../store/modules/app/actions';

import Image from '../../assets/undraw_monitor_iqpq.svg';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid container justify="space-between" className={classes.Header}>
      <Grid item xs={12} className={classes.HeaderNav}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container justify="space-between">
              <Grid item xs={2}>
                World of Tokusatsu
              </Grid>
              <Grid item xs={6}>
                <Grid container justify="flex-end">
                  <Grid item xs={1} className={classes.MenuItem}>
                    <Hidden mdDown>
                      <a href="#contato">Contato</a>
                    </Hidden>
                    <Hidden lgUp>
                      <a className={classes.IconLink} href="#contato">
                        <FiMail />
                      </a>
                    </Hidden>
                  </Grid>
                  <Grid item xs={2} className={classes.MenuItem}>
                    <button onClick={() => dispatch(AppActions.openLogin())}>
                      Login
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.HeaderContent}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container justify="center" alignItems="center">
              <Grid item lg={5} md={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <h3>
                      Super Sentai, Ultraman, Kamen Rider, Henshin Hero, Kyodai
                      Hero
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <p>
                      Algumas das franquias mais famosas de Tokusatsu que você
                      pode encontrar na plataforma. Registre-se para mais
                      informações e séries.
                    </p>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container className={classes.registerButton}>
                      <button
                        onClick={() => dispatch(AppActions.openModalUser())}
                      >
                        Criar conta
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={7} className={classes.HeaderImage}>
                <Hidden mdDown>
                  <img src={Image} alt="TV Series" />
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
