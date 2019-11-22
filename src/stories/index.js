import { storiesOf } from "@storybook/vue";

// import SpotlightGame from "../components/SpotlightGame";
// import SpotlightMovie from "../components/SpotlightMovie";
// import SpotlightSerie from "../components/SpotlightSerie";

import "../styles/index.css";

import Home from "../views/Home";
import Shows from "../views/Shows";
import Games from "../views/Games";
import Social from "../views/Social";
import Profile from "../views/Profile";

storiesOf(`Views`, module)
  .add(`Home`, () => ({
    render: h => <Home />
  }))
  .add(`Shows`, () => ({
    render: h => <Shows />
  }))
  .add(`Games`, () => ({
    render: h => <Games />
  }))
  .add(`Social`, () => ({
    render: h => <Social />
  }))
  .add(`Profile`, () => ({
    render: h => <Profile />
  }));
