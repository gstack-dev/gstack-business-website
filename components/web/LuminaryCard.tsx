export function LuminaryCard({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div
            className={`
                bg-surface-container
                rounded-2xl
                p-6
                transition-all duration-300
                hover:bg-surface-high
                hover:shadow-primary-glow
                border border-transparent
                ${className}
        `}>
            {children}
        </div>
    );
}