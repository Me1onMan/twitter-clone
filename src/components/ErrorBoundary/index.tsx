import { Component } from "react";

import errorImage from "@/assets/images/Not-found.png";

import { Image, MessageContainer, Wrapper } from "./styled";
import { TProps, TState } from "./types";

class ErrorBoundary extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): TState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error): void {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Wrapper>
          <MessageContainer>
            <h1>Oops! It seems you have a mistake</h1>
            <h2>An error occurred</h2>
            <Image src={errorImage} alt="Error occured" title="Trying to solve problem" />
          </MessageContainer>
        </Wrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
