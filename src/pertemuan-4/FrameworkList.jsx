import React from 'react';

const FrameworkList = ({ frameworks }) => {
    return (
        <div>
            {frameworks.map((framework, index) => (
                <div key={index} className="border p-4 mb-4">
                    <h2 className="text-xl font-bold">{framework.name}</h2>
                    <p>{framework.description}</p>
                    <p className="text-sm">Developed by: {framework.developer}</p>
                    <a href={framework.website} target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit Website</a>
                    <div className="mt-2">
                        {framework.tags.map((tag, i) => (
                            <span key={i} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FrameworkList;