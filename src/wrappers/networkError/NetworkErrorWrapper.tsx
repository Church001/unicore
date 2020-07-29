import React, { Component } from "react";
import styled from "styled-components";

import { INetworkErrorState } from "./NetworkErrorWrapperInterface";

// -----------Styles definition --------------------------
const NetworkErrorWrapper = styled.div`
  width: 100%;
`;

const NetworkErrorMessageBanner = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: red;
`;

const NetworkErrorMessageText = styled.div`
  color: #ffffff;
  margin: auto;
`;

// --------------Actual component------------------
const NetworError = (ComposedComponent: React.ElementType) => {
  class NetworkDetector extends Component {
    state: INetworkErrorState = {
      isDisconnected: false,
    };

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener("online", this.handleConnectionChange);
      window.addEventListener("offline", this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener("online", this.handleConnectionChange);
      window.removeEventListener("offline", this.handleConnectionChange);
    }

    handleConnectionChange = () => {
      const condition = navigator.onLine ? "online" : "offline";
      if (condition === "online") {
        const webPing = setInterval(() => {
          fetch("//google.com", {
            mode: "no-cors",
          })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing);
              });
            })
            .catch(() => this.setState({ isDisconnected: true }));
        }, 2000);
        return;
      }

      return this.setState({ isDisconnected: true });
    };

    render() {
      const { isDisconnected } = this.state;
      console.log(isDisconnected);
      return (
        <NetworkErrorWrapper>
          {isDisconnected && (
            <NetworkErrorMessageBanner>
              <NetworkErrorMessageText>
                Internet connection lost
              </NetworkErrorMessageText>
            </NetworkErrorMessageBanner>
          )}
          <ComposedComponent {...this.props} />
        </NetworkErrorWrapper>
      );
    }
  }

  return NetworkDetector;
};

export default NetworError;
