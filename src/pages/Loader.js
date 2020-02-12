import React from "react";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
          size={60}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
