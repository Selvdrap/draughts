import React from "react";
import Header from "./Header";
import Field from "./Field";
import Sidebox from "./Sidebox";
import Stats from "./Stats";
import { FlexContainer } from "./styles";

const App = React.memo(() => {
  return (
    <div>
      <Header />
      <FlexContainer>
        <Sidebox side="left">
          <Stats />
        </Sidebox>
        <Field />
        <Sidebox side="right" />
      </FlexContainer>
    </div>
  );
});

export default App;
