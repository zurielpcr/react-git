import React, { useState, useEffect } from 'react';
import FrameworkList from './FrameworkList';
import frameworkData from './framework.json';

const FrameworkListSearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFrameworks, setFilteredFrameworks] = useState(frameworkData);

    useEffect(() => {
        const results = frameworkData.filter(framework =>
            framework.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredFrameworks(results);
    }, [searchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={e => setSearchTerm(e.target.value)}
                className="border p-2 mb-4 w-full"
            />
            <FrameworkList frameworks={filteredFrameworks} />
        </div>
    );
};

export default FrameworkListSearchFilter;