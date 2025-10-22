import React from "react";

interface QuickInfoProps {
    label: string;
    info: string;
}

const QuickInfo: React.FC<QuickInfoProps> = ({ label, info }) => {
    return (
        <div className="space-y-2 p-4 bg-background-tertiary/50 border border-white/5 rounded-xl">
            <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wider">
                {label}
            </h3>
            <p className="text-base text-text-secondary">{info}</p>
        </div>
    );
};

export default QuickInfo;
