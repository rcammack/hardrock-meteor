import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

export default class Bottom extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid>
            <Grid.Row centered>
              <Header as="h2" style= { { color: '#FFF' } } >HARD ROCK CAFE HONOLULU</Header>
            </Grid.Row>
            <Grid.Row centered>
              <Icon name="phone"/>
              +1-808-955-7383 &nbsp; &nbsp; &nbsp;
              <Icon name="mail"/>
              Email Us &nbsp; &nbsp; &nbsp;
              <Icon name="home"/>
              280 Beachwalk, Honolulu, Hawaii 96815 &nbsp; &nbsp; &nbsp;
              <Icon name="twitter"></Icon>
              <Icon name="facebook f"></Icon>
              <Icon name="instagram"></Icon>
              <Icon name="pinterest"></Icon>
              <Icon name="tripadvisor"></Icon>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
