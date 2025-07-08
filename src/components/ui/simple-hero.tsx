import { cn } from "@/lib/utils";

interface SimpleHeroProps {
    badge?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    className?: string;
    onStartClick?: () => void;
}

function SimpleHero({
    badge = "AI Partner",
    title = "Transform Dubai Business", 
    subtitle = "In 30 days",
    description,
    className,
    onStartClick,
}: SimpleHeroProps) {
    return (
        <div className={cn(
            "min-h-screen bg-background flex items-center justify-center",
            className
        )}>
            <div className="text-center space-y-8 px-4 max-w-4xl mx-auto">
                {/* Badge - Minimal indicator */}
                {badge && (
                    <div className="inline-flex items-center px-3 py-1 text-sm text-secondary">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                        {badge}
                    </div>
                )}

                {/* Main Title - iPhone-level simplicity */}
                <h1 className="text-4xl md:text-6xl font-semibold text-primary tracking-tight">
                    {title}
                </h1>

                {/* Subtitle - Clear promise */}
                {subtitle && (
                    <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}

                {/* Description - Optional detail */}
                {description && (
                    <p className="text-base text-secondary max-w-xl mx-auto">
                        {description}
                    </p>
                )}

                {/* Single Action - Steve Jobs focus */}
                <div className="pt-8">
                    <button
                        onClick={onStartClick}
                        className="btn-primary focus-ring text-lg px-8 py-4"
                    >
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export { SimpleHero };