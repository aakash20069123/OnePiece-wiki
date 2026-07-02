import { Component } from "react";

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {

    if (this.state.hasError) {

      return (
        <div className="error-boundary" role="alert">
          <h2>🏴‍☠️ Something went wrong</h2>
          <p>
            An unexpected error occurred while rendering this section.
          </p>
          <button
            className="theme-btn"
            onClick={this.handleReset}
          >
            Try Again
          </button>
        </div>
      );

    }

    return this.props.children;
  }
}

export default ErrorBoundary;
