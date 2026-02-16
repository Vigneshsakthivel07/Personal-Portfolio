import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-black text-[var(--neon-green)] flex-col gap-4">
                    <h1 className="text-4xl font-bold">SYSTEM MALFUNCTION</h1>
                    <p className="text-gray-400">Critical error detected in the matrix. Please refresh.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 border border-[var(--neon-green)] hover:bg-[var(--neon-green)] hover:text-black transition-colors"
                    >
                        REBOOT SYSTEM
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
