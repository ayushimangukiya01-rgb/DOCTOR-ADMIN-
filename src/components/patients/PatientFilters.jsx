import React from "react";
import SearchInput from "../../common/ui/SearchInput";
import FilterButton from "../../common/ui/FilterButton";

const filters = ["All Patients", "New", "Follow-up", "Critical"];

const PatientFilters = () => {
  return (
    <div className="bg-white rounded-t-xl border border-slate-100 border-b-0 p-4 shadow-[0px_4px_12px_rgba(15,23,42,0.05)]">
      
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">

        {/* Search */}
        <div className="flex-1">
          <SearchInput placeholder="Search patients..." />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter, index) => (
            <FilterButton key={filter} active={index === 0}>
              {filter}
            </FilterButton>
          ))}

          <FilterButton icon="filter_list">
            More Filters
          </FilterButton>
        </div>

      </div>

    </div>
  );
};

export default PatientFilters;