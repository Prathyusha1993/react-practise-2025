import { Component } from "react";

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        console.log('caught an error', error, info);
    }
    render() {
        if(this.state.hasError){
            return <h2>Something went wrong.</h2>
        }
        return this.props.children;
    }
}

<ErrorBoundaries>
    <h1>My App</h1>
    <p>Some content</p>
</ErrorBoundaries>