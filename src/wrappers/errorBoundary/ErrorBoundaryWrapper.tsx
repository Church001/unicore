import React, { Component } from "react";
import styled from "styled-components";

import { IErrorBoundaryState } from "./ErrorBoundaryInterface";

// -----------Styled-component definitions-----------------
const ErrorBoundaryWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorBoundaryMessage = styled.h4`
  color: red;
`;

const ErrorboundaryButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// ---------------- Class component definition ------------------
class ErrorBoundary extends Component {
  state: IErrorBoundaryState = { hasError: false, error: null, info: null };

  componentDidCatch(error: object, info: object) {
    // Display fallback UI
    // (error)
    this.setState({ hasError: true, error, info });
  }

  _hanndleReportError = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorBoundaryWrapper>
          <ErrorBoundaryMessage>
            Something wicked went wrong.
          </ErrorBoundaryMessage>
          <ErrorboundaryButtonWrapper>
            <button onClick={this._hanndleReportError}>Report Issue</button>
          </ErrorboundaryButtonWrapper>
        </ErrorBoundaryWrapper>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
