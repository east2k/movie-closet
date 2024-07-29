import React from "react";

interface QuickInfoProps {
    label: string;
    info: string;
}

const QuickInfo: React.FC<QuickInfoProps> = ({ label, info }) => {
    return (
        <div className="mb-4">
            <h2 className="text-xs text-cinder-200 text-opacity-50">
                {label}
            </h2>
            <p className="text-sm">{info}</p>
        </div>
    );
};

export default QuickInfo;
